document.addEventListener('DOMContentLoaded', function() {

  var anchorLinks = document.querySelectorAll('.mob-link');

  anchorLinks.forEach(function(link) {
      
      var mobileMenu = document.querySelector('.backdrop');
      mobileMenu.style.display = 'none';
    });
  });

});
  