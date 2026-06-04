/* ═══════════════════════════════
   EJERCICIO: CONFLICTOS ENTRE RAMAS
═══════════════════════════════ */

const CF_INITIAL_FILE = `<header>
  <h1>Guía básica de GitHub</h1>
  <p>Aprende Git y GitHub paso a paso.</p>
</header>`;

const CF_CONFLICT_FILE = `<header>
  <h1>Guía básica de GitHub con ejercicios interactivos</h1>
  <p>Aprende Git y GitHub paso a paso.</p>
</header>`;

const CF_STEPS = [
  {
    title: "Crea una rama nueva",
    task: "Crea una rama llamada feature-titulo. En esa rama se cambiará el título de la página.",
    hint: "Usa: git switch -c feature-titulo",
    valid: [
      /^git switch -c feature-titulo$/i,
      /^git checkout -b feature-titulo$/i,
    ],
    output:
      "Switched to a new branch 'feature-titulo'\n[feature-titulo a12b34c] Cambia título para principiantes",
    after: function () {
      cfState.branch = "feature-titulo";
      cfState.featureCommit = true;
      cfState.fileContent = `<header>
  <h1>Guía práctica de GitHub para principiantes</h1>
  <p>Aprende Git y GitHub paso a paso.</p>
</header>`;
    },
  },
  {
    title: "Vuelve a main",
    task: "Vuelve a la rama main. Allí también se cambiará la misma línea del archivo.",
    hint: "Usa: git switch main",
    valid: [/^git switch main$/i, /^git checkout main$/i],
    output:
      "Switched to branch 'main'\n[main d45e67f] Añade ejercicios interactivos al título",
    after: function () {
      cfState.branch = "main";
      cfState.mainCommit = true;
      cfState.fileContent = `<header>
  <h1>Guía básica de GitHub con ejercicios interactivos</h1>
  <p>Aprende Git y GitHub paso a paso.</p>
</header>`;
    },
  },
  {
    title: "Fusiona la rama",
    task: "Fusiona feature-titulo dentro de main. Como ambas ramas tocaron la misma línea, aparecerá un conflicto.",
    hint: "Usa: git merge feature-titulo",
    valid: [/^git merge feature-titulo$/i],
    output:
      "Auto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result.",
    after: function () {
      cfState.conflict = true;
      cfState.fileContent = CF_CONFLICT_FILE;
    },
  },
  {
    title: "Resuelve el archivo",
    task: "Edita index.html. Elimina los marcadores del conflicto y deja un único título que combine las dos ideas.",
    hint: "Borra <<<<<<<, ======= y >>>>>>>. Quédate con un solo <h1> que incluya principiantes y ejercicios interactivos.",
    valid: [],
    output: "",
    after: function () {
      cfState.conflict = false;
      cfState.resolved = true;
    },
  },
  {
    title: "Marca el conflicto como resuelto",
    task: "Usa git add para decirle a Git que index.html ya está resuelto.",
    hint: "Usa: git add index.html",
    valid: [/^git add index\.html$/i, /^git add \.$/i],
    output: "Archivo preparado. Git ya sabe que el conflicto está resuelto.",
    after: function () {
      cfState.staged = true;
    },
  },
  {
    title: "Finaliza el merge",
    task: "Haz un commit para cerrar el merge y guardar la resolución del conflicto.",
    hint: 'Usa: git commit -m "resuelve conflicto en título"',
    valid: [/^git commit$/i, /^git commit -m .+$/i],
    output:
      "[main f89a10b] Resuelve conflicto en título\nMerge finalizado correctamente.",
    after: function () {
      cfState.done = true;
    },
  },
];

let cfState = {};
let cfHistory = [];

function cfResetState() {
  cfState = {
    step: 0,
    branch: "main",
    featureCommit: false,
    mainCommit: false,
    conflict: false,
    resolved: false,
    staged: false,
    done: false,
    fileContent: CF_INITIAL_FILE,
  };

  cfHistory = [];
}

function cfPrint(text, cls) {
  const out = document.getElementById("cf-output");
  if (!out) return;

  const div = document.createElement("div");
  div.className = cls || "line-dim";
  div.textContent = text;

  out.appendChild(div);

  const term = document.getElementById("cf-terminal");
  if (term) term.scrollTop = term.scrollHeight;
}

function cfSetFeedback(msg, type) {
  const fb = document.getElementById("cf-feedback");
  if (!fb) return;

  fb.className = type || "info";
  fb.innerHTML = msg;
}

function cfClearFeedback() {
  const fb = document.getElementById("cf-feedback");
  if (!fb) return;

  fb.className = "";
  fb.innerHTML = "";
}

function cfCurrentStep() {
  return CF_STEPS[Math.min(cfState.step, CF_STEPS.length - 1)];
}

function cfRender() {
  const card = document.getElementById("conflict-exercise-card");
  if (!card) return;

  if (!cfState || !Number.isInteger(cfState.step)) {
    cfResetState();
  }

  const step = cfCurrentStep();
  if (!step) return;
  const progress = cfState.done
    ? 100
    : Math.round((cfState.step / CF_STEPS.length) * 100);

  const bar = document.getElementById("cf-progress-bar");
  if (bar) bar.style.width = progress + "%";

  const label = document.getElementById("cf-progress-label");
  if (label) {
    label.textContent = cfState.done
      ? uiTranslate("Ejercicio completado")
      : currentLang === "en"
        ? `Step ${cfState.step + 1} of ${CF_STEPS.length}`
        : `Paso ${cfState.step + 1} de ${CF_STEPS.length}`;
  }

  const state = document.getElementById("cf-state");
  if (state) {
    state.innerHTML = `
      <div class="cf-state-row">
        <span class="cf-state-label">${uiTranslate("Rama actual")}</span>
        <span class="cf-state-value">
          <span class="cf-pill active">${cfState.branch}</span>
        </span>
      </div>

      <div class="cf-state-row">
        <span class="cf-state-label">${uiTranslate("Commit en feature")}</span>
        <span class="cf-state-value">
          <span class="cf-pill ${cfState.featureCommit ? "ok" : ""}">
            ${cfState.featureCommit ? uiTranslate("hecho") : uiTranslate("pendiente")}
          </span>
        </span>
      </div>

      <div class="cf-state-row">
        <span class="cf-state-label">${uiTranslate("Commit en main")}</span>
        <span class="cf-state-value">
          <span class="cf-pill ${cfState.mainCommit ? "ok" : ""}">
            ${cfState.mainCommit ? uiTranslate("hecho") : uiTranslate("pendiente")}
          </span>
        </span>
      </div>

      <div class="cf-state-row">
        <span class="cf-state-label">${uiTranslate("Estado del merge")}</span>
        <span class="cf-state-value">
          ${cfMergeBadge()}
        </span>
      </div>
    `;
  }

  const task = document.getElementById("cf-task-box");
  if (task) {
    task.innerHTML = `<strong>${uiTranslate(step.title)}</strong><br>${uiTranslate(step.task)}`;
  }

  const editor = document.getElementById("cf-editor");
  if (editor) {
    editor.value = cfState.fileContent;
    editor.disabled = cfState.step !== 3 || cfState.done;
  }

  cfRenderConflictView();

  const input = document.getElementById("cf-input");
  if (input) {
    input.disabled = cfState.step === 3 || cfState.done;
    input.placeholder =
      cfState.step === 3
        ? uiTranslate("resuelve primero el archivo en el editor...")
        : uiTranslate("escribe un comando git...");
  }

  const checkBtn = document.getElementById("cf-check-btn");
  if (checkBtn) {
    checkBtn.disabled = cfState.step !== 3 || cfState.done;
  }

  const explanation = document.getElementById("cf-explanation");
  if (explanation) {
    explanation.style.display = cfState.done ? "block" : "none";
  }
}

function cfMergeBadge() {
  if (cfState.done) {
    return `<span class="cf-pill ok">${uiTranslate("finalizado")}</span>`;
  }

  if (cfState.staged) {
    return `<span class="cf-pill warn">${uiTranslate("pendiente de commit")}</span>`;
  }

  if (cfState.resolved) {
    return `<span class="cf-pill warn">${uiTranslate("resuelto sin add")}</span>`;
  }

  if (cfState.conflict) {
    return `<span class="cf-pill err">${uiTranslate("conflicto")}</span>`;
  }

  return `<span class="cf-pill">${uiTranslate("sin iniciar")}</span>`;
}

function cfRunCommand(command) {
  const normalized = command.replace(/\s+/g, " ").trim();

  if (!normalized) return;

  cfPrint("$ " + normalized, "line-cmd");

  if (normalized.toLowerCase() === "git status") {
    cfPrint(cfGitStatus(), "line-info");
    cfRender();
    return;
  }

  if (
    normalized.toLowerCase() === "clear" ||
    normalized.toLowerCase() === "cls"
  ) {
    const out = document.getElementById("cf-output");
    if (out) out.innerHTML = "";
    return;
  }

  if (!normalized.toLowerCase().startsWith("git")) {
    cfPrint(
      uiTranslate(
        'Este simulador solo acepta comandos de Git. Prueba con "git status".',
      ),
      "line-err",
    );
    cfSetFeedback(
      uiTranslate("❌ Escribe un comando que empiece por <code>git</code>."),
      "err",
    );
    return;
  }

  if (cfState.done) {
    cfPrint(uiTranslate("El ejercicio ya está completado."), "line-dim");
    return;
  }

  const step = cfCurrentStep();

  if (cfState.step === 3) {
    cfPrint(
      uiTranslate(
        "Ahora no toca escribir comandos. Primero resuelve el archivo en el editor.",
      ),
      "line-err",
    );
    return;
  }

  const isValid = step.valid.some((regex) => regex.test(normalized));

  if (!isValid) {
    cfPrint(uiTranslate("Comando incorrecto para este paso."), "line-err");
    cfSetFeedback(
      uiTranslate(
        "❌ Ese comando no es el que toca ahora. Puedes escribir <code>git status</code> para orientarte.",
      ),
      "err",
    );
    return;
  }

  step.after();

  if (step.output) {
    const cls = step.output.includes("CONFLICT") ? "line-err" : "line-ok";
    cfPrint(uiTranslate(step.output), cls);
  }

  cfState.step++;

  if (cfState.done) {
    cfSetFeedback(
      uiTranslate(
        "✅ Ejercicio completado. Has provocado un conflicto, lo has resuelto y has cerrado el merge.",
      ),
      "ok",
    );
  } else {
    cfSetFeedback(
      uiTranslate("✅ Correcto. Continúa con el siguiente paso."),
      "ok",
    );
  }

  cfRender();
}

function cfGitStatus() {
  if (cfState.done) {
    return "On branch main\nnothing to commit, working tree clean";
  }

  if (cfState.conflict) {
    return `On branch main
You have unmerged paths.

Unmerged paths:
  both modified:   index.html

fix conflicts and run "git add index.html"`;
  }

  if (cfState.resolved && !cfState.staged) {
    return `On branch main
Changes not staged for commit:
  modified: index.html`;
  }

  if (cfState.staged) {
    return `On branch main
All conflicts fixed but you are still merging.

Changes to be committed:
  modified: index.html`;
  }

  return `On branch ${cfState.branch}
nothing to commit, working tree clean`;
}

window.cfCheckResolution = function () {
  const editor = document.getElementById("cf-editor");
  if (!editor) return;

  const content = editor.value.trim();

  const hasMarkers =
    content.includes("<<<<<<<") ||
    content.includes("=======") ||
    content.includes(">>>>>>>");

  const hasH1 = /<h1>.*<\/h1>/i.test(content);
  const hasGithub = /github/i.test(content);
  const hasBeginners = /principiantes/i.test(content);
  const hasExercises = /ejercicios interactivos/i.test(content);

  if (hasMarkers) {
    cfSetFeedback(
      uiTranslate(
        "❌ Todavía quedan marcadores de conflicto. Elimina <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code> y <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.",
      ),
      "err",
    );
    return;
  }

  if (!hasH1 || !hasGithub) {
    cfSetFeedback(
      uiTranslate(
        "❌ La solución debe conservar una línea <code>&lt;h1&gt;</code> relacionada con GitHub.",
      ),
      "err",
    );
    return;
  }

  if (!hasBeginners || !hasExercises) {
    cfSetFeedback(
      uiTranslate(
        "⚠️ La idea es combinar las dos versiones: debe aparecer la idea de <strong>principiantes</strong> y la de <strong>ejercicios interactivos</strong>.",
      ),
      "err",
    );
    return;
  }

  cfState.fileContent = content;
  cfCurrentStep().after();
  cfState.step++;

  cfPrint(
    uiTranslate(
      "index.html editado correctamente. El conflicto ya no tiene marcadores.",
    ),
    "line-ok",
  );
  cfSetFeedback(
    uiTranslate(
      "✅ Resolución correcta. Ahora usa <code>git add index.html</code>.",
    ),
    "ok",
  );
  cfRender();
};

window.cfShowHint = function () {
  if (cfState.done) {
    cfSetFeedback(uiTranslate("🏆 Ya has completado el ejercicio."), "info");
    return;
  }

  cfSetFeedback("💡 " + uiTranslate(cfCurrentStep().hint), "info");
};

window.cfReset = function () {
  cfResetState();

  const out = document.getElementById("cf-output");
  if (out) out.innerHTML = "";

  cfPrint(
    uiTranslate("Bienvenido al ejercicio de conflictos entre ramas."),
    "line-info",
  );
  cfPrint(
    uiTranslate(
      'Puedes escribir "git status" en cualquier momento para ver el estado.',
    ),
    "line-dim",
  );

  cfClearFeedback();
  cfRender();
};

function buildConflictExercise() {
  const input = document.getElementById("cf-input");
  if (!input) return;

  cfResetState();

  cfPrint(
    uiTranslate("Bienvenido al ejercicio de conflictos entre ramas."),
    "line-info",
  );
  cfPrint(
    uiTranslate(
      'Puedes escribir "git status" en cualquier momento para ver el estado.',
    ),
    "line-dim",
  );

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const value = this.value.trim();
      if (!value) return;

      cfHistory.push(value);
      this.value = "";
      cfRunCommand(value);
    }

    if (e.key === "ArrowUp" && cfHistory.length) {
      this.value = cfHistory[cfHistory.length - 1];
    }
  });

  cfRender();
}

function cfEscapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function cfRenderConflictView() {
  const view = document.getElementById("cf-conflict-view");
  if (!view) return;

  if (!cfState.conflict) {
    view.style.display = "none";
    view.innerHTML = "";
    return;
  }

  let mode = "normal";

  const html = cfState.fileContent
    .split("\n")
    .map((line) => {
      let cls = "cf-code-line cf-line-normal";

      if (line.startsWith("<<<<<<<")) {
        mode = "head";
        cls = "cf-code-line cf-line-head cf-line-marker";
      } else if (line.startsWith("=======")) {
        mode = "incoming";
        cls = "cf-code-line cf-line-separator cf-line-marker";
      } else if (line.startsWith(">>>>>>>")) {
        cls = "cf-code-line cf-line-incoming cf-line-marker";
        mode = "normal";
      } else if (mode === "head") {
        cls = "cf-code-line cf-line-head";
      } else if (mode === "incoming") {
        cls = "cf-code-line cf-line-incoming";
      }

      return `<span class="${cls}">${cfEscapeHtml(line)}</span>`;
    })
    .join("");

  view.innerHTML = html;
  view.style.display = "block";
}
