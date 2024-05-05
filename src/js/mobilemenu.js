
document.addEventListener('DOMContentLoaded', function() {
    var anchorLinks = document.querySelectorAll('.mob-link');
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var mobileMenu = document.querySelector('.mob-menu');
        mobileMenu.style.display = 'none';
      });
    });
  });