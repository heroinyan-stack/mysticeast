// MysticEast - Checkout Page Logic

document.addEventListener('DOMContentLoaded', () => {
  initCheckout();
});

function initCheckout() {
  if (cart.isEmpty()) {
    window.location.href = 'index.html';
    return;
  }

  renderOrderSummary();
  initPaymentOptions();
  initShippingOptions();
  initDiscountCode();
  initCheckoutForm();
  updateShippingPrices();
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
}

function updateSummaryTotals() {
  const subtotal = cart.getSubtotal();
  const shipping = cart.getShipping();
  const discount = cart.getDiscount();
  const total = cart.getTotal();

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
}

function initPaymentOptions() {
  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  const cardDetails = document.getElementById('cardDetails');

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'card') {
        cardDetails.style.display = 'block';
      } else {
        cardDetails.style.display = 'none';
      }
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

function initCheckoutForm() {
  const form = document.getElementById('checkoutForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.checkout-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    setTimeout(() => {
      processOrder(form);
    }, 1000);
  });
}

function processOrder(form) {
  const formData = new FormData(form);
  const orderData = {
    orderId: generateOrderId(),
    customer: {
      email: formData.get('email'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone')
    },
    shipping: {
      address: formData.get('address'),
      apartment: formData.get('apartment'),
      city: formData.get('city'),
      state: formData.get('state'),
      zip: formData.get('zip'),
      country: formData.get('country'),
      method: formData.get('shipping')
    },
    payment: {
      method: formData.get('payment')
    },
    items: cart.getOrderData().items,
    subtotal: cart.getSubtotal(),
    shipping: cart.getShipping(),
    discount: cart.getDiscount(),
    discountCode: cart.discountCode,
    total: cart.getTotal(),
    currency: 'USD',
    createdAt: new Date().toISOString()
  };

  saveOrder(orderData);
  showOrderSuccess(orderData);
  cart.clearCart();
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
  document.getElementById('orderNumber').textContent = orderData.orderId;
  document.getElementById('orderEmail').textContent = orderData.customer.email;
  modal.style.display = 'flex';
}
