/* =========================================================
   PRELOADER (logo → fade out)
========================================================= */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  preloader.style.opacity = "0";
  preloader.style.pointerEvents = "none";

  setTimeout(() => {
    preloader.remove();
  }, 600);
});


/* =========================================================
   DARK ↔ LIGHT TOGGLE (state + text/icon)
========================================================= */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const setToggleState = () => {
    const isLight = document.body.classList.contains("light");
    themeToggle.textContent = isLight ? "☀️ Light" : "🌙 Dark";
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );
  };

  // initial state
  setToggleState();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    setToggleState();
  });
}


/* =========================================================
   WORD-BY-WORD HERO TEXT ANIMATION
========================================================= */
document.querySelectorAll(".animate-text").forEach(el => {
  const words = el.innerText.trim().split(" ");
  el.innerHTML = words
    .map((word, i) => {
      return `<span style="animation-delay:${i * 0.05}s">${word}&nbsp;</span>`;
    })
    .join("");
});


/* =========================================================
   SCROLL REVEAL (projects, skills, timeline)
========================================================= */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".project-card, .skill-card, .timeline-item"
).forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});


/* =========================================================
   STICKY NAVBAR + MOBILE MENU LOGIC (FINAL)
========================================================= */

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  // sticky background on scroll
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // auto close mobile menu on scroll
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  }

  lastScrollY = window.scrollY;
});

/* =========================================================
   MOBILE HAMBURGER MENU
========================================================= */

if (hamburger && navMenu) {
  hamburger.addEventListener("click", e => {
    e.stopPropagation();
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("active");
  });

  // close on link click
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
}

/* close menu when clicking outside */
document.addEventListener("click", e => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  }
});

/* =========================================================
   OPTIONAL: NAV ACTIVE STATE ON SCROLL
========================================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.querySelectorAll(".view-project-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    window.open(btn.dataset.link, "_blank");
  });
});
