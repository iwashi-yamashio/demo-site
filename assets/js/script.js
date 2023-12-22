const swiper = new Swiper(".swiper", {

  loop: true,
  loopedSlides: 2,
  slidesPerView: "auto",
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

