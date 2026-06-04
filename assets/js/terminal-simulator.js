/* ═══════════════════════════════
   SIMULADOR DE TERMINAL
═══════════════════════════════ */
const SIM_CHALLENGES = [
  {
    id: "init",
    label: "1. Inicializar repo",
    hint: "Inicializa un repositorio en la carpeta actual",
    command: "git init",
    responses: {
      ok: ["Initialized empty Git repository in /mi-proyecto/.git/"],
      msg: "¡Repositorio creado! Ahora Git está vigilando esta carpeta."
    }
  },
  {
    id: "add",
    label: "2. Añadir archivos",
    hint: "Añade todos los archivos al staging",
    command: "git add .",
    responses: {
      ok: [""],
      msg: "Archivos preparados para el commit (staging area)."
    }
  },
  {
    id: "commit",
    label: "3. Hacer commit",
    hint: 'Crea un commit con el mensaje "primer commit"',
    command: 'git commit -m "primer commit"',
    responses: {
      ok: ["[main (root-commit) a1b2c3d] primer commit", " 3 files changed, 42 insertions(+)"],
      msg: "¡Commit guardado! Tu código tiene su primera instantánea."
    }
  },
  {
    id: "branch",
    label: "4. Crear rama",
    hint: 'Crea y cambia a una rama llamada "feature/login"',
    command: "git switch -c feature/login",
    responses: {
      ok: ["Switched to a new branch 'feature/login'"],
      msg: "¡Nueva rama creada! Ahora puedes trabajar de forma aislada."
    }
  },
  {
    id: "push",
    label: "5. Subir a GitHub",
    hint: 'Sube la rama "feature/login" al remoto "origin"',
    command: "git push origin feature/login",
    responses: {
      ok: [
        "Enumerating objects: 5, done.",
        "Counting objects: 100% (5/5), done.",
        "Branch 'feature/login' set up to track remote branch 'feature/login' from 'origin'.",
        "To https://github.com/usuario/mi-proyecto.git",
        " * [new branch]  feature/login -> feature/login"
      ],
      msg: "🎉 ¡Reto completado! Tu rama ya está en GitHub."
    }
  }
];

let simStep = 0;
let simHistory = [];

function simPrint(text, cls) {
  const out = document.getElementById("sim-output");
  const div = document.createElement("div");
  div.className = cls || "";
  div.textContent = text;
  out.appendChild(div);
  const term = document.getElementById("sim-terminal");
  term.scrollTop = term.scrollHeight;
}

function simUpdateChallengeBar() {
  const bar = document.getElementById("sim-challenge-bar");
  if (!bar) return;
  bar.innerHTML = SIM_CHALLENGES.map((c, i) => {
    let cls = "sim-challenge";
    if (i < simStep) cls += " done";
    else if (i === simStep) cls += " active";
    return `<span class="${cls}">${i < simStep ? "✓ " : ""}${uiTranslate(c.label)}</span>`;
  }).join("");
}

function simUpdateHint() {
  const hint = document.getElementById("sim-hint");
  if (!hint) return;
  if (simStep < SIM_CHALLENGES.length) {
    hint.textContent =
      uiText("💡 Pista: ", "💡 Hint: ") + uiTranslate(SIM_CHALLENGES[simStep].hint);
  } else {
    hint.textContent = uiTranslate("🏆 ¡Todos los retos completados! Eres un pro de Git.");
  }
}

function buildSimulator() {
  const input = document.getElementById("sim-input");
  if (!input) return;
  simPrint(uiTranslate("Bienvenido al simulador de Git"), "line-info");
  simPrint(uiTranslate("Completa los retos escribiendo los comandos correctos."), "line-dim");
  simPrint("", "");
  simUpdateChallengeBar();
  simUpdateHint();

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const val = this.value.trim();
      if (!val) return;
      simHistory.push(val);
      simPrint("$ " + val, "line-cmd");
      this.value = "";
      handleSimCommand(val);
    }
    // history navigation with arrow keys
    if (e.key === "ArrowUp" && simHistory.length) {
      this.value = simHistory[simHistory.length - 1];
    }
  });
}

function normalize(cmd) {
  return cmd.replace(/\s+/g, " ").trim().toLowerCase();
}

function handleSimCommand(cmd) {
  if (simStep >= SIM_CHALLENGES.length) {
    simPrint(
      uiTranslate("Ya completaste todos los retos. ¡Recarga la página para volver a jugar!"),
      "line-dim"
    );
    return;
  }

  const challenge = SIM_CHALLENGES[simStep];
  const expected = normalize(challenge.command);
  const given = normalize(cmd);

  // built-in helpers
  if (given === "help" || given === "git help") {
    simPrint(
      uiTranslate(
        'Comandos útiles: git init | git add . | git commit -m "msg" | git switch -c rama | git push origin rama'
      ),
      "line-info"
    );
    return;
  }
  if (given === "clear" || given === "cls") {
    document.getElementById("sim-output").innerHTML = "";
    return;
  }
  if (!given.startsWith("git")) {
    simPrint(
      uiTranslate(
        'Este es un simulador de Git. Empieza tus comandos con "git" (o escribe "help").'
      ),
      "line-err"
    );
    return;
  }

  if (given === expected) {
    challenge.responses.ok.forEach((line) => {
      if (line) simPrint(line, "line-ok");
    });
    simPrint("✓ " + uiTranslate(challenge.responses.msg), "line-info");
    simPrint("", "");
    simStep++;
    simUpdateChallengeBar();
    simUpdateHint();
    if (simStep >= SIM_CHALLENGES.length) {
      simPrint("════════════════════════════════", "line-dim");
      simPrint(uiTranslate("🏆 ¡FELICIDADES! Completaste todos los retos."), "line-info");
      simPrint(uiTranslate("Ya sabes los comandos esenciales de Git. ¡A por el mundo!"), "line-ok");
    }
  } else {
    // give hints based on partial match
    if (given.startsWith("git") && !given.includes(expected.split(" ")[1])) {
      simPrint(
        uiTranslate("Comando no reconocido en este contexto. Recuerda: ") +
          uiTranslate(challenge.hint),
        "line-err"
      );
    } else {
      simPrint(uiTranslate("Casi... revisa la sintaxis exacta del comando."), "line-err");
    }
  }
}
