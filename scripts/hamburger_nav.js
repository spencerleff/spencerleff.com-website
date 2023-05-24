document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');

    var fullscreen_nav = document.querySelector('.fullscreen_nav');
    fullscreen_nav.classList.toggle('active');

    var remaining_page = document.querySelectorAll('body > *:not(.navigation):not(.fullscreen_nav)');
    remaining_page.forEach(function(element) {
      element.classList.toggle('hidden');
    });
  });
  