/* ═══════════════════════════════
   QUIZ CAROUSEL
═══════════════════════════════ */
const QUIZ_QUESTIONS = [
  {
    q: "¿Qué comando inicializa un repositorio Git en la carpeta actual?",
    qEn: "Which command initializes a Git repository in the current folder?",
    opts: ["git start", "git init", "git create", "git new"],
    optsEn: ["git start", "git init", "git create", "git new"],
    correct: 1,
    explanation: "git init crea el directorio .git que convierte la carpeta en un repositorio.",
    explanationEn: "git init creates the .git directory that turns the folder into a repository."
  },
  {
    q: "¿Qué diferencia hay entre Git y GitHub?",
    qEn: "What is the difference between Git and GitHub?",
    opts: [
      "Son exactamente lo mismo",
      "Git es la plataforma web, GitHub el software local",
      "Git es el software de control de versiones local; GitHub es la plataforma web en la nube",
      "GitHub solo sirve para proyectos públicos"
    ],
    optsEn: [
      "They are exactly the same",
      "Git is the web platform, GitHub is the local software",
      "Git is the local version control software; GitHub is the cloud-based web platform",
      "GitHub is only for public projects"
    ],
    correct: 2,
    explanation:
      "Git vive en tu ordenador y gestiona versiones. GitHub es la plataforma online basada en Git.",
    explanationEn:
      "Git lives on your computer and manages versions. GitHub is the online platform built on top of Git."
  },
  {
    q: "¿Qué hace git add . ?",
    qEn: "What does git add . do?",
    opts: [
      "Crea un nuevo repositorio",
      "Prepara todos los archivos modificados para el próximo commit",
      "Sube los cambios a GitHub",
      "Descarta todos los cambios"
    ],
    optsEn: [
      "Creates a new repository",
      "Stages all modified files for the next commit",
      "Uploads the changes to GitHub",
      "Discards all changes"
    ],
    correct: 1,
    explanation: "git add . mueve todos los cambios al área de staging, listos para el commit.",
    explanationEn: "git add . moves all changes to the staging area, ready to be committed."
  },
  {
    q: "¿Qué comando sube tus commits al repositorio remoto?",
    qEn: "Which command pushes your commits to the remote repository?",
    opts: ["git commit -m", "git pull origin main", "git push origin main", "git sync"],
    optsEn: ["git commit -m", "git pull origin main", "git push origin main", "git sync"],
    correct: 2,
    explanation: "git push envía los commits locales al repositorio remoto en GitHub.",
    explanationEn: "git push sends your local commits to the remote repository on GitHub."
  },
  {
    q: "¿Para qué sirve una rama (branch) en Git?",
    qEn: "What is a branch used for in Git?",
    opts: [
      "Para hacer copias de seguridad en otro disco",
      "Para trabajar en paralelo sin afectar a la rama principal",
      "Para eliminar archivos del repositorio",
      "Para cambiar el nombre del proyecto"
    ],
    optsEn: [
      "To make backups on another drive",
      "To work in parallel without affecting the main branch",
      "To delete files from the repository",
      "To rename the project"
    ],
    correct: 1,
    explanation: "Las ramas permiten desarrollar funcionalidades o correcciones de forma aislada.",
    explanationEn: "Branches allow you to develop features or fixes in isolation."
  },
  {
    q: "¿Qué comando crea una nueva rama y cambia a ella directamente?",
    qEn: "Which command creates a new branch and switches to it immediately?",
    opts: [
      "git branch nueva-rama",
      "git new nueva-rama",
      "git switch -c nueva-rama",
      "git checkout nueva-rama --create"
    ],
    optsEn: [
      "git branch new-branch",
      "git new new-branch",
      "git switch -c new-branch",
      "git checkout new-branch --create"
    ],
    correct: 2,
    explanation: "git switch -c crea la rama y te cambia a ella en un solo paso.",
    explanationEn: "git switch -c creates the branch and switches to it in a single step."
  },
  {
    q: "¿Qué hace git merge nombre-rama?",
    qEn: "What does git merge branch-name do?",
    opts: [
      "Crea una copia de la rama",
      "Elimina la rama indicada",
      "Integra los cambios de la rama indicada en la rama actual",
      "Sube la rama a GitHub"
    ],
    optsEn: [
      "Creates a copy of the branch",
      "Deletes the specified branch",
      "Integrates the changes from the specified branch into the current branch",
      "Uploads the branch to GitHub"
    ],
    correct: 2,
    explanation:
      "git merge fusiona los commits de otra rama en la rama en la que estás actualmente.",
    explanationEn: "git merge integrates another branch's commits into your current branch."
  },
  {
    q: "¿Qué es un Pull Request?",
    qEn: "What is a Pull Request?",
    opts: [
      "Un comando de Git para descargar código",
      "Una solicitud para que otros revisen tus cambios antes de fusionarlos en main",
      "Lo mismo que git pull",
      "Una forma de eliminar ramas remotas"
    ],
    optsEn: [
      "A Git command to download code",
      "A request for others to review your changes before merging into main",
      "The same as git pull",
      "A way to delete remote branches"
    ],
    correct: 1,
    explanation:
      "Un PR es una propuesta de cambios en GitHub que permite revisión de código antes del merge.",
    explanationEn: "A PR is a proposed change on GitHub that allows code review before merging."
  },
  {
    q: "¿Qué ocurre cuando hay un conflicto de merge?",
    qEn: "What happens when there is a merge conflict?",
    opts: [
      "Git elige automáticamente la versión más reciente",
      "El repositorio se borra",
      "Git marca las líneas en conflicto y espera que tú elijas cuál conservar",
      "Se cancela el merge sin posibilidad de reintentar"
    ],
    optsEn: [
      "Git automatically picks the most recent version",
      "The repository gets deleted",
      "Git marks the conflicting lines and waits for you to choose which to keep",
      "The merge is cancelled with no way to retry"
    ],
    correct: 2,
    explanation:
      "Git marca las secciones conflictivas con <<<<<<, ======= y >>>>>>>. Tú editas el archivo y haces un nuevo commit.",
    explanationEn:
      "Git marks conflicting sections with <<<<<<, ======= and >>>>>>>. You edit the file and make a new commit."
  },
  {
    q: "¿Qué muestra el comando git log --oneline?",
    qEn: "What does git log --oneline show?",
    opts: [
      "Solo el último commit",
      "Un listado resumido de todos los commits del historial",
      "Los archivos modificados en el último commit",
      "La configuración global de Git"
    ],
    optsEn: [
      "Only the latest commit",
      "A compact list of all commits in the history",
      "The files modified in the last commit",
      "Git's global configuration"
    ],
    correct: 1,
    explanation:
      "git log --oneline muestra el historial de commits en formato compacto: hash + mensaje.",
    explanationEn: "git log --oneline shows the commit history in compact format: hash + message."
  }
];

// State
let qCurrent = 0;
let qAnswers = new Array(QUIZ_QUESTIONS.length).fill(null); // null | index chosen
let qRevealed = new Array(QUIZ_QUESTIONS.length).fill(false);

function buildQuiz() {
  qCurrent = 0;
  qAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  qRevealed = new Array(QUIZ_QUESTIONS.length).fill(false);

  // Reset result
  const res = document.getElementById("quiz-result");
  res.style.display = "none";
  res.innerHTML = "";

  // Show nav
  document.getElementById("quiz-nav").style.display = "flex";
  document.getElementById("quiz-progress-bar-wrap").style.display = "block";
  document.getElementById("quiz-progress-label").style.display = "flex";

  // Build dots
  const dotsEl = document.getElementById("quiz-dots");
  dotsEl.innerHTML = QUIZ_QUESTIONS.map(
    (_, i) => `<span class="quiz-dot" id="qdot-${i}"></span>`
  ).join("");

  // Build slides
  const viewport = document.getElementById("quiz-viewport");
  const letters = ["A", "B", "C", "D"];
  viewport.innerHTML = QUIZ_QUESTIONS.map((q, i) => {
    const lang = currentLang || "es";
    const qText = lang === "en" ? q.qEn : q.q;
    const opts = lang === "en" ? q.optsEn : q.opts;
    const optsHtml = opts
      .map(
        (o, j) => `
      <div class="quiz-opt" id="qopt-${i}-${j}" data-q="${i}" data-o="${j}" onclick="quizSelectOpt(this)">
        <span class="quiz-opt-letter">${letters[j]}</span>${o}
      </div>`
      )
      .join("");
    return `
      <div class="quiz-slide${i === 0 ? " active" : ""}" id="qslide-${i}">
        <div class="quiz-q-text">${qText}</div>
        <div class="quiz-options">${optsHtml}</div>
        <div class="quiz-feedback" id="qf-${i}"></div>
      </div>`;
  }).join("");

  quizRefreshUI();
}

function quizRefreshUI() {
  const total = QUIZ_QUESTIONS.length;

  // Progress bar
  const answered = qAnswers.filter((a) => a !== null).length;
  document.getElementById("quiz-progress-bar").style.width = (answered / total) * 100 + "%";
  const lang = currentLang || "es";
  document.getElementById("quiz-progress-text").textContent =
    lang === "en" ? `Question ${qCurrent + 1} of ${total}` : `Pregunta ${qCurrent + 1} de ${total}`;

  // Dots
  QUIZ_QUESTIONS.forEach((_, i) => {
    const dot = document.getElementById(`qdot-${i}`);
    dot.className = "quiz-dot";
    if (i === qCurrent) dot.classList.add("active");
    else if (qRevealed[i]) {
      dot.classList.add(qAnswers[i] === QUIZ_QUESTIONS[i].correct ? "correct" : "wrong");
    }
  });

  // Nav buttons
  document.getElementById("quiz-prev-btn").disabled = qCurrent === 0;
  document.getElementById("quiz-next-btn").disabled = qCurrent === total - 1;

  // Confirm button
  const confirmBtn = document.getElementById("quiz-confirm-btn");
  const lang2 = currentLang || "es";
  const labelConfirm = lang2 === "en" ? "Confirm" : "Confirmar";
  const labelNext = lang2 === "en" ? "Next →" : "Siguiente →";
  const labelResults = lang2 === "en" ? "See results" : "Ver resultados";
  if (qRevealed[qCurrent]) {
    const allRevealed = qRevealed.every(Boolean);
    if (allRevealed) {
      confirmBtn.textContent = labelResults;
      confirmBtn.disabled = false;
      confirmBtn.onclick = quizShowResults;
    } else {
      confirmBtn.textContent = qCurrent < total - 1 ? labelNext : labelResults;
      confirmBtn.disabled = false;
      confirmBtn.onclick = qCurrent < total - 1 ? quizNext : quizShowResults;
    }
  } else {
    confirmBtn.textContent = labelConfirm;
    confirmBtn.disabled = qAnswers[qCurrent] === null;
    confirmBtn.onclick = quizConfirm;
  }
}

function quizGoTo(index, direction) {
  const current = document.getElementById(`qslide-${qCurrent}`);

  // Exit current
  current.classList.remove("active");
  current.classList.add(direction === "next" ? "exit-left" : "exit-right");

  qCurrent = index;
  const next = document.getElementById(`qslide-${qCurrent}`);

  // Prepare new slide from the right or left
  next.style.transform = direction === "next" ? "translateX(60px)" : "translateX(-60px)";
  next.style.opacity = "0";
  next.style.position = "absolute";
  next.style.pointerEvents = "none";

  // Force reflow
  next.offsetHeight;

  // Transition in
  next.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  next.style.transform = "translateX(0)";
  next.style.opacity = "1";

  setTimeout(() => {
    current.classList.remove("exit-left", "exit-right");
    current.style.transform = "";
    current.style.opacity = "";

    next.classList.add("active");
    next.style.transform = "";
    next.style.opacity = "";
    next.style.position = "";
    next.style.pointerEvents = "";
    next.style.transition = "";
  }, 310);

  quizRefreshUI();
}

function quizPrev() {
  if (qCurrent > 0) quizGoTo(qCurrent - 1, "prev");
}

function quizNext() {
  if (qCurrent < QUIZ_QUESTIONS.length - 1) quizGoTo(qCurrent + 1, "next");
}

function quizSelectOpt(el) {
  if (qRevealed[qCurrent]) return;
  const i = parseInt(el.dataset.q);
  const j = parseInt(el.dataset.o);
  qAnswers[i] = j;

  document
    .querySelectorAll(`.quiz-opt[data-q="${i}"]`)
    .forEach((o) => o.classList.remove("selected-opt"));
  el.classList.add("selected-opt");

  quizRefreshUI();
}

function quizConfirm() {
  const i = qCurrent;
  if (qAnswers[i] === null) return;
  qRevealed[i] = true;

  const q = QUIZ_QUESTIONS[i];
  const chosen = qAnswers[i];
  const correct = q.correct;

  document.querySelectorAll(`.quiz-opt[data-q="${i}"]`).forEach((o) => {
    o.classList.add("disabled");
    const oj = parseInt(o.dataset.o);
    if (oj === correct) o.classList.add("correct");
    else if (oj === chosen) o.classList.add("wrong");
  });

  const fb = document.getElementById(`qf-${i}`);
  fb.className = "quiz-feedback " + (chosen === correct ? "ok" : "ko");
  const expl = currentLang === "en" && q.explanationEn ? q.explanationEn : q.explanation;
  fb.textContent = (chosen === correct ? "✓ " : "✗ ") + expl;

  quizRefreshUI();
}

function quizShowResults() {
  const total = QUIZ_QUESTIONS.length;
  const score = qAnswers.filter((a, i) => a === QUIZ_QUESTIONS[i].correct).length;
  const pct = Math.round((score / total) * 100);

  let emoji, label, bg;
  const isEn = currentLang === "en";
  if (pct === 100) {
    emoji = "🏆";
    label = isEn ? "Perfect! You're an expert" : "¡Perfecto! Eres un experto";
    bg = "var(--success-bg)";
  } else if (pct >= 70) {
    emoji = "🎉";
    label = isEn ? "Great job! You know the concepts" : "¡Muy bien! Dominas los conceptos";
    bg = "var(--accent-bg)";
  } else if (pct >= 50) {
    emoji = "📚";
    label = isEn ? "Good, but review a bit more" : "Bien, pero repasa un poco más";
    bg = "var(--warn-bg)";
  } else {
    emoji = "💡";
    label = isEn ? "Keep studying the guide" : "Sigue estudiando la guía";
    bg = "#ffebe9";
  }

  // Hide carousel and nav
  document.getElementById("quiz-viewport").style.display = "none";
  document.getElementById("quiz-nav").style.display = "none";
  document.getElementById("quiz-progress-bar-wrap").style.display = "none";
  document.getElementById("quiz-progress-label").style.display = "none";

  const wrong = total - score;
  const res = document.getElementById("quiz-result");
  res.style.background = bg;
  const isEn2 = currentLang === "en";
  res.innerHTML = `
    <div class="result-score">${emoji} ${score}/${total}</div>
    <div class="result-label">${label}</div>
    <div class="result-sub">${pct}% ${isEn2 ? "correct answers" : "de respuestas correctas"}</div>
    <div class="result-breakdown">
      <span class="result-stat stat-ok">✓ ${score} ${isEn2 ? "correct" : "correctas"}</span>
      <span class="result-stat stat-ko">✗ ${wrong} ${isEn2 ? "incorrect" : "incorrectas"}</span>
    </div>
    <button id="quiz-retry-btn" onclick="retryQuiz()">${isEn2 ? "Try again" : "Volver a intentarlo"}</button>`;
  res.style.display = "block";
}

function retryQuiz() {
  document.getElementById("quiz-viewport").style.display = "";
  buildQuiz();
}
