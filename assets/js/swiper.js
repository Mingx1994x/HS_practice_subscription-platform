// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

// init Swiper1: article
const swiper1 = new Swiper('.articleSwiper', {
    loop: true,
    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    },

    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    pagination: {
        el: ".customSwiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".customSwiper-next",
        prevEl: ".customSwiper-prev",
    },
});

// init Swiper2: hotSpot
const swiper2 = new Swiper(".card-sm-singleSlider-swiper", {
    loop: true,
    slidesPerView: 1,
    modules: [Scrollbar, Autoplay],
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

