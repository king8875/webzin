(function () {
  var el = document.querySelector('.reviews-swiper');
  if (!el || typeof Swiper === 'undefined') return;

  var slideCount = el.querySelectorAll('.swiper-slide').length;

  new Swiper(el, {
    loop: slideCount > 2,
    // autoplay: {
    //       delay: 4000,
    //       disableOnInteraction: false,
    //     },
    pagination: {
      el: '.reviews-swiper .swiper-pagination',
      clickable: true,
    },
  });
})();
