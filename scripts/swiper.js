var swiper = new Swiper(".myswiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
