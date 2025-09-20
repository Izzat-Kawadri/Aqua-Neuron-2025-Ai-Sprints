// Product overlay handled by CSS hover

// Example: Filter button toggles a modal (demo only)
document.addEventListener('DOMContentLoaded', function () {
    var filterBtn = document.getElementById('filterBtn');
    if (filterBtn) {
      filterBtn.addEventListener('click', function () {
        alert('Filter modal would open here.');
      });
    }
  
    // Newsletter form: prevent default for demo
    var newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for subscribing!');
      });
    }
  });