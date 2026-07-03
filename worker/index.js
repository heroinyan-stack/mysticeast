export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/api/create-checkout' && request.method === 'POST') {
      try {
        const { items, email, shippingAddress } = await request.json();
        
        const orderId = 'ord_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        const metadata = {
          orderId,
          items,
          shippingAddress
        };

        const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        const checkoutData = {
          product_id: env.CREEM_PRODUCT_ID || 'prod_default',
          request_id: orderId,
          units: 1,
          customer: {
            email: email || 'customer@example.com'
          },
          success_url: 'https://mysticeast.shop/success.html',
          cancel_url: 'https://mysticeast.shop/cart.html',
          metadata: metadata
        };

        const creemUrl = env.CREEM_TEST_MODE === 'true' 
          ? 'https://test-api.creem.io/v1/checkouts'
          : 'https://api.creem.io/v1/checkouts';

        const response = await fetch(creemUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': env.CREEM_API_KEY
          },
          body: JSON.stringify(checkoutData)
        });

        if (response.ok) {
          const data = await response.json();
          return new Response(JSON.stringify({
            success: true,
            checkoutUrl: data.checkout_url || data.url,
            orderId: orderId
          }), {
            headers: { 'Content-Type': 'application/json' }
          });
        } else {
          const error = await response.json();
          console.error('Creem API error:', error);
          return new Response(JSON.stringify({
            success: false,
            error: error.message || 'Payment processing error'
          }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      } catch (error) {
        console.error('Checkout error:', error);
        return new Response(JSON.stringify({
          success: false,
          error: 'Server error'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    if (path === '/api/webhook' && request.method === 'POST') {
      try {
        const rawBody = await request.text();
        const signature = request.headers.get('creem-signature');
        
        console.log('Webhook received:', signature);
        console.log('Webhook body:', rawBody);

        return new Response('OK', { status: 200 });
      } catch (error) {
        console.error('Webhook error:', error);
        return new Response('Error', { status: 500 });
      }
    }

    return new Response('Not found', { status: 404 });
  }
};