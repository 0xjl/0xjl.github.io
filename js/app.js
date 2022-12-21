const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');
const loading = document.querySelector('.loading-container');
const buttonToggle = document.getElementById('darkmode');
const body = document.querySelector('.all');
const cards = document.querySelectorAll('.card');
const nav = document.querySelector('.navbar-light');
const navbg = document.querySelector('.bg-light');
const ICons = document.querySelectorAll('.icon');
const skills = document.querySelector('.skills');
const upBtn = document.getElementById('upBtn');
const projects = document.querySelector('.projects');
const footerText = document.querySelector('.card-footer');
const badgeLight = document.querySelector('.badge-success');
const liveBadges = document.querySelectorAll('.badge-success');
const h2 = document.querySelectorAll('h2');
const btnResume = document.getElementById('btn-resume');
const section = document.getElementById('resume');
const reveal = document.querySelector('.reveal');

//form
const formGroup = document.querySelectorAll('.form-group input');
const formText = document.querySelector('.form-group textarea');
const input = document.querySelector('.form-control');
const contact = document.querySelector('.contact');

//up function
function upFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//random color function
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//dark mode functions
function removeLight() {
  nav.classList.remove('navbar-light');
  navbg.classList.remove('bg-light');
  buttonToggle.classList.remove('btn-light');
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.remove('badge-success');
  }
}

function addDark() {
  nav.classList.add('navbar-dark');
  navbg.classList.add('bg-dark');
  buttonToggle.classList.add('btn-dark');
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.add('badge-info');
  }
}

function addLight() {
  nav.classList.add('navbar-light');
  navbg.classList.add('bg-light');
  buttonToggle.classList.add('btn-light');
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.add('badge-success');
  }
}

function removeDark() {
  nav.classList.remove('navbar-dark');
  navbg.classList.remove('bg-dark');
  buttonToggle.classList.remove('btn-dark');
  for (let i = 0; i < liveBadges.length; i++) {
    liveBadges[i].classList.remove('badge-info');
  }
}

function darkMode() {
  removeLight();
  addDark();
  body.style.backgroundColor = '#343a40';
  body.style.color = 'white';
  for (let i = 0; i < ICons.length; i++) {
    ICons[i].style.color = 'white';
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#1e2d39';
    cards[i].style.border = '2px solid #1e2d39';
    cards[i].style.color = 'cornflowerblue';
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = 'slateblue';
  }
  for (let i = 0; i < formGroup.length; i++) {
    formGroup[i].style.backgroundColor = '#6494edde';
    formGroup[i].style.border = '3px solid #6494edde';
  }
  formText.style.border = 'none';
  formText.style.backgroundColor = '#6494edde';
  contact.style.backgroundColor = '#1e2d39';
}

function lightMode() {
  removeDark();
  addLight();
  body.style.backgroundColor = '#f9f9fb';
  body.style.color = 'midnightblue';
  for (let i = 0; i < ICons.length; i++) {
    ICons[i].style.color = 'black';
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#fc7428';
    cards[i].style.border = '2px solid #fc7428';
    cards[i].style.color = 'floralwhite';
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = 'midnightblue';
  }
  for (let i = 0; i < formGroup.length; i++) {
    formGroup[i].style.backgroundColor = '#fe975b';
    formGroup[i].style.border = '3px solid #fffaf0c8';
  }
  formText.style.border = '3px solid #fffaf0c8';
  formText.style.backgroundColor = '#fe975b';
  contact.style.backgroundColor = '#fc7428';
}

function buttonChecker() {
  if (buttonToggle.innerText === 'Light Mode') {
    buttonToggle.innerText = 'Dark Mode';
    lightMode();
  } else if (buttonToggle.innerText === 'Dark Mode') {
    buttonToggle.innerText = 'Light Mode';
    darkMode();
  }
}

darkMode();

//intro functions
function fadeText() {
  logoSpan.forEach((span, index) => {
    setTimeout(() => {
      span.classList.remove('active');
      span.classList.add('fade');
    }, index++ * 50);
  });
}

function revealWebsite() {
  intro.style.top = '-100vh';
}

function removeLoading() {
  loading.style.display = 'none';
}

function loadingScreen() {
  logoSpan.forEach((span, index) => {
    setTimeout(() => {
      removeLoading();
      span.classList.add('active');
    }, index++ * 700);
  });
  setTimeout(fadeText, 1250);
  setTimeout(revealWebsite, 1250);
}

function introEffect() {
  setTimeout(loadingScreen, 2000);
}

function formSubmit() {
  alert('The form was submitted');
}

//event listeners
upBtn.addEventListener('click', upFunction);
buttonToggle.addEventListener('click', buttonChecker);
window.addEventListener('DOMContentLoaded', introEffect);
btnResume.addEventListener('click', () => {
  section.style.display = 'none';
  reveal.style.display = 'block';
});
skills.addEventListener('mouseover', (e) => {
  e.target.setAttribute('fill', getRandomColor());
});
