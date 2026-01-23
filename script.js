/* ================= ROOT VARIABLES ================= */
:root {
  --bg: #000;
  --bg-soft: #0b0b0b;
  --card: rgba(255,255,255,0.04);
  --border: rgba(255,255,255,0.1);
  --text: #ffffff;
  --muted: #bdbdbd;
  --accent: #ffffff;
}

body.light {
  --bg: #f7f7f7;
  --bg-soft: #ffffff;
  --card: rgba(0,0,0,0.04);
  --border: rgba(0,0,0,0.12);
  --text: #111;
  --muted: #555;
  --accent: #111;
}

/* ================= RESET ================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
}

/* ================= PRELOADER ================= */
#preloader {
  position: fixed;
  inset: 0;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.8s ease, visibility 0.8s ease;
}

#preloader.hide {
  opacity: 0;
  visibility: hidden;
}

#preloader img {
  height: 80px;
  animation: preloadPulse 1.6s ease-in-out infinite;
}

@keyframes preloadPulse {
  0%,100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.06); opacity: 1; }
}

/* ================= NOISE ================= */
.noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  animation: grain 8s steps(10) infinite;
}

@keyframes grain {
  0% { transform: translate(0,0); }
  100% { transform: translate(-10%,10%); }
}

/* ================= GLOBAL SECTIONS ================= */
section {
  padding: 120px 80px;
  scroll-snap-align: start;
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  body { scroll-snap-type: none; }
  section { padding: 80px 24px; }
}

.section-header {
  max-width: 720px;
  margin: 0 auto 72px;
  text-align: center;
}

.section-header h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
}

.section-header p {
  color: var(--muted);
  font-size: 16px;
}

/* ================= NAVBAR ================= */
.navbar {
  height: 80px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-signature {
  height: 36px;
  transition: opacity 0.25s ease;
}

.nav-center {
  display: flex;
  gap: 36px;
}

.nav-link {
  font-family: "Space Grotesk", sans-serif;
  color: var(--muted);
  text-decoration: none;
  font-size: 16px;
  position: relative;
}

.nav-link.active,
.nav-link:hover {
  color: var(--text);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: var(--accent);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 14px;
  color: var(--text);
  cursor: pointer;
}

/* ================= HAMBURGER ================= */
.hamburger {
  display: none;
  width: 26px;
  height: 20px;
  background: none;
  border: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.hamburger span {
  height: 2px;
  width: 100%;
  background: var(--text);
  transition: all 0.4s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px,5px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px,-6px);
}

/* ================= MOBILE MENU ================= */
.mobile-menu {
  position: fixed;
  top: 80px;
  right: -100%;
  width: 100%;
  height: calc(100vh - 80px);
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  transition: right 0.5s ease;
  z-index: 90;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu a {
  font-size: 22px;
  color: var(--text);
  text-decoration: none;
}

/* ================= HERO ================= */
.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.hero-content {
  max-width: 620px;
}

.stagger span {
  display: inline-block;
  opacity: 0;
  transform: translateY(24px);
  animation: staggerIn 0.6s ease forwards;
}

@keyframes staggerIn {
  to { opacity: 1; transform: translateY(0); }
}

.available {
  display: inline-flex;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(0,255,120,0.12);
  border: 1px solid rgba(0,255,120,0.4);
  font-size: 14px;
  margin-bottom: 30px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #00ff78;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.hero h1 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 48px;
}

.signature {
  height: 90px;
  margin: 16px 0;
}

.hero h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  color: var(--muted);
}

.description {
  margin: 28px 0;
  color: var(--muted);
}

.buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.btn {
  padding: 14px 26px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
}

.btn.primary {
  background: var(--accent);
  color: var(--bg);
}

.btn.secondary {
  border: 1px solid var(--border);
  color: var(--text);
}

.stats {
  display: flex;
  gap: 40px;
}

.hero-image img {
  width: 380px;
  height: 380px;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(100%);
}

/* ================= PROJECTS ================= */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 80px rgba(0,0,0,0.6);
}

.project-media {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.project-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.project-card:hover .project-media img {
  transform: scale(1.08);
}

.project-content {
  padding: 26px;
}

.view-work {
  margin-top: 12px;
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;
}

/* ================= MODAL ================= */
.project-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.project-modal.active {
  display: flex;
}

.modal-content {
  background: var(--bg-soft);
  padding: 40px;
  border-radius: 18px;
  max-width: 600px;
  width: 90%;
}

.modal-close {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--text);
  cursor: pointer;
  float: right;
}

/* ================= CONTACT ================= */
.contact-icons {
  display: flex;
  gap: 28px;
  justify-content: center;
  margin-top: 40px;
}

.contact-icons a {
  font-size: 26px;
  color: var(--text);
  transition: transform 0.3s ease;
}

.contact-icons a:hover {
  transform: translateY(-6px);
}

/* ================= REVEAL ================= */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ================= FOOTER ================= */
footer {
  text-align: center;
  padding: 30px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

/* ================= RESPONSIVE ================= */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .nav-center { display: none; }
  .hamburger { display: flex; }
  .hero { flex-direction: column; text-align: center; }
  .stats { justify-content: center; }
}
