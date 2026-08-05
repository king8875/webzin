(function () {
  var mount = document.getElementById('site-header');
  if (!mount) return;

  // data-base: 이 페이지에서 프로젝트 루트로 돌아가는 상대경로 (예: "", "../", "../../")
  // header.html 안의 절대경로(href="/...", src="/...", value="/...")를 이 페이지 기준
  // 상대경로로 다시 써주기 위한 기준값. 호스팅 서브패스(예: /new-webzin/)와 무관하게 동작한다.
  var base = mount.getAttribute('data-base') || '';

  fetch(base + 'header.html')
    .then(function (res) { return res.text(); })
    .then(function (html) {
      html = html.replace(/((?:href|src|value)=")\/(?!\/)/g, '$1' + base);
      mount.outerHTML = html;
      if (typeof window.initSiteNav === 'function') window.initSiteNav();
    })
    .catch(function (err) {
      console.error('공통 헤더를 불러오지 못했습니다.', err);
    });
})();
