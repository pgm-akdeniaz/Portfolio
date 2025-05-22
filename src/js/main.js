// Toggle Light/Dark Mode
document.querySelector(".sun-toggle-icon")?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const icon = document.querySelector(".sun-toggle-icon");
  const isLight = document.body.classList.contains("light-mode");
  icon.src = isLight ? "/assets/icons/moon.png" : "/assets/icons/sun.png";
});

// Hamburger menu toggle
document
  .querySelector(".navbar__hamburger-button")
  ?.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    .classList.toggle("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    .classList.toggle("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    .classList.toggle("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    .classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.remove("stopscrolling");
  document
    .getElementById("mobiletogglemenu")
    ?.classList.remove("show-toggle-menu");
  document
    .getElementById("burger-bar1")
    ?.classList.remove("hamburger-animation1");
  document
    .getElementById("burger-bar2")
    ?.classList.remove("hamburger-animation2");
  document
    .getElementById("burger-bar3")
    ?.classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  mobilenavLi.forEach((li) => {
    li.classList.remove("activeThismobiletab");
    if (li.classList.contains(current)) li.classList.add("activeThismobiletab");
  });

  navLi.forEach((li) => {
    li.classList.remove("activeThistab");
    if (li.classList.contains(current)) li.classList.add("activeThistab");
  });
});

// Back-to-top button
let mybutton = document.getElementById("backtotopbutton");

window.onscroll = function () {
  if (mybutton) scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.hamburgerMenu = hamburgerMenu;
window.hidemenubyli = hidemenubyli;
window.scrolltoTopfunction = scrolltoTopfunction;
