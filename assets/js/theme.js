/* ═══════════════════════════════
   DARK MODE TOGGLE
═══════════════════════════════ */
(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

function getThemeIcon() {
  const themeToggle = document.getElementById('theme-toggle-btn');

  if (themeToggle && !document.getElementById('theme-icon')) {
    themeToggle.innerHTML = '<span id="theme-icon">🌙</span>';
  }

  return document.getElementById('theme-icon');
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const icon = getThemeIcon();

  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    if (icon) icon.textContent = '🌙';
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    if (icon) icon.textContent = '☀️';
  }
}

// Set correct icon on load
document.addEventListener("DOMContentLoaded", function () {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    const icon = document.getElementById("theme-icon");
    if (icon) icon.textContent = "☀️";
  }
});
