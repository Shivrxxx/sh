const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const toggleIcon = toggleBtn.querySelector("i");
const signatureImg = document.getElementById("signatureImg");

/* Apply theme */
function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");

    // Toggle icon
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");

    // Signature image
    signatureImg.src = "assets/signature-light.png";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");

    // Toggle icon
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");

    // Signature image
    signatureImg.src = "assets/signature-dark.png";
  }

  localStorage.setItem("theme", theme);
}

/* Load saved theme (default = dark) */
applyTheme(localStorage.getItem("theme") || "dark");

/* Toggle click */
toggleBtn.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark") ? "light" : "dark";
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


