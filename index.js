//Hamburger menu js files
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar");
const links = document.querySelector(".nav_ul li");
const line1 = document.querySelector(".line1");
const line3 = document.querySelector(".line3");
const line2 = document.querySelector(".line2");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  line1.classList.toggle("rotateright");
  line2.classList.toggle("passive");
  line3.classList.toggle("rotateleft");
});
