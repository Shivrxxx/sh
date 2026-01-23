// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const body = document.body;
toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  toggle.innerHTML = body.classList.contains("light")
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
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

const themeToggle = document.getElementById("themeToggle");
const logo = document.getElementById("siteLogo");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");

  // Fade out
  logo.style.opacity = "0";

  setTimeout(() => {
    // Replace image ONLY (same element, same place)
    logo.src = isLight
      ? "assets/signature-light.png"
      : "assets/signature-dark.png";

    // Fade in
    logo.style.opacity = "1";
  }, 150);
});
