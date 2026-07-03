export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/api/paypal/create-order' && request.method === 'POST') {
      return await createPayPalOrder(request, env);
    }

    if (path === '/api/paypal/capture-order' && request.method === 'POST') {
      return await capturePayPalOrder(request, env);
    }

    if (path === '/api/webhook' && request.method === 'POST') {
      return handleWebhook(request, env);
    }

    if (path === '/api/health' && request.method === 'GET') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Not found', { status: 404 });
  }
};

async function createPayPalOrder(request, env) {
  try {
    const { items, email, shippingAddress } = await request.json();

    const orderId = 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();

    let subtotal = 0;
    const purchaseUnits = items.map(item => {
      subtotal += item.price * item.quantity;
      return {
        name: item.name,
        unit_amount: {
          currency_code: 'USD',
          value: item.price.toFixed(2)
        },
        quantity: item.quantity
      };
    });

    const shipping = subtotal >= 49 ? 0 : 5.99;
    const total = subtotal + shipping;

    const isSandbox = env.PAYPAL_MODE === 'sandbox';
    const paypalUrl = isSandbox 
      ? 'https://api-m.sandbox.paypal.com'
      : 'https://api-m.paypal.com';

    const accessToken = await getPayPalAccessToken(env);

    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [{
        reference_id: orderId,
        amount: {
          currency_code: 'USD',
          value: total.toFixed(2),
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: subtotal.toFixed(2)
            },
            shipping: {
              currency_code: 'USD',
              value: shipping.toFixed(2)
            }
          }
        },
        items: items.map(item => ({
          name: item.name,
          unit_amount: {
            currency_code: 'USD',
            value: item.price.toFixed(2)
          },
          quantity: item.quantity.toString(),
          sku: item.id
        })),
        shipping: {
          name: {
            full_name: `${shippingAddress.firstName} ${shippingAddress.lastName}`
          },
          address: {
            address_line_1: shippingAddress.address,
            address_line_2: shippingAddress.apartment || '',
            admin_area_2: shippingAddress.city,
            admin_area_1: shippingAddress.state,
            postal_code: shippingAddress.zip,
            country_code: shippingAddress.country
          }
        }
      }],
      payment_source: {
        paypal: {
          experience_context: {
            return_url: 'https://mysticeast.shop/success.html',
            cancel_url: 'https://mysticeast.shop/cart.html',
            shipping_preference: 'SET_PROVIDED_ADDRESS',
            user_action: 'PAY_NOW',
            brand_name: 'MysticEast',
            logo_url: 'https://mysticeast.shop/images/logo.png',
            locale: 'en-US'
          },
          email_address: email || ''
        }
      }
    };

    const response = await fetch(`${paypalUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();

    if (response.ok) {
      let approveUrl = '';
      if (data.links) {
        const approveLink = data.links.find(link => link.rel === 'approve');
        if (approveLink) {
          approveUrl = approveLink.href;
        }
      }

      return new Response(JSON.stringify({
        success: true,
        orderId: data.id,
        approveUrl: approveUrl,
        ourOrderId: orderId
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      console.error('PayPal create order error:', data);
      return new Response(JSON.stringify({
        success: false,
        error: data.message || 'Failed to create PayPal order'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Create PayPal order error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Server error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function capturePayPalOrder(request, env) {
  try {
    const { orderId } = await request.json();

    const isSandbox = env.PAYPAL_MODE === 'sandbox';
    const paypalUrl = isSandbox 
      ? 'https://api-m.sandbox.paypal.com'
      : 'https://api-m.paypal.com';

    const accessToken = await getPayPalAccessToken(env);

    const response = await fetch(`${paypalUrl}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const data = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify({
        success: true,
        status: data.status,
        data: data
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      console.error('PayPal capture error:', data);
      return new Response(JSON.stringify({
        success: false,
        error: data.message || 'Failed to capture payment'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Capture PayPal order error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Server error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

async function getPayPalAccessToken(env) {
  const isSandbox = env.PAYPAL_MODE === 'sandbox';
  const paypalUrl = isSandbox 
    ? 'https://api-m.sandbox.paypal.com'
    : 'https://api-m.paypal.com';

  const clientId = env.PAYPAL_CLIENT_ID;
  const clientSecret = env.PAYPAL_CLIENT_SECRET;

  const auth = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch(`${paypalUrl}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${auth}`
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
}

async function handleWebhook(request, env) {
  try {
    const rawBody = await request.text();
    console.log('Webhook received:', rawBody);

    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Error', { status: 500 });
  }
}