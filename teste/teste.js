var swiper = new Swiper(".slide-content-video", {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    /*autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },*/
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });