(function () {
  document.querySelectorAll('.filter-bar').forEach(function (bar) {
    var section = bar.closest('.category-section') || bar.parentElement;
    var list = section.querySelector('.item-list');
    if (!list) return;

    var buttons = bar.querySelectorAll('.filter-btn');
    var items = list.querySelectorAll('.item-row');
    var empty = section.querySelector('.list-empty');
    var moreBtn = section.querySelector('.more-btn');
    var step = list.hasAttribute('data-reveal-step')
      ? parseInt(list.getAttribute('data-reveal-step'), 10) || 5
      : null;
    var revealCount = step || Infinity;

    function render(filter) {
      var matched = [];

      items.forEach(function (item) {
        var match = filter === 'all' || item.getAttribute('data-dept') === filter;
        if (match) matched.push(item);
        item.classList.toggle('is-hidden', !match);
      });

      if (step) {
        matched.forEach(function (item, i) {
          item.classList.toggle('is-hidden', i >= revealCount);
        });
        if (moreBtn) moreBtn.style.display = matched.length > revealCount ? '' : 'none';
      }

      if (empty) empty.classList.toggle('is-visible', matched.length === 0);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        revealCount = step || Infinity;
        render(btn.getAttribute('data-filter'));
      });
    });

    if (moreBtn) {
      moreBtn.addEventListener('click', function () {
        revealCount += step;
        var activeBtn = bar.querySelector('.filter-btn[aria-pressed="true"]');
        render(activeBtn ? activeBtn.getAttribute('data-filter') : 'all');
      });
    }

    var initialBtn = bar.querySelector('.filter-btn[aria-pressed="true"]') || buttons[0];
    render(initialBtn ? initialBtn.getAttribute('data-filter') : 'all');
  });
})();
