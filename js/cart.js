// Cart quantity controls and subtotal/total calculation
document.addEventListener('DOMContentLoaded', function () {
  const qtyInput = document.getElementById('qtyInput');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotalsSubtotal = document.getElementById('cartTotalsSubtotal');
  const cartTotalsTotal = document.getElementById('cartTotalsTotal');
  const removeItemBtn = document.getElementById('removeItemBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Demo: price per item
  const pricePerItem = 250000.00;

  function updateTotals() {
    const qty = parseInt(qtyInput.value, 10) || 1;
    const subtotal = qty * pricePerItem;
    const formatted = "Rs. " + subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    cartSubtotal.textContent = formatted;
    cartTotalsSubtotal.textContent = formatted;
    cartTotalsTotal.textContent = formatted;
  }

  qtyMinus.addEventListener('click', function () {
    let val = parseInt(qtyInput.value, 10) || 1;
    if (val > 1) {
      qtyInput.value = val - 1;
      updateTotals();
    }
  });
  qtyPlus.addEventListener('click', function () {
    let val = parseInt(qtyInput.value, 10) || 1;
    qtyInput.value = val + 1;
    updateTotals();
  });
  qtyInput.addEventListener('input', function () {
    let val = parseInt(qtyInput.value, 10) || 1;
    if (val < 1) val = 1;
    qtyInput.value = val;
    updateTotals();
  });

  // Remove item from cart (demo: just hides the row)
  removeItemBtn.addEventListener('click', function () {
    const row = removeItemBtn.closest('tr');
    if (row) row.remove();
    cartSubtotal.textContent = "Rs. 0.00";
    cartTotalsSubtotal.textContent = "Rs. 0.00";
    cartTotalsTotal.textContent = "Rs. 0.00";
  });

  // Checkout button (demo)
  checkoutBtn.addEventListener('click', function () {
    alert('Proceeding to checkout...');
  });

  // Newsletter form: prevent default for demo
  var newsletterForm = document.querySelector('footer form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for subscribing!');
    });
  }
});
