

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 0,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 1500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    50: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1766: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});



const myCarouselElement = document.querySelector('#carouselExampleFade')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})

let loader = document.getElementById("center");
window.addEventListener("load", function () {
  loader.style.display = "none";
});


