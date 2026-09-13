// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Animated stat counters
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 900;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
statNums.forEach((el) => statObserver.observe(el));

// Reduced-motion guard for the interactive/decorative effects below
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Card tilt + cursor spotlight
if (!prefersReducedMotion) {
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(700px)';
    });
  });
}

// Rotating hero role text
const heroRole = document.getElementById('heroRole');
if (heroRole) {
  const roles = [
    'Front-End & Full-Stack Developer',
    'React · TypeScript · Node.js',
    'Treehouse Techdegree Graduate',
  ];
  let roleIndex = 0;
  setInterval(() => {
    heroRole.style.opacity = 0;
    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      heroRole.textContent = roles[roleIndex];
      heroRole.style.opacity = 1;
    }, 350);
  }, 3200);
}

// Scroll progress bar
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = `${pct}%`;
  });
}

// Live demo phone: scale to fit, status bar clock, restart
const phoneStage = document.getElementById('phoneStage');
if (phoneStage) {
  const PHONE_W = 414;
  const PHONE_H = 868;

  function fitPhone() {
    const available = phoneStage.parentElement.clientWidth;
    const byWidth = available / PHONE_W;
    const byHeight = (window.innerHeight - 120) / PHONE_H;
    const scale = Math.max(0.55, Math.min(1, byWidth, byHeight));
    phoneStage.style.setProperty('--phone-scale', scale.toFixed(3));
  }
  fitPhone();
  window.addEventListener('resize', fitPhone);

  const phoneTime = document.getElementById('phoneTime');
  function updatePhoneTime() {
    const now = new Date();
    phoneTime.textContent = `${now.getHours() % 12 || 12}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
  updatePhoneTime();
  setInterval(updatePhoneTime, 15000);

  const demoFrame = document.getElementById('demoFrame');
  document.getElementById('demoRestart').addEventListener('click', () => {
    demoFrame.src = demoFrame.src;
  });
}

// Scrollspy: highlight active nav link
const spySections = document.querySelectorAll('main section[id]');
const spyLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      spyLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
spySections.forEach((section) => spyObserver.observe(section));
