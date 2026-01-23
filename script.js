// NAV ACTIVE LINK
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// BUTTON PRESS EFFECT
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.style.transform = "scale(0.95)");
  btn.addEventListener("mouseup", () => btn.style.transform = "scale(1)");
});

// REVEAL ON SCROLL
const revealItems = document.querySelectorAll(".reveal, .skill-card, .timeline-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${index * 0.12}s`;
      entry.target.classList.add("visible");
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translate(0)";
    }
  });
}, { threshold: 0.2 });

revealItems.forEach(el => observer.observe(el));
