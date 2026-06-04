let currentLang = localStorage.getItem('lang') || localStorage.getItem('site-lang') || 'es';

function setContributionLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  localStorage.setItem('site-lang', lang);

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-es][data-en]').forEach((el) => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.es;
  });

  document.querySelectorAll('[data-title-es][data-title-en]').forEach((el) => {
    el.setAttribute('title', lang === 'en' ? el.dataset.titleEn : el.dataset.titleEs);
  });

  document.querySelectorAll('[data-aria-label-es][data-aria-label-en]').forEach((el) => {
    el.setAttribute('aria-label', lang === 'en' ? el.dataset.ariaLabelEn : el.dataset.ariaLabelEs);
  });

  document.querySelectorAll('[data-alt-es][data-alt-en]').forEach((el) => {
    el.setAttribute('alt', lang === 'en' ? el.dataset.altEn : el.dataset.altEs);
  });

  document.title = lang === 'en' ? 'GuiaGitHub contributions' : 'GuiaGitHub contribuciones';

  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';
}

function toggleContributionLang() {
  setContributionLang(currentLang === 'es' ? 'en' : 'es');
}

document.addEventListener('DOMContentLoaded', () => {
  setContributionLang(currentLang);
});
