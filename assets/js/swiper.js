// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.customSwiper', {
    loop: true,
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});