/* =========================================================
   PRELOADER (logo → fade out)
========================================================= */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hide");
  }
});

/* =========================================================
   THEME TOGGLE (TEXT BASED)
   Dark → shows "Light"
   Light → shows "Dark"
   No localStorage (GitHub Pages safe)
========================================================= */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const navLogo = document.getElementById("siteLogo");
const heroLogo = document.getElementById("heroLogo");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");

    // Update toggle text
    themeToggle.textContent = isLight ? "Dark" : "Light";

    // Smooth logo swap (same place, no movement)
    const newSrc = isLight
      ? "assets/signature-dark.png"
      : "assets/signature-light.png";

    [navLogo, heroLogo].forEach(logo => {
      if (!logo) return;
      logo.style.opacity = "0";
      setTimeout(() => {
        logo.src = newSrc;
        logo.style.opacity = "1";
      }, 150);
    });
  });
}

/* =========================================================
   STAGGERED HERO TEXT (WORD BY WORD)
========================================================= */
document.querySelectorAll(".stagger").forEach(el => {
  const words = el.innerText.split(" ");
  el.innerHTML = words
    .map(
      (word, i) =>
        `<span style="animation-delay:${i * 0.08}s">${word}</span>`
    )
    .join(" ");
});

/* =========================================================
   NAV ACTIVE LINK
========================================================= */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(l =>
      l.classList.remove("active")
    );
    link.classList.add("active");
  });
});

/* =========================================================
   MOBILE HAMBURGER MENU
========================================================= */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
    });
  });
}

/* =========================================================
   BUTTON PRESS MICRO INTERACTION
========================================================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });
});

/* =========================================================
   SCROLL REVEAL (ONCE, NO REPEAT)
========================================================= */
const revealItems = document.querySelectorAll(
  ".reveal, .skill-card, .timeline-item, .project-card"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach(item => revealObserver.observe(item));

/* =========================================================
   PROJECT MODAL (VIEW WORK)
========================================================= */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalGallery = document.querySelector(".modal-gallery");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".view-work").forEach(btn => {
  btn.addEventListener("click", e => {
    const card = e.target.closest(".project-card");
    if (!card) return;

    modalTitle.textContent =
      card.querySelector("h4")?.innerText || "";
    modalDesc.textContent =
      card.querySelector("p")?.innerText || "";

    modalGallery.innerHTML = "";
    const img = card.querySelector("img")?.cloneNode();
    if (img) modalGallery.appendChild(img);

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

if (modalClose) modalClose.addEventListener("click", closeModal);

if (modal) {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
