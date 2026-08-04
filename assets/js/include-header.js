(function () {
  var mount = document.getElementById('site-header');
  if (!mount) return;

  fetch('/header.html')
    .then(function (res) { return res.text(); })
    .then(function (html) {
      mount.outerHTML = html;
      if (typeof window.initSiteNav === 'function') window.initSiteNav();
    })
    .catch(function (err) {
      console.error('공통 헤더를 불러오지 못했습니다.', err);
    });
})();
