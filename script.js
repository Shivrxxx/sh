document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const signatureImg = document.getElementById("signatureImg");

  // 🚨 IMPORTANT: stop if navbar is not present
  if (!toggleBtn || !signatureImg) return;

  const body = document.body;
  const toggleIcon = toggleBtn.querySelector("i");

  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark");
      body.classList.remove("light");

      toggleIcon?.classList.replace("fa-moon", "fa-sun");
      signatureImg.src = "assets/signature-light.png";
    } else {
      body.classList.add("light");
      body.classList.remove("dark");

      toggleIcon?.classList.replace("fa-sun", "fa-moon");
      signatureImg.src = "assets/signature-dark.png";
    }

    localStorage.setItem("theme", theme);
  }

  applyTheme(localStorage.getItem("theme") || "dark");

  toggleBtn.addEventListener("click", () => {
    applyTheme(body.classList.contains("dark") ? "light" : "dark");
  });
});

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

// NAV ACTIVE
document.querySelectorAll(".nav-link, .mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    if (link.classList.contains("nav-link")) link.classList.add("active");
    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("active");
  });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.1}s`;
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


