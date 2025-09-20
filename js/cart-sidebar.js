// Cart Sidebar Slide-in/Out, Overlay, and Interactions
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartSidebarOverlay');
  const openBtn = document.getElementById('openCartSidebarBtn');
  const closeBtn = document.getElementById('closeCartSidebarBtn');
  const subtotalEl = document.getElementById('cartSidebarSubtotal');

  // Open sidebar
  function openSidebar() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    sidebar.focus();
  }

  // Close sidebar
  function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Open on button click
  openBtn.addEventListener('click', openSidebar);

  // Close on close icon
  closeBtn.addEventListener('click', closeSidebar);

  // Close on overlay click
  overlay.addEventListener('click', closeSidebar);

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('show')) {
      closeSidebar();
    }
  });

  // Remove item from cart (demo: just hides the item and updates subtotal)
  document.addEventListener('click', function (e) {
    if (e.target.closest('.cart-sidebar-remove')) {
      const item = e.target.closest('.cart-sidebar-item');
      if (item) item.remove();
      updateSubtotal();
    }
  });

  // Quantity controls and subtotal calculation (demo)
  document.querySelectorAll('.cart-sidebar-qty-group').forEach(function (group) {
    const minus = group.querySelector('.btn-outline-secondary:first-child');
    const plus = group.querySelector('.btn-outline-secondary:last-child');
    const input = group.querySelector('input[type="text"]');

    minus.addEventListener('click', function () {
      let val = parseInt(input.value, 10) || 1;
      if (val > 1) {
        input.value = val - 1;
        updateSubtotal();
      }
    });
    plus.addEventListener('click', function () {
      let val = parseInt(input.value, 10) || 1;
      input.value = val + 1;
      updateSubtotal();
    });
    input.addEventListener('input', function () {
      let val = parseInt(input.value, 10) || 1;
      if (val < 1) val = 1;
      input.value = val;
      updateSubtotal();
    });
  });

  // Update subtotal (sum all visible items)
  function updateSubtotal() {
    let subtotal = 0;
    document.querySelectorAll('.cart-sidebar-item').forEach(function (item) {
      const input = item.querySelector('input[type="text"]');
      const priceEl = item.querySelector('.text-secondary.small');
      let qty = parseInt(input.value, 10) || 1;
      let price = parseFloat(priceEl.textContent.replace(/[^\d.]/g, '')) || 0;
      subtotal += qty * price;
    });
    subtotalEl.textContent = "Rs. " + subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }

  // Initial subtotal calculation
  updateSubtotal();
});
