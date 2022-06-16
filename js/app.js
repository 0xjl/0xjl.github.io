const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");
const loading = document.querySelector(".loading-container");
let buttonToggle = document.getElementById("darkmode");
let body = document.querySelector(".all");
let cards = document.querySelectorAll(".card");
let nav = document.querySelector(".navbar-light");
let navbg = document.querySelector(".bg-light");
let svgICONS = document.querySelectorAll(".svg-icon");
let skills = document.querySelector(".skills");

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
}

function addDark() {
  nav.classList.add("navbar-dark");
  navbg.classList.add("bg-dark");
  buttonToggle.classList.add("btn-dark");
}

function addLight() {
  nav.classList.add("navbar-light");
  navbg.classList.add("bg-light");
  buttonToggle.classList.add("btn-light");
}

function removeDark() {
  nav.classList.remove("navbar-dark");
  navbg.classList.remove("bg-dark");
  buttonToggle.classList.remove("btn-dark");
}

function buttonChecker() {
  if (buttonToggle.innerText === "Dark") {
    buttonToggle.innerText = "Light";
    darkMode();
  } else if (buttonToggle.innerText === "Light") {
    buttonToggle.innerText = "Dark";
    lightMode();
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
buttonToggle.addEventListener("click", buttonChecker);
window.addEventListener("DOMContentLoaded", introEffect);
skills.addEventListener("click", (e) => {
  if (e.target.hasAttribute("fill")) {
    e.target.setAttribute("fill", getRandomColor());
  }
});
