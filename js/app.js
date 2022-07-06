const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");
const loading = document.querySelector(".loading-container");
const buttonToggle = document.getElementById("darkmode");
const body = document.querySelector(".all");
const cards = document.querySelectorAll(".card");
const nav = document.querySelector(".navbar-light");
const navbg = document.querySelector(".bg-light");
const svgICONS = document.querySelectorAll(".svg-icon");
const skills = document.querySelector(".skills");
const upBtn = document.getElementById("upBtn");
const projects = document.querySelector(".projects");
const footerText = document.querySelector(".card-footer");
const badgeLight = document.querySelector(".badge-light");
const liveBadges = document.querySelectorAll(".badge-light");

//up function
function upFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//random color function
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//dark mode functions
function removeLight() {
  nav.classList.remove("navbar-light");
  navbg.classList.remove("bg-light");
  buttonToggle.classList.remove("btn-light");
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.remove("badge-light");
  }
}

function addDark() {
  nav.classList.add("navbar-dark");
  navbg.classList.add("bg-dark");
  buttonToggle.classList.add("btn-dark");
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.add("badge-dark");
  }
}

function addLight() {
  nav.classList.add("navbar-light");
  navbg.classList.add("bg-light");
  buttonToggle.classList.add("btn-light");
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.add("badge-light");
  }
}

function removeDark() {
  nav.classList.remove("navbar-dark");
  navbg.classList.remove("bg-dark");
  buttonToggle.classList.remove("btn-dark");
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.remove("badge-dark");
  }
}

function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  removeLight();
  addDark();
  for (let i = 0; i < svgICONS.length; i++) {
    svgICONS[i].style.fill = "white";
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = "black";
  }
}

function lightMode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  addLight();
  removeDark();
  for (let i = 0; i < svgICONS.length; i++) {
    svgICONS[i].style.fill = "black";
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = "white";
  }
}

function buttonChecker() {
  if (buttonToggle.innerText === "Dark Mode") {
    buttonToggle.innerText = "Light Mode";
    darkMode();
  } else if (buttonToggle.innerText === "Light Mode") {
    buttonToggle.innerText = "Dark Mode";
    lightMode();
  }
}

//intro functions
function fadeText() {
  logoSpan.forEach((span, index) => {
    setTimeout(() => {
      span.classList.remove("active");
      span.classList.add("fade");
    }, index++ * 50);
  });
}

function revealWebsite() {
  intro.style.top = "-100vh";
}

function removeLoading() {
  loading.style.display = "none";
}

function loadingScreen() {
  logoSpan.forEach((span, index) => {
    setTimeout(() => {
      removeLoading();
      span.classList.add("active");
    }, index++ * 700);
  });
  setTimeout(fadeText, 2700);
  setTimeout(revealWebsite, 3000);
}

function introEffect() {
  setTimeout(loadingScreen, 4000);
}

//event listeners
upBtn.addEventListener("click", upFunction);
buttonToggle.addEventListener("click", buttonChecker);
window.addEventListener("DOMContentLoaded", introEffect);
skills.addEventListener("click", (e) => {
  if (e.target.hasAttribute("fill")) {
    e.target.setAttribute("fill", getRandomColor());
  }
});
