// Initialize Swiper
var swiper = new Swiper('.swiper-container-one', {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
});

// Initialize Swiper
var swiper = new Swiper('.swiper-container-two', {
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
  },
});