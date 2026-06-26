// MysticEast - Main JavaScript

// ===== Initialize Application =====
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroParticles();
  initProductCards();
  initNewsletterForm();
  initScrollAnimations();
});

// ===== Header Scroll Effect =====
function initHeader() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.background = 'rgba(10, 10, 10, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.95)';
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
}

// ===== Hero Particles Animation =====
function initHeroParticles() {
  const particlesContainer = document.querySelector('.hero-particles');
  if (!particlesContainer) return;

  // Create additional particles dynamically
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${6 + Math.random() * 4}s`;
    particlesContainer.appendChild(particle);
  }
}

// ===== Product Cards =====
function initProductCards() {
  renderProducts();
  initQuickView();
}

function renderProducts() {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;

  const featuredProducts = products.slice(0, 8);

  productsGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
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
          <button class="quick-view-btn" onclick="showQuickView('${product.id}'); return false;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
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

function addToCart(productId) {
  if (typeof cart !== 'undefined') {
    cart.addItem(productId);
  } else {
    console.error('Cart not initialized');
  }
}

function toggleWishlist(productId) {
  // Placeholder for wishlist functionality
  const btn = event.currentTarget;
  btn.style.fill = btn.style.fill === 'currentColor' ? 'var(--color-accent-primary)' : 'currentColor';
}

// ===== Quick View Modal =====
function initQuickView() {
  // Create modal container if not exists
  if (!document.querySelector('.quick-view-modal')) {
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
      <div class="quick-view-overlay" onclick="closeQuickView()"></div>
      <div class="quick-view-content">
        <button class="quick-view-close" onclick="closeQuickView()">×</button>
        <div class="quick-view-inner"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }
}

function showQuickView(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.querySelector('.quick-view-modal');
  const content = modal.querySelector('.quick-view-inner');

  content.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-image">
        <img src="${product.images[0]}" alt="${product.name}">
      </div>
      <div class="quick-view-info">
        <h2 class="quick-view-title">${product.name}</h2>
        <div class="quick-view-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice > product.price ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <p class="quick-view-description">${product.description.short}</p>
        <div class="quick-view-benefits">
          ${product.benefits.map(b => `<span class="benefit-tag">✦ ${b}</span>`).join('')}
        </div>
        <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeQuickView();">
          Add to Cart
        </button>
        <a href="product.html?id=${product.id}" class="btn btn-secondary">View Details</a>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.querySelector('.quick-view-modal');
  modal.classList.remove('open');
}

// ===== Newsletter Form =====
function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.querySelector('.newsletter-input').value;
    
    if (validateEmail(email)) {
      // Placeholder: In production, send to email service
      console.log('Newsletter signup:', email);
      showNotification('Welcome to the Mystic Circle! Check your email for 15% off.');
      form.reset();
    } else {
      showNotification('Please enter a valid email address', 'error');
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showNotification(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  const animateElements = document.querySelectorAll('.product-card, .category-card, .trust-item');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .quick-view-modal {
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: none;
    align-items: center;
    justify-content: center;
  }
  
  .quick-view-modal.open {
    display: flex;
  }
  
  .quick-view-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 10, 0.9);
  }
  
  .quick-view-content {
    position: relative;
    background: var(--color-bg-secondary);
    border-radius: var(--border-radius-lg);
    max-width: 800px;
    width: 90%;
    padding: var(--spacing-2xl);
    z-index: 1;
  }
  
  .quick-view-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    width: 32px;
    height: 32px;
    background: transparent;
    border: 1px solid var(--color-accent-primary);
    border-radius: 50%;
    color: var(--color-accent-primary);
    font-size: 24px;
    cursor: pointer;
  }
  
  .quick-view-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
  }
  
  .quick-view-image img {
    width: 100%;
    border-radius: var(--border-radius-md);
  }
  
  .quick-view-title {
    font-family: var(--font-display);
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-md);
  }
  
  .quick-view-description {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
  }
  
  .quick-view-benefits {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);
  }
  
  .benefit-tag {
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(201, 169, 97, 0.1);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-xs);
    color: var(--color-accent-primary);
  }
  
  @media (max-width: 768px) {
    .quick-view-grid {
      grid-template-columns: 1fr;
    }
  }
`;
document.head.appendChild(style);

// ===== Mobile Menu =====
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

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Lazy Load Images =====
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ===== Export Functions =====
window.addToCart = addToCart;
window.showQuickView = showQuickView;
window.closeQuickView = closeQuickView;
window.toggleWishlist = toggleWishlist;