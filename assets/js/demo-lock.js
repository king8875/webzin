(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;
    e.preventDefault();
  }, true);
})();
