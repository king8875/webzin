(function () {
  document.querySelectorAll('.item-list[data-reveal-step]').forEach(function (list) {
    var section = list.closest('.category-section') || list.parentElement;
    var bar = section.querySelector('.filter-bar');
    var buttons = bar ? bar.querySelectorAll('.filter-btn') : [];
    var items = list.querySelectorAll('.item-row');
    var empty = section.querySelector('.list-empty');
    var moreBtn = section.querySelector('.more-btn');
    var step = parseInt(list.getAttribute('data-reveal-step'), 10) || 5;
    var revealCount = step;

    function render(filter) {
      var matched = [];

      items.forEach(function (item) {
        var match = !filter || filter === 'all' || item.getAttribute('data-dept') === filter;
        if (match) matched.push(item);
        item.classList.toggle('is-hidden', !match);
      });

      matched.forEach(function (item, i) {
        item.classList.toggle('is-hidden', i >= revealCount);
      });
      if (moreBtn) moreBtn.style.display = matched.length > revealCount ? '' : 'none';

      if (empty) empty.classList.toggle('is-visible', matched.length === 0);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        revealCount = step;
        render(btn.getAttribute('data-filter'));
      });
    });

    if (moreBtn) {
      moreBtn.addEventListener('click', function () {
        revealCount += step;
        var activeBtn = bar ? bar.querySelector('.filter-btn[aria-pressed="true"]') : null;
        render(activeBtn ? activeBtn.getAttribute('data-filter') : 'all');
      });
    }

    var initialBtn = bar ? (bar.querySelector('.filter-btn[aria-pressed="true"]') || buttons[0]) : null;
    render(initialBtn ? initialBtn.getAttribute('data-filter') : 'all');
  });
})();
