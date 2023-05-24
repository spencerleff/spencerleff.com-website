document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var fullscreenNav = document.querySelector('.fullscreen_nav');
  var remainingPage = document.querySelectorAll('body > *:not(.navigation):not(.fullscreen_nav)');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    fullscreenNav.classList.toggle('active');

    remainingPage.forEach(function(element) {
      element.classList.toggle('hidden');
    });
  });
});
