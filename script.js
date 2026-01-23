// THEME TOGGLE
const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const signatureImg = document.getElementById("signatureImg");

/* Apply theme */
function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
    signatureImg.src = "assets/signature-light.png";
    toggleBtn.textContent = "☀";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    signatureImg.src = "assets/signature-dark.png";
    toggleBtn.textContent = "☾";
  }

  localStorage.setItem("theme", theme);
}

/* Load saved theme (default = light) */
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

/* Toggle */
toggleBtn.addEventListener("click", () => {
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
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


