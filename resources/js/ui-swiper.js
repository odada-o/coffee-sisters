var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  // spaceBetween: 10,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".slide-intro .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-studio", {
  spaceBetween: 20,
  autoplay: true,
  loop: true,
  // centeredSlides: true,
  slidesPerView: 2,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
