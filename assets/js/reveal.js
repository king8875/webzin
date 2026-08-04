(function () {
  document.querySelectorAll('.post-list[data-reveal-step]').forEach(function (list) {
    var step = parseInt(list.getAttribute('data-reveal-step'), 10) || 5;
    var btn = list.parentElement.querySelector('.more-btn');
    if (!btn) return;

    function update() {
      var hidden = list.querySelectorAll('.post-list-item.is-more');
      btn.style.display = hidden.length === 0 ? 'none' : '';
    }

    btn.addEventListener('click', function () {
      var hidden = Array.from(list.querySelectorAll('.post-list-item.is-more'));
      hidden.slice(0, step).forEach(function (item) { item.classList.remove('is-more'); });
      update();
    });

    update();
  });
})();
