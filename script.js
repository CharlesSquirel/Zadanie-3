// DOM
const slajderNav = document.querySelectorAll(".hero-slider-panel__navigation");
const heroImg = document.querySelector("#hero-img");

const handleClick = (e) => {
  if (e.target.className.includes("back")) {
    console.log("back");
  } else if (e.target.className.includes("next")) {
    console.log(heroImg);
    heroImg.src.includes("1") ? (heroImg.src = "images/hero/2.jpg") : heroImg.src;
  }
};

slajderNav.forEach((e) => e.addEventListener("click", handleClick));
