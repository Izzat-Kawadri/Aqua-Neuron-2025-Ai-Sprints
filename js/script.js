// Mobile nav toggle is handled by Bootstrap's built-in JS

// Product card overlay: no JS needed, handled by CSS hover

// Carousel: Bootstrap handles slide/controls, but you can auto-cycle if desired
document.addEventListener('DOMContentLoaded', function () {
  // Auto-cycle the inspiration carousel every 5 seconds
  var inspirationCarousel = document.querySelector('#inspirationCarousel');
  if (inspirationCarousel) {
    var carousel = new bootstrap.Carousel(inspirationCarousel, {
      interval: 5000,
      ride: 'carousel'
    });
  }
});

// Newsletter form: prevent default for demo
document.addEventListener('DOMContentLoaded', function () {
  var newsletterForm = document.querySelector('footer form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for subscribing!');
    });
  }
});
