// MysticEast Cloudflare Worker - PayPal + CJ Dropshipping Auto-Fulfillment + Pinterest Auto-Publish
// Updated: 2026-07-07

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

    // Pinterest: Get boards
    if (path === '/api/pinterest/boards' && request.method === 'GET') {
      return await getPinterestBoards(env);
    }

    // Pinterest: Publish pin
    if (path === '/api/pinterest/publish' && request.method === 'POST') {
      return await publishPinterestPin(request, env);
    }

    // Pinterest: Publish random pin (for scheduled tasks)
    if (path === '/api/pinterest/publish-random' && request.method === 'POST') {
      return await publishRandomPinterestPin(request, env);
    }

    // Products: Get all products
    if (path === '/api/products' && request.method === 'GET') {
      return await getProducts(env);
    }

    // Products: Search CJ for trending products
    if (path === '/api/products/cj-search' && request.method === 'POST') {
      return await searchCJTrendingProducts(request, env);
    }

    // Products: Add product from CJ
    if (path === '/api/products/add-cj' && request.method === 'POST') {
      return await addCJProduct(request, env);
    }

    // Products: Run weekly trending discovery
    if (path === '/api/products/discover' && request.method === 'POST') {
      return await discoverTrendingProducts(env);
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: CORS_HEADERS
    });
  },

  async scheduled(event, env, ctx) {
    // Weekly: Discover trending products from CJ (every Monday 3 AM UTC)
    ctx.waitUntil(discoverTrendingProducts(env));
  }
};

// ========== CJ Order Creation ==========
async function createCJOrder(request, env, ctx) {
  try {
    const { orderId, items, email, shippingAddress } = await request.json();

    // Get CJ access token
    const cjToken = await getCJAccessToken(env);

    // Get product mapping from KV (with static fallback)
    const productMap = await getProductMap(env);

    // Map website products to CJ variants
    const cjProducts = [];
    let totalCost = 0;
    const warnings = [];

    for (const item of items) {
      const productId = item.productId || item.id;
      const mapping = productMap[productId];

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
      email: email || '',
      remark: `MysticEast Order | Customer: ${email || 'N/A'}`,
      payType: 3, // Create order only, no payment needed
      shopAmount: String(totalCost.toFixed(2)),
      logisticName: 'CJPacket',
      fromCountryCode: 'CN',
      platform: 'api',
      orderFlow: 1,
      products: cjProducts
    };

    // Retry up to 3 times for rate limit issues
    let data = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      const response = await fetch('https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrderV2', {
        method: 'POST',
        headers: {
          'CJ-Access-Token': cjToken,
          'Content-Type': 'application/json',
          'User-Agent': 'MysticEast-Worker/1.0'
        },
        body: JSON.stringify(orderData)
      });

      data = await response.json();

      if (data.code === 200 && data.result) {
        break;
      }

      const errMsg = data.message || '';
      // Retry on rate limit errors
      if (attempt < 3 && (errMsg.includes('Too Many Requests') || errMsg.includes('Rate limit') || response.status === 429)) {
        await new Promise(r => setTimeout(r, 2000 * attempt));
        continue;
      }
      break;
    }

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
      const errMsg = data.message || 'Unknown CJ error';
      const isRateLimit = errMsg.includes('Too Many Requests') || errMsg.includes('Rate limit');

      if (isRateLimit) {
        // CJ rate limit - send manual order notification instead of failing
        ctx.waitUntil(sendManualOrderEmail(env, {
          orderId: orderId,
          items: items,
          totalCost: totalCost,
          shippingAddress: shippingAddress,
          email: email,
          cjProducts: cjProducts,
          error: errMsg
        }));

        return new Response(JSON.stringify({
          success: true,
          cjOrderId: 'MANUAL-' + orderId,
          message: 'Order received. CJ API temporarily limited - manual processing notification sent.',
          totalCost: totalCost,
          warnings: warnings.concat(['CJ API rate limited, please process manually via email notification'])
        }), { headers: CORS_HEADERS });
      }

      // Other CJ errors - send alert email
      ctx.waitUntil(sendAlertEmail(env, {
        type: 'CJ_ORDER_FAILED',
        orderId: orderId,
        error: errMsg,
        items: items,
        shippingAddress: shippingAddress,
        email: email
      }));

      return new Response(JSON.stringify({
        success: false,
        error: errMsg,
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

// ========== Email: Manual Order (CJ Rate Limit Fallback) ==========
async function sendManualOrderEmail(env, info) {
  const subject = `[MysticEast URGENT] Manual CJ Order Required - ${info.orderId}`;

  const itemRows = info.items.map(item =>
    `- ${item.name || item.productName} x${item.quantity || 1} ($${(item.price || 0).toFixed(2)})`
  ).join('\n');

  const cjProductRows = info.cjProducts.map(p =>
    `- VID: ${p.vid}, Qty: ${p.quantity}`
  ).join('\n');

  const body = `URGENT: CJ API rate limited - manual order required!

Order ID: ${info.orderId}
Customer Email: ${info.email}
Total CJ Cost: $${info.totalCost.toFixed(2)}
CJ Error: ${info.error}

=======================================
CUSTOMER SHIPPING INFO (copy to CJ):
=======================================
Name: ${info.shippingAddress.firstName} ${info.shippingAddress.lastName}
Address: ${info.shippingAddress.address}
${info.shippingAddress.apartment ? 'Apt: ' + info.shippingAddress.apartment + '\n' : ''}City: ${info.shippingAddress.city}
State: ${info.shippingAddress.state}
ZIP: ${info.shippingAddress.zip}
Country: ${info.shippingAddress.country}
Phone: ${info.shippingAddress.phone || 'N/A'}

=======================================
PRODUCTS TO ORDER ON CJ:
=======================================
${itemRows}

CJ Product VIDs (for API order):
${cjProductRows}

=======================================
MANUAL ORDER STEPS:
=======================================
1. Login to CJ: https://www.cjdropshipping.com/
2. Go to Orders -> Create Order
3. Fill in customer shipping info above
4. Add products by VID (search in CJ product list)
5. Submit order and pay wholesale cost

---
This is an automated fallback notification from MysticEast Worker.
CJ API was rate-limited, please process this order manually.`;

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
  const notifyEmail = env.NOTIFY_EMAIL || 'heroinyan@gmail.com';

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
        from: 'MysticEast Orders <onboarding@resend.dev>',
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

// ========== Pinterest Integration ==========

const PINTEREST_PIN_CONTENT = [
  {
    title: 'Black Obsidian Protection Bracelet | Shield Your Energy',
    description: 'Feel the power of Black Obsidian — the ultimate protection stone. This handcrafted bracelet absorbs negative energy and creates a shield of spiritual protection around you. Perfect for empaths and anyone who needs to set boundaries. #BlackObsidian #ProtectionCrystal #CrystalBracelet #SpiritualJewelry #EnergyProtection #CrystalHealing',
    link: 'https://mysticeast.shop/product.html?id=obsidian-bracelet',
    imageUrl: 'https://mysticeast.shop/images/pinterest-obsidian-bracelet.jpg'
  },
  {
    title: 'Amethyst Bracelet | Calm Your Mind & Open Your Third Eye',
    description: 'Amethyst: the stone of peace, intuition & spiritual growth. Wear this stunning bracelet to quiet your mind, enhance meditation, and connect with your higher self. #Amethyst #CrystalBracelet #ThirdEye #MeditationJewelry #SpiritualGrowth #HealingCrystals',
    link: 'https://mysticeast.shop/product.html?id=amethyst-bracelet',
    imageUrl: 'https://mysticeast.shop/images/pinterest-amethyst-bracelet.jpg'
  },
  {
    title: 'Red String Bracelet | Ancient Secret to Luck & Love',
    description: 'The Red String has been worn for thousands of years in Eastern culture for protection, luck, and attracting love. This traditional bracelet carries the energy of ancient blessings. #RedStringBracelet #GoodLuck #ChineseTradition #LuckyBracelet #Manifestation #FengShui',
    link: 'https://mysticeast.shop/product.html?id=red-string-bracelet',
    imageUrl: 'https://mysticeast.shop/images/pinterest-red-string.jpg'
  },
  {
    title: 'Brass Pixiu | The Wealth-Attracting Beast of Feng Shui',
    description: 'Pixiu — the legendary creature that devours wealth from all directions and keeps it for you. In Feng Shui, placing a Pixiu attracts money energy and prevents financial loss. #Pixiu #FengShui #WealthAttraction #MoneyEnergy #Abundance #ChineseMythology',
    link: 'https://mysticeast.shop/product.html?id=brass-pixiu',
    imageUrl: 'https://mysticeast.shop/images/pinterest-brass-pixiu.jpg'
  },
  {
    title: 'Rider-Waite Tarot Deck | Unlock Your Intuition',
    description: 'The classic Rider-Waite Tarot deck — perfect for beginners and experts alike. 78 beautifully illustrated cards to help you tap into your intuition and receive guidance. #TarotCards #TarotDeck #RiderWaite #Divination #TarotForBeginners #SpiritualTools',
    link: 'https://mysticeast.shop/product.html?id=tarot-cards-deck',
    imageUrl: 'https://mysticeast.shop/images/pinterest-tarot-deck.jpg'
  },
  {
    title: 'Which Crystal Do YOU Need?',
    description: 'Not sure which crystal is right for you? Black Obsidian → Protection, Amethyst → Peace, Rose Quartz → Love, Tiger Eye → Confidence. Save this pin for later! #CrystalGuide #CrystalMeanings #WhichCrystal #CrystalForBeginners #HealingStones #SpiritualJourney',
    link: 'https://mysticeast.shop/category.html?category=Bracelet',
    imageUrl: 'https://mysticeast.shop/images/pinterest-crystal-guide.jpg'
  },
  {
    title: '5 Feng Shui Tips That Actually Work',
    description: 'Pixiu in wealth corner, Money Frog near entrance, Crystal Tree on desk, Keep entrance clear, Singing bowl weekly. Save this for your home arrangement! #FengShui #FengShuiTips #HomeEnergy #WealthCorner #ChineseCulture #SpaceClearing',
    link: 'https://mysticeast.shop/category.html?category=Feng%20Shui',
    imageUrl: 'https://mysticeast.shop/images/pinterest-feng-shui-tips.jpg'
  },
  {
    title: 'Crystal Meanings Cheat Sheet',
    description: 'Save this crystal meanings cheat sheet: Amethyst = Calm, Obsidian = Protection, Rose Quartz = Love, Tiger Eye = Confidence. Which crystal are you drawn to today? #CrystalMeanings #CrystalGuide #HealingCrystals #CrystalProperties #SpiritualJourney',
    link: 'https://mysticeast.shop/category.html?category=Bracelet',
    imageUrl: 'https://mysticeast.shop/images/pinterest-crystal-meanings.jpg'
  },
  {
    title: 'The Perfect Spiritual Gift Guide',
    description: 'Shopping for someone who loves crystals? Gifts they will love: Amethyst Bracelet, Brass Pixiu, Tarot Deck, Singing Bowl, Red String Bracelet. Save this for holiday shopping! #SpiritualGifts #GiftGuide #CrystalGift #UniqueGifts #PresentsForHer #HolisticGifts',
    link: 'https://mysticeast.shop/',
    imageUrl: 'https://mysticeast.shop/images/pinterest-spiritual-gift-guide.jpg'
  },
  {
    title: 'Crystal Money Tree | Bring Prosperity to Your Home',
    description: 'The Crystal Money Tree attracts wealth energy and brings prosperity to your home. Place it in your living room or office for abundance and good fortune. #CrystalTree #FengShui #WealthAttraction #MoneyTree #Abundance #HomeDecor',
    link: 'https://mysticeast.shop/product.html?id=crystal-money-tree',
    imageUrl: 'https://mysticeast.shop/images/pinterest-crystal-tree.jpg'
  }
];

async function getPinterestBoards(env) {
  try {
    const token = env.PINTEREST_TOKEN;
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'PINTEREST_TOKEN not configured' }), {
        status: 500, headers: CORS_HEADERS
      });
    }
    
    const response = await fetch('https://api.pinterest.com/v5/boards?page_size=25', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify({ success: true, data }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

async function publishPinterestPin(request, env) {
  try {
    const body = await request.json();
    const { board_id, pin_index } = body;
    
    if (!board_id) {
      return new Response(JSON.stringify({ success: false, error: 'board_id is required' }), {
        status: 400, headers: CORS_HEADERS
      });
    }
    
    const pinContent = pin_index !== undefined && pin_index < PINTEREST_PIN_CONTENT.length 
      ? PINTEREST_PIN_CONTENT[pin_index] 
      : PINTEREST_PIN_CONTENT[Math.floor(Math.random() * PINTEREST_PIN_CONTENT.length)];
    
    const token = env.PINTEREST_TOKEN;
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'PINTEREST_TOKEN not configured' }), {
        status: 500, headers: CORS_HEADERS
      });
    }
    
    const response = await fetch('https://api.pinterest.com/v5/pins', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        board_id: board_id,
        title: pinContent.title,
        description: pinContent.description,
        link: pinContent.link,
        media_source: {
          source_type: 'image_url',
          url: pinContent.imageUrl
        }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ status: response.status }));
      return new Response(JSON.stringify({ success: false, error: `Pinterest API error: ${response.status}`, details: errorData }), {
        status: 500, headers: CORS_HEADERS
      });
    }
    
    const result = await response.json();
    
    return new Response(JSON.stringify({ success: true, pin: result }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

async function publishRandomPinterestPin(request, env) {
  try {
    const body = await request.json();
    const { board_id } = body;
    
    if (!board_id) {
      return new Response(JSON.stringify({ success: false, error: 'board_id is required' }), {
        status: 400, headers: CORS_HEADERS
      });
    }
    
    const randomPin = PINTEREST_PIN_CONTENT[Math.floor(Math.random() * PINTEREST_PIN_CONTENT.length)];
    
    const token = env.PINTEREST_TOKEN;
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'PINTEREST_TOKEN not configured' }), {
        status: 500, headers: CORS_HEADERS
      });
    }
    
    const response = await fetch('https://api.pinterest.com/v5/pins', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        board_id: board_id,
        title: randomPin.title,
        description: randomPin.description,
        link: randomPin.link,
        media_source: {
          source_type: 'image_url',
          url: randomPin.imageUrl
        }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ status: response.status }));
      return new Response(JSON.stringify({ success: false, error: `Pinterest API error: ${response.status}`, details: errorData }), {
        status: 500, headers: CORS_HEADERS
      });
    }
    
    const result = await response.json();
    
    return new Response(JSON.stringify({ success: true, pin: result, publishedPin: randomPin }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

// ========== Product KV Storage ==========
const KV_PRODUCTS_KEY = 'products_data';
const KV_PRODUCT_MAP_KEY = 'cj_product_map';

const NICHE_KEYWORDS = [
  'bracelet', 'necklace', 'feng shui', 'crystal', 'talisman',
  'chakra', 'tarot', 'incense', 'buddhist', 'prayer beads',
  'mala', 'pixiu', 'obsidian', 'amethyst', 'rose quartz',
  'tiger eye', 'healing stone', 'spiritual', 'meditation',
  'reiki', 'chakra stones', 'singing bowl', 'money frog',
  'lucky cat', 'brass figurine', 'quartz', 'gemstone'
];

async function getProducts(env) {
  try {
    if (!env.KV) {
      return new Response(JSON.stringify({ products: [], fromKV: false }), { headers: CORS_HEADERS });
    }
    const data = await env.KV.get(KV_PRODUCTS_KEY);
    const products = data ? JSON.parse(data) : [];
    return new Response(JSON.stringify({ products, fromKV: true, count: products.length }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

async function saveProducts(env, products) {
  if (env.KV) {
    await env.KV.put(KV_PRODUCTS_KEY, JSON.stringify(products));
  }
}

async function getProductMap(env) {
  if (!env.KV) return { ...CJ_PRODUCT_MAP };
  const data = await env.KV.get(KV_PRODUCT_MAP_KEY);
  if (data) return JSON.parse(data);
  await env.KV.put(KV_PRODUCT_MAP_KEY, JSON.stringify(CJ_PRODUCT_MAP));
  return { ...CJ_PRODUCT_MAP };
}

async function saveProductMap(env, map) {
  if (env.KV) {
    await env.KV.put(KV_PRODUCT_MAP_KEY, JSON.stringify(map));
  }
}

// ========== CJ Product Search ==========
async function searchCJTrendingProducts(request, env) {
  try {
    const { keyword = 'crystal bracelet', page = 1, pageSize = 20 } = await request.json();
    const cjToken = await getCJAccessToken(env);

    const response = await fetch(
      `https://developers.cjdropshipping.com/api2.0/v1/product/search?keyword=${encodeURIComponent(keyword)}&pageNum=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'CJ-Access-Token': cjToken
        }
      }
    );

    const data = await response.json();

    if (data.code !== 200) {
      return new Response(JSON.stringify({ error: data.message || 'CJ search failed', code: data.code }), {
        status: 500, headers: CORS_HEADERS
      });
    }

    const products = (data.data?.list || []).map(item => ({
      cjPid: item.productId || item.pid,
      vid: item.variantId || item.vid,
      sku: item.sku,
      name: item.productName || item.name,
      price: item.sellPrice || item.price,
      cost: item.basePrice || item.cost,
      image: item.productImage || item.image || item.images?.[0],
      category: item.categoryName || item.category,
      sales: item.saleCount || item.sales || 0,
      rating: item.rating || item.evaluateScore || 0,
      reviews: item.commentCount || item.reviews || 0,
      cjLink: `https://www.cjdropshipping.com/product-detail?pid=${item.productId || item.pid}`
    }));

    return new Response(JSON.stringify({ products, total: data.data?.total || 0 }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

// ========== Add Product from CJ ==========
async function addCJProduct(request, env) {
  try {
    const { cjPid, vid, category } = await request.json();
    const cjToken = await getCJAccessToken(env);

    // Get product detail from CJ
    const response = await fetch(
      `https://developers.cjdropshipping.com/api2.0/v1/product/query?productId=${cjPid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'CJ-Access-Token': cjToken
        }
      }
    );

    const data = await response.json();

    if (data.code !== 200 || !data.data) {
      return new Response(JSON.stringify({ error: data.message || 'Failed to get CJ product detail' }), {
        status: 500, headers: CORS_HEADERS
      });
    }

    const cjProduct = data.data;
    const productId = slugify(cjProduct.productName || cjProduct.name);

    // Get variants
    const variants = (cjProduct.variants || []).map(v => ({
      size: v.variantName || v.name,
      price: parseFloat(v.sellPrice || v.price || 0)
    }));

    // Build product
    const sellPrice = parseFloat(cjProduct.sellPrice || cjProduct.price || 19.99);
    const costPrice = parseFloat(cjProduct.basePrice || cjProduct.cost || 3.00);
    const product = {
      id: productId,
      name: cjProduct.productName || cjProduct.name,
      shortName: (cjProduct.productName || cjProduct.name).split(' ').slice(0, 3).join(' '),
      category: category || detectCategory(cjProduct.productName || cjProduct.name),
      subcategory: '',
      sku: 'ME-' + productId.toUpperCase().replace(/-/g, '').slice(0, 8),
      price: Math.max(sellPrice * 3, costPrice * 5, 19.99),
      originalPrice: Math.max(sellPrice * 4, costPrice * 7, 29.99),
      cost: costPrice,
      shippingCost: 2.50,
      rating: parseFloat(cjProduct.evaluateScore || cjProduct.rating || 4.5),
      reviews: parseInt(cjProduct.commentCount || cjProduct.reviews || 0),
      tags: ['new', 'trending'],
      images: (cjProduct.images || [cjProduct.productImage || cjProduct.image]).filter(Boolean).slice(0, 5),
      cjLink: `https://www.cjdropshipping.com/product-detail?pid=${cjPid}`,
      cjSku: cjProduct.sku || '',
      description: {
        short: cjProduct.description?.slice(0, 120) || `Premium ${cjProduct.categoryName || 'spiritual'} product for your collection.`,
        long: cjProduct.description || `This beautiful ${cjProduct.categoryName || 'crystal'} product is carefully crafted with high-quality materials. Perfect for spiritual practice, meditation, or as a meaningful gift.`,
        meaning: '',
        usage: ''
      },
      variants: variants.length > 0 ? variants : [{ size: 'One Size', price: Math.max(sellPrice * 3, costPrice * 5, 19.99) }],
      benefits: ['High quality material', 'Handcrafted with care', 'Perfect gift idea', 'Satisfaction guaranteed'],
      specifications: { material: cjProduct.material || 'Natural crystal', origin: cjProduct.origin || 'China' },
      addedFromCJ: true,
      addedDate: new Date().toISOString()
    };

    // Save to KV
    const products = await getProductsFromKV(env);
    const existing = products.find(p => p.id === productId);
    if (existing) {
      return new Response(JSON.stringify({ success: false, error: 'Product already exists', productId }), {
        status: 409, headers: CORS_HEADERS
      });
    }
    products.unshift(product);
    await saveProducts(env, products);

    // Update product map
    const productMap = await getProductMap(env);
    productMap[productId] = {
      vid: vid || cjProduct.variants?.[0]?.variantId || '',
      sku: cjProduct.sku || '',
      cost: costPrice
    };
    await saveProductMap(env, productMap);

    return new Response(JSON.stringify({ success: true, product, productId }), { headers: CORS_HEADERS });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

async function getProductsFromKV(env) {
  if (!env.KV) return [];
  const data = await env.KV.get(KV_PRODUCTS_KEY);
  return data ? JSON.parse(data) : [];
}

// ========== Weekly Trending Product Discovery ==========
async function discoverTrendingProducts(env) {
  try {
    const cjToken = await getCJAccessToken(env);
    const existingProducts = await getProductsFromKV(env);
    const existingIds = new Set(existingProducts.map(p => p.id));
    const existingCJLinks = new Set(existingProducts.map(p => p.cjLink));

    const newProducts = [];
    const maxProductsPerWeek = 3;

    // Search across niche keywords
    for (const keyword of NICHE_KEYWORDS) {
      if (newProducts.length >= maxProductsPerWeek) break;

      try {
        const response = await fetch(
          `https://developers.cjdropshipping.com/api2.0/v1/product/search?keyword=${encodeURIComponent(keyword)}&pageNum=1&pageSize=30`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'CJ-Access-Token': cjToken
            }
          }
        );

        const data = await response.json();
        if (data.code !== 200 || !data.data?.list) continue;

        // Filter for trending: high sales + good rating + reasonable price
        const candidates = data.data.list
          .filter(item => {
            const sales = item.saleCount || item.sales || 0;
            const rating = item.rating || item.evaluateScore || 0;
            const price = parseFloat(item.sellPrice || item.price || 0);
            const cjLink = `https://www.cjdropshipping.com/product-detail?pid=${item.productId || item.pid}`;

            return sales >= 100
              && rating >= 4.0
              && price >= 1.00
              && price <= 15.00
              && !existingCJLinks.has(cjLink);
          })
          .sort((a, b) => (b.saleCount || b.sales || 0) - (a.saleCount || a.sales || 0));

        // Take top candidate from this keyword
        if (candidates.length > 0 && newProducts.length < maxProductsPerWeek) {
          const candidate = candidates[0];
          const productId = slugify(candidate.productName || candidate.name);

          if (!existingIds.has(productId)) {
            // Get full product detail
            const detailResp = await fetch(
              `https://developers.cjdropshipping.com/api2.0/v1/product/query?productId=${candidate.productId || candidate.pid}`,
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'CJ-Access-Token': cjToken
                }
              }
            );

            const detailData = await detailResp.json();
            if (detailData.code === 200 && detailData.data) {
              const cjProduct = detailData.data;
              const costPrice = parseFloat(cjProduct.basePrice || cjProduct.cost || candidate.sellPrice || 3.00);
              const variants = (cjProduct.variants || []).map(v => ({
                size: v.variantName || v.name,
                price: parseFloat(v.sellPrice || v.price || 0)
              }));
              const sellPrice = Math.max(costPrice * 5, 19.99);

              const product = {
                id: productId,
                name: cjProduct.productName || cjProduct.name,
                shortName: (cjProduct.productName || cjProduct.name).split(' ').slice(0, 3).join(' '),
                category: detectCategory(cjProduct.productName || cjProduct.name),
                subcategory: '',
                sku: 'ME-' + productId.toUpperCase().replace(/-/g, '').slice(0, 8),
                price: sellPrice,
                originalPrice: Math.max(costPrice * 7, 29.99),
                cost: costPrice,
                shippingCost: 2.50,
                rating: parseFloat(cjProduct.evaluateScore || cjProduct.rating || 4.5),
                reviews: parseInt(cjProduct.commentCount || cjProduct.reviews || 0),
                tags: ['new', 'trending'],
                images: (cjProduct.images || [cjProduct.productImage || cjProduct.image]).filter(Boolean).slice(0, 5),
                cjLink: `https://www.cjdropshipping.com/product-detail?pid=${candidate.productId || candidate.pid}`,
                cjSku: cjProduct.sku || '',
                description: {
                  short: `Premium ${detectCategory(cjProduct.productName || cjProduct.name).toLowerCase()} product for your spiritual collection.`,
                  long: `This beautiful ${detectCategory(cjProduct.productName || cjProduct.name).toLowerCase()} is carefully crafted with high-quality materials. Perfect for spiritual practice, meditation, or as a meaningful gift for loved ones. Each piece is selected for its quality and energetic properties.`,
                  meaning: '',
                  usage: 'Perfect for daily wear or meditation practice.'
                },
                variants: variants.length > 0 ? variants : [{ size: 'One Size', price: sellPrice }],
                benefits: ['Premium quality', 'Handcrafted', 'Positive energy', 'Perfect gift'],
                specifications: { material: cjProduct.material || 'Natural crystal', origin: cjProduct.origin || 'China' },
                addedFromCJ: true,
                addedDate: new Date().toISOString(),
                autoDiscovered: true,
                discoveryKeyword: keyword,
                cjSales: candidate.saleCount || candidate.sales || 0
              };

              newProducts.push(product);
              existingIds.add(productId);
            }
          }
        }
      } catch (e) {
        console.error(`Error searching for "${keyword}":`, e.message);
        continue;
      }
    }

    if (newProducts.length > 0) {
      // Add new products to KV (at the beginning)
      const allProducts = [...newProducts, ...existingProducts];
      await saveProducts(env, allProducts);

      // Update product map
      const productMap = await getProductMap(env);
      for (const p of newProducts) {
        productMap[p.id] = {
          vid: p.cjSku ? '' : '',
          sku: p.cjSku || '',
          cost: p.cost
        };
      }
      await saveProductMap(env, productMap);

      // Send notification email
      try {
        const body = `Weekly Trending Product Discovery Complete!\n\nNew products added: ${newProducts.length}\n\n${newProducts.map(p => `- ${p.name}\n  Price: $${p.price.toFixed(2)}\n  Cost: $${p.cost.toFixed(2)}\n  CJ Sales: ${p.cjSales || 0}\n  Category: ${p.category}\n  Link: ${p.cjLink}\n`).join('\n')}\n\nTotal products: ${allProducts.length}`;
        await sendEmail(env, '[MysticEast] Weekly Product Discovery Report', body);
      } catch (e) {
        console.error('Failed to send notification:', e.message);
      }

      return new Response(JSON.stringify({
        success: true,
        newProducts: newProducts.length,
        products: newProducts,
        totalProducts: existingProducts.length + newProducts.length
      }), { headers: CORS_HEADERS });
    }

    return new Response(JSON.stringify({
      success: true,
      newProducts: 0,
      message: 'No new trending products found this week',
      totalProducts: existingProducts.length
    }), { headers: CORS_HEADERS });
  } catch (error) {
    console.error('discoverTrendingProducts error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: CORS_HEADERS
    });
  }
}

// ========== Helpers ==========
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function detectCategory(name) {
  const lower = name.toLowerCase();
  if (lower.includes('bracelet')) return 'Bracelet';
  if (lower.includes('necklace') || lower.includes('pendant')) return 'Necklace';
  if (lower.includes('pixiu') || lower.includes('frog') || lower.includes('cat') || lower.includes('statue') || lower.includes('figurine') || lower.includes('fountain')) return 'Feng Shui';
  if (lower.includes('crystal') || lower.includes('quartz') || lower.includes('obsidian') || lower.includes('amethyst') || lower.includes('cluster') || lower.includes('ball') || lower.includes('wand') || lower.includes('tumbled') || lower.includes('gemstone')) return 'Crystal';
  if (lower.includes('tarot') || lower.includes('divination') || lower.includes('i ching') || lower.includes('coins')) return 'Tarot';
  if (lower.includes('incense') || lower.includes('burner') || lower.includes('sage')) return 'Incense';
  if (lower.includes('mala') || lower.includes('prayer beads') || lower.includes('buddhist') || lower.includes('singing bowl') || lower.includes('meditation')) return 'Buddhist';
  if (lower.includes('talisman') || lower.includes('charm') || lower.includes('amulet')) return 'Talisman';
  if (lower.includes('chakra')) return 'Crystal';
  return 'Bracelet';
}
