/* ═══════════════════════════════
   NAVEGACIÓN ENTRE SECCIONES
═══════════════════════════════ */
// Cambia de sección visible al hacer clic en el menú
function show(id, btn) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("visible"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(id).classList.add("visible");
  btn.classList.add("active");
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ── MOBILE NAV ── */
function toggleMobileNav() {
  const nav = document.querySelector("nav");
  const scroll = document.getElementById("nav-scroll");
  const hamburger = document.getElementById("nav-hamburger");
  nav.classList.toggle("open");
  scroll.classList.toggle("open");
  hamburger.classList.toggle("open");
  adjustLayout();
}

function closeMobileNav() {
  const nav = document.querySelector("nav");
  const scroll = document.getElementById("nav-scroll");
  const hamburger = document.getElementById("nav-hamburger");
  nav.classList.remove("open");
  scroll.classList.remove("open");
  hamburger.classList.remove("open");
  adjustLayout();
}

document.addEventListener("click", function (e) {
  const nav = document.querySelector("nav");
  if (!nav.contains(e.target)) closeMobileNav();
});

function adjustLayout() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const main = document.querySelector("main");
  if (!header || !nav || !main) return;

  const headerH = header.offsetHeight;
  const navH = nav.offsetHeight;

  if (window.innerWidth <= 1024) {
    nav.style.top = `${headerH}px`;
    main.style.paddingTop = `${headerH + navH + 16}px`;
  } else {
    nav.style.top = "";
    main.style.paddingTop = "";
  }
}

window.addEventListener("resize", adjustLayout);
document.addEventListener("DOMContentLoaded", adjustLayout);

