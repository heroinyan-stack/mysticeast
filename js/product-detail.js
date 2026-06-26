// MysticEast - Dynamic Product Detail Page

let currentProduct = null;
let selectedVariant = null;

document.addEventListener('DOMContentLoaded', () => {
  initProductPage();
});

function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId) {
    showProductNotFound();
    return;
  }

  const product = getProductById(productId);
  if (!product) {
    showProductNotFound();
    return;
  }

  currentProduct = product;
  
  if (product.variants && product.variants.length > 0) {
    selectedVariant = product.variants[0];
  }

  document.title = `${product.name} | MysticEast`;
  document.querySelector('meta[name="description"]').content = product.description.short;
  document.getElementById('breadcrumbProduct').textContent = product.name;

  renderProductDetail(product);
  renderRelatedProducts(product);
}

function renderProductDetail(product) {
  const container = document.getElementById('productContent');
  const discount = calculateDiscount(product.originalPrice, product.price);

  container.innerHTML = `
    <div class="product-gallery">
      <div class="product-gallery-main">
        <img id="mainImage" src="${product.images[0]}" alt="${product.name}">
        ${product.originalPrice > product.price ? `<div class="product-badge discount-badge">-${discount}%</div>` : ''}
      </div>
      <div class="product-gallery-thumbs">
        ${product.images.map((img, i) => `
          <div class="product-gallery-thumb ${i === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
            <img src="${img}" alt="${product.name} view ${i + 1}">
          </div>
        `).join('')}
      </div>
    </div>

    <div class="product-info">
      <h1 class="product-detail-title">${product.name}</h1>
      
      <div class="product-detail-rating">
        <div class="stars">
          ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '☆' : ''}
        </div>
        <span class="rating-count">${product.reviews} reviews</span>
      </div>

      <div class="product-detail-price">
        <span class="current-price">${formatPrice(product.price)}</span>
        ${product.originalPrice > product.price ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}
        ${product.originalPrice > product.price ? `<span class="discount-tag">Save ${formatPrice(product.originalPrice - product.price)}</span>` : ''}
      </div>

      <p class="product-detail-description">${product.description.short}</p>

      <div class="product-variants">
        ${product.variants && product.variants.length > 0 ? `
          <div class="variant-label">${product.variants[0].size ? 'Bead Size' : 'Style'}</div>
          <div class="variant-options">
            ${product.variants.map((v, i) => `
              <button class="variant-option ${i === 0 ? 'active' : ''}" 
                      onclick="selectVariant(${i})"
                      data-price="${v.price}">
                ${v.size || v.type}
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="benefits-list">
        ${product.benefits.map(b => `
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <span>${b}</span>
          </div>
        `).join('')}
      </div>

      <div class="product-actions">
        <div class="quantity-selector">
          <button class="qty-btn" onclick="changeQuantity(-1)">−</button>
          <span id="quantityValue">1</span>
          <button class="qty-btn" onclick="changeQuantity(1)">+</button>
        </div>
        <button class="btn btn-primary add-to-cart-btn" onclick="addToCartFromPage()">
          Add to Cart
        </button>
      </div>

      <div class="product-trust-badges">
        <div class="trust-badge-item">🚚 Free shipping over $49</div>
        <div class="trust-badge-item">↩️ 30-day returns</div>
        <div class="trust-badge-item">🔒 Secure checkout</div>
      </div>

      <div class="tabs">
        <div class="tabs-header">
          <button class="tab-btn active" onclick="switchTab('description', this)">Description</button>
          <button class="tab-btn" onclick="switchTab('meaning', this)">Meaning</button>
          <button class="tab-btn" onclick="switchTab('usage', this)">How to Use</button>
          <button class="tab-btn" onclick="switchTab('specs', this)">Specifications</button>
        </div>

        <div id="tab-description" class="tab-content active">
          <p>${product.description.long}</p>
        </div>

        <div id="tab-meaning" class="tab-content">
          <p>${product.description.meaning}</p>
        </div>

        <div id="tab-usage" class="tab-content">
          <p>${product.description.usage}</p>
        </div>

        <div id="tab-specs" class="tab-content">
          <table class="specs-table">
            ${Object.entries(product.specifications).map(([key, value]) => `
              <tr>
                <td>${formatSpecLabel(key)}</td>
                <td>${value}</td>
              </tr>
            `).join('')}
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderRelatedProducts(product) {
  const related = getRelatedProducts(product, 4);
  if (related.length === 0) return;

  const section = document.getElementById('relatedSection');
  const grid = document.getElementById('relatedProducts');

  section.style.display = 'block';

  grid.innerHTML = related.map(p => {
    const disc = calculateDiscount(p.originalPrice, p.price);
    return `
      <a href="product.html?id=${p.id}" class="product-card">
        <div class="product-image">
          <img src="${p.images[0]}" alt="${p.name}">
          ${p.originalPrice > p.price ? `<span class="product-badge">-${disc}%</span>` : ''}
        </div>
        <div class="product-info-card">
          <h3 class="product-name">${p.name}</h3>
          <div class="product-price">
            <span class="current-price">${formatPrice(p.price)}</span>
            ${p.originalPrice > p.price ? `<span class="original-price">${formatPrice(p.originalPrice)}</span>` : ''}
          </div>
        </div>
      </a>
    `;
  }).join('');
}

function changeMainImage(src, thumbEl) {
  document.getElementById('mainImage').src = src;
  document.querySelectorAll('.product-gallery-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectVariant(index) {
  if (!currentProduct || !currentProduct.variants) return;
  
  selectedVariant = currentProduct.variants[index];
  
  document.querySelectorAll('.variant-option').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  const priceEl = document.querySelector('.current-price');
  if (priceEl) {
    priceEl.textContent = formatPrice(selectedVariant.price);
  }
}

function changeQuantity(delta) {
  const qtyEl = document.getElementById('quantityValue');
  let qty = parseInt(qtyEl.textContent);
  qty = Math.max(1, qty + delta);
  qtyEl.textContent = qty;
}

function addToCartFromPage() {
  if (!currentProduct) return;
  
  const qty = parseInt(document.getElementById('quantityValue').textContent);
  const variant = selectedVariant ? (selectedVariant.size || selectedVariant.type) : null;
  
  cart.addItem(currentProduct.id, variant, qty);
  cart.openSidebar();
}

function switchTab(tabName, btnEl) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  btnEl.classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

function formatSpecLabel(key) {
  const labels = {
    material: 'Material',
    beadSize: 'Bead Size',
    braceletSize: 'Bracelet Size',
    weight: 'Weight',
    origin: 'Origin',
    height: 'Height',
    leafCount: 'Leaf Count',
    base: 'Base',
    gemstones: 'Gemstones',
    size: 'Size',
    cord: 'Cord',
    carving: 'Carving',
    quantity: 'Quantity',
    design: 'Design',
    durability: 'Durability',
    color: 'Color',
    feature: 'Feature'
  };
  return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

function showProductNotFound() {
  const container = document.getElementById('productContent');
  container.innerHTML = `
    <div style="text-align: center; padding: var(--spacing-4xl) 0; grid-column: 1 / -1;">
      <h2 style="font-family: var(--font-display); color: var(--color-text-primary); margin-bottom: var(--spacing-lg);">Product Not Found</h2>
      <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">The product you're looking for doesn't exist.</p>
      <a href="index.html#products" class="btn btn-primary">Browse All Products</a>
    </div>
  `;
}
