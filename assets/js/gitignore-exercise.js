/* ═══════════════════════════════
  SIMULADOR DE .GITIGNORE
═══════════════════════════════ */

(function () {
  const FILES = [
    { name: "index.js", icon: "📄", shouldIgnore: false },
    { name: "package.json", icon: "📦", shouldIgnore: false },
    { name: "package-lock.json", icon: "🔒", shouldIgnore: false },
    { name: ".env", icon: "🔑", shouldIgnore: true },
    { name: ".env.local", icon: "🔑", shouldIgnore: true },
    { name: "node_modules/", icon: "📁", shouldIgnore: true },
    { name: "dist/", icon: "📁", shouldIgnore: true },
    { name: "server.log", icon: "📝", shouldIgnore: true },
    { name: "error.log", icon: "📝", shouldIgnore: true },
    { name: ".DS_Store", icon: "💻", shouldIgnore: true },
    { name: "src/app.js", icon: "📄", shouldIgnore: false },
    { name: "README.md", icon: "📘", shouldIgnore: false },
  ];

  const TOTAL = FILES.filter((f) => f.shouldIgnore).length;
  let hintLevel = 0;

  const HINTS = [
    "Piensa: ¿qué carpetas se generan automáticamente y nunca necesitas subir?",
    "node_modules/ y dist/ son carpetas que no se suben nunca al repositorio.",
    "Los archivos .env contienen secretos. Los .log son ruido. .DS_Store es de macOS.",
    "Prueba con: node_modules/ · dist/ · .env · .env.local · *.log · .DS_Store",
  ];

  function getRules(text) {
    return text
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && l.charAt(0) !== "#");
  }

  function matchesRule(filename, rule) {
    const r = rule.endsWith("/") ? rule.slice(0, -1) : rule;

    if (r.startsWith("*.")) return filename.endsWith(r.slice(1));

    if (r.endsWith("*")) {
      const fn = filename.endsWith("/") ? filename.slice(0, -1) : filename;
      return fn.startsWith(r.slice(0, -1));
    }

    const fn = filename.endsWith("/") ? filename.slice(0, -1) : filename;
    return fn === r || fn === rule;
  }

  function isIgnored(filename, rules) {
    return rules.some((r) => matchesRule(filename, r));
  }

  function renderFiles(rules) {
    const list = document.getElementById("gi-ex-file-list");
    if (!list) return;

    list.innerHTML = "";
    let correct = 0;

    FILES.forEach((f) => {
      const ignored = isIgnored(f.name, rules);
      let stateClass, badgeClass, badgeText;

      if (ignored) {
        stateClass = "ignored";
        badgeClass = "badge-ignored";
        badgeText = uiTranslate("ignorado");
      } else if (f.shouldIgnore) {
        stateClass = "pending";
        badgeClass = "badge-pending";
        badgeText = uiTranslate("pendiente");
      } else {
        stateClass = "tracked";
        badgeClass = "badge-tracked";
        badgeText = uiTranslate("trackeado");
      }

      const item = document.createElement("div");
      item.className = `gi-ex-file-item ${stateClass}`;
      item.innerHTML =
        `<span style="font-size:14px;flex-shrink:0">${f.icon}</span>` +
        `<span class="gi-ex-file-name">${f.name}</span>` +
        `<span class="gi-ex-file-badge ${badgeClass}">${badgeText}</span>`;

      list.appendChild(item);

      if (f.shouldIgnore && ignored) correct++;
      if (!f.shouldIgnore && ignored) correct--;
    });

    correct = Math.max(0, correct);
    const pct = Math.round((correct / TOTAL) * 100);

    const bar = document.getElementById("gi-ex-progress-bar");
    if (bar) bar.style.width = `${pct}%`;

    const lbl = document.getElementById("gi-ex-progress-label");
    if (lbl)
      lbl.textContent =
        currentLang === "en"
          ? `${correct} of ${TOTAL} files ignored correctly`
          : `${correct} de ${TOTAL} archivos ignorados correctamente`;
  }

  function clearFeedback() {
    const fb = document.getElementById("gi-ex-feedback");
    if (!fb) return;

    fb.removeAttribute("style");
    fb.className = "";
    fb.innerHTML = "";
  }

  function showFeedback(msg, type) {
    const fb = document.getElementById("gi-ex-feedback");
    if (!fb) return;

    fb.removeAttribute("style");
    fb.className = type;
    fb.innerHTML = msg;
  }

  // 🌐 Funciones globales (para botones HTML)
  window.giEvalGitignore = () => {
    const editor = document.getElementById("gi-ex-editor");
    renderFiles(editor ? getRules(editor.value) : []);
    clearFeedback();
  };

  window.giShowHint = () => {
    if (hintLevel >= HINTS.length) {
      showFeedback(
        uiTranslate(
          "Ya has visto todas las pistas. ¡Inténtalo con lo que sabes!",
        ),
        "info",
      );
      return;
    }

    showFeedback(uiTranslate(HINTS[hintLevel]), "info");
    hintLevel++;
  };

  window.giReset = () => {
    const editor = document.getElementById("gi-ex-editor");
    if (editor) editor.value = "";

    hintLevel = 0;

    const expl = document.getElementById("gi-ex-explanation");
    if (expl) expl.style.display = "none";

    clearFeedback();
    renderFiles([]);
  };

  window.giCheckSolution = () => {
    const editor = document.getElementById("gi-ex-editor");
    const rules = editor ? getRules(editor.value) : [];

    const missed = [];
    const wrong = [];

    FILES.forEach((f) => {
      const ignored = isIgnored(f.name, rules);
      if (f.shouldIgnore && !ignored) missed.push(f.name);
      if (!f.shouldIgnore && ignored) wrong.push(f.name);
    });

    if (missed.length === 0 && wrong.length === 0) {
      showFeedback(
        uiTranslate(
          "✅ ¡Perfecto! Tu .gitignore es correcto. Todos los archivos sensibles están ignorados y el código fuente queda trackeado.",
        ),
        "ok",
      );

      const expl = document.getElementById("gi-ex-explanation");
      if (expl) expl.style.display = "block";
    } else {
      let msg = "";

      if (missed.length) {
        msg += `${uiTranslate("Aún faltan por ignorar:")} <strong>${missed.join(", ")}</strong>.<br>`;
      }

      if (wrong.length) {
        msg += `${uiTranslate("Estás ignorando archivos que sí deberían subirse:")} <strong>${wrong.join(", ")}</strong>.`;
      }

      showFeedback(msg, "err");
    }
  };

  window.initGitignoreExercise = () => {
    renderFiles([]);
  };

  window.giRefreshLanguage = () => {
    const editor = document.getElementById("gi-ex-editor");
    renderFiles(editor ? getRules(editor.value) : []);
  };
})();

