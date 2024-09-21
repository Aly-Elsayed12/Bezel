const navbar = document.querySelector("#navbar");
const logo = document.querySelector("#logo");
const mouse = document.querySelector(".mouse");
const carousel = document.querySelector(".carousel-indicators");
const carouselImg = document.querySelectorAll(".carousel-indicators img");

window.addEventListener("scroll", changNavColor);

function changNavColor() {
  if (window.scrollY > 150) {
    navbar.classList.replace("navbar-default", "navbar-scroll");
    logo.setAttribute("src", "./images/logo-dark.png");
    mouse.classList.replace("opacity-100", "opacity-0");
  } else {
    navbar.classList.replace("navbar-scroll", "navbar-default");
    logo.setAttribute("src", "./image/logo-white.png");
    mouse.classList.replace("opacity-0", "opacity-100");
  }
}

$(document).ready(function () {
  $(".silck-slider").slick({
    arrows: true,
    dots: true,
  });
});
