// DOM
const slajderNav = document.querySelectorAll(".hero-slider-panel__navigation");
const img1 = document.querySelector(".hero-img1");
const img2 = document.querySelector(".hero-img2");

const handleClick = (e) => {
  if (e.target.className.includes("back")) {
  } else if (e.target.className.includes("next")) {
    if (img1.className.includes("active")) {
      img1.classList.remove("active");
      img1.classList.add("inactive");
      img2.classList.remove("inactive");
      img2.classList.add("active");
    }
  }
};

slajderNav.forEach((e) => e.addEventListener("click", handleClick));
