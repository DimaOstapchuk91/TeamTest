import './js/menu.js';
import './js/reviews-slider.js';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
});
