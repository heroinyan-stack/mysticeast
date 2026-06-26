// MysticEast - Category Page

let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initCategoryPage();
  initFilterTags();
  initMobileMenu();
});

function initCategoryPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  if (category && category !== 'all') {
    currentCategory = category;
    updateCategoryHeader(category);
    renderCategoryProducts(category);
    updateActiveFilter(category);
  } else {
    currentCategory = 'all';
    renderCategoryProducts('all');
  }
}

function updateCategoryHeader(category) {
  const categoryNames = {
    'Bracelet': 'Crystal Bracelets',
    'Necklace': 'Crystal Necklaces',
    'Feng Shui': 'Feng Shui Items',
    'Talisman': 'Talismans & Charms',
    'Crystals': 'Raw Crystals',
    'Tarot': 'Tarot & Divination',
    'Divination': 'Divination Tools',
    'Smudging': 'Smudging & Cleansing',
    'Candles': 'Crystal Candles',
    'Altar': 'Altar Supplies',
    'Buddhist': 'Buddhist Items',
    'Taoist': 'Taoist Talismans',
    'Incense': 'Incense & Aromatherapy',
    'Sound Healing': 'Sound Healing',
    'all': 'All Products'
  };
  
  const categoryDescs = {
    'Bracelet': 'Handcrafted crystal bracelets for protection, wisdom, love, and abundance',
    'Necklace': 'Beautiful crystal necklaces and pendants for daily spiritual wear',
    'Feng Shui': 'Traditional feng shui items to harmonize your space and attract prosperity',
    'Talisman': 'Ancient protective talismans and charms from Eastern traditions',
    'Crystals': 'Raw crystal clusters and sets for energy work and collection',
    'Tarot': 'Tarot decks and divination tools for spiritual guidance',
    'Divination': 'Divination tools including I Ching and scrying crystals',
    'Smudging': 'Sage smudge kits and cleansing tools for space purification',
    'Candles': 'Hand-poured crystal candles for meditation and ambiance',
    'Altar': 'Altar cloths and supplies for your sacred space',
    'Buddhist': 'Traditional Buddhist items including mala beads and incense',
    'Taoist': 'Taoist talismans and protective items',
    'Incense': 'Premium natural incense for meditation and relaxation',
    'Sound Healing': 'Singing bowls and sound healing instruments',
    'all': 'Discover our full collection of authentic Eastern spiritual products'
  };
  
  const name = categoryNames[category] || category;
  const desc = categoryDescs[category] || 'Explore our collection';
  
  document.getElementById('categoryTitle').textContent = name;
  document.getElementById('categoryDesc').textContent = desc;
  document.getElementById('categoryBreadcrumb').textContent = name;
  document.title = `${name} | MysticEast`;
}

function renderCategoryProducts(category) {
  const grid = document.getElementById('categoryProducts');
  if (!grid) return;
  
  let productsToShow;
  
  if (category === 'all') {
    productsToShow = products;
  } else {
    productsToShow = getProductsByCategory(category);
  }
  
  if (productsToShow.length === 0) {
    grid.innerHTML = `
      <div style="text-align: center; padding: var(--spacing-4xl) 0; grid-column: 1 / -1;">
        <h2 style="font-family: var(--font-display); color: var(--color-text-primary); margin-bottom: var(--spacing-lg);">No Products Found</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl);">No products in this category yet.</p>
        <a href="category.html?category=all" class="btn btn-primary">View All Products</a>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
  const discountPercent = calculateDiscount(product.originalPrice, product.price);
  const isBestseller = product.tags && product.tags.includes('bestseller');
  
  return `
    <a href="product.html?id=${product.id}" class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrapper">
        <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-tags">
          ${discountPercent > 0 ? `<span class="product-tag sale">${discountPercent}% OFF</span>` : ''}
          ${isBestseller ? `<span class="product-tag">Bestseller</span>` : ''}
        </div>
        <button class="product-wishlist" onclick="event.preventDefault(); toggleWishlist('${product.id}')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${product.subcategory}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <div class="rating-stars">
            ${renderStars(product.rating)}
          </div>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice > product.price ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-actions" onclick="event.preventDefault()">
          <button class="add-to-cart-btn" onclick="addToCart('${product.id}'); return false;">
            Add to Cart
          </button>
        </div>
      </div>
    </a>
  `;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHTML = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<span class="star">★</span>`;
  }
  
  if (hasHalfStar) {
    starsHTML += `<span class="star">★</span>`;
  }
  
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<span class="star empty">★</span>`;
  }
  
  return starsHTML;
}

function initFilterTags() {
  const filterTags = document.querySelectorAll('.filter-tag');
  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const category = tag.dataset.category;
      currentCategory = category;
      
      filterTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      
      updateCategoryHeader(category);
      renderCategoryProducts(category);
      
      const url = new URL(window.location);
      if (category === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', category);
      }
      window.history.pushState({}, '', url);
    });
  });
}

function updateActiveFilter(category) {
  const filterTags = document.querySelectorAll('.filter-tag');
  filterTags.forEach(tag => {
    tag.classList.toggle('active', tag.dataset.category === category);
  });
}

function addToCart(productId) {
  if (typeof cart !== 'undefined') {
    cart.addItem(productId);
  } else {
    console.error('Cart not initialized');
  }
}

function toggleWishlist(productId) {
  const btn = event.currentTarget;
  btn.style.fill = btn.style.fill === 'currentColor' ? 'var(--color-accent-primary)' : 'currentColor';
}

function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      menuBtn.classList.toggle('active');
    });
  }
}

window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
