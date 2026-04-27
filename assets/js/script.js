  function show(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('visible');
    btn.classList.add('active');
    // Close mobile nav if open
    closeMobileNav();
    // Scroll to top so the section starts from the beginning
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  /* ── MOBILE NAV ── */
  function toggleMobileNav() {
    const scroll = document.getElementById('nav-scroll');
    const hamburger = document.getElementById('nav-hamburger');
    scroll.classList.toggle('open');
    hamburger.classList.toggle('open');
  }

  function closeMobileNav() {
    const scroll = document.getElementById('nav-scroll');
    const hamburger = document.getElementById('nav-hamburger');
    scroll.classList.remove('open');
    hamburger.classList.remove('open');
  }

  // Close nav when clicking outside
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    if (!nav.contains(e.target)) closeMobileNav();
  });

  /* ── DARK MODE ── */
  (function() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();

  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      document.getElementById('theme-icon').textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('theme-icon').textContent = '☀️';
    }
  }

  // Set correct icon on load
  document.addEventListener('DOMContentLoaded', function() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      const icon = document.getElementById('theme-icon');
      if (icon) icon.textContent = '☀️';
    }
  });

  /* ── LANGUAGE TOGGLE ── */
  let currentLang = localStorage.getItem('lang') || 'es';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update all elements with data-es / data-en
    document.querySelectorAll('[data-es][data-en]').forEach(el => {
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
    });

    // Update nav buttons
    document.querySelectorAll('.nav-btn[data-es][data-en]').forEach(btn => {
      btn.textContent = lang === 'en' ? btn.getAttribute('data-en') : btn.getAttribute('data-es');
    });

    // Update lang button label
    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Rebuild quiz with new language if it exists
    if (typeof buildQuiz === 'function') {
      buildQuiz();
    }
  }

  function toggleLang() {
    applyLang(currentLang === 'es' ? 'en' : 'es');
  }

  document.addEventListener('DOMContentLoaded', function() {
    applyLang(currentLang);
  });

  function copyCmd(el) {
    const code = el.querySelector('.cmd-code').textContent;
    const btn  = el.querySelector('.cmd-copy');
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = '¡Copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 1800);
    });
  }
/* ═══════════════════════════════
   QUIZ CAROUSEL
═══════════════════════════════ */
const QUIZ_QUESTIONS = [
  {
    q:  "¿Qué comando inicializa un repositorio Git en la carpeta actual?",
    qEn:"Which command initializes a Git repository in the current folder?",
    opts:   ["git start", "git init", "git create", "git new"],
    optsEn: ["git start", "git init", "git create", "git new"],
    correct: 1,
    explanation:   "git init crea el directorio .git que convierte la carpeta en un repositorio.",
    explanationEn: "git init creates the .git directory that turns the folder into a repository."
  },
  {
    q:  "¿Qué diferencia hay entre Git y GitHub?",
    qEn:"What is the difference between Git and GitHub?",
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
    explanation:   "Git vive en tu ordenador y gestiona versiones. GitHub es la plataforma online basada en Git.",
    explanationEn: "Git lives on your computer and manages versions. GitHub is the online platform built on top of Git."
  },
  {
    q:  "¿Qué hace git add . ?",
    qEn:"What does git add . do?",
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
    explanation:   "git add . mueve todos los cambios al área de staging, listos para el commit.",
    explanationEn: "git add . moves all changes to the staging area, ready to be committed."
  },
  {
    q:  "¿Qué comando sube tus commits al repositorio remoto?",
    qEn:"Which command pushes your commits to the remote repository?",
    opts:   ["git commit -m", "git pull origin main", "git push origin main", "git sync"],
    optsEn: ["git commit -m", "git pull origin main", "git push origin main", "git sync"],
    correct: 2,
    explanation:   "git push envía los commits locales al repositorio remoto en GitHub.",
    explanationEn: "git push sends your local commits to the remote repository on GitHub."
  },
  {
    q:  "¿Para qué sirve una rama (branch) en Git?",
    qEn:"What is a branch used for in Git?",
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
    explanation:   "Las ramas permiten desarrollar funcionalidades o correcciones de forma aislada.",
    explanationEn: "Branches allow you to develop features or fixes in isolation."
  },
  {
    q:  "¿Qué comando crea una nueva rama y cambia a ella directamente?",
    qEn:"Which command creates a new branch and switches to it immediately?",
    opts:   ["git branch nueva-rama", "git new nueva-rama", "git switch -c nueva-rama", "git checkout nueva-rama --create"],
    optsEn: ["git branch new-branch", "git new new-branch",  "git switch -c new-branch",  "git checkout new-branch --create"],
    correct: 2,
    explanation:   "git switch -c crea la rama y te cambia a ella en un solo paso.",
    explanationEn: "git switch -c creates the branch and switches to it in a single step."
  },
  {
    q:  "¿Qué hace git merge nombre-rama?",
    qEn:"What does git merge branch-name do?",
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
    explanation:   "git merge fusiona los commits de otra rama en la rama en la que estás actualmente.",
    explanationEn: "git merge integrates another branch's commits into your current branch."
  },
  {
    q:  "¿Qué es un Pull Request?",
    qEn:"What is a Pull Request?",
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
    explanation:   "Un PR es una propuesta de cambios en GitHub que permite revisión de código antes del merge.",
    explanationEn: "A PR is a proposed change on GitHub that allows code review before merging."
  },
  {
    q:  "¿Qué ocurre cuando hay un conflicto de merge?",
    qEn:"What happens when there is a merge conflict?",
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
    explanation:   "Git marca las secciones conflictivas con <<<<<<, ======= y >>>>>>>. Tú editas el archivo y haces un nuevo commit.",
    explanationEn: "Git marks conflicting sections with <<<<<<, ======= and >>>>>>>. You edit the file and make a new commit."
  },
  {
    q:  "¿Qué muestra el comando git log --oneline?",
    qEn:"What does git log --oneline show?",
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
    explanation:   "git log --oneline muestra el historial de commits en formato compacto: hash + mensaje.",
    explanationEn: "git log --oneline shows the commit history in compact format: hash + message."
  }
];

// State
let qCurrent  = 0;
let qAnswers  = new Array(QUIZ_QUESTIONS.length).fill(null); // null | index chosen
let qRevealed = new Array(QUIZ_QUESTIONS.length).fill(false);

function buildQuiz() {
  qCurrent  = 0;
  qAnswers  = new Array(QUIZ_QUESTIONS.length).fill(null);
  qRevealed = new Array(QUIZ_QUESTIONS.length).fill(false);

  // Reset result
  const res = document.getElementById('quiz-result');
  res.style.display = 'none';
  res.innerHTML = '';

  // Show nav
  document.getElementById('quiz-nav').style.display = 'flex';
  document.getElementById('quiz-progress-bar-wrap').style.display = 'block';
  document.getElementById('quiz-progress-label').style.display = 'flex';

  // Build dots
  const dotsEl = document.getElementById('quiz-dots');
  dotsEl.innerHTML = QUIZ_QUESTIONS.map((_, i) => `<span class="quiz-dot" id="qdot-${i}"></span>`).join('');

  // Build slides
  const viewport = document.getElementById('quiz-viewport');
  const letters  = ['A','B','C','D'];
  viewport.innerHTML = QUIZ_QUESTIONS.map((q, i) => {
    const lang = currentLang || 'es';
    const qText = lang === 'en' ? q.qEn : q.q;
    const opts  = lang === 'en' ? q.optsEn : q.opts;
    const optsHtml = opts.map((o, j) => `
      <div class="quiz-opt" id="qopt-${i}-${j}" data-q="${i}" data-o="${j}" onclick="quizSelectOpt(this)">
        <span class="quiz-opt-letter">${letters[j]}</span>${o}
      </div>`).join('');
    return `
      <div class="quiz-slide${i === 0 ? ' active' : ''}" id="qslide-${i}">
        <div class="quiz-q-text">${qText}</div>
        <div class="quiz-options">${optsHtml}</div>
        <div class="quiz-feedback" id="qf-${i}"></div>
      </div>`;
  }).join('');

  quizRefreshUI();
}

function quizRefreshUI() {
  const total = QUIZ_QUESTIONS.length;

  // Progress bar
  const answered = qAnswers.filter(a => a !== null).length;
  document.getElementById('quiz-progress-bar').style.width = ((answered / total) * 100) + '%';
  const lang = currentLang || 'es';
  document.getElementById('quiz-progress-text').textContent = lang === 'en'
    ? `Question ${qCurrent + 1} of ${total}`
    : `Pregunta ${qCurrent + 1} de ${total}`;

  // Dots
  QUIZ_QUESTIONS.forEach((_, i) => {
    const dot = document.getElementById(`qdot-${i}`);
    dot.className = 'quiz-dot';
    if (i === qCurrent)              dot.classList.add('active');
    else if (qRevealed[i]) {
      dot.classList.add(qAnswers[i] === QUIZ_QUESTIONS[i].correct ? 'correct' : 'wrong');
    }
  });

  // Nav buttons
  document.getElementById('quiz-prev-btn').disabled = qCurrent === 0;
  document.getElementById('quiz-next-btn').disabled = qCurrent === total - 1;

  // Confirm button
  const confirmBtn = document.getElementById('quiz-confirm-btn');
  const lang2 = currentLang || 'es';
  const labelConfirm  = lang2 === 'en' ? 'Confirm'       : 'Confirmar';
  const labelNext     = lang2 === 'en' ? 'Next →'        : 'Siguiente →';
  const labelResults  = lang2 === 'en' ? 'See results'   : 'Ver resultados';
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
  const slides = document.querySelectorAll('.quiz-slide');
  const current = document.getElementById(`qslide-${qCurrent}`);

  // Exit current
  current.classList.remove('active');
  current.classList.add(direction === 'next' ? 'exit-left' : 'exit-right');

  qCurrent = index;
  const next = document.getElementById(`qslide-${qCurrent}`);

  // Prepare new slide from the right or left
  next.style.transform = direction === 'next' ? 'translateX(60px)' : 'translateX(-60px)';
  next.style.opacity   = '0';
  next.style.position  = 'absolute';
  next.style.pointerEvents = 'none';

  // Force reflow
  next.offsetHeight;

  // Transition in
  next.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  next.style.transform  = 'translateX(0)';
  next.style.opacity    = '1';

  setTimeout(() => {
    current.classList.remove('exit-left', 'exit-right');
    current.style.transform = '';
    current.style.opacity   = '';

    next.classList.add('active');
    next.style.transform   = '';
    next.style.opacity     = '';
    next.style.position    = '';
    next.style.pointerEvents = '';
    next.style.transition  = '';
  }, 310);

  quizRefreshUI();
}

function quizPrev() {
  if (qCurrent > 0) quizGoTo(qCurrent - 1, 'prev');
}

function quizNext() {
  if (qCurrent < QUIZ_QUESTIONS.length - 1) quizGoTo(qCurrent + 1, 'next');
}

function quizSelectOpt(el) {
  if (qRevealed[qCurrent]) return;
  const i = parseInt(el.dataset.q);
  const j = parseInt(el.dataset.o);
  qAnswers[i] = j;

  document.querySelectorAll(`.quiz-opt[data-q="${i}"]`).forEach(o => o.classList.remove('selected-opt'));
  el.classList.add('selected-opt');

  quizRefreshUI();
}

function quizConfirm() {
  const i = qCurrent;
  if (qAnswers[i] === null) return;
  qRevealed[i] = true;

  const q       = QUIZ_QUESTIONS[i];
  const chosen  = qAnswers[i];
  const correct = q.correct;

  document.querySelectorAll(`.quiz-opt[data-q="${i}"]`).forEach(o => {
    o.classList.add('disabled');
    const oj = parseInt(o.dataset.o);
    if (oj === correct)        o.classList.add('correct');
    else if (oj === chosen)    o.classList.add('wrong');
  });

  const fb = document.getElementById(`qf-${i}`);
  fb.className = 'quiz-feedback ' + (chosen === correct ? 'ok' : 'ko');
  const expl = (currentLang === 'en' && q.explanationEn) ? q.explanationEn : q.explanation;
  fb.textContent = (chosen === correct ? '✓ ' : '✗ ') + expl;

  quizRefreshUI();
}

function quizShowResults() {
  const total = QUIZ_QUESTIONS.length;
  const score = qAnswers.filter((a, i) => a === QUIZ_QUESTIONS[i].correct).length;
  const pct   = Math.round((score / total) * 100);

  let emoji, label, bg;
  const isEn = currentLang === 'en';
  if (pct === 100)    { emoji = '🏆'; label = isEn ? 'Perfect! You\'re an expert' : '¡Perfecto! Eres un experto'; bg = 'var(--success-bg)'; }
  else if (pct >= 70) { emoji = '🎉'; label = isEn ? 'Great job! You know the concepts' : '¡Muy bien! Dominas los conceptos'; bg = 'var(--accent-bg)'; }
  else if (pct >= 50) { emoji = '📚'; label = isEn ? 'Good, but review a bit more' : 'Bien, pero repasa un poco más'; bg = 'var(--warn-bg)'; }
  else                { emoji = '💡'; label = isEn ? 'Keep studying the guide' : 'Sigue estudiando la guía'; bg = '#ffebe9'; }

  // Hide carousel and nav
  document.getElementById('quiz-viewport').style.display = 'none';
  document.getElementById('quiz-nav').style.display = 'none';
  document.getElementById('quiz-progress-bar-wrap').style.display = 'none';
  document.getElementById('quiz-progress-label').style.display = 'none';

  const wrong = total - score;
  const res = document.getElementById('quiz-result');
  res.style.background = bg;
  const isEn2 = currentLang === 'en';
  res.innerHTML = `
    <div class="result-score">${emoji} ${score}/${total}</div>
    <div class="result-label">${label}</div>
    <div class="result-sub">${pct}% ${isEn2 ? 'correct answers' : 'de respuestas correctas'}</div>
    <div class="result-breakdown">
      <span class="result-stat stat-ok">✓ ${score} ${isEn2 ? 'correct' : 'correctas'}</span>
      <span class="result-stat stat-ko">✗ ${wrong} ${isEn2 ? 'incorrect' : 'incorrectas'}</span>
    </div>
    <button id="quiz-retry-btn" onclick="retryQuiz()">${isEn2 ? 'Try again' : 'Volver a intentarlo'}</button>`;
  res.style.display = 'block';
}

function retryQuiz() {
  document.getElementById('quiz-viewport').style.display = '';
  buildQuiz();
}


/* ═══════════════════════════════
   SIMULADOR DE TERMINAL
═══════════════════════════════ */
const SIM_CHALLENGES = [
  {
    id: 'init',
    label: '1. Inicializar repo',
    hint: 'Inicializa un repositorio en la carpeta actual',
    command: 'git init',
    responses: {
      ok: ['Initialized empty Git repository in /mi-proyecto/.git/'],
      msg: '¡Repositorio creado! Ahora Git está vigilando esta carpeta.'
    }
  },
  {
    id: 'add',
    label: '2. Añadir archivos',
    hint: 'Añade todos los archivos al staging',
    command: 'git add .',
    responses: {
      ok: [''],
      msg: 'Archivos preparados para el commit (staging area).'
    }
  },
  {
    id: 'commit',
    label: '3. Hacer commit',
    hint: 'Crea un commit con el mensaje "primer commit"',
    command: 'git commit -m "primer commit"',
    responses: {
      ok: ['[main (root-commit) a1b2c3d] primer commit', ' 3 files changed, 42 insertions(+)'],
      msg: '¡Commit guardado! Tu código tiene su primera instantánea.'
    }
  },
  {
    id: 'branch',
    label: '4. Crear rama',
    hint: 'Crea y cambia a una rama llamada "feature/login"',
    command: 'git switch -c feature/login',
    responses: {
      ok: ["Switched to a new branch 'feature/login'"],
      msg: '¡Nueva rama creada! Ahora puedes trabajar de forma aislada.'
    }
  },
  {
    id: 'push',
    label: '5. Subir a GitHub',
    hint: 'Sube la rama "feature/login" al remoto "origin"',
    command: 'git push origin feature/login',
    responses: {
      ok: [
        'Enumerating objects: 5, done.',
        'Counting objects: 100% (5/5), done.',
        'Branch \'feature/login\' set up to track remote branch \'feature/login\' from \'origin\'.',
        'To https://github.com/usuario/mi-proyecto.git',
        ' * [new branch]  feature/login -> feature/login'
      ],
      msg: '🎉 ¡Reto completado! Tu rama ya está en GitHub.'
    }
  }
];

let simStep = 0;
let simHistory = [];

function simPrint(text, cls) {
  const out = document.getElementById('sim-output');
  const div = document.createElement('div');
  div.className = cls || '';
  div.textContent = text;
  out.appendChild(div);
  const term = document.getElementById('sim-terminal');
  term.scrollTop = term.scrollHeight;
}

function simUpdateChallengeBar() {
  const bar = document.getElementById('sim-challenge-bar');
  if (!bar) return;
  bar.innerHTML = SIM_CHALLENGES.map((c, i) => {
    let cls = 'sim-challenge';
    if (i < simStep) cls += ' done';
    else if (i === simStep) cls += ' active';
    return `<span class="${cls}">${i < simStep ? '✓ ' : ''}${c.label}</span>`;
  }).join('');
}

function simUpdateHint() {
  const hint = document.getElementById('sim-hint');
  if (!hint) return;
  if (simStep < SIM_CHALLENGES.length) {
    hint.textContent = '💡 Pista: ' + SIM_CHALLENGES[simStep].hint;
  } else {
    hint.textContent = '🏆 ¡Todos los retos completados! Eres un pro de Git.';
  }
}

function buildSimulator() {
  const input = document.getElementById('sim-input');
  if (!input) return;
  simPrint('Bienvenido al simulador de Git', 'line-info');
  simPrint('Completa los retos escribiendo los comandos correctos.', 'line-dim');
  simPrint('', '');
  simUpdateChallengeBar();
  simUpdateHint();

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const val = this.value.trim();
      if (!val) return;
      simHistory.push(val);
      simPrint('$ ' + val, 'line-cmd');
      this.value = '';
      handleSimCommand(val);
    }
    // history navigation with arrow keys
    if (e.key === 'ArrowUp' && simHistory.length) {
      this.value = simHistory[simHistory.length - 1];
    }
  });
}

function normalize(cmd) {
  return cmd.replace(/\s+/g, ' ').trim().toLowerCase();
}

function handleSimCommand(cmd) {
  if (simStep >= SIM_CHALLENGES.length) {
    simPrint('Ya completaste todos los retos. ¡Recarga la página para volver a jugar!', 'line-dim');
    return;
  }

  const challenge = SIM_CHALLENGES[simStep];
  const expected = normalize(challenge.command);
  const given    = normalize(cmd);

  // built-in helpers
  if (given === 'help' || given === 'git help') {
    simPrint('Comandos útiles: git init | git add . | git commit -m "msg" | git switch -c rama | git push origin rama', 'line-info');
    return;
  }
  if (given === 'clear' || given === 'cls') {
    document.getElementById('sim-output').innerHTML = '';
    return;
  }
  if (!given.startsWith('git')) {
    simPrint('Este es un simulador de Git. Empieza tus comandos con "git" (o escribe "help").', 'line-err');
    return;
  }

  if (given === expected) {
    challenge.responses.ok.forEach(line => { if (line) simPrint(line, 'line-ok'); });
    simPrint('✓ ' + challenge.responses.msg, 'line-info');
    simPrint('', '');
    simStep++;
    simUpdateChallengeBar();
    simUpdateHint();
    if (simStep >= SIM_CHALLENGES.length) {
      simPrint('════════════════════════════════', 'line-dim');
      simPrint('🏆 ¡FELICIDADES! Completaste todos los retos.', 'line-info');
      simPrint('Ya sabes los comandos esenciales de Git. ¡A por el mundo!', 'line-ok');
    }
  } else {
    // give hints based on partial match
    if (given.startsWith('git') && !given.includes(expected.split(' ')[1])) {
      simPrint(`Comando no reconocido en este contexto. Recuerda: ${challenge.hint}`, 'line-err');
    } else {
      simPrint('Casi... revisa la sintaxis exacta del comando.', 'line-err');
    }
  }
}

// ── LIGHTBOX ──────────────────────────────────────────────────────────────
function buildLightbox() {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.innerHTML = `
    <button id="lightbox-close" aria-label="Cerrar">&#x2715;</button>
    <img id="lightbox-img" src="" alt="">
    <p id="lightbox-caption"></p>
  `;
  document.body.appendChild(overlay);

  const lbImg     = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose   = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lbCaption.textContent = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function() { lbImg.src = ''; }, 200);
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  lbClose.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  document.querySelectorAll('.img-figure img').forEach(function (img) {
    img.addEventListener('click', function () {
      var figure  = img.closest('figure');
      var caption = figure && figure.querySelector('figcaption')
                    ? figure.querySelector('figcaption').textContent
                    : img.alt || '';
      openLightbox(img.src, caption);
    });
  });
}

(function () {
  const FILES = [
    { name: "index.js",          icon: "📄", shouldIgnore: false },
    { name: "package.json",      icon: "📦", shouldIgnore: false },
    { name: "package-lock.json", icon: "🔒", shouldIgnore: false },
    { name: ".env",              icon: "🔑", shouldIgnore: true  },
    { name: ".env.local",        icon: "🔑", shouldIgnore: true  },
    { name: "node_modules/",     icon: "📁", shouldIgnore: true  },
    { name: "dist/",             icon: "📁", shouldIgnore: true  },
    { name: "server.log",        icon: "📝", shouldIgnore: true  },
    { name: "error.log",         icon: "📝", shouldIgnore: true  },
    { name: ".DS_Store",         icon: "💻", shouldIgnore: true  },
    { name: "src/app.js",        icon: "📄", shouldIgnore: false },
    { name: "README.md",         icon: "📘", shouldIgnore: false },
  ];

  const TOTAL = FILES.filter(f => f.shouldIgnore).length;
  let hintLevel = 0;

  const HINTS = [
    "Piensa: ¿qué carpetas se generan automáticamente y nunca necesitas subir?",
    "node_modules/ y dist/ son carpetas que no se suben nunca al repositorio.",
    "Los archivos .env contienen secretos. Los .log son ruido. .DS_Store es de macOS.",
    "Prueba con: node_modules/ · dist/ · .env · .env.local · *.log · .DS_Store"
  ];

  function getRules(text) {
    return text.split("\n")
      .map(l => l.trim())
      .filter(l => l && l.charAt(0) !== "#");
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
    return rules.some(r => matchesRule(filename, r));
  }

  function renderFiles(rules) {
    const list = document.getElementById("gi-ex-file-list");
    if (!list) return;

    list.innerHTML = "";
    let correct = 0;

    FILES.forEach(f => {
      const ignored = isIgnored(f.name, rules);
      let stateClass, badgeClass, badgeText;

      if (ignored) {
        stateClass = "ignored"; 
        badgeClass = "badge-ignored"; 
        badgeText = "ignorado";
      } else if (f.shouldIgnore) {
        stateClass = "pending"; 
        badgeClass = "badge-pending"; 
        badgeText = "pendiente";
      } else {
        stateClass = "tracked"; 
        badgeClass = "badge-tracked"; 
        badgeText = "trackeado";
      }

      const item = document.createElement("div");
      item.className = `gi-ex-file-item ${stateClass}`;
      item.innerHTML =
        `<span style="font-size:14px;flex-shrink:0">${f.icon}</span>` +
        `<span class="gi-ex-file-name">${f.name}</span>` +
        `<span class="gi-ex-file-badge ${badgeClass}">${badgeText}</span>`;

      list.appendChild(item);

      if (f.shouldIgnore && ignored)  correct++;
      if (!f.shouldIgnore && ignored) correct--;
    });

    correct = Math.max(0, correct);
    const pct = Math.round((correct / TOTAL) * 100);

    const bar = document.getElementById("gi-ex-progress-bar");
    if (bar) bar.style.width = `${pct}%`;

    const lbl = document.getElementById("gi-ex-progress-label");
    if (lbl) lbl.textContent = `${correct} de ${TOTAL} archivos ignorados correctamente`;
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
      showFeedback("Ya has visto todas las pistas. ¡Inténtalo con lo que sabes!", "info");
      return;
    }

    showFeedback(HINTS[hintLevel], "info");
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

    FILES.forEach(f => {
      const ignored = isIgnored(f.name, rules);
      if (f.shouldIgnore  && !ignored) missed.push(f.name);
      if (!f.shouldIgnore && ignored)  wrong.push(f.name);
    });

    if (missed.length === 0 && wrong.length === 0) {
      showFeedback(
        "✅ ¡Perfecto! Tu .gitignore es correcto. Todos los archivos sensibles están ignorados y el código fuente queda trackeado.",
        "ok"
      );

      const expl = document.getElementById("gi-ex-explanation");
      if (expl) expl.style.display = "block";

    } else {
      let msg = "";

      if (missed.length) {
        msg += `Aún faltan por ignorar: <strong>${missed.join(", ")}</strong>.<br>`;
      }

      if (wrong.length) {
        msg += `Estás ignorando archivos que sí deberían subirse: <strong>${wrong.join(", ")}</strong>.`;
      }

      showFeedback(msg, "err");
    }
  };

  // 🚀 INIT CORREGIDO
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof buildQuiz === "function") buildQuiz();
    if (typeof buildSimulator === "function") buildSimulator();
    if (typeof buildLightbox === "function") buildLightbox();

    renderFiles([]);
  });

})();


