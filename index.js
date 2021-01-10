//Hamburger menu js files
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar");
const links = document.querySelector(".nav_ul li");
const line1 = document.querySelector(".line1");
const line3 = document.querySelector(".line3");
const line2 = document.querySelector(".line2");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  line1.classList.toggle("rotateright");
  line2.classList.toggle("passive");
  line3.classList.toggle("rotateleft");
});

navbar.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  line1.classList.toggle("rotateright");
  line2.classList.toggle("passive");
  line3.classList.toggle("rotateleft");
});

//Light/ Dark Mode

// Select the related part
const btn = document.querySelector(".btn");
const btnImg = document.querySelector(".button_image");
const landingHeader = document.querySelector(".landing_name");
const socialMeadiaSvgs = document.querySelectorAll(".social_media_svg");
const navTextLink = document.querySelectorAll(".textLink");
const contact_link = document.querySelectorAll(".contact_link");
const why_links = document.querySelectorAll(".why_link");
const scroolTopBtn = document.querySelector(".top");
const theme_selector = document.querySelector(".selector");

// Handle multiple nodes

const toggleMultipleQuerry = (nodes) => {
  const nodesArray = Array.from(nodes);
  nodesArray.map((item) => {
    item.classList.toggle("dark-theme");
  });
};

// Handle click Darl/Light button

btn.addEventListener("click", function() {
  // Add/Remove  .dark-theme class to related elements.
  document.body.classList.toggle("dark-theme");
  landingHeader.classList.toggle("dark-theme");
  scroolTopBtn.classList.toggle("dark-theme");
  toggleMultipleQuerry(socialMeadiaSvgs);
  toggleMultipleQuerry(contact_link);
  toggleMultipleQuerry(navTextLink);
  toggleMultipleQuerry(why_links);
  theme_selector.classList.toggle("right");
  theme_selector.classList.toggle("left");

  //   for (var item of socialMeadiaSvgs) {
  //     item.classList.toggle("dark-theme");
  //   }

  // btnImg.src =
  //   btnImg.src == "https://i.ibb.co/7JfqXxB/sunny.png"
  //     ? "https://i.ibb.co/FxzBYR9/night.png"
  //     : "https://i.ibb.co/7JfqXxB/sunny.png";
});

//scrool top

const scrollToTopBtn = document.getElementById("scroolTop");
const rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
