import './js/menu.js';
import './js/toggleItemsVisibility.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper-container', {
  lazyPreloadPrevNext: 0,
  grabCursor: true,
  direction: 'horizontal',
  loop: true,
  speed: 300,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
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
      loop: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    },
  },

  modules: [Navigation, Pagination],
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination-button',
    bulletActiveClass: 'pagination-button--active',
  },

  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
