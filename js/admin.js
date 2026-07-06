const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '2003000919';

let currentEditingProduct = null;
let currentVariants = [];
let currentCategory = 'all';

function isLoggedIn() {
  return localStorage.getItem('mysticeast_admin_logged_in') === 'true';
}

function handleLogin() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem('mysticeast_admin_logged_in', 'true');
    showAdminApp();
  } else {
    document.getElementById('loginError').style.display = 'block';
    setTimeout(() => {
      document.getElementById('loginError').style.display = 'none';
    }, 3000);
  }
}

function logout() {
  localStorage.removeItem('mysticeast_admin_logged_in');
  showLoginScreen();
}

function showLoginScreen() {
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('adminApp').classList.add('hidden');
}

function showAdminApp() {
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('adminApp').classList.remove('hidden');
  initAdmin();
}

function getCustomProducts() {
  const stored = localStorage.getItem('mysticeast_custom_products');
  return stored ? JSON.parse(stored) : {};
}

function saveCustomProducts(customProducts) {
  localStorage.setItem('mysticeast_custom_products', JSON.stringify(customProducts));
}

function getMergedProducts() {
  const custom = getCustomProducts();
  return products.map(p => {
    if (custom[p.id]) {
      return { ...p, ...custom[p.id] };
    }
    return p;
  });
}

function initAdmin() {
  renderCategoryFilter();
  renderProducts();
}

function renderCategoryFilter() {
  const categories = getAllCategories();
  const filter = document.getElementById('categoryFilter');
  let html = '<div class="category-tag active" onclick="filterByCategory(\'all\')">All</div>';
  categories.forEach(cat => {
    html += `<div class="category-tag" onclick="filterByCategory('${cat}')">${cat}</div>`;
  });
  filter.innerHTML = html;
}

function filterByCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.category-tag').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts();
}

function filterProducts() {
  renderProducts();
}

function renderProducts() {
  const allProducts = getMergedProducts();
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  
  let filtered = allProducts;
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }
  if (searchQuery) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchQuery) ||
      p.shortName.toLowerCase().includes(searchQuery) ||
      p.id.toLowerCase().includes(searchQuery)
    );
  }

  const grid = document.getElementById('productsGrid');
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="product-card"><p>No products found.</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="product-card-header">
        <img src="${product.images[0]}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Crect fill=\'%23333\' width=\'100\' height=\'100\'/%3E%3Ctext fill=\'%23666\' font-family=\'sans-serif\' font-size=\'12\' x=\'50\' y=\'50\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3EImage%3C/text%3E%3C/svg%3E'">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>ID: ${product.id}</p>
          <p>Category: ${product.category}</p>
          <div class="product-price">${formatPrice(product.price)}</div>
        </div>
      </div>
      ${product.cjLink ? `<div><a href="${product.cjLink}" target="_blank" class="cj-link">📦 CJ Link</a></div>` : ''}
      <div class="product-actions">
        <button class="btn btn-sm btn-secondary" onclick="editProduct('${product.id}')">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct('${product.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function showPage(pageName) {
  document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  
  document.querySelectorAll('.content > div').forEach(el => el.style.display = 'none');
  document.getElementById(`page-${pageName}`).style.display = 'block';
  
  if (pageName === 'products') {
    renderProducts();
  }
}

function addNewProduct() {
  currentEditingProduct = null;
  currentVariants = [{ size: 'Standard', price: 0 }];
  document.getElementById('modalTitle').textContent = 'Add Product';
  document.getElementById('editId').value = 'new-' + Date.now();
  document.getElementById('editName').value = '';
  document.getElementById('editShortName').value = '';
  document.getElementById('editCategory').value = '';
  document.getElementById('editPrice').value = '';
  document.getElementById('editOriginalPrice').value = '';
  document.getElementById('editImage').value = '';
  document.getElementById('editCjLink').value = '';
  document.getElementById('editShortDesc').value = '';
  document.getElementById('editLongDesc').value = '';
  document.getElementById('editTags').value = '';
  renderVariants();
  document.getElementById('productModal').classList.add('active');
}

function editProduct(productId) {
  const product = getMergedProducts().find(p => p.id === productId);
  if (!product) return;
  
  currentEditingProduct = productId;
  currentVariants = product.variants ? [...product.variants] : [{ size: 'Standard', price: product.price }];
  
  document.getElementById('modalTitle').textContent = 'Edit Product';
  document.getElementById('editId').value = product.id;
  document.getElementById('editName').value = product.name;
  document.getElementById('editShortName').value = product.shortName || '';
  document.getElementById('editCategory').value = product.category;
  document.getElementById('editPrice').value = product.price;
  document.getElementById('editOriginalPrice').value = product.originalPrice || '';
  document.getElementById('editImage').value = product.images ? product.images[0] : '';
  document.getElementById('editCjLink').value = product.cjLink || '';
  document.getElementById('editShortDesc').value = product.description ? product.description.short || '' : '';
  document.getElementById('editLongDesc').value = product.description ? product.description.long || '' : '';
  document.getElementById('editTags').value = product.tags ? product.tags.join(', ') : '';
  
  renderVariants();
  document.getElementById('productModal').classList.add('active');
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
}

function renderVariants() {
  const list = document.getElementById('variantsList');
  list.innerHTML = currentVariants.map((v, i) => `
    <div class="variant-item">
      <div style="display: flex; gap: 10px;">
        <input type="text" placeholder="Size/Type" value="${v.size || v.type || ''}" 
               onchange="updateVariant(${i}, 'label', this.value)" 
               style="flex: 1; padding: 5px;">
        <input type="number" placeholder="Price" value="${v.price || ''}" 
               onchange="updateVariant(${i}, 'price', parseFloat(this.value))" 
               style="width: 100px; padding: 5px;">
        <button class="btn btn-sm btn-danger" onclick="removeVariant(${i})">×</button>
      </div>
    </div>
  `).join('');
}

function addVariantInput() {
  currentVariants.push({ size: '', price: 0 });
  renderVariants();
}

function updateVariant(index, field, value) {
  const variant = currentVariants[index];
  if (field === 'label') {
    if (variant.size !== undefined) {
      variant.size = value;
    } else if (variant.type !== undefined) {
      variant.type = value;
    } else {
      variant.size = value;
    }
  } else {
    variant[field] = value;
  }
}

function removeVariant(index) {
  if (currentVariants.length > 1) {
    currentVariants.splice(index, 1);
    renderVariants();
  }
}

function saveProduct() {
  const customProducts = getCustomProducts();
  
  const productData = {
    name: document.getElementById('editName').value,
    shortName: document.getElementById('editShortName').value,
    category: document.getElementById('editCategory').value,
    price: parseFloat(document.getElementById('editPrice').value),
    originalPrice: parseFloat(document.getElementById('editOriginalPrice').value) || null,
    images: [document.getElementById('editImage').value],
    cjLink: document.getElementById('editCjLink').value || null,
    description: {
      short: document.getElementById('editShortDesc').value,
      long: document.getElementById('editLongDesc').value
    },
    tags: document.getElementById('editTags').value.split(',').map(t => t.trim()).filter(t => t),
    variants: currentVariants
  };

  const productId = document.getElementById('editId').value;
  
  if (currentEditingProduct) {
    customProducts[productId] = productData;
    showToast('Product updated successfully!', 'success');
  } else {
    customProducts[productId] = productData;
    showToast('Product added successfully!', 'success');
  }
  
  saveCustomProducts(customProducts);
  closeModal();
  renderProducts();
}

function deleteProduct(productId) {
  if (!confirm('Are you sure you want to delete this product?')) return;
  
  const customProducts = getCustomProducts();
  if (customProducts[productId]) {
    delete customProducts[productId];
    saveCustomProducts(customProducts);
    showToast('Product deleted from custom data!', 'success');
  } else {
    showToast('Cannot delete default product, only custom edits!', 'error');
  }
  
  renderProducts();
}

function exportData() {
  const data = getCustomProducts();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mysticeast-products-backup.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported successfully!', 'success');
}

function saveSettings() {
  const settings = {
    siteTitle: document.getElementById('siteTitle').value,
    siteDescription: document.getElementById('siteDescription').value,
    currencySymbol: document.getElementById('currencySymbol').value,
    freeShippingThreshold: parseFloat(document.getElementById('freeShippingThreshold').value)
  };
  localStorage.setItem('mysticeast_settings', JSON.stringify(settings));
  showToast('Settings saved successfully!', 'success');
}

function showToast(message, type) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  if (isLoggedIn()) {
    showAdminApp();
  }
});