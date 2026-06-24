// MysticEast - Checkout Page with PayPal + Creem

const paymentConfig = {
  paypalClientId: 'test',
  creemCheckoutUrl: '',
  creemApiKey: ''
};

let currentPaymentMethod = 'paypal';
let paypalButtonsInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initCheckout();
});

function initCheckout() {
  if (cart.isEmpty()) {
    window.location.href = 'index.html';
    return;
  }

  renderOrderSummary();
  initPaymentTabs();
  initShippingOptions();
  initDiscountCode();
  updateShippingPrices();
  initPayPalButtons();
  initCreemCheckout();
}

function renderOrderSummary() {
  const summaryItems = document.getElementById('summaryItems');
  if (!summaryItems) return;

  summaryItems.innerHTML = cart.items.map(item => `
    <div class="summary-item">
      <div class="summary-item-image">
        <img src="${item.productImage}" alt="${item.productName}">
        <span class="summary-item-quantity">${item.quantity}</span>
      </div>
      <div class="summary-item-info">
        <div class="summary-item-name">${item.productName}</div>
        ${item.variant ? `<div class="summary-item-variant">${item.variant}</div>` : ''}
      </div>
      <div class="summary-item-price">${formatPrice(item.price * item.quantity)}</div>
    </div>
  `).join('');

  updateSummaryTotals();
  updateCreemAmount();
}

function updateSummaryTotals() {
  const subtotal = cart.getSubtotal();
  const shipping = getSelectedShippingCost();
  const discount = cart.getDiscount();
  const total = subtotal + shipping - discount;

  document.getElementById('summarySubtotal').textContent = formatPrice(subtotal);
  document.getElementById('summaryShipping').textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
  document.getElementById('summaryTotal').textContent = formatPrice(total);

  const discountRow = document.getElementById('summaryDiscountRow');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('summaryDiscount').textContent = `-${formatPrice(discount)}`;
  } else {
    discountRow.style.display = 'none';
  }

  const freeNote = document.getElementById('freeShippingNote');
  if (subtotal >= 49) {
    freeNote.style.display = 'block';
  } else {
    freeNote.style.display = 'none';
  }

  updateCreemAmount();

  if (paypalButtonsInstance) {
    paypalButtonsInstance.close();
    initPayPalButtons();
  }
}

function getSelectedShippingCost() {
  const shippingRadio = document.querySelector('input[name="shipping"]:checked');
  if (!shippingRadio) return cart.getShipping();

  const subtotal = cart.getSubtotal();
  if (subtotal >= 49 && shippingRadio.value === 'standard') {
    return 0;
  }

  return shippingRadio.value === 'express' ? 12.99 : cart.getShipping();
}

function getOrderTotal() {
  const subtotal = cart.getSubtotal();
  const shipping = getSelectedShippingCost();
  const discount = cart.getDiscount();
  return subtotal + shipping - discount;
}

function initPaymentTabs() {
  const tabs = document.querySelectorAll('.payment-tab');
  const panels = document.querySelectorAll('.payment-method-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const payment = tab.dataset.payment;
      currentPaymentMethod = payment;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(`${payment}Payment`).classList.add('active');
    });
  });
}

function initShippingOptions() {
  const shippingRadios = document.querySelectorAll('input[name="shipping"]');
  
  shippingRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      updateSummaryTotals();
    });
  });
}

function updateShippingPrices() {
  const subtotal = cart.getSubtotal();
  const standardPriceEl = document.getElementById('standardPrice');
  
  if (subtotal >= 49) {
    standardPriceEl.textContent = 'FREE';
  }
}

function initDiscountCode() {
  const applyBtn = document.getElementById('applyDiscountBtn');
  const discountInput = document.getElementById('discountCode');

  applyBtn.addEventListener('click', () => {
    const code = discountInput.value.trim();
    if (code) {
      const success = cart.applyDiscountCode(code);
      if (success) {
        updateSummaryTotals();
        discountInput.value = '';
      }
    }
  });

  discountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyBtn.click();
    }
  });

  if (cart.discountCode) {
    discountInput.placeholder = `Applied: ${cart.discountCode}`;
  }
}

function collectOrderData() {
  const form = document.getElementById('checkoutForm');
  const formData = new FormData(form);

  return {
    customer: {
      email: formData.get('email') || '',
      firstName: formData.get('firstName') || '',
      lastName: formData.get('lastName') || '',
      phone: formData.get('phone') || ''
    },
    shipping: {
      address: formData.get('address') || '',
      apartment: formData.get('apartment') || '',
      city: formData.get('city') || '',
      state: formData.get('state') || '',
      zip: formData.get('zip') || '',
      country: formData.get('country') || 'US',
      method: formData.get('shipping') || 'standard'
    },
    items: cart.getOrderData().items,
    subtotal: cart.getSubtotal(),
    shippingCost: getSelectedShippingCost(),
    discount: cart.getDiscount(),
    discountCode: cart.discountCode,
    total: getOrderTotal(),
    currency: 'USD'
  };
}

function validateForm() {
  const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'state', 'zip', 'phone'];
  const form = document.getElementById('checkoutForm');
  const formData = new FormData(form);

  for (const field of requiredFields) {
    if (!formData.get(field)) {
      cart.showNotification(`Please fill in all required fields`, 'error');
      const el = document.getElementById(field);
      if (el) el.focus();
      return false;
    }
  }

  const email = formData.get('email');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    cart.showNotification('Please enter a valid email address', 'error');
    document.getElementById('email').focus();
    return false;
  }

  return true;
}

function initPayPalButtons() {
  const container = document.getElementById('paypal-button-container');
  if (!container || typeof paypal === 'undefined') return;

  container.innerHTML = '';

  paypalButtonsInstance = paypal.Buttons({
    style: {
      layout: 'vertical',
      color: 'gold',
      shape: 'rect',
      label: 'paypal',
      height: 48
    },

    createOrder: function(data, actions) {
      if (!validateForm()) {
        return actions.reject();
      }

      const total = getOrderTotal();
      const orderData = collectOrderData();

      return actions.order.create({
        intent: 'CAPTURE',
        purchase_units: [{
          reference_id: generateOrderId(),
          amount: {
            currency_code: 'USD',
            value: total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: cart.getSubtotal().toFixed(2)
              },
              shipping: {
                currency_code: 'USD',
                value: getSelectedShippingCost().toFixed(2)
              },
              discount: {
                currency_code: 'USD',
                value: cart.getDiscount().toFixed(2)
              }
            }
          },
          items: cart.items.map(item => ({
            name: item.productName + (item.variant ? ` - ${item.variant}` : ''),
            unit_amount: {
              currency_code: 'USD',
              value: item.price.toFixed(2)
            },
            quantity: item.quantity,
            sku: item.sku || item.productId
          })),
          shipping: {
            name: {
              full_name: `${orderData.customer.firstName} ${orderData.customer.lastName}`
            },
            address: {
              address_line_1: orderData.shipping.address,
              address_line_2: orderData.shipping.apartment,
              admin_area_2: orderData.shipping.city,
              admin_area_1: orderData.shipping.state,
              postal_code: orderData.shipping.zip,
              country_code: orderData.shipping.country
            }
          }
        }],
        payer: {
          email_address: orderData.customer.email,
          phone: {
            phone_number: {
              national_number: orderData.customer.phone
            }
          }
        },
        application_context: {
          shipping_preference: 'SET_PROVIDED_ADDRESS',
          brand_name: 'MysticEast',
          landing_page: 'BILLING',
          user_action: 'PAY_NOW'
        }
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        const orderData = collectOrderData();
        const orderId = details.id || generateOrderId();
        
        saveOrder({
          ...orderData,
          orderId: orderId,
          paypalOrderId: data.orderID,
          paymentMethod: 'paypal',
          paymentStatus: 'completed',
          payer: details.payer,
          createdAt: new Date().toISOString()
        });

        showOrderSuccess({
          orderId: orderId,
          email: details.payer?.email_address || orderData.customer.email
        });

        cart.clearCart();
      });
    },

    onCancel: function(data) {
      cart.showNotification('Payment cancelled. You can try again.', 'error');
    },

    onError: function(err) {
      console.error('PayPal error:', err);
      let errorMsg = 'Payment error. Please try again or choose another payment method.';
      if (err && err.message) {
        errorMsg += ' (' + err.message + ')';
      }
      cart.showNotification(errorMsg, 'error');
    }
  });

  paypalButtonsInstance.render('#paypal-button-container');
}

function initCreemCheckout() {
  const creemBtn = document.getElementById('creemCheckoutBtn');
  if (!creemBtn) return;

  creemBtn.addEventListener('click', () => {
    if (!validateForm()) return;

    const orderData = collectOrderData();
    const orderId = generateOrderId();

    if (paymentConfig.creemCheckoutUrl) {
      saveOrder({
        ...orderData,
        orderId: orderId,
        paymentMethod: 'creem',
        paymentStatus: 'pending',
        createdAt: new Date().toISOString()
      });

      window.location.href = paymentConfig.creemCheckoutUrl;
    } else {
      showCreemSetupModal();
    }
  });
}

function updateCreemAmount() {
  const creemAmountEl = document.getElementById('creemAmount');
  if (creemAmountEl) {
    creemAmountEl.textContent = formatPrice(getOrderTotal());
  }
}

function showCreemSetupModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <h3>Creem Payment Setup</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-lg);">
        To enable Creem checkout, add your Creem checkout URL in the payment settings.
      </p>
      <div style="background: var(--color-bg-primary); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin-bottom: var(--spacing-lg); text-align: left;">
        <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-sm);">
          <strong>Setup steps:</strong>
        </p>
        <ol style="font-size: var(--font-size-sm); color: var(--color-text-secondary); padding-left: 20px; line-height: 1.8;">
          <li>Sign up at <a href="https://creem.io" target="_blank">creem.io</a></li>
          <li>Create a product in Creem dashboard</li>
          <li>Copy the checkout link URL</li>
          <li>Paste it in paymentConfig.creemCheckoutUrl</li>
        </ol>
      </div>
      <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">Got it</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

function generateOrderId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ME-${timestamp}-${random}`;
}

function saveOrder(orderData) {
  const orders = JSON.parse(localStorage.getItem('mysticeast_orders') || '[]');
  orders.push(orderData);
  localStorage.setItem('mysticeast_orders', JSON.stringify(orders));
}

function showOrderSuccess(orderData) {
  const modal = document.getElementById('orderSuccessModal');
  if (!modal) {
    window.location.href = 'index.html';
    return;
  }
  
  document.getElementById('orderNumber').textContent = orderData.orderId;
  document.getElementById('orderEmail').textContent = orderData.email;
  modal.style.display = 'flex';
}
