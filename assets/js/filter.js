(function () {
  var bar = document.querySelector('.filter-bar');
  if (!bar) return;

  var buttons = bar.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.item-row');
  var empty = document.querySelector('.list-empty');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      btn.setAttribute('aria-pressed', 'true');

      var filter = btn.getAttribute('data-filter');
      var visibleCount = 0;

      items.forEach(function (item) {
        var match = filter === 'all' || item.getAttribute('data-dept') === filter;
        item.classList.toggle('is-hidden', !match);
        if (match) visibleCount++;
      });

      if (empty) empty.classList.toggle('is-visible', visibleCount === 0);
    });
  });
})();
