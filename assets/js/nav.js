(function () {
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.classList.toggle('is-open', !isOpen);
    });
  }

  document.querySelectorAll('.mobile-cat-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      var submenu = document.getElementById(btn.getAttribute('aria-controls'));

      document.querySelectorAll('.mobile-cat-toggle').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          var otherSub = document.getElementById(other.getAttribute('aria-controls'));
          if (otherSub) otherSub.classList.remove('is-open');
        }
      });

      btn.setAttribute('aria-expanded', String(!isOpen));
      if (submenu) submenu.classList.toggle('is-open', !isOpen);
    });
  });
})();
