// MysticEast - Cart Management

class Cart {
  constructor() {
    this.items = [];
    this.discountCode = null;
    this.discount = 0;
    this.loadFromStorage();
  }

  // Load cart from localStorage
  loadFromStorage() {
    const savedCart = localStorage.getItem('mysticeast_cart');
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        this.items = cartData.items || [];
        this.discountCode = cartData.discountCode || null;
        this.discount = cartData.discount || 0;
        this.cleanInvalidItems();
      } catch (e) {
        console.error('Failed to parse cart data', e);
        this.items = [];
      }
    }
  }

  cleanInvalidItems() {
    const validItems = [];
    for (const item of this.items) {
      const product = getProductById(item.productId);
      if (product) {
        if (typeof item.variant === 'object' && item.variant !== null) {
          item.variant = item.variant.size || item.variant.type || item.variant.style || item.variant.name || null;
        }
        validItems.push(item);
      }
    }
    this.items = validItems;
  }

  // Save cart to localStorage
  saveToStorage() {
    const cartData = {
      items: this.items,
      discountCode: this.discountCode,
      discount: this.discount
    };
    localStorage.setItem('mysticeast_cart', JSON.stringify(cartData));
  }

  // Add item to cart
  addItem(productId, variant = null, quantity = 1) {
    // Get product data from products.js
    const product = getProductById(productId);
    if (!product) {
      console.error('Product not found:', productId);
      return false;
    }

    // Determine variant and price
    let selectedVariant = variant;
    let price = product.price;
    let sku = product.id;

    if (product.variants && product.variants.length > 0) {
      if (!selectedVariant) {
        const firstVariant = product.variants[0];
        selectedVariant = firstVariant.size || firstVariant.type || firstVariant.style || firstVariant.name || null;
      }
      const variantData = product.variants.find(v =>
        v.size === selectedVariant || v.type === selectedVariant || v.style === selectedVariant || v.name === selectedVariant || v.sku === selectedVariant
      );
      if (variantData) {
        price = variantData.price;
        sku = variantData.sku || sku;
        selectedVariant = variantData.size || variantData.type || variantData.style || variantData.name || null;
      }
    }

    // Check if item already exists in cart
    const existingItem = this.items.find(item => 
      item.productId === productId && item.variant === selectedVariant
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        productId: productId,
        productName: product.name,
        productImage: product.images[0],
        variant: selectedVariant,
        sku: sku,
        price: price,
        quantity: quantity
      });
    }

    this.saveToStorage();
    this.updateUI();
    this.showNotification(`${product.name} added to cart!`);

    // GA4 add_to_cart event
    if (typeof gtag === 'function') {
      gtag('event', 'add_to_cart', {
        currency: 'USD',
        value: parseFloat((price * quantity).toFixed(2)),
        items: [{
          item_id: sku,
          item_name: product.name,
          item_category: product.category,
          price: parseFloat(price),
          quantity: quantity
        }]
      });
    }

    return true;
  }

  // Remove item from cart
  removeItem(productId, variant = null) {
    const index = this.items.findIndex(item => 
      item.productId === productId && 
      (variant === null || item.variant === variant)
    );

    if (index !== -1) {
      const removedItem = this.items[index];
      this.items.splice(index, 1);
      this.saveToStorage();
      this.updateUI();
      this.showNotification(`${removedItem.productName} removed from cart`);
      return true;
    }
    return false;
  }

  // Update item quantity
  updateQuantity(productId, variant, newQuantity) {
    const item = this.items.find(item => 
      item.productId === productId && item.variant === variant
    );

    if (item) {
      if (newQuantity <= 0) {
        this.removeItem(productId, variant);
      } else {
        item.quantity = newQuantity;
        this.saveToStorage();
        this.updateUI();
      }
      return true;
    }
    return false;
  }

  // Calculate subtotal
  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Calculate shipping
  getShipping() {
    const subtotal = this.getSubtotal();
    const freeThreshold = 49;
    
    if (subtotal >= freeThreshold) {
      return 0;
    }
    return 5.99; // Standard shipping
  }

  // Calculate discount
  getDiscount() {
    return this.discount;
  }

  // Apply discount code
  applyDiscountCode(code) {
    // Valid discount codes
    const validCodes = {
      'MYSTIC15': { discount: 0.15, type: 'percentage', description: '15% off' },
      'WELCOME10': { discount: 0.10, type: 'percentage', description: '10% off' },
      'FIRSTORDER': { discount: 5, type: 'fixed', description: '$5 off' }
    };

    const discountData = validCodes[code.toUpperCase()];
    if (discountData) {
      this.discountCode = code.toUpperCase();
      if (discountData.type === 'percentage') {
        this.discount = this.getSubtotal() * discountData.discount;
      } else {
        this.discount = discountData.discount;
      }
      this.saveToStorage();
      this.updateUI();
      this.showNotification(`Discount applied: ${discountData.description}`);
      return true;
    }
    
    this.showNotification('Invalid discount code', 'error');
    return false;
  }

  // Remove discount
  removeDiscount() {
    this.discountCode = null;
    this.discount = 0;
    this.saveToStorage();
    this.updateUI();
  }

  // Calculate total
  getTotal() {
    return this.getSubtotal() + this.getShipping() - this.getDiscount();
  }

  // Get total items count
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  // Clear cart
  clearCart() {
    this.items = [];
    this.discountCode = null;
    this.discount = 0;
    this.saveToStorage();
    this.updateUI();
  }

  // Check if cart is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Update UI elements
  updateUI() {
    // Update cart count in header
    const cartCountElements = document.querySelectorAll('.cart-count');
    const itemCount = this.getItemCount();
    cartCountElements.forEach(el => {
      el.textContent = itemCount;
      el.style.display = itemCount > 0 ? 'inline-block' : 'none';
    });

    // Update cart sidebar if open
    this.renderCartSidebar();
  }

  // Render cart sidebar
  renderCartSidebar() {
    const cartItemsContainer = document.querySelector('.cart-sidebar .cart-items');
    const cartSummary = document.querySelector('.cart-sidebar .cart-summary');
    const cartEmpty = document.querySelector('.cart-sidebar .cart-empty');

    if (!cartItemsContainer) return;

    if (this.isEmpty()) {
      cartItemsContainer.style.display = 'none';
      if (cartEmpty) cartEmpty.style.display = 'flex';
      if (cartSummary) {
        cartSummary.innerHTML = `
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div class="cart-summary-row">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <div class="cart-summary-row total">
            <span>Total</span>
            <span>$0.00</span>
          </div>
        `;
      }
      return;
    }

    cartItemsContainer.style.display = 'block';
    if (cartEmpty) cartEmpty.style.display = 'none';

    // Render cart items
    cartItemsContainer.innerHTML = this.items.map(item => {
      const variantValue = item.variant || '';
      return `
      <div class="cart-item" data-product-id="${item.productId}" data-variant="${variantValue}">
        <img src="${item.productImage}" alt="${item.productName}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.productName}</div>
          ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="cart.updateQuantity('${item.productId}', ${item.variant ? `'${item.variant}'` : 'null'}, ${item.quantity - 1})">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="cart.updateQuantity('${item.productId}', ${item.variant ? `'${item.variant}'` : 'null'}, ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="cart.removeItem('${item.productId}', ${item.variant ? `'${item.variant}'` : 'null'})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
          </svg>
        </button>
      </div>
    `}).join('');

    // Render summary
    if (cartSummary) {
      const subtotal = this.getSubtotal();
      const shipping = this.getShipping();
      const discount = this.getDiscount();
      const total = this.getTotal();

      cartSummary.innerHTML = `
        <div class="cart-summary-row">
          <span>Subtotal</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        ${shipping === 0 ? `
          <div class="cart-summary-row">
            <span>Shipping</span>
            <span class="text-accent">FREE</span>
          </div>
        ` : `
          <div class="cart-summary-row">
            <span>Shipping</span>
            <span>${formatPrice(shipping)}</span>
          </div>
        `}
        ${discount > 0 ? `
          <div class="cart-summary-row">
            <span>Discount</span>
            <span class="text-accent">-${formatPrice(discount)}</span>
          </div>
        ` : ''}
        <div class="cart-summary-row total">
          <span>Total</span>
          <span>${formatPrice(total)}</span>
        </div>
        ${subtotal < 49 ? `
          <div class="cart-summary-row" style="font-size: 12px; color: var(--color-text-muted);">
            <span>Add ${formatPrice(49 - subtotal)} more for FREE shipping</span>
          </div>
        ` : ''}
      `;
    }
  }

  // Show notification
  showNotification(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 10);

    // Hide and remove toast
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Open cart sidebar
  openSidebar() {
    const sidebar = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('.cart-overlay');
    
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('visible');
    
    this.renderCartSidebar();
  }

  // Close cart sidebar
  closeSidebar() {
    const sidebar = document.querySelector('.cart-sidebar');
    const overlay = document.querySelector('.cart-overlay');
    
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
  }

  // Generate order data for checkout
  getOrderData() {
    return {
      items: this.items.map(item => ({
        sku: item.sku,
        productId: item.productId,
        variant: item.variant,
        quantity: item.quantity,
        price: item.price
      })),
      subtotal: this.getSubtotal(),
      shipping: this.getShipping(),
      discount: this.discount,
      discountCode: this.discountCode,
      total: this.getTotal(),
      currency: 'USD'
    };
  }

  checkout() {
    if (this.isEmpty()) {
      this.showNotification('Your cart is empty', 'error');
      return;
    }

    const orderData = this.getOrderData();
    console.log('Order data:', orderData);
    
    window.location.href = 'checkout.html';
  }
}

// Initialize cart
const cart = new Cart();

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Cart button click
  const cartBtns = document.querySelectorAll('.cart-btn');
  cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cart.openSidebar();
    });
  });

  // Close cart button
  const closeCartBtn = document.querySelector('.cart-close-btn');
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => cart.closeSidebar());
  }

  // Cart overlay click
  const cartOverlay = document.querySelector('.cart-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => cart.closeSidebar());
  }

  // Checkout button
  const checkoutBtn = document.querySelector('.cart-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => cart.checkout());
  }

  // Initialize UI
  cart.updateUI();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cart.closeSidebar();
  }
});