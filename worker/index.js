// MysticEast Cloudflare Worker - PayPal + CJ Dropshipping Auto-Fulfillment
// Updated: 2026-07-06

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://mysticeast.shop',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
};

// ========== Product Mapping: Website SKU -> CJ VID ==========
const CJ_PRODUCT_MAP = {
  'obsidian-bracelet':   { vid: '2054831428764721154', sku: 'CJSL2890587', cost: 2.50 },
  'amethyst-bracelet':   { vid: '1452537710886653952', sku: 'CJSL1330310', cost: 6.82 },
  'rose-quartz-bracelet':{ vid: '1922994943986130945', sku: 'CJSL2377380', cost: 1.50 },
  'tiger-eye-bracelet':  { vid: '9DA7FC73-171A-45E1-ADAA-3E138171BD8E', sku: 'CJZBLXSL03620', cost: 2.07 },
  'red-string-bracelet': { vid: '1483270966099447808', sku: 'CJJT1402047', cost: 4.75 },
  'seven-chakra-necklace':{ vid: '1454370133630914560', sku: 'CJLX1335931', cost: 1.09 },
  'tarot-pendant-necklace':{ vid: '1643807592545783808', sku: 'CJLX1726182', cost: 2.09 },
  'brass-pixiu':         { vid: '2062500440452030465', sku: 'CJDZ2922022', cost: 2.13 },
  'money-frog-statue':   { vid: '1689816124503891968', sku: 'CJJT1819552', cost: 2.09 },
  'lucky-cat-figurine':  { vid: '1037C515-B5D8-47D5-9F60-47D8D45D2A0B', sku: 'CJJJJTJT06332', cost: 4.39 },
  'feng-shui-fountain':  { vid: '1502223714652532736', sku: 'CJJT1435688', cost: 11.76 },
  'amethyst-cluster':    { vid: '1607214445019803648', sku: 'CJZS1649402', cost: 7.42 },
  'crystal-ball':        { vid: '1607666043235872768', sku: 'CJJT1650995', cost: 1.09 },
  'feng-shui-crystal-tree':{ vid: '2035924925663657986', sku: 'CJHD2799955', cost: 13.00 },
  'tarot-cards-deck':    { vid: '1369899702065172480', sku: 'CJYZ1038403', cost: 2.41 },
  'i-ching-coins-set':   { vid: '1677138890571911168', sku: 'CJYD1795013', cost: 2.56 },
  'agarwood-incense-sticks':{ vid: '2039685974484340738', sku: 'CJJY2817159', cost: 24.90 },
  'backflow-incense-burner':{ vid: '1405422298068029440', sku: 'CJZS1178238', cost: 1.33 },
  '108-mala-beads':      { vid: '2508180145231606500', sku: 'CJYD2459721', cost: 1.43 },
  'tibetan-singing-bowl':{ vid: '1655419030070628352', sku: 'CJJT1752980', cost: 5.77 },
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    // Health check
    if (path === '/api/health' && request.method === 'GET') {
      return new Response(JSON.stringify({ status: 'ok', timestamp: Date.now() }), {
        headers: CORS_HEADERS
      });
    }

    // Create CJ order after PayPal payment
    if (path === '/api/order/create' && request.method === 'POST') {
      return await createCJOrder(request, env, ctx);
    }

    // Get order status
    if (path === '/api/order/status' && request.method === 'GET') {
      return await getOrderStatus(request, env);
    }

    // CJ Webhook - logistics updates
    if (path === '/api/cj/webhook' && request.method === 'POST') {
      return await handleCJWebhook(request, env, ctx);
    }

    // Send order notification email
    if (path === '/api/notify' && request.method === 'POST') {
      return await sendNotification(request, env);
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: CORS_HEADERS
    });
  }
};

// ========== CJ Order Creation ==========
async function createCJOrder(request, env, ctx) {
  try {
    const { orderId, items, email, shippingAddress } = await request.json();

    // Get CJ access token
    const cjToken = await getCJAccessToken(env);

    // Map website products to CJ variants
    const cjProducts = [];
    let totalCost = 0;
    const warnings = [];

    for (const item of items) {
      const productId = item.productId || item.id;
      const mapping = CJ_PRODUCT_MAP[productId];

      if (!mapping) {
        warnings.push(`Product "${productId}" not found in CJ mapping, will be ordered manually`);
        continue;
      }

      cjProducts.push({
        vid: mapping.vid,
        quantity: item.quantity || 1,
        storeLineItemId: `${orderId}-${productId}`
      });
      totalCost += mapping.cost * (item.quantity || 1);
    }

    if (cjProducts.length === 0) {
      return new Response(JSON.stringify({
        success: false,
        error: 'No valid CJ products found',
        warnings: warnings
      }), { status: 400, headers: CORS_HEADERS });
    }

    // Create order on CJ
    const orderData = {
      orderNumber: orderId,
      shippingZip: shippingAddress.zip,
      shippingCountry: shippingAddress.countryName || 'United States',
      shippingCountryCode: shippingAddress.country || 'US',
      shippingProvince: shippingAddress.state,
      shippingCity: shippingAddress.city,
      shippingCounty: '',
      shippingPhone: shippingAddress.phone || '',
      shippingCustomerName: `${shippingAddress.firstName} ${shippingAddress.lastName}`,
      shippingAddress: shippingAddress.address,
      shippingAddress2: shippingAddress.apartment || '',
      taxId: '',
      remark: `MysticEast Order | Customer: ${email || 'N/A'}`,
      email: email || '',
      consigneeID: '',
      payType: 1,
      shopAmount: String(totalCost.toFixed(2)),
      logisticName: 'Standard',
      fromCountryCode: 'CN',
      platform: 'Api',
      orderFlow: 1,
      products: cjProducts
    };

    const response = await fetch('https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrderV2', {
      method: 'POST',
      headers: {
        'CJ-Access-Token': cjToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();

    if (data.code === 200 && data.result) {
      // Send notification email in background (non-blocking)
      ctx.waitUntil(sendOrderEmail(env, {
        orderId: orderId,
        cjOrderId: data.data?.orderId || '',
        cjPayUrl: data.data?.cjPayUrl || '',
        items: items,
        totalCost: totalCost,
        shippingAddress: shippingAddress,
        email: email,
        warnings: warnings
      }));

      return new Response(JSON.stringify({
        success: true,
        cjOrderId: data.data?.orderId || '',
        cjPayUrl: data.data?.cjPayUrl || '',
        totalCost: totalCost,
        warnings: warnings
      }), { headers: CORS_HEADERS });
    } else {
      // CJ order creation failed - send alert email in background
      ctx.waitUntil(sendAlertEmail(env, {
        type: 'CJ_ORDER_FAILED',
        orderId: orderId,
        error: data.message || 'Unknown CJ error',
        items: items,
        shippingAddress: shippingAddress,
        email: email
      }));

      return new Response(JSON.stringify({
        success: false,
        error: data.message || 'CJ order creation failed',
        warnings: warnings
      }), { status: 500, headers: CORS_HEADERS });
    }
  } catch (error) {
    console.error('Create CJ order error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { status: 500, headers: CORS_HEADERS });
  }
}

// ========== Get Order Status ==========
async function getOrderStatus(request, env) {
  try {
    const url = new URL(request.url);
    const cjOrderId = url.searchParams.get('cjOrderId');

    if (!cjOrderId) {
      return new Response(JSON.stringify({ error: 'Missing cjOrderId' }), {
        status: 400, headers: CORS_HEADERS
      });
    }

    const cjToken = await getCJAccessToken(env);

    const response = await fetch(
      `https://developers.cjdropshipping.com/api2.0/v1/shopping/order/detail?orderId=${cjOrderId}`,
      {
        headers: { 'CJ-Access-Token': cjToken }
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify({
      success: data.code === 200,
      order: data.data
    }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

// ========== CJ Webhook Handler ==========
async function handleCJWebhook(request, env, ctx) {
  try {
    const body = await request.json();

    // Handle different webhook events
    const eventType = body.type || body.eventType;

    if (eventType === 'logistics') {
      // Logistics update - tracking number available
      const trackingNumber = body.data?.trackingNumber;
      const orderId = body.data?.orderNumber;

      if (trackingNumber && orderId) {
        ctx.waitUntil(sendAlertEmail(env, {
          type: 'TRACKING_UPDATE',
          orderId: orderId,
          trackingNumber: trackingNumber,
          message: `Order ${orderId} has been shipped! Tracking: ${trackingNumber}`
        }));
      }
    } else if (eventType === 'order') {
      // Order status change
      const status = body.data?.status;
      const orderId = body.data?.orderNumber;

      if (status === 'CANCELLED' || status === 'FAILED') {
        ctx.waitUntil(sendAlertEmail(env, {
          type: 'ORDER_ALERT',
          orderId: orderId,
          message: `CJ Order ${orderId} status: ${status}. Action required!`
        }));
      }
    } else if (eventType === 'stock') {
      // Stock change - product out of stock
      ctx.waitUntil(sendAlertEmail(env, {
        type: 'STOCK_ALERT',
        message: `Product stock change: ${JSON.stringify(body.data)}`
      }));
    }

    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Error', { status: 500 });
  }
}

// ========== Send Notification ==========
async function sendNotification(request, env) {
  try {
    const body = await request.json();
    await sendAlertEmail(env, body);
    return new Response(JSON.stringify({ success: true }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

// ========== CJ API: Get Access Token ==========
async function getCJAccessToken(env) {
  // Check cache first (token valid for 180 days, but we cache for 24h)
  const cacheKey = 'cj_access_token';
  const cached = await env.KV?.get(cacheKey);
  if (cached) return cached;

  const response = await fetch('https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey: env.CJ_API_KEY })
  });

  const data = await response.json();

  if (data.code === 200 && data.data?.accessToken) {
    // Cache for 24 hours
    if (env.KV) {
      await env.KV.put(cacheKey, data.data.accessToken, { expirationTtl: 86400 });
    }
    return data.data.accessToken;
  }

  throw new Error('Failed to get CJ access token: ' + (data.message || 'Unknown error'));
}

// ========== Email: Order Confirmation ==========
async function sendOrderEmail(env, info) {
  const subject = `[MysticEast] New Order ${info.orderId} - Action Required`;

  const itemRows = info.items.map(item =>
    `- ${item.name || item.productName} x${item.quantity || 1} ($${(item.price || 0).toFixed(2)})`
  ).join('\n');

  const warningText = info.warnings.length > 0
    ? `\n\n⚠️ WARNINGS:\n${info.warnings.map(w => `- ${w}`).join('\n')}`
    : '';

  const cjPayText = info.cjPayUrl
    ? `\n\n🔗 CJ Payment URL: ${info.cjPayUrl}\n(Click to pay the CJ wholesale cost)`
    : '\n\n(CJ order created but no payment URL generated)';

  const body = `New order received on MysticEast!

Order ID: ${info.orderId}
CJ Order ID: ${info.cjOrderId}
Customer Email: ${info.email}
Total CJ Cost: $${info.totalCost.toFixed(2)}

Shipping Address:
${info.shippingAddress.firstName} ${info.shippingAddress.lastName}
${info.shippingAddress.address}
${info.shippingAddress.city}, ${info.shippingAddress.state} ${info.shippingAddress.zip}
${info.shippingAddress.country}

Items:
${itemRows}
${cjPayText}
${warningText}

---
This is an automated notification from MysticEast Worker.`;

  await sendEmail(env, subject, body);
}

// ========== Email: Alert Notification ==========
async function sendAlertEmail(env, info) {
  const subject = `[MysticEast ALERT] ${info.type} - ${info.orderId || 'System'}`;
  const body = `ALERT: ${info.type}

${info.message || ''}

Order ID: ${info.orderId || 'N/A'}
${info.trackingNumber ? `Tracking: ${info.trackingNumber}` : ''}

---
This is an automated alert from MysticEast Worker.`;

  await sendEmail(env, subject, body);
}

// ========== Email: Send via Mailgun (or other) ==========
async function sendEmail(env, subject, body) {
  const notifyEmail = env.NOTIFY_EMAIL || '332847952@qq.com';

  // Option 1: Use Mailgun (set MAILGUN_API_KEY and MAILGUN_DOMAIN in env)
  if (env.MAILGUN_API_KEY && env.MAILGUN_DOMAIN) {
    const auth = btoa(`api:${env.MAILGUN_API_KEY}`);
    await fetch(`https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        from: `MysticEast Orders <orders@${env.MAILGUN_DOMAIN}>`,
        to: notifyEmail,
        subject: subject,
        text: body
      })
    });
    return;
  }

  // Option 2: Use Resend (set RESEND_API_KEY in env)
  if (env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'MysticEast Orders <orders@mysticeast.shop>',
        to: [notifyEmail],
        subject: subject,
        text: body
      })
    });
    return;
  }

  // Fallback: Log to console (no email service configured)
  console.log(`EMAIL [${subject}]: ${body}`);
}
