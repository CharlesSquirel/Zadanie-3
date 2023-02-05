// DOM
const slajderNav = document.querySelectorAll(".hero-slider-panel__navigation");
const projectName = document.querySelector(".hero-slider-panel__location");
const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const closeBtn = document.querySelector(".close");
const buttons = [].concat(hamburger, closeBtn);
console.log(buttons);

// SLIDER
// kontrola napisu na panelu
const handleTextSlider = (img) => {
  let className = img.className;
  projectName.textContent = className.includes("slide-first") ? "Projekt w miejscu 1" : className.includes("slide-middle") ? "Projekt w miejscu 2" : "Projekt w miejscu 3";
};
// obsługa zmiany zdjęć
const handleClick = (e) => {
  let currentImg = document.querySelector(".hero-img:not(.hidden)");
  let className = e.target.className;
  let nextImg;
  currentImg.classList.add("hidden");
  if (className.includes("back")) {
    nextImg = currentImg.previousElementSibling || document.querySelector(".slide-last");
  } else if (className.includes("next")) {
    nextImg = currentImg.nextElementSibling || document.querySelector(".slide-first");
  }
  nextImg.classList.remove("hidden");
  handleTextSlider(nextImg);
};
// nasłuchiwanie
slajderNav.forEach((e) => e.addEventListener("click", handleClick));

// NAV MOBILE
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let className = e.target.className;
    console.log(className);
    navMobile.style.left = className.includes("hamburger") ? "0" : "-5000px";
  });
});
