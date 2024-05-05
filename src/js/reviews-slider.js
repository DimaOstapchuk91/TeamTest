const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});

// const swiper = new Swiper('.swiper-container', {
//   direction: 'vertical',
//   loop: true,
//   pagination: {
//     el: 'swiper-pagination',
//   },
//   navigation: {
//     nextEL: 'swiper-buttton-next',
//     prevEl: 'swiper-button-prev',
//   },
//   scrollbar: {
//     el: 'swiper-scrollbar',
//   },
// });
