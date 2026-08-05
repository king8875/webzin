

window.initSiteNav = function () {
  var issueSelect = document.querySelector('.issue-select');
  if (issueSelect) {
    var currentPath = window.location.pathname;
    if (currentPath === '/' || currentPath === '') currentPath = '/index.html';

    Array.prototype.forEach.call(issueSelect.options, function (opt) {
      opt.selected = opt.value === currentPath;
    });

    issueSelect.addEventListener('change', function () {
      window.location.href = issueSelect.value;
    });
  }

  var archiveSelect = document.querySelector('.footer-archive-select');
  if (archiveSelect) {
    archiveSelect.addEventListener('change', function () {
      if (archiveSelect.value) window.location.href = archiveSelect.value;
    });
  }

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

  var header = document.querySelector('.site-header');
  if (header) {
    var lastScrollY = window.scrollY;
    var ticking = false;

    var onScroll = function () {
      var currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > header.offsetHeight) {
        header.classList.add('site-header--hidden');
      } else {
        header.classList.remove('site-header--hidden');
      }

      lastScrollY = currentY;
      ticking = false;
    };

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    });
  }
};
