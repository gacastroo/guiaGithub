/* ═══════════════════════════════
   APP BOOTSTRAP
═══════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof buildSimulator === "function") buildSimulator();
  if (typeof buildLightbox === "function") buildLightbox();
  if (typeof buildConflictExercise === "function") buildConflictExercise();
  if (window.initGitignoreExercise) window.initGitignoreExercise();
  if (typeof setLanguage === "function") setLanguage(currentLang);
});
