
var swiperTestimonials = new Swiper('.swiper-container-testimonials', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-testimonials',
      clickable: true,
    },
  });