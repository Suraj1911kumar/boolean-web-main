

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

// var btn = $("#button");

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass("show");
//   } else {
//     btn.removeClass("show");
//   }
// });

// btn.on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate({ scrollTop: 0 }, "300");
// });

var TextSwiper = new Swiper(".TextSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  loop: true,
  simulateTouch: false,
  effect: "fade",
  loop: true,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let loader = document.getElementById("center");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
var swiper = new Swiper(".aboutSwiper", {
  zoom: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // effect:"fade",
  simulateTouch: false,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.controller.control = this.TextSwiper;

// -----------------------------------------reveal feature   ------------------------

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("act");
//     } else {
//       reveals[i].classList.remove("act");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// let stop = document.querySelector(".about_us");

// function stop() {
//   document.addEventListener("mouseover", function () {
//     document.getElementsById("#TextSwiper").classList.removeClass("TextSwiper");
//   });
// }

