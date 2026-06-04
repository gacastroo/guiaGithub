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
/* ═══════════════════════════════
   LANGUAGE TOGGLE / I18N
═══════════════════════════════ */
let currentLang =
  localStorage.getItem("lang") || localStorage.getItem("site-lang") || "es";

const STATIC_TRANSLATIONS = {
  "🌐 EN": "🌐 EN",
  '"Git es el cerebro 🧠 , GitHub es la red social 🌐 ."':
    '"Git is the brain 🧠, GitHub is the social network 🌐."',
  '"Git guarda tu código, GitHub lo presume."':
    '"Git saves your code, GitHub shows it off."',
  "Comparativa visual entre Git y GitHub":
    "Visual comparison between Git and GitHub",
  Git: "Git",
  "Software local (en tu ordenador)": "Local software (on your computer)",
  "Control de versiones": "Version control",
  "Guarda instantáneas del proyecto": "Saves snapshots of the project",
  "Ideal para uso individual": "Ideal for individual use",
  "Funciona sin internet": "Works without internet",
  GitHub: "GitHub",
  "Plataforma web": "Web platform",
  "Colaboración en equipo": "Team collaboration",
  "Basado en Git": "Based on Git",
  "Gestión de proyectos": "Project management",
  "Red social para código": "Social network for code",
  "Un sistema que permite gestionar y rastrear los cambios en el código fuente a lo largo del tiempo, facilitando la colaboración y el desarrollo eficiente de software.":
    "A system that lets you manage and track changes in source code over time, making collaboration and efficient software development easier.",
  "Descarga Git desde su página oficial e instálalo en tu sistema operativo.":
    "Download Git from its official website and install it on your operating system.",
  "Página oficial de Git": "Official Git website",
  "Instalación y primeros pasos con Git":
    "Installation and first steps with Git",
  Esencial: "Essential",
  Recomendado: "Recommended",
  "1 · Configuración inicial": "1 · Initial setup",
  "Una vez que has instalado Git, es recomendable configurar tu nombre de usuario y correo electrónico:":
    "Once you have installed Git, it is recommended to configure your username and email address:",
  "Configura tu nombre de usuario": "Sets your username",
  Copiar: "Copy",
  "Configura tu correo electrónico": "Sets your email address",
  "2 · Iniciar un proyecto": "2 · Start a project",
  "Crea un repositorio nuevo en la carpeta actual":
    "Creates a new repository in the current folder",
  "Crea una nueva conexión a un repositorio remoto.":
    "Creates a new connection to a remote repository.",
  "Descarga un repositorio existente": "Downloads an existing repository",
  "Descarga los cambios del repositorio remoto":
    "Downloads changes from the remote repository",
  "3 · El ciclo diario": "3 · The daily workflow",
  "Muestra qué ha cambiado": "Shows what has changed",
  "Prepara todos los cambios para el commit":
    "Stages all changes for the commit",
  "Guarda los cambios en el historial": "Saves the changes in the history",
  "Sube los cambios a GitHub": "Uploads changes to GitHub",
  "Baja los cambios del remoto": "Pulls changes from the remote",
  "4 · Ramas": "4 · Branches",
  "Crea y cambia a una rama nueva": "Creates and switches to a new branch",
  "Vuelve a la rama principal": "Switches back to the main branch",
  "Une la rama con la actual": "Merges the branch into the current one",
  "5 · Si algo va mal": "5 · If something goes wrong",
  "Ver historial de commits resumido": "View a summarized commit history",
  "Descartar cambios en un archivo": "Discard changes in a file",
  "Quitar un archivo del staging": "Remove a file from staging",
  "Repositorio Local: Es la carpeta en tu ordenador. Es donde editas tus archivos día a día. GitHub no ve esto hasta que tú lo envías.":
    "Local Repository: This is the folder on your computer. It is where you edit your files day to day. GitHub does not see it until you send it.",
  "Repositorio Remoto: Es la copia en los servidores de GitHub. Es tu respaldo en la nube y el lugar donde los demás ven tu código.":
    "Remote Repository: This is the copy on GitHub's servers. It is your cloud backup and the place where others can see your code.",
  "💾 Se guarda en tu computadora": "💾 Saved on your computer",
  "☁️ Ahora está en internet": "☁️ Now it is on the internet",
  "Acceder a la creación de un nuevo repositorio":
    "Access the new repository creation screen",
  "Formulario para configurar el nuevo repositorio":
    "Form to configure the new repository",
  "Repositorio creado correctamente en GitHub":
    "Repository created successfully on GitHub",
  "Entra al repositorio en GitHub.": "Open the repository on GitHub.",
  "Haz clic en el botón verde Code y copia la URL del repositorio.":
    "Click the green Code button and copy the repository URL.",
  "Abre la terminal en VS Code con Ctrl + Ñ o desde Terminal → New Terminal .":
    "Open the terminal in VS Code with Ctrl + Ñ or from Terminal → New Terminal.",
  "Ve a la carpeta donde quieres guardar el proyecto, por ejemplo:":
    "Go to the folder where you want to save the project, for example:",
  "Después, ejecuta el comando git clone :": "Then run the git clone command:",
  "Entra dentro de la carpeta que se acaba de descargar:":
    "Enter the folder that was just downloaded:",
  "Al clonar un repositorio, Git crea automáticamente la conexión con GitHub. Esa conexión se llama normalmente origin .":
    "When you clone a repository, Git automatically creates the connection with GitHub. That connection is usually called origin.",
  "Puedes comprobarlo con:": "You can check it with:",
  "Si todo está correcto, verás algo parecido a esto:":
    "If everything is correct, you will see something like this:",
  "Usa esta opción si ya tienes tu proyecto creado en tu computadora y quieres conectarlo con un repositorio nuevo de GitHub.":
    "Use this option if you already have your project created on your computer and want to connect it to a new GitHub repository.",
  "Crea un repositorio nuevo en GitHub.": "Create a new repository on GitHub.",
  "Copia la URL del repositorio. Será parecida a esta:":
    "Copy the repository URL. It will look similar to this:",
  "Abre tu proyecto en VS Code y asegúrate de estar dentro de la carpeta correcta en la terminal.":
    "Open your project in VS Code and make sure you are inside the correct folder in the terminal.",
  "Ahora ejecuta estos comandos en orden:": "Now run these commands in order:",
  "¿Qué hace cada comando?": "What does each command do?",
  "Resumen fácil: git clone descarga un proyecto que ya existe en GitHub. git remote add origin conecta una carpeta local con un repositorio remoto.":
    "Simple summary: git clone downloads a project that already exists on GitHub. git remote add origin connects a local folder to a remote repository.",
  "Después de hacer esto una vez, tu flujo diario será:":
    "After doing this once, your daily workflow will be:",
  "Nota: sustituye usuario y nombre-repositorio por los datos reales de tu cuenta y de tu repositorio.":
    "Note: replace usuario and nombre-repositorio with the real details of your account and repository.",
  "Vincular GitHub con VS Code:": "Link GitHub with VS Code:",
  'Instala la extensión "GitHub Pull Requests and Issues" .':
    'Install the "GitHub Pull Requests and Issues" extension.',
  'Haz clic en el icono de usuario (abajo a la izquierda) → "Sign in to GitHub" y autoriza la conexión.':
    'Click the user icon (bottom left) → "Sign in to GitHub" and authorize the connection.',
  "Hacer cambios (Flujo diario):": "Making changes (Daily workflow):",
  "Edita tus archivos y guárdalos.": "Edit your files and save them.",
  "Ve a la pestaña de Source Control (icono de nodos a la izquierda).":
    "Go to the Source Control tab (branch icon on the left).",
  'Haz clic en el "+" para preparar los cambios (Stage).':
    'Click the "+" to stage the changes.',
  "Escribe un mensaje de commit y presiona el botón Commit .":
    "Write a commit message and press the Commit button.",
  "Haz clic en Sync Changes (o Push) para enviar todo a GitHub.":
    "Click Sync Changes (or Push) to send everything to GitHub.",
  "Para usar la terminal en VS Code, presiona Ctrl + Ñ o ve al menú Terminal → New Terminal . Una vez abierta, ejecuta estos comandos en orden:":
    "To use the terminal in VS Code, press Ctrl + Ñ or go to Terminal → New Terminal. Once it is open, run these commands in order:",
  "Nota: Asegúrate de estar dentro de la carpeta de tu proyecto en la terminal antes de escribir estos comandos.":
    "Note: Make sure you are inside your project folder in the terminal before typing these commands.",
  "Estructura de un commit": "Commit structure",
  Tipos: "Types",
  feat: "feat",
  "Nueva funcionalidad": "New feature",
  fix: "fix",
  "Corrección de bugs": "Bug fix",
  perf: "perf",
  "Mejora de rendimiento": "Performance improvement",
  refactor: "refactor",
  "Cambio interno sin afectar comportamiento":
    "Internal change without affecting behavior",
  style: "style",
  "Formato (espacios, tabs, etc.)": "Formatting (spaces, tabs, etc.)",
  docs: "docs",
  Documentación: "Documentation",
  test: "test",
  Tests: "Tests",
  build: "build",
  "Build, dependencias, scripts": "Build, dependencies, scripts",
  ci: "ci",
  "Integración continua": "Continuous integration",
  Reglas: "Rules",
  'Imperativo → "add", "fix", "update"': 'Imperative → "add", "fix", "update"',
  "Máximo ~50 caracteres": "Maximum ~50 characters",
  "Sin punto final": "No final period",
  "1 commit = 1 cambio": "1 commit = 1 change",
  "Mensaje claro: qué y por qué": "Clear message: what and why",
  '"Una rama es como una copia paralela de tu proyecto donde puedes experimentar sin miedo a romper nada."':
    '"A branch is like a parallel copy of your project where you can experiment without fear of breaking anything."',
  '"La rama main es el tronco del árbol. El resto son ramas que crecen a los lados."':
    '"The main branch is the tree trunk. The others are branches that grow from the sides."',
  "Crear y navegar": "Create and navigate",
  "Crea una rama nueva y cambia a ella directamente":
    "Creates a new branch and switches to it directly",
  "Cambia a una rama ya existente": "Switches to an existing branch",
  "Lista todas las ramas locales (la activa aparece con *)":
    "Lists all local branches (the active one appears with *)",
  "Lista ramas locales Y remotas": "Lists local AND remote branches",
  "Fusionar y eliminar": "Merge and delete",
  "Fusiona la rama indicada en la rama actual":
    "Merges the specified branch into the current branch",
  "Consecuencias de hacer un merge": "Consequences of merging",
  "Los commits de la rama fusionada quedan integrados permanentemente en la rama destino.":
    "The commits from the merged branch become permanently integrated into the target branch.",
  "Puede generar conflictos de merge si ambas ramas modificaron las mismas líneas. Tendrás que resolverlos manualmente antes de continuar.":
    "It can create merge conflicts if both branches modified the same lines. You will need to resolve them manually before continuing.",
  "Una vez resueltos los conflictos y confirmado el merge, no se puede deshacer fácilmente (requiere git revert o git reset con cuidado).":
    "Once conflicts are resolved and the merge is confirmed, it cannot be easily undone (it requires git revert or careful use of git reset).",
  "En proyectos compartidos, un merge directo sin Pull Request puede saltarse la revisión del equipo.":
    "In shared projects, a direct merge without a Pull Request can bypass team review.",
  "Asegúrate de estar en la rama correcta antes de ejecutarlo ( git branch para comprobarlo).":
    "Make sure you are on the correct branch before running it (use git branch to check).",
  "Elimina una rama local (solo si ya fue fusionada)":
    "Deletes a local branch (only if it has already been merged)",
  "Consecuencias de eliminar una rama local":
    "Consequences of deleting a local branch",
  "Una vez eliminada la rama local sin haber hecho push, los commits exclusivos de esa rama se pierden .":
    "Once the local branch is deleted without being pushed, the commits that only existed on that branch are lost.",
  "Si otro compañero tenía esa rama como referencia, deberá actualizar su repositorio local.":
    "If another teammate had that branch as a reference, they will need to update their local repository.",
  "Elimina la rama también del repositorio remoto":
    "Deletes the branch from the remote repository too",
  "Consecuencias de eliminar una rama remota":
    "Consequences of deleting a remote branch",
  "La rama desaparece del repositorio remoto para todos los colaboradores del proyecto.":
    "The branch disappears from the remote repository for all project collaborators.",
  "Cualquier Pull Request abierto basado en esa rama quedará automáticamente cerrado o huérfano .":
    "Any open Pull Request based on that branch will be automatically closed or orphaned.",
  "Los compañeros que tengan la rama en local recibirán errores al hacer git fetch o git pull si intentan actualizarla.":
    "Teammates who have the branch locally will get errors when running git fetch or git pull if they try to update it.",
  "La acción no tiene confirmación previa : se ejecuta de inmediato. Confirma bien el nombre antes de lanzar el comando.":
    "This action has no prior confirmation: it runs immediately. Double-check the name before running the command.",
  "Sube tu rama con git push origin nombre-rama":
    "Push your branch with git push origin branch-name",
  'En GitHub, aparece un botón "Compare & pull request" — haz clic':
    'On GitHub, a "Compare & pull request" button appears — click it',
  "Escribe una descripción de qué cambios hiciste y por qué":
    "Write a description of what changes you made and why",
  "Tus compañeros revisan, comentan y aprueban (o piden cambios)":
    "Your teammates review, comment, and approve (or request changes)",
  'Cuando todo está bien, se hace clic en "Merge pull request" ✅':
    'When everything is OK, click "Merge pull request" ✅',
  "Git marcará el conflicto así en el archivo:":
    "Git will mark the conflict like this in the file:",
  Patrón: "Pattern",
  Significado: "Meaning",
  "Ignora toda la carpeta de dependencias":
    "Ignores the entire dependencies folder",
  "Ignora cualquier archivo con extensión .log":
    "Ignores any file with the .log extension",
  "Ignora el archivo de variables de entorno sensibles":
    "Ignores the sensitive environment variables file",
  "Ignora la carpeta de archivos generados en el build":
    "Ignores the folder of files generated during the build",
  "JavaScript / Node.js": "JavaScript / Node.js",
  "Por qué se ignora": "Why it is ignored",
  "Contiene todas las dependencias del proyecto. Pueden pesar cientos de MB y se reinstalan fácilmente con npm install .":
    "Contains all project dependencies. They can weigh hundreds of MB and are easily reinstalled with npm install.",
  "npm-debug.log* yarn-debug.log*": "npm-debug.log* yarn-debug.log*",
  "Logs generados automáticamente cuando ocurre un error durante la instalación. Son locales y no aportan nada al repositorio.":
    "Logs generated automatically when an error occurs during installation. They are local and add no value to the repository.",
  "Contiene variables de entorno sensibles: claves de API, credenciales de bases de datos, contraseñas. Subirlo supone un grave riesgo de seguridad.":
    "Contains sensitive environment variables: API keys, database credentials, passwords. Uploading it is a serious security risk.",
  "Carpetas generadas por el proceso de compilación o transpilación (Webpack, Vite…). Se regeneran a partir del código fuente, no tiene sentido versionar su contenido.":
    "Folders generated by the compilation or transpilation process (Webpack, Vite…). They are regenerated from source code, so versioning their contents does not make sense.",
  Python: "Python",
  "Carpeta que Python genera automáticamente para almacenar módulos en caché y acelerar su carga. Es específica de cada máquina y sistema operativo.":
    "Folder that Python automatically generates to store cached modules and speed up loading. It is specific to each machine and operating system.",
  "Archivos de bytecode generados al interpretar los .py . No son código fuente y varían entre versiones de Python y entre sistemas.":
    "Bytecode files generated when interpreting .py files. They are not source code and vary between Python versions and systems.",
  "Contiene variables de entorno sensibles que nunca deben compartirse públicamente.":
    "Contains sensitive environment variables that should never be shared publicly.",
  "venv/": "venv/",
  "Entorno virtual local con las dependencias instaladas. Cada desarrollador crea el suyo con python -m venv venv . Contiene rutas absolutas que causan conflictos entre máquinas.":
    "Local virtual environment with installed dependencies. Each developer creates their own with python -m venv venv. It contains absolute paths that cause conflicts between machines.",
  "Carpetas generadas al empaquetar el proyecto (con setuptools o pyinstaller ). Se regeneran fácilmente y no deben versionarse.":
    "Folders generated when packaging the project (with setuptools or pyinstaller). They are easily regenerated and should not be versioned.",
  Java: "Java",
  "Carpeta donde Maven o Gradle depositan todos los archivos generados durante la compilación. Se regenera completamente al construir el proyecto.":
    "Folder where Maven or Gradle place all files generated during compilation. It is fully regenerated when building the project.",
  "Bytecode compilado por javac a partir del código fuente .java . Es específico de la máquina virtual y se regenera en cada compilación.":
    "Bytecode compiled by javac from .java source code. It is specific to the virtual machine and is regenerated on every build.",
  "Artefacto empaquetado con el código compilado y sus dependencias. Es la salida del build, no código fuente. Se regenera con mvn package o gradle build .":
    "Packaged artifact containing compiled code and its dependencies. It is build output, not source code. It is regenerated with mvn package or gradle build.",
  "Similar al .jar pero para aplicaciones web Java desplegadas en servidores como Tomcat. También es un artefacto de build, no fuente.":
    "Similar to .jar, but for Java web applications deployed on servers like Tomcat. It is also a build artifact, not source.",
  "Registros de ejecución generados localmente durante pruebas o el servidor. Son específicos de cada entorno y no aportan valor al repositorio.":
    "Execution logs generated locally during tests or by the server. They are environment-specific and add no value to the repository.",
  PHP: "PHP",
  "Carpeta donde Composer instala todas las dependencias. Puede ser muy pesada y se restaura completamente ejecutando composer install a partir del composer.lock .":
    "Folder where Composer installs all dependencies. It can be very heavy and is fully restored by running composer install from composer.lock.",
  "Archivos de log generados por el servidor web (Apache, Nginx) o el framework (Laravel, Symfony). Son locales y no deben versionarse.":
    "Log files generated by the web server (Apache, Nginx) or framework (Laravel, Symfony). They are local and should not be versioned.",
  "Contiene configuración sensible del entorno: credenciales de base de datos, claves de cifrado, tokens de servicios externos. Nunca debe subirse al repositorio.":
    "Contains sensitive environment configuration: database credentials, encryption keys, external service tokens. It should never be uploaded to the repository.",
  "Documentación oficial de Git sobre .gitignore: Documentación oficial de Git sobre .gitignore":
    "Official Git documentation about .gitignore: Official Git documentation about .gitignore",
  "Documentación oficial de Git sobre .gitignore":
    "Official Git documentation about .gitignore",
  "Generador de .gitignore en línea: Generador de .gitignore en línea":
    "Online .gitignore generator: Online .gitignore generator",
  "Generador de .gitignore en línea": "Online .gitignore generator",
  "Plantillas de .gitignore en GitHub: Plantillas de .gitignore en GitHub":
    "GitHub .gitignore templates: GitHub .gitignore templates",
  "Plantillas de .gitignore en GitHub": "GitHub .gitignore templates",
  "Pon a prueba lo que has aprendido. Una pregunta a la vez.":
    "Test what you have learned. One question at a time.",
  "Pregunta 1 de 10": "Question 1 of 10",
  "← Anterior Confirmar Siguiente →": "← Previous Confirm Next →",
  "← Anterior": "← Previous",
  Confirmar: "Confirm",
  "Siguiente →": "Next →",
  "Practica los comandos reales de Git en un terminal simulado. Completa los 5 retos para ganar.":
    "Practice real Git commands in a simulated terminal. Complete the 5 challenges to win.",
  "Tienes un proyecto Node.js. Escribe las reglas correctas en el .gitignore para que solo queden los archivos de código fuente. Observa cómo cambia el estado de cada archivo en tiempo real.":
    "You have a Node.js project. Write the correct rules in the .gitignore so that only the source code files remain. Watch each file status change in real time.",
  "0 de 6 archivos ignorados correctamente": "0 of 6 files ignored correctly",
  "📁 Archivos del proyecto": "📁 Project files",
  "📄 .gitignore": "📄 .gitignore",
  "# escribe tus reglas aquí, una por línea":
    "# write your rules here, one per line",
  "💡 Ver pista 🔄 Reiniciar Comprobar solución ✓":
    "💡 Show hint 🔄 Restart Check solution ✓",
  "💡 Ver pista": "💡 Show hint",
  "🔄 Reiniciar": "🔄 Restart",
  "Comprobar solución ✓": "Check solution ✓",
  "¿Por qué estas reglas?": "Why these rules?",
  "Carpeta de dependencias. Puede pesar cientos de MB y se reinstala con npm install .":
    "Dependencies folder. It can weigh hundreds of MB and is reinstalled with npm install.",
  "Salida del build (Webpack, Vite…). Se regenera a partir del código fuente.":
    "Build output (Webpack, Vite…). It is regenerated from the source code.",
  "Variables de entorno sensibles: claves API, credenciales. Nunca debe subirse.":
    "Sensitive environment variables: API keys, credentials. It should never be uploaded.",
  "Variante local del .env, igualmente sensible y específica de cada máquina.":
    "Local variant of .env, equally sensitive and specific to each machine.",
  "Comodín que ignora todos los archivos .log. Son registros locales de ejecución.":
    "Wildcard that ignores all .log files. They are local execution logs.",
  "Metadatos internos de macOS. No aportan nada al repositorio.":
    "Internal macOS metadata. It adds nothing to the repository.",
  "Vista general de la integración de Git en VS Code":
    "Overview of Git integration in VS Code",
  "Cuando editas un archivo, VS Code lo marca automáticamente en el explorador de archivos con una letra:":
    "When you edit a file, VS Code automatically marks it in the file explorer with a letter:",
  "M (Modified) — archivo modificado.": "M (Modified) — modified file.",
  "U (Untracked) — archivo nuevo que Git aún no conoce.":
    "U (Untracked) — new file that Git does not know yet.",
  "D (Deleted) — archivo eliminado.": "D (Deleted) — deleted file.",
  "En el panel Source Control verás los mismos archivos agrupados en dos secciones: Changes (cambios sin preparar) y Staged Changes (cambios listos para el commit).":
    "In the Source Control panel, you will see the same files grouped into two sections: Changes (unstaged changes) and Staged Changes (changes ready for commit).",
  "El panel Source Control lista todos los archivos con cambios pendientes":
    "The Source Control panel lists all files with pending changes",
  "Antes de hacer un commit debes preparar los archivos que quieres incluir. En VS Code tienes dos formas de hacerlo:":
    "Before making a commit, you must stage the files you want to include. In VS Code, there are two ways to do this:",
  "Haz clic en el icono + que aparece al pasar el ratón por encima de un archivo en la sección Changes para añadirlo individualmente.":
    "Click the + icon that appears when you hover over a file in the Changes section to add it individually.",
  "Haz clic en el + junto al encabezado Changes para preparar todos los archivos a la vez.":
    "Click the + next to the Changes heading to stage all files at once.",
  "Los archivos preparados se moverán a la sección Staged Changes . Si cambias de opinión, haz clic en el icono − para retirarlos del stage.":
    "Staged files will move to the Staged Changes section. If you change your mind, click the − icon to unstage them.",
  "Haz clic en + para mover un archivo a Staged Changes":
    "Click + to move a file to Staged Changes",
  'Una vez preparados los archivos, escribe un mensaje descriptivo en el campo de texto que dice "Message (Ctrl+Enter to commit)" y pulsa Ctrl+Enter (o haz clic en el botón Commit ✔ ). El commit quedará registrado en el historial local de tu repositorio.':
    'Once the files are staged, write a descriptive message in the text field that says "Message (Ctrl+Enter to commit)" and press Ctrl+Enter (or click the Commit ✔ button). The commit will be recorded in your local repository history.',
  'Consejo: Un buen mensaje de commit responde a la pregunta "¿Qué hace este cambio?", por ejemplo: Añade formulario de contacto .':
    'Tip: A good commit message answers the question "What does this change do?", for example: Add contact form.',
  "Escribe el mensaje y pulsa Ctrl+Enter para confirmar el commit":
    "Write the message and press Ctrl+Enter to confirm the commit",
  "En la esquina inferior izquierda de VS Code verás el nombre de la rama actual (normalmente main o master ). Haz clic sobre él para abrir el menú de ramas y selecciona Create new branch… . Escribe el nombre de tu nueva rama (por ejemplo, feature/formulario-contacto ) y pulsa Enter .":
    "In the bottom-left corner of VS Code, you will see the name of the current branch (usually main or master). Click it to open the branch menu and select Create new branch…. Type the name of your new branch (for example, feature/contact-form) and press Enter.",
  "VS Code creará la rama y cambiará a ella automáticamente. Todos los commits que hagas a partir de ahora irán a esta rama sin afectar a main .":
    "VS Code will create the branch and switch to it automatically. All commits you make from now on will go to this branch without affecting main.",
  "Haz clic en el nombre de la rama (barra inferior) para ver todas las opciones de rama":
    "Click the branch name (bottom bar) to see all branch options",
  "Desde el mismo menú de la barra de estado puedes seleccionar cualquier rama existente para cambiar a ella. VS Code actualizará los archivos del proyecto al estado de esa rama de forma instantánea.":
    "From the same status bar menu, you can select any existing branch to switch to it. VS Code will instantly update the project files to that branch state.",
  "La lista muestra todas las ramas locales; haz clic en una para cambiarte a ella":
    "The list shows all local branches; click one to switch to it",
  "Cuando tu funcionalidad esté lista y quieras incorporarla a main , sigue estos pasos dentro de VS Code:":
    "When your feature is ready and you want to merge it into main, follow these steps in VS Code:",
  "Cambia a la rama de destino ( main ) usando la barra de estado inferior.":
    "Switch to the target branch (main) using the bottom status bar.",
  "Abre la paleta de comandos con Ctrl+Shift+P y escribe Git: Merge Branch… .":
    "Open the command palette with Ctrl+Shift+P and type Git: Merge Branch….",
  "Selecciona la rama que quieres fusionar (p. ej., feature/formulario-contacto ).":
    "Select the branch you want to merge (e.g., feature/contact-form).",
  "Si no hay conflictos, VS Code completará el merge automáticamente y los cambios quedarán integrados en main .":
    "If there are no conflicts, VS Code will complete the merge automatically and the changes will be integrated into main.",
  'Busca "Git: Merge Branch" en la paleta de comandos para iniciar la fusión':
    'Search for "Git: Merge Branch" in the command palette to start the merge',
  "Cuando se produce un conflicto, VS Code marca el archivo con una C roja en el explorador y en el panel Source Control. Al abrirlo, verás el código dividido en bloques con marcadores especiales:":
    "When a conflict occurs, VS Code marks the file with a red C in the explorer and in the Source Control panel. When you open it, you will see the code divided into blocks with special markers:",
  "<<<<<<< HEAD — inicio de tu versión (rama actual).":
    "<<<<<<< HEAD — start of your version (current branch).",
  "======= — separador entre las dos versiones.":
    "======= — separator between the two versions.",
  ">>>>>>> feature/… — inicio de la versión entrante (rama que estás fusionando).":
    ">>>>>>> feature/… — start of the incoming version (the branch you are merging).",
  "VS Code resalta visualmente los bloques en conflicto con colores diferenciados":
    "VS Code visually highlights conflict blocks with different colors",
  "Encima de cada bloque en conflicto aparecen cuatro acciones rápidas. Elige la que mejor se adapte a tu caso:":
    "Above each conflict block, four quick actions appear. Choose the one that best fits your case:",
  "Accept Current Change — conserva únicamente tu versión (HEAD).":
    "Accept Current Change — keeps only your version (HEAD).",
  "Accept Incoming Change — conserva únicamente la versión de la otra rama .":
    "Accept Incoming Change — keeps only the version from the other branch.",
  "Accept Both Changes — incluye las dos versiones, una detrás de la otra.":
    "Accept Both Changes — includes both versions, one after the other.",
  "Compare Changes — abre una vista de diferencias en dos paneles para decidir con más calma.":
    "Compare Changes — opens a two-panel diff view so you can decide more carefully.",
  "También puedes editar el archivo manualmente: simplemente borra los marcadores ( <<< , === , >>> ) y deja el código exactamente como quieres que quede.":
    "You can also edit the file manually: simply delete the markers (<<<, ===, >>>) and leave the code exactly as you want it.",
  "Una vez resueltos todos los conflictos del archivo, guárdalo ( Ctrl+S ). VS Code dejará de marcarlo con la C roja. Repite el proceso con cada archivo en conflicto y, cuando todos estén limpios, ve al panel Source Control y realiza un commit para cerrar el merge:":
    "Once all conflicts in the file are resolved, save it (Ctrl+S). VS Code will stop marking it with the red C. Repeat the process with each conflicted file and, when all are clean, go to the Source Control panel and make a commit to close the merge:",
  "Prepara los archivos resueltos con + .": "Stage the resolved files with +.",
  "Escribe un mensaje como Merge feature/formulario-contacto en main .":
    "Write a message such as Merge feature/contact-form into main.",
  "Pulsa Ctrl+Enter para confirmar.": "Press Ctrl+Enter to confirm.",
  "Tras resolver todos los conflictos, un commit final cierra el proceso de merge":
    "After resolving all conflicts, a final commit closes the merge process",
  "© 2026 Guía de GitHub · Guillermo Castro Abarca":
    "© 2026 GitHub Guide · Guillermo Castro Abarca",
  "Guillermo Castro Abarca": "Guillermo Castro Abarca",
};

const EXTRA_STATIC_TRANSLATIONS = {
  "🌐 EN": "🌐 EN",
  "🌐": "🌐",
  EN: "EN",
  "🌙": "🌙",
  "🤝": "🤝",
  '"Git es el cerebro 🧠 , GitHub es la red social 🌐 ."':
    '"Git is the brain 🧠, GitHub is the social network 🌐."',
  '"Git guarda tu código, GitHub lo presume."':
    '"Git saves your code, GitHub shows it off."',
  "Comparativa visual entre Git y GitHub":
    "Visual comparison between Git and GitHub",
  Git: "Git",
  GitHub: "GitHub",
  "Software local (en tu ordenador)": "Local software (on your computer)",
  "Control de versiones": "Version control",
  "Guarda instantáneas del proyecto": "Saves project snapshots",
  "Ideal para uso individual": "Ideal for individual use",
  "Funciona sin internet": "Works without internet",
  "Plataforma web": "Web platform",
  "Colaboración en equipo": "Team collaboration",
  "Basado en Git": "Based on Git",
  "Gestión de proyectos": "Project management",
  "Red social para código": "Social network for code",
  "Un sistema que permite gestionar y rastrear los cambios en el código fuente a lo largo del tiempo, facilitando la colaboración y el desarrollo eficiente de software.":
    "A system that lets you manage and track changes in source code over time, making collaboration and efficient software development easier.",
  "Descarga Git desde su página oficial e instálalo en tu sistema operativo.":
    "Download Git from its official website and install it on your operating system.",
  "Página oficial de Git": "Official Git website",
  "Instalación y primeros pasos con Git":
    "Installation and first steps with Git",
  "01": "01",
  "02": "02",
  "03": "03",
  "04": "04",
  "📖": "📖",
  "🔐": "🔐",
  "📱": "📱",
  "✅": "✅",
  "⚠️": "⚠️",
  "🚨": "🚨",
  "💡": "💡",
  $: "$",
  Esencial: "Essential",
  Recomendado: "Recommended",
  "Estos son algunos de los comandos básicos de git y los que posiblemente mas utilices, espero que te ayuden :D Haz clic en cualquier comando para copiarlo al portapapeles.":
    "These are some basic Git commands and probably the ones you will use most. I hope they help :D Click any command to copy it to the clipboard.",
  "1 · Configuración inicial": "1 · Initial setup",
  "Una vez que has instalado Git, es recomendable configurar tu nombre de usuario y correo electrónico:":
    "Once Git is installed, it is recommended to configure your username and email address:",
  "⚠️ Sin esto no te permitirá hacer commits.":
    "⚠️ Without this, Git will not let you make commits.",
  "Configura tu nombre de usuario": "Sets your username",
  Copiar: "Copy",
  "Configura tu correo electrónico": "Sets your email address",
  "2 · Iniciar un proyecto": "2 · Start a project",
  "Estos son los cambios que necesitas hacer para iniciar un proyecto con Git:":
    "These are the commands you need to start a project with Git:",
  "Crea un repositorio nuevo en la carpeta actual":
    "Creates a new repository in the current folder",
  "Crea una nueva conexión a un repositorio remoto.":
    "Creates a new connection to a remote repository.",
  "Descarga un repositorio existente": "Downloads an existing repository",
  "Descarga los cambios del repositorio remoto":
    "Downloads changes from the remote repository",
  "3 · El ciclo diario": "3 · Daily workflow",
  "Son los comandos que usas diariamente:":
    "These are the commands you use every day:",
  "Muestra qué ha cambiado": "Shows what has changed",
  "Prepara todos los cambios para el commit":
    "Stages all changes for the commit",
  "Guarda los cambios en el historial": "Saves the changes in the history",
  "Sube los cambios a GitHub": "Pushes the changes to GitHub",
  "Baja los cambios del remoto": "Pulls changes from the remote",
  "4 · Ramas": "4 · Branches",
  "Estos son los comandos que usas para trabajar con ramas:":
    "These are the commands you use to work with branches:",
  "Crea y cambia a una rama nueva": "Creates and switches to a new branch",
  "Vuelve a la rama principal": "Switches back to the main branch",
  "Une la rama con la actual": "Merges the branch into the current one",
  "⚠️ Un merge puede causar conflictos si los cambios en ambas ramas son incompatibles. Cuando haces un merge, no hay forma de deshacerlo una vez que se resuelven los conflictos.":
    "⚠️ A merge can cause conflicts if the changes in both branches are incompatible. Once a merge is completed and conflicts are resolved, it cannot be easily undone.",
  "5 · Si algo va mal": "5 · If something goes wrong",
  "Ver historial de commits resumido": "View a summarized commit history",
  "Descartar cambios en un archivo": "Discard changes in a file",
  "Quitar un archivo del staging": "Remove a file from staging",
  "Git guarda tu trabajo en dos pasos: preparar y guardar. Cuando cambias archivos, Git ve esos cambios, pero no los guarda directamente. Primero eliges qué cambios quieres incluir (eso es staging o preparar). Luego los guardas con un commit. Es como hacer una foto: primero eliges qué quieres que salga en la foto (preparar) y luego haces la foto (guardar).":
    "Git saves your work in two steps: stage and save. When you change files, Git sees those changes, but it does not save them directly. First you choose which changes to include (that is staging). Then you save them with a commit. It is like taking a photo: first you choose what should appear in the photo, and then you take the photo.",
  "Repositorio Local: Es la carpeta en tu ordenador. Es donde editas tus archivos día a día. GitHub no ve esto hasta que tú lo envías.":
    "Local Repository: This is the folder on your computer. It is where you edit your files day to day. GitHub does not see it until you send it.",
  "Repositorio Remoto: Es la copia en los servidores de GitHub. Es tu respaldo en la nube y el lugar donde los demás ven tu código.":
    "Remote Repository: This is the copy on GitHub's servers. It is your cloud backup and the place where others can see your code.",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  "git add .": "git add .",
  'git commit -m "tu mensaje aquí"': 'git commit -m "your message here"',
  "git push origin main": "git push origin main",
  "Acceder a la creación de un nuevo repositorio":
    "Access the new repository creation screen",
  "Formulario para configurar el nuevo repositorio":
    "Form to configure the new repository",
  "Repositorio creado correctamente en GitHub":
    "Repository created successfully on GitHub",
  "Entra al repositorio en GitHub.": "Open the repository on GitHub.",
  "Haz clic en el botón verde Code y copia la URL del repositorio.":
    "Click the green Code button and copy the repository URL.",
  "Abre la terminal en VS Code con Ctrl + Ñ o desde Terminal → New Terminal .":
    "Open the terminal in VS Code with Ctrl + Ñ or from Terminal → New Terminal.",
  "Ve a la carpeta donde quieres guardar el proyecto, por ejemplo:":
    "Go to the folder where you want to save the project, for example:",
  "Después, ejecuta el comando git clone :": "Then run the git clone command:",
  "Entra dentro de la carpeta que se acaba de descargar:":
    "Go into the folder that was just downloaded:",
  "Al clonar un repositorio, Git crea automáticamente la conexión con GitHub. Esa conexión se llama normalmente origin .":
    "When you clone a repository, Git automatically creates the connection with GitHub. That connection is usually called origin.",
  "Puedes comprobarlo con:": "You can check it with:",
  "Si todo está correcto, verás algo parecido a esto:":
    "If everything is correct, you will see something like this:",
  "Usa esta opción si ya tienes tu proyecto creado en tu computadora y quieres conectarlo con un repositorio nuevo de GitHub.":
    "Use this option if you already have your project created on your computer and want to connect it to a new GitHub repository.",
  "Crea un repositorio nuevo en GitHub.": "Create a new repository on GitHub.",
  "Copia la URL del repositorio. Será parecida a esta:":
    "Copy the repository URL. It will look similar to this:",
  "Abre tu proyecto en VS Code y asegúrate de estar dentro de la carpeta correcta en la terminal.":
    "Open your project in VS Code and make sure you are inside the correct folder in the terminal.",
  "Ahora ejecuta estos comandos en orden:": "Now run these commands in order:",
  "¿Qué hace cada comando?": "What does each command do?",
  "git init : convierte tu carpeta en un repositorio local.":
    "git init: turns your folder into a local repository.",
  "git add . : prepara todos los archivos para guardarlos.":
    "git add .: stages all files so they can be saved.",
  'git commit -m "feat: initial commit" : crea el primer punto de guardado.':
    'git commit -m "feat: initial commit": creates the first save point.',
  "git branch -M main : asegura que la rama principal se llame main .":
    "git branch -M main: makes sure the main branch is called main.",
  "git remote add origin : conecta tu repositorio local con el repositorio remoto de GitHub.":
    "git remote add origin: connects your local repository to the remote GitHub repository.",
  "git push -u origin main : sube tu proyecto a GitHub y deja la rama conectada para futuros pushes.":
    "git push -u origin main: uploads your project to GitHub and keeps the branch connected for future pushes.",
  "Resumen fácil: git clone descarga un proyecto que ya existe en GitHub. git remote add origin conecta una carpeta local con un repositorio remoto.":
    "Simple summary: git clone downloads a project that already exists on GitHub. git remote add origin connects a local folder to a remote repository.",
  "Después de hacer esto una vez, tu flujo diario será:":
    "After doing this once, your daily workflow will be:",
  "Nota: sustituye usuario y nombre-repositorio por los datos reales de tu cuenta y de tu repositorio.":
    "Note: replace usuario and nombre-repositorio with the real details of your account and repository.",
  "Vincular GitHub con VS Code:": "Link GitHub with VS Code:",
  'Instala la extensión "GitHub Pull Requests and Issues" .':
    'Install the "GitHub Pull Requests and Issues" extension.',
  'Haz clic en el icono de usuario (abajo a la izquierda) → "Sign in to GitHub" y autoriza la conexión.':
    'Click the user icon (bottom left) → "Sign in to GitHub" and authorize the connection.',
  "Hacer cambios (Flujo diario):": "Making changes (Daily workflow):",
  "Edita tus archivos y guárdalos.": "Edit your files and save them.",
  "Ve a la pestaña de Source Control (icono de nodos a la izquierda).":
    "Go to the Source Control tab (branch icon on the left).",
  'Haz clic en el "+" para preparar los cambios (Stage).':
    'Click the "+" to stage the changes.',
  "Escribe un mensaje de commit y presiona el botón Commit .":
    "Write a commit message and press the Commit button.",
  "Haz clic en Sync Changes (o Push) para enviar todo a GitHub.":
    "Click Sync Changes (or Push) to send everything to GitHub.",
  "Para usar la terminal en VS Code, presiona Ctrl + Ñ o ve al menú Terminal → New Terminal . Una vez abierta, ejecuta estos comandos en orden:":
    "To use the terminal in VS Code, press Ctrl + Ñ or go to Terminal → New Terminal. Once it is open, run these commands in order:",
  "Nota: Asegúrate de estar dentro de la carpeta de tu proyecto en la terminal antes de escribir estos comandos.":
    "Note: Make sure you are inside your project folder in the terminal before typing these commands.",
  "Estructura de un commit": "Commit structure",
  'git commit -m "tipo: descripción breve"':
    'git commit -m "type: short description"',
  Tipos: "Types",
  feat: "feat",
  "Nueva funcionalidad": "New feature",
  fix: "fix",
  "Corrección de bugs": "Bug fix",
  perf: "perf",
  "Mejora de rendimiento": "Performance improvement",
  refactor: "refactor",
  "Cambio interno sin afectar comportamiento":
    "Internal change without affecting behavior",
  style: "style",
  "Formato (espacios, tabs, etc.)": "Formatting (spaces, tabs, etc.)",
  docs: "docs",
  Documentación: "Documentation",
  test: "test",
  Tests: "Tests",
  build: "build",
  "Build, dependencias, scripts": "Build, dependencies, scripts",
  ci: "ci",
  "Integración continua": "Continuous integration",
  Reglas: "Rules",
  'Imperativo → "add", "fix", "update"': 'Imperative → "add", "fix", "update"',
  "Máximo ~50 caracteres": "Maximum ~50 characters",
  "Sin punto final": "No final period",
  "1 commit = 1 cambio": "1 commit = 1 change",
  "Mensaje claro: qué y por qué": "Clear message: what and why",
  '"Una rama es como una copia paralela de tu proyecto donde puedes experimentar sin miedo a romper nada."':
    '"A branch is like a parallel copy of your project where you can experiment without fear of breaking anything."',
  '"La rama main es el tronco del árbol. El resto son ramas que crecen a los lados."':
    '"The main branch is the tree trunk. The others are branches that grow from the sides."',
  "git switch -c feature/mi-nueva-funcionalidad":
    "git switch -c feature/my-new-feature",
  'git add . && git commit -m "feat: añadir login"':
    'git add . && git commit -m "feat: add login"',
  "git push origin feature/mi-nueva-funcionalidad":
    "git push origin feature/my-new-feature",
  "git switch main && git merge feature/mi-nueva-funcionalidad":
    "git switch main && git merge feature/my-new-feature",
  "Crear y navegar": "Create and navigate",
  "Crea una rama nueva y cambia a ella directamente":
    "Creates a new branch and switches to it directly",
  "Cambia a una rama ya existente": "Switches to an existing branch",
  "Lista todas las ramas locales (la activa aparece con *)":
    "Lists all local branches (the active one appears with *)",
  "Lista ramas locales Y remotas": "Lists local AND remote branches",
  "Fusionar y eliminar": "Merge and delete",
  "Fusiona la rama indicada en la rama actual":
    "Merges the specified branch into the current branch",
  "Consecuencias de hacer un merge": "Consequences of doing a merge",
  "Los commits de la rama fusionada quedan integrados permanentemente en la rama destino.":
    "The commits from the merged branch become permanently integrated into the target branch.",
  "Puede generar conflictos de merge si ambas ramas modificaron las mismas líneas. Tendrás que resolverlos manualmente antes de continuar.":
    "It can create merge conflicts if both branches modified the same lines. You will have to resolve them manually before continuing.",
  "Una vez resueltos los conflictos y confirmado el merge, no se puede deshacer fácilmente (requiere git revert o git reset con cuidado).":
    "Once conflicts are resolved and the merge is confirmed, it cannot be easily undone (it requires git revert or careful use of git reset).",
  "En proyectos compartidos, un merge directo sin Pull Request puede saltarse la revisión del equipo.":
    "In shared projects, a direct merge without a Pull Request can bypass team review.",
  "Asegúrate de estar en la rama correcta antes de ejecutarlo ( git branch para comprobarlo).":
    "Make sure you are on the correct branch before running it (use git branch to check).",
  "Elimina una rama local (solo si ya fue fusionada)":
    "Deletes a local branch (only if it has already been merged)",
  "Consecuencias de eliminar una rama local":
    "Consequences of deleting a local branch",
  "git branch -d solo borra la rama si ya fue fusionada, lo cual es una protección. Pero git branch -D (mayúscula) la elimina aunque tenga commits sin fusionar , perdiendo esos cambios.":
    "git branch -d only deletes the branch if it has already been merged, which is a protection. But git branch -D (uppercase) deletes it even if it has unmerged commits, losing those changes.",
  "Una vez eliminada la rama local sin haber hecho push, los commits exclusivos de esa rama se pierden .":
    "Once a local branch is deleted without having been pushed, the commits that existed only on that branch are lost.",
  "Si otro compañero tenía esa rama como referencia, deberá actualizar su repositorio local.":
    "If another teammate had that branch as a reference, they will need to update their local repository.",
  "Elimina la rama también del repositorio remoto":
    "Deletes the branch from the remote repository too",
  "Consecuencias de eliminar una rama remota":
    "Consequences of deleting a remote branch",
  "La rama desaparece del repositorio remoto para todos los colaboradores del proyecto.":
    "The branch disappears from the remote repository for all project collaborators.",
  "Cualquier Pull Request abierto basado en esa rama quedará automáticamente cerrado o huérfano .":
    "Any open Pull Request based on that branch will be automatically closed or orphaned.",
  "Los compañeros que tengan la rama en local recibirán errores al hacer git fetch o git pull si intentan actualizarla.":
    "Teammates who have the branch locally will get errors when running git fetch or git pull if they try to update it.",
  "La acción no tiene confirmación previa : se ejecuta de inmediato. Confirma bien el nombre antes de lanzar el comando.":
    "This action has no confirmation prompt: it runs immediately. Double-check the name before running the command.",
  "Sube tu rama con git push origin nombre-rama":
    "Push your branch with git push origin branch-name",
  'En GitHub, aparece un botón "Compare & pull request" — haz clic':
    'On GitHub, a "Compare & pull request" button appears — click it',
  "Escribe una descripción de qué cambios hiciste y por qué":
    "Write a description of what changes you made and why",
  "Tus compañeros revisan, comentan y aprueban (o piden cambios)":
    "Your teammates review, comment and approve (or request changes)",
  'Cuando todo está bien, se hace clic en "Merge pull request" ✅':
    'When everything is OK, click "Merge pull request" ✅',
  "Git marcará el conflicto así en el archivo:":
    "Git will mark the conflict like this in the file:",
  '"Imagina que tú y un compañero editáis el mismo párrafo de un documento compartido al mismo tiempo. Cuando intentáis unir los cambios, alguien tiene que decidir qué versión queda. Eso es exactamente un conflicto de merge."':
    '"Imagine you and a teammate edit the same paragraph of a shared document at the same time. When you try to merge the changes, someone has to decide which version remains. That is exactly a merge conflict."',
  "rama main": "main branch",
  "# commit base (compartido)": "# base commit (shared)",
  '"Hola"': '"Hello"',
  "# commit B — alguien en main escribe:":
    "# commit B — someone on main writes:",
  '"Hola mundo"': '"Hello world"',
  "mismo archivo": "same file",
  "rama feature": "feature branch",
  "# commit D — alguien en feature escribe:":
    "# commit D — someone on feature writes:",
  '"Hello world"': '"Hello world"',
  "# Git no sabe qué línea elegir y marca el conflicto así:":
    "# Git does not know which line to choose and marks the conflict like this:",
  "<<<<<<< HEAD": "<<<<<<< HEAD",
  "=======": "=======",
  ">>>>>>> feature/traduccion": ">>>>>>> feature/translation",
  "Clave: Git no elimina tu código. Lo marca con señales para que tú decidas qué versión queda. Los marcadores <<< , === y >>> son temporales; desaparecen una vez que resuelves el conflicto.":
    "Key point: Git does not delete your code. It marks it with signs so you can decide which version remains. The <<<, === and >>> markers are temporary; they disappear once you resolve the conflict.",
  Marcador: "Marker",
  "Qué significa": "What it means",
  "Inicio del bloque de tu rama actual (la rama en la que estás).":
    "Start of the block from your current branch (the branch you are on).",
  "Separador entre las dos versiones. Lo que hay arriba es tuyo; lo que hay abajo viene de la otra rama.":
    "Separator between the two versions. What is above is yours; what is below comes from the other branch.",
  ">>>>>>> feature/nombre": ">>>>>>> feature/name",
  "Fin del bloque de la rama que estás fusionando .":
    "End of the block from the branch you are merging.",
  "Estos son los conflictos que encontrarás con más frecuencia en proyectos reales.":
    "These are the conflicts you will find most often in real projects.",
  "Escenario 1 · Texto cambiado en la misma línea":
    "Scenario 1 · Text changed on the same line",
  "El caso más común. Dos personas editan el mensaje de un mismo botón o la misma variable de configuración.":
    "The most common case. Two people edit the text of the same button or the same configuration variable.",
  "Solución: elige uno de los dos valores (o escribe uno nuevo), borra los tres marcadores y guarda.":
    "Solution: choose one of the two values (or write a new one), delete the three markers and save.",
  "Escenario 2 · Función modificada de forma distinta":
    "Scenario 2 · Function modified in different ways",
  "Una persona añade validación a una función; otra la refactoriza al mismo tiempo.":
    "One person adds validation to a function; another refactors it at the same time.",
  "Solución: en este caso lo correcto probablemente es combinar ambos cambios manualmente:":
    "Solution: in this case, the right thing is probably to combine both changes manually:",
  "Escenario 3 · Archivo eliminado vs. modificado":
    "Scenario 3 · File deleted vs. modified",
  "Una rama elimina un archivo que la otra ha modificado. Git no sabe si debes conservarlo o borrarlo.":
    "One branch deletes a file that the other branch modified. Git does not know whether you should keep it or delete it.",
  "Solución: decide explícitamente si el archivo debe existir o no:":
    "Solution: explicitly decide whether the file should exist or not:",
  "Git te avisa del conflicto": "Git warns you about the conflict",
  "Al hacer git merge o git pull , Git lista los archivos en conflicto.":
    "When running git merge or git pull, Git lists the conflicted files.",
  "CONFLICT (content): Merge conflict in src/saludo.js Automatic merge failed; fix conflicts and then commit the result.":
    "CONFLICT (content): Merge conflict in src/hello.js Automatic merge failed; fix conflicts and then commit the result.",
  "Localiza los archivos afectados": "Locate the affected files",
  "Usa git status para ver qué archivos tienen conflictos pendientes.":
    "Use git status to see which files still have pending conflicts.",
  "git status": "git status",
  "Abre el archivo y edítalo": "Open the file and edit it",
  "Busca los marcadores <<< , === y >>> . Decide qué versión conservar (o combina las dos). Borra todos los marcadores. Guarda el archivo.":
    "Look for the <<<, === and >>> markers. Decide which version to keep (or combine both). Delete all markers. Save the file.",
  "Marca el archivo como resuelto y haz commit":
    "Mark the file as resolved and commit",
  "Una vez editado, añade el archivo al stage y cierra el merge con un commit.":
    "Once edited, add the file to the stage and close the merge with a commit.",
  'git add src/saludo.js git commit -m "fix: resolver conflicto en saludo.js"':
    'git add src/hello.js git commit -m "fix: resolve conflict in hello.js"',
  "¿Te has liado? Puedes abortar el merge":
    "Got stuck? You can abort the merge",
  "Si en medio de la resolución te das cuenta de que algo no cuadra, puedes cancelar el merge y volver al estado anterior como si nada hubiera ocurrido:":
    "If, while resolving the conflict, you realize something is wrong, you can cancel the merge and return to the previous state as if nothing had happened:",
  "Los conflictos no se pueden eliminar del todo, pero sí reducir con buenos hábitos de equipo:":
    "Conflicts cannot be completely eliminated, but they can be reduced with good team habits:",
  "Actualiza tu rama antes de empezar a trabajar. Haz git pull origin main cada mañana para partir siempre del código más reciente.":
    "Update your branch before you start working. Run git pull origin main every morning so you always start from the latest code.",
  "Ramas pequeñas y de corta duración. Cuanto más tiempo vive una rama sin fusionarse, más diverge de main y más conflictos acumula.":
    "Small, short-lived branches. The longer a branch lives without being merged, the more it diverges from main and the more conflicts it accumulates.",
  "Comunica qué archivos estás tocando. En equipo, avisad cuando vais a modificar archivos de configuración compartida como .env.example , package.json o archivos de rutas.":
    "Communicate which files you are touching. In a team, let others know when you are going to modify shared configuration files such as .env.example, package.json or route files.",
  "Haz merge frecuente de main en tu rama. En lugar de esperar al final, trae los cambios de main a tu rama periódicamente: git switch mi-rama git merge main":
    "Merge main into your branch frequently. Instead of waiting until the end, bring changes from main into your branch periodically: git switch my-branch git merge main",
  "Usa Pull Requests con revisión. El proceso de PR detecta posibles conflictos antes de fusionar y permite que alguien más revise los cambios.":
    "Use Pull Requests with review. The PR process detects possible conflicts before merging and allows someone else to review the changes.",
  '"Un conflicto que se resuelve el mismo día en que aparece es un problema de 2 minutos. Un conflicto acumulado durante dos semanas puede ser un problema de dos horas."':
    '"A conflict resolved the same day it appears is a 2-minute problem. A conflict accumulated for two weeks can become a two-hour problem."',
  Patrón: "Pattern",
  Significado: "Meaning",
  "node_modules/": "node_modules/",
  "Ignora toda la carpeta de dependencias":
    "Ignores the whole dependencies folder",
  "*.log": "*.log",
  "Ignora cualquier archivo con extensión .log":
    "Ignores any file with the .log extension",
  ".env": ".env",
  "Ignora el archivo de variables de entorno sensibles":
    "Ignores the sensitive environment variables file",
  "dist/": "dist/",
  "Ignora la carpeta de archivos generados en el build":
    "Ignores the folder of files generated during the build",
  "JavaScript / Node.js": "JavaScript / Node.js",
  "Por qué se ignora": "Why it is ignored",
  "Contiene todas las dependencias del proyecto. Pueden pesar cientos de MB y se reinstalan fácilmente con npm install .":
    "Contains all project dependencies. They can weigh hundreds of MB and are easily reinstalled with npm install.",
  "npm-debug.log* yarn-debug.log*": "npm-debug.log* yarn-debug.log*",
  "Logs generados automáticamente cuando ocurre un error durante la instalación. Son locales y no aportan nada al repositorio.":
    "Logs generated automatically when an error occurs during installation. They are local and add nothing to the repository.",
  "Contiene variables de entorno sensibles: claves de API, credenciales de bases de datos, contraseñas. Subirlo supone un grave riesgo de seguridad.":
    "Contains sensitive environment variables: API keys, database credentials and passwords. Uploading it is a serious security risk.",
  "dist/ / build/": "dist/ / build/",
  "Carpetas generadas por el proceso de compilación o transpilación (Webpack, Vite…). Se regeneran a partir del código fuente, no tiene sentido versionar su contenido.":
    "Folders generated by the compilation or transpilation process (Webpack, Vite…). They are regenerated from source code, so versioning their contents makes no sense.",
  Python: "Python",
  "__pycache__/": "__pycache__/",
  "Carpeta que Python genera automáticamente para almacenar módulos en caché y acelerar su carga. Es específica de cada máquina y sistema operativo.":
    "Folder automatically generated by Python to store cached modules and speed up loading. It is specific to each machine and operating system.",
  "*.pyc": "*.pyc",
  "Archivos de bytecode generados al interpretar los .py . No son código fuente y varían entre versiones de Python y entre sistemas.":
    "Bytecode files generated when interpreting .py files. They are not source code and vary between Python versions and systems.",
  "Contiene variables de entorno sensibles que nunca deben compartirse públicamente.":
    "Contains sensitive environment variables that should never be shared publicly.",
  "venv/": "venv/",
  "Entorno virtual local con las dependencias instaladas. Cada desarrollador crea el suyo con python -m venv venv . Contiene rutas absolutas que causan conflictos entre máquinas.":
    "Local virtual environment with installed dependencies. Each developer creates their own with python -m venv venv. It contains absolute paths that cause conflicts between machines.",
  "Carpetas generadas al empaquetar el proyecto (con setuptools o pyinstaller ). Se regeneran fácilmente y no deben versionarse.":
    "Folders generated when packaging the project (with setuptools or pyinstaller). They are easily regenerated and should not be versioned.",
  Java: "Java",
  "target/": "target/",
  "Carpeta donde Maven o Gradle depositan todos los archivos generados durante la compilación. Se regenera completamente al construir el proyecto.":
    "Folder where Maven or Gradle places all files generated during compilation. It is completely regenerated when building the project.",
  "*.class": "*.class",
  "Bytecode compilado por javac a partir del código fuente .java . Es específico de la máquina virtual y se regenera en cada compilación.":
    "Bytecode compiled by javac from .java source code. It is specific to the virtual machine and is regenerated on every compilation.",
  "*.jar": "*.jar",
  "Artefacto empaquetado con el código compilado y sus dependencias. Es la salida del build, no código fuente. Se regenera con mvn package o gradle build .":
    "Packaged artifact with compiled code and its dependencies. It is build output, not source code. It is regenerated with mvn package or gradle build.",
  "*.war": "*.war",
  "Similar al .jar pero para aplicaciones web Java desplegadas en servidores como Tomcat. También es un artefacto de build, no fuente.":
    "Similar to .jar, but for Java web applications deployed on servers such as Tomcat. It is also a build artifact, not source.",
  "Registros de ejecución generados localmente durante pruebas o el servidor. Son específicos de cada entorno y no aportan valor al repositorio.":
    "Execution logs generated locally during tests or server runs. They are environment-specific and add no value to the repository.",
  PHP: "PHP",
  "vendor/": "vendor/",
  "Carpeta donde Composer instala todas las dependencias. Puede ser muy pesada y se restaura completamente ejecutando composer install a partir del composer.lock .":
    "Folder where Composer installs all dependencies. It can be very large and is fully restored by running composer install from composer.lock.",
  "Archivos de log generados por el servidor web (Apache, Nginx) o el framework (Laravel, Symfony). Son locales y no deben versionarse.":
    "Log files generated by the web server (Apache, Nginx) or the framework (Laravel, Symfony). They are local and should not be versioned.",
  "Contiene configuración sensible del entorno: credenciales de base de datos, claves de cifrado, tokens de servicios externos. Nunca debe subirse al repositorio.":
    "Contains sensitive environment configuration: database credentials, encryption keys and external service tokens. It must never be uploaded to the repository.",
  "Pon a prueba lo que has aprendido. Una pregunta a la vez.":
    "Test what you have learned. One question at a time.",
  "Pregunta 1 de 10": "Question 1 of 10",
  "← Anterior": "← Previous",
  Confirmar: "Confirm",
  "Siguiente →": "Next →",
  "Practica los comandos reales de Git en un terminal simulado. Completa los 5 retos para ganar.":
    "Practice real Git commands in a simulated terminal. Complete the 5 challenges to win.",
  "Tienes un proyecto Node.js. Escribe las reglas correctas en el .gitignore para que solo queden los archivos de código fuente. Observa cómo cambia el estado de cada archivo en tiempo real.":
    "You have a Node.js project. Write the correct .gitignore rules so only source code files remain. Watch how each file's status changes in real time.",
  "0 de 6 archivos ignorados correctamente": "0 of 6 files ignored correctly",
  "📁 Archivos del proyecto": "📁 Project files",
  "📄 .gitignore": "📄 .gitignore",
  "# escribe tus reglas aquí, una por línea":
    "# write your rules here, one per line",
  "💡 Ver pista": "💡 Show hint",
  "🔄 Reiniciar": "🔄 Reset",
  "Comprobar solución ✓": "Check solution ✓",
  "¿Por qué estas reglas?": "Why these rules?",
  "Carpeta de dependencias. Puede pesar cientos de MB y se reinstala con npm install .":
    "Dependencies folder. It can weigh hundreds of MB and is reinstalled with npm install.",
  "Salida del build (Webpack, Vite…). Se regenera a partir del código fuente.":
    "Build output (Webpack, Vite…). It is regenerated from source code.",
  "Variables de entorno sensibles: claves API, credenciales. Nunca debe subirse.":
    "Sensitive environment variables: API keys, credentials. It must never be uploaded.",
  ".env.local": ".env.local",
  "Variante local del .env, igualmente sensible y específica de cada máquina.":
    "Local variant of .env, equally sensitive and specific to each machine.",
  "Comodín que ignora todos los archivos .log. Son registros locales de ejecución.":
    "Wildcard that ignores all .log files. They are local execution logs.",
  ".DS_Store": ".DS_Store",
  "Metadatos internos de macOS. No aportan nada al repositorio.":
    "Internal macOS metadata. It adds nothing to the repository.",
  "Practica un caso real: dos ramas modifican la misma línea de index.html . Tendrás que provocar el conflicto, resolverlo y finalizar el merge.":
    "Practice a real case: two branches modify the same line in index.html. You will trigger the conflict, resolve it and finish the merge.",
  "Paso 1 de 6": "Step 1 of 6",
  "🌿 Estado del repositorio": "🌿 Repository status",
  "📄 index.html": "📄 index.html",
  "Cuando Git marque el conflicto, elimina los marcadores <<<<<<< , ======= y >>>>>>> .":
    "When Git marks the conflict, remove the <<<<<<<, ======= and >>>>>>> markers.",
  "Comprobar resolución ✓": "Check resolution ✓",
  "¿Qué significan los marcadores del conflicto?":
    "What do the conflict markers mean?",
  "Es la versión de la rama actual. En este caso, la versión que había en main .":
    "This is the version from the current branch. In this case, the version that was on main.",
  "Separa las dos versiones que Git no sabe combinar automáticamente.":
    "Separates the two versions that Git cannot combine automatically.",
  ">>>>>>> feature-titulo": ">>>>>>> feature-title",
  "Es la versión que viene desde la rama que estás fusionando.":
    "This is the version coming from the branch you are merging.",
  "git add index.html": "git add index.html",
  "Marca el archivo como resuelto después de limpiarlo.":
    "Marks the file as resolved after cleaning it.",
  "git commit": "git commit",
  "Finaliza el merge y guarda la resolución del conflicto.":
    "Finishes the merge and saves the conflict resolution.",
  "Vista general de la integración de Git en VS Code":
    "Overview of Git integration in VS Code",
  "Cuando editas un archivo, VS Code lo marca automáticamente en el explorador de archivos con una letra:":
    "When you edit a file, VS Code automatically marks it in the file explorer with a letter:",
  "M (Modified) — archivo modificado.": "M (Modified) — modified file.",
  "U (Untracked) — archivo nuevo que Git aún no conoce.":
    "U (Untracked) — new file that Git does not know yet.",
  "D (Deleted) — archivo eliminado.": "D (Deleted) — deleted file.",
  "En el panel Source Control verás los mismos archivos agrupados en dos secciones: Changes (cambios sin preparar) y Staged Changes (cambios listos para el commit).":
    "In the Source Control panel, you will see the same files grouped into two sections: Changes (unstaged changes) and Staged Changes (changes ready for commit).",
  "El panel Source Control lista todos los archivos con cambios pendientes":
    "The Source Control panel lists all files with pending changes",
  "Antes de hacer un commit debes preparar los archivos que quieres incluir. En VS Code tienes dos formas de hacerlo:":
    "Before making a commit, you must stage the files you want to include. In VS Code there are two ways to do it:",
  "Haz clic en el icono + que aparece al pasar el ratón por encima de un archivo en la sección Changes para añadirlo individualmente.":
    "Click the + icon that appears when hovering over a file in the Changes section to add it individually.",
  "Haz clic en el + junto al encabezado Changes para preparar todos los archivos a la vez.":
    "Click the + next to the Changes heading to stage all files at once.",
  "Los archivos preparados se moverán a la sección Staged Changes . Si cambias de opinión, haz clic en el icono − para retirarlos del stage.":
    "Staged files will move to the Staged Changes section. If you change your mind, click the − icon to remove them from the stage.",
  "Haz clic en + para mover un archivo a Staged Changes":
    "Click + to move a file to Staged Changes",
  'Una vez preparados los archivos, escribe un mensaje descriptivo en el campo de texto que dice "Message (Ctrl+Enter to commit)" y pulsa Ctrl+Enter (o haz clic en el botón Commit ✔ ). El commit quedará registrado en el historial local de tu repositorio.':
    'Once the files are staged, write a descriptive message in the text field that says "Message (Ctrl+Enter to commit)" and press Ctrl+Enter (or click the Commit ✔ button). The commit will be recorded in your local repository history.',
  'Consejo: Un buen mensaje de commit responde a la pregunta "¿Qué hace este cambio?", por ejemplo: Añade formulario de contacto .':
    'Tip: A good commit message answers the question "What does this change do?", for example: Add contact form.',
  "Escribe el mensaje y pulsa Ctrl+Enter para confirmar el commit":
    "Write the message and press Ctrl+Enter to confirm the commit",
  "En la esquina inferior izquierda de VS Code verás el nombre de la rama actual (normalmente main o master ). Haz clic sobre él para abrir el menú de ramas y selecciona Create new branch… . Escribe el nombre de tu nueva rama (por ejemplo, feature/formulario-contacto ) y pulsa Enter .":
    "In the lower-left corner of VS Code, you will see the name of the current branch (usually main or master). Click it to open the branch menu and select Create new branch…. Type the name of your new branch (for example, feature/contact-form) and press Enter.",
  "VS Code creará la rama y cambiará a ella automáticamente. Todos los commits que hagas a partir de ahora irán a esta rama sin afectar a main .":
    "VS Code will create the branch and switch to it automatically. All commits you make from now on will go to this branch without affecting main.",
  "Haz clic en el nombre de la rama (barra inferior) para ver todas las opciones de rama":
    "Click the branch name (bottom bar) to see all branch options",
  "Desde el mismo menú de la barra de estado puedes seleccionar cualquier rama existente para cambiar a ella. VS Code actualizará los archivos del proyecto al estado de esa rama de forma instantánea.":
    "From the same status bar menu, you can select any existing branch to switch to it. VS Code will instantly update the project files to that branch's state.",
  "La lista muestra todas las ramas locales; haz clic en una para cambiarte a ella":
    "The list shows all local branches; click one to switch to it",
  "Cuando tu funcionalidad esté lista y quieras incorporarla a main , sigue estos pasos dentro de VS Code:":
    "When your feature is ready and you want to merge it into main, follow these steps in VS Code:",
  "Cambia a la rama de destino ( main ) usando la barra de estado inferior.":
    "Switch to the target branch (main) using the bottom status bar.",
  "Abre la paleta de comandos con Ctrl+Shift+P y escribe Git: Merge Branch… .":
    "Open the command palette with Ctrl+Shift+P and type Git: Merge Branch….",
  "Selecciona la rama que quieres fusionar (p. ej., feature/formulario-contacto ).":
    "Select the branch you want to merge (for example, feature/contact-form).",
  "Si no hay conflictos, VS Code completará el merge automáticamente y los cambios quedarán integrados en main .":
    "If there are no conflicts, VS Code will complete the merge automatically and the changes will be integrated into main.",
  'Busca "Git: Merge Branch" en la paleta de comandos para iniciar la fusión':
    'Search for "Git: Merge Branch" in the command palette to start the merge',
  "Cuando se produce un conflicto, VS Code marca el archivo con una C roja en el explorador y en el panel Source Control. Al abrirlo, verás el código dividido en bloques con marcadores especiales:":
    "When a conflict occurs, VS Code marks the file with a red C in the explorer and in the Source Control panel. When you open it, you will see the code divided into blocks with special markers:",
  "<<<<<<< HEAD — inicio de tu versión (rama actual).":
    "<<<<<<< HEAD — start of your version (current branch).",
  "======= — separador entre las dos versiones.":
    "======= — separator between the two versions.",
  ">>>>>>> feature/… — inicio de la versión entrante (rama que estás fusionando).":
    ">>>>>>> feature/… — start of the incoming version (the branch you are merging).",
  "VS Code resalta visualmente los bloques en conflicto con colores diferenciados":
    "VS Code visually highlights conflict blocks with different colors",
  "Encima de cada bloque en conflicto aparecen cuatro acciones rápidas. Elige la que mejor se adapte a tu caso:":
    "Above each conflict block, four quick actions appear. Choose the one that best fits your case:",
  "Accept Current Change — conserva únicamente tu versión (HEAD).":
    "Accept Current Change — keeps only your version (HEAD).",
  "Accept Incoming Change — conserva únicamente la versión de la otra rama .":
    "Accept Incoming Change — keeps only the version from the other branch.",
  "Accept Both Changes — incluye las dos versiones, una detrás de la otra.":
    "Accept Both Changes — includes both versions, one after the other.",
  "Compare Changes — abre una vista de diferencias en dos paneles para decidir con más calma.":
    "Compare Changes — opens a two-panel diff view so you can decide more calmly.",
  "También puedes editar el archivo manualmente: simplemente borra los marcadores ( <<< , === , >>> ) y deja el código exactamente como quieres que quede.":
    "You can also edit the file manually: simply delete the markers (<<<, ===, >>>) and leave the code exactly as you want it.",
  "Una vez resueltos todos los conflictos del archivo, guárdalo ( Ctrl+S ). VS Code dejará de marcarlo con la C roja. Repite el proceso con cada archivo en conflicto y, cuando todos estén limpios, ve al panel Source Control y realiza un commit para cerrar el merge:":
    "Once all conflicts in the file are resolved, save it (Ctrl+S). VS Code will stop marking it with the red C. Repeat the process with each conflicted file and, when all are clean, go to the Source Control panel and make a commit to close the merge:",
  "Prepara los archivos resueltos con + .": "Stage the resolved files with +.",
  "Escribe un mensaje como Merge feature/formulario-contacto en main .":
    "Write a message such as Merge feature/contact-form into main.",
  "Pulsa Ctrl+Enter para confirmar.": "Press Ctrl+Enter to confirm.",
  "Tras resolver todos los conflictos, un commit final cierra el proceso de merge":
    "After resolving all conflicts, a final commit closes the merge process",
  "© 2026 Guía de GitHub · Guillermo Castro Abarca":
    "© 2026 GitHub Guide · Guillermo Castro Abarca",
  "Guillermo Castro Abarca": "Guillermo Castro Abarca",
  "Inicializa un repositorio en la carpeta actual":
    "Initialize a repository in the current folder",
  "¡Repositorio creado! Ahora Git está vigilando esta carpeta.":
    "Repository created! Git is now watching this folder.",
  "2. Añadir archivos": "2. Add files",
  "Añade todos los archivos al staging": "Add all files to staging",
  "Archivos preparados para el commit (staging area).":
    "Files staged for the commit (staging area).",
  "3. Hacer commit": "3. Make a commit",
  'Crea un commit con el mensaje "primer commit"':
    'Create a commit with the message "first commit"',
  "¡Commit guardado! Tu código tiene su primera instantánea.":
    "Commit saved! Your code has its first snapshot.",
  "4. Crear rama": "4. Create branch",
  'Crea y cambia a una rama llamada "feature/login"':
    'Create and switch to a branch called "feature/login"',
  "¡Nueva rama creada! Ahora puedes trabajar de forma aislada.":
    "New branch created! Now you can work in isolation.",
  "5. Subir a GitHub": "5. Push to GitHub",
  'Sube la rama "feature/login" al remoto "origin"':
    'Push the "feature/login" branch to the "origin" remote',
  "🎉 ¡Reto completado! Tu rama ya está en GitHub.":
    "🎉 Challenge completed! Your branch is now on GitHub.",
  "🏆 ¡Todos los retos completados! Eres un pro de Git.":
    "🏆 All challenges completed! You are a Git pro.",
  "Bienvenido al simulador de Git": "Welcome to the Git simulator",
  "Completa los retos escribiendo los comandos correctos.":
    "Complete the challenges by typing the correct commands.",
  "Ya completaste todos los retos. ¡Recarga la página para volver a jugar!":
    "You already completed all challenges. Reload the page to play again!",
  'Comandos útiles: git init | git add . | git commit -m "msg" | git switch -c rama | git push origin rama':
    'Useful commands: git init | git add . | git commit -m "msg" | git switch -c branch | git push origin branch',
  'Este es un simulador de Git. Empieza tus comandos con "git" (o escribe "help").':
    'This is a Git simulator. Start your commands with "git" (or type "help").',
  "🏆 ¡FELICIDADES! Completaste todos los retos.":
    "🏆 CONGRATULATIONS! You completed all challenges.",
  "Ya sabes los comandos esenciales de Git. ¡A por el mundo!":
    "You now know the essential Git commands. Go conquer the world!",
  "Comando no reconocido en este contexto. Recuerda: ":
    "Command not recognized in this context. Remember: ",
  "Casi... revisa la sintaxis exacta del comando.":
    "Almost... check the exact syntax of the command.",
  "Piensa: ¿qué carpetas se generan automáticamente y nunca necesitas subir?":
    "Think: which folders are generated automatically and never need to be uploaded?",
  "node_modules/ y dist/ son carpetas que no se suben nunca al repositorio.":
    "node_modules/ and dist/ are folders that should never be uploaded to the repository.",
  "Los archivos .env contienen secretos. Los .log son ruido. .DS_Store es de macOS.":
    ".env files contain secrets. .log files are noise. .DS_Store is from macOS.",
  "Prueba con: node_modules/ · dist/ · .env · .env.local · *.log · .DS_Store":
    "Try: node_modules/ · dist/ · .env · .env.local · *.log · .DS_Store",
  ignorado: "ignored",
  pendiente: "pending",
  trackeado: "tracked",
  "archivos ignorados correctamente": "files ignored correctly",
  "Ya has visto todas las pistas. ¡Inténtalo con lo que sabes!":
    "You have seen all the hints. Try it with what you know!",
  "✅ ¡Perfecto! Tu .gitignore es correcto. Todos los archivos sensibles están ignorados y el código fuente queda trackeado.":
    "✅ Perfect! Your .gitignore is correct. All sensitive files are ignored and the source code remains tracked.",
  "Aún faltan por ignorar:": "Still missing from ignore rules:",
  "Estás ignorando archivos que sí deberían subirse:":
    "You are ignoring files that should be uploaded:",
  "Crea una rama nueva": "Create a new branch",
  "Crea una rama llamada feature-titulo. En esa rama se cambiará el título de la página.":
    "Create a branch called feature-title. In that branch, the page title will be changed.",
  "Usa: git switch -c feature-titulo": "Use: git switch -c feature-titulo",
  "Cambia título para principiantes": "Change title for beginners",
  "Vuelve a main": "Go back to main",
  "Vuelve a la rama main. Allí también se cambiará la misma línea del archivo.":
    "Go back to the main branch. The same line in the file will also be changed there.",
  "Usa: git switch main": "Use: git switch main",
  "Añade ejercicios interactivos al título":
    "Add interactive exercises to the title",
  "Fusiona la rama": "Merge the branch",
  "Fusiona feature-titulo dentro de main. Como ambas ramas tocaron la misma línea, aparecerá un conflicto.":
    "Merge feature-title into main. Since both branches touched the same line, a conflict will appear.",
  "Usa: git merge feature-titulo": "Use: git merge feature-titulo",
  "Resuelve el archivo": "Resolve the file",
  "Edita index.html. Elimina los marcadores del conflicto y deja un único título que combine las dos ideas.":
    "Edit index.html. Remove the conflict markers and leave a single title that combines both ideas.",
  "Borra <<<<<<<, ======= y >>>>>>>. Quédate con un solo <h1> que incluya principiantes y ejercicios interactivos.":
    "Delete <<<<<<<, ======= and >>>>>>>. Keep a single <h1> that includes beginners and interactive exercises.",
  "Marca el conflicto como resuelto": "Mark the conflict as resolved",
  "Usa git add para decirle a Git que index.html ya está resuelto.":
    "Use git add to tell Git that index.html is already resolved.",
  "Usa: git add index.html": "Use: git add index.html",
  "Archivo preparado. Git ya sabe que el conflicto está resuelto.":
    "File staged. Git now knows the conflict is resolved.",
  "Finaliza el merge": "Finish the merge",
  "Haz un commit para cerrar el merge y guardar la resolución del conflicto.":
    "Make a commit to close the merge and save the conflict resolution.",
  'Usa: git commit -m "resuelve conflicto en título"':
    'Use: git commit -m "resolve title conflict"',
  "Resuelve conflicto en título": "Resolve title conflict",
  "Merge finalizado correctamente.": "Merge completed successfully.",
  "Ejercicio completado": "Exercise completed",
  "Rama actual": "Current branch",
  "Commit en feature": "Commit on feature",
  hecho: "done",
  "Commit en main": "Commit on main",
  "Estado del merge": "Merge status",
  finalizado: "finished",
  "pendiente de commit": "pending commit",
  "resuelto sin add": "resolved without add",
  conflicto: "conflict",
  "sin iniciar": "not started",
  "resuelve primero el archivo en el editor...":
    "resolve the file in the editor first...",
  "escribe un comando git...": "write a git command...",
  'Este simulador solo acepta comandos de Git. Prueba con "git status".':
    'This simulator only accepts Git commands. Try "git status".',
  "❌ Escribe un comando que empiece por <code>git</code>.":
    "❌ Write a command that starts with <code>git</code>.",
  "El ejercicio ya está completado.": "The exercise is already completed.",
  "Ahora no toca escribir comandos. Primero resuelve el archivo en el editor.":
    "Now it is not time to type commands. First resolve the file in the editor.",
  "Comando incorrecto para este paso.": "Incorrect command for this step.",
  "❌ Ese comando no es el que toca ahora. Puedes escribir <code>git status</code> para orientarte.":
    "❌ That is not the command for this step. You can type <code>git status</code> to orient yourself.",
  "✅ Ejercicio completado. Has provocado un conflicto, lo has resuelto y has cerrado el merge.":
    "✅ Exercise completed. You triggered a conflict, resolved it and closed the merge.",
  "✅ Correcto. Continúa con el siguiente paso.":
    "✅ Correct. Continue with the next step.",
  "❌ Todavía quedan marcadores de conflicto. Elimina <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code> y <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.":
    "❌ There are still conflict markers. Remove <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code> and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.",
  "❌ La solución debe conservar una línea <code>&lt;h1&gt;</code> relacionada con GitHub.":
    "❌ The solution must keep an <code>&lt;h1&gt;</code> line related to GitHub.",
  "⚠️ La idea es combinar las dos versiones: debe aparecer la idea de <strong>principiantes</strong> y la de <strong>ejercicios interactivos</strong>.":
    "⚠️ The idea is to combine both versions: the idea of <strong>beginners</strong> and <strong>interactive exercises</strong> must appear.",
  "index.html editado correctamente. El conflicto ya no tiene marcadores.":
    "index.html edited correctly. The conflict no longer has markers.",
  "✅ Resolución correcta. Ahora usa <code>git add index.html</code>.":
    "✅ Correct resolution. Now use <code>git add index.html</code>.",
  "🏆 Ya has completado el ejercicio.":
    "🏆 You have already completed the exercise.",
  "Bienvenido al ejercicio de conflictos entre ramas.":
    "Welcome to the branch conflict exercise.",
  'Puedes escribir "git status" en cualquier momento para ver el estado.':
    'You can type "git status" at any time to see the status.',
};
Object.assign(STATIC_TRANSLATIONS, EXTRA_STATIC_TRANSLATIONS);
const LAST_I18N_PATCH = {
  "1. Inicializar repo": "1. Initialize repo",
  "3. Hacer commit": "3. Make a commit",
  "Switched to a new branch 'feature-titulo'\n[feature-titulo a12b34c] Cambia título para principiantes":
    "Switched to a new branch 'feature-titulo'\n[feature-titulo a12b34c] Change title for beginners",
  "Switched to branch 'main'\n[main d45e67f] Añade ejercicios interactivos al título":
    "Switched to branch 'main'\n[main d45e67f] Add interactive exercises to the title",
  "[main f89a10b] Resuelve conflicto en título\nMerge finalizado correctamente.":
    "[main f89a10b] Resolve title conflict\nMerge completed successfully.",
  "Guía básica de GitHub": "Basic GitHub Guide",
  "Guía básica de GitHub con ejercicios interactivos":
    "Basic GitHub Guide with interactive exercises",
  "Guía práctica de GitHub para principiantes":
    "Practical GitHub Guide for beginners",
  "Aprende Git y GitHub paso a paso.": "Learn Git and GitHub step by step.",
};
Object.assign(STATIC_TRANSLATIONS, LAST_I18N_PATCH);

const ATTR_TRANSLATIONS = {
  title: {
    "Cambiar idioma": "Change language",
    "Cambiar tema": "Change theme",
    Contribuciones: "Contributions",
    "Instalación de Git": "Git Installation",
  },
  "aria-label": {
    Menú: "Menu",
  },
  alt: {
    "Diferencias entre Git y GitHub": "Differences between Git and GitHub",
    "Pantalla de inicio de GitHub": "GitHub home screen",
    "Formulario de registro": "Sign-up form",
    "Verificación de correo": "Email verification",
    "Cuenta creada correctamente": "Account created successfully",
    "Botón nuevo repositorio": "New repository button",
    "Formulario creación de repositorio": "Repository creation form",
    "Repositorio creado": "Repository created",
    "Ajustes de seguridad": "Security settings",
    "Activar 2FA": "Enable 2FA",
    "App autenticadora en móvil": "Authenticator app on mobile",
    "Confirmar 2FA": "Confirm 2FA",
    "Vista general de integración Git en VS Code":
      "Overview of Git integration in VS Code",
    "Commit final tras resolver los conflictos en VS Code":
      "Final commit after resolving conflicts in VS Code",
  },
};

const EXTRA_ATTR_TRANSLATIONS = {
  alt: {
    "Panel Source Control mostrando archivos modificados":
      "Source Control panel showing modified files",
    "Preparando archivos con el botón + en VS Code":
      "Staging files with the + button in VS Code",
    "Campo de mensaje de commit en VS Code": "Commit message field in VS Code",
    "Menú de ramas en la barra de estado de VS Code":
      "Branch menu in the VS Code status bar",
    "Selección de rama existente en VS Code":
      "Existing branch selection in VS Code",
    "Paleta de comandos con Git Merge Branch en VS Code":
      "Command palette with Git Merge Branch in VS Code",
    "Marcadores de conflicto en un archivo dentro de VS Code":
      "Conflict markers in a file inside VS Code",
    ".gitignore": ".gitignore",
  },
  placeholder: {
    "escribe un comando git...": "write a git command...",
    "node_modules/\n*.log\n.env": "node_modules/\n*.log\n.env",
  },
};
Object.entries(EXTRA_ATTR_TRANSLATIONS).forEach(([attr, translations]) => {
  ATTR_TRANSLATIONS[attr] = Object.assign(
    ATTR_TRANSLATIONS[attr] || {},
    translations,
  );
});

const norm = (value) => (value || "").replace(/\s+/g, " ").trim();

function uiText(es, en) {
  if (currentLang === "en") return en || STATIC_TRANSLATIONS[norm(es)] || es;
  return es;
}

function uiTranslate(es) {
  return currentLang === "en" ? STATIC_TRANSLATIONS[norm(es)] || es : es;
}

function isEligibleForGeneratedTranslation(el) {
  if (
    el.id === "lang-toggle-btn" ||
    el.closest?.("#lang-toggle-btn") ||
    el.id === "theme-toggle-btn" ||
    el.closest?.("#theme-toggle-btn")
  ) return false;
  const tag = el.tagName.toLowerCase();
  const directTags = new Set([
    "p",
    "li",
    "figcaption",
    "h2",
    "h3",
    "h4",
    "td",
    "th",
    "button",
    "a",
    "span",
  ]);
  if (directTags.has(tag)) return true;
  if (
    tag === "div" &&
    (el.classList.contains("cmd-desc") ||
      el.classList.contains("commit-structure"))
  )
    return true;
  return false;
}

function hasTranslatedAncestor(el) {
  let parent = el.parentElement;
  while (parent) {
    if (
      parent.dataset?.es ||
      parent.dataset?.en ||
      parent.dataset?.i18nGenerated === "true"
    )
      return true;
    parent = parent.parentElement;
  }
  return false;
}

function prepareMissingTranslations() {
  document
    .querySelectorAll(
      "p, li, figcaption, h2, h3, h4, td, th, button, a, span, div.cmd-desc, div.commit-structure",
    )
    .forEach((el) => {
      if (!isEligibleForGeneratedTranslation(el)) return;
      if (el.dataset.es || el.dataset.en || el.dataset.i18nGenerated === "true")
        return;
      if (hasTranslatedAncestor(el)) return;

      const originalText = norm(el.textContent);
      const translatedText = STATIC_TRANSLATIONS[originalText];
      if (!translatedText) return;

      el.dataset.es = el.innerHTML.trim();
      el.dataset.en = translatedText;
      el.dataset.i18nGenerated = "true";
    });
}

function prepareTranslatedAttributes() {
  Object.entries(ATTR_TRANSLATIONS).forEach(([attr, translations]) => {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const original = el.getAttribute(attr);
      const translated = translations[original];
      if (!translated) return;
      el.dataset[`${attr.replace(/-/g, "")}Es`] = original;
      el.dataset[`${attr.replace(/-/g, "")}En`] = translated;
    });
  });
}

function setTranslatedAttribute(el, attr, lang) {
  const key = `${attr.replace(/-/g, "")}${lang === "en" ? "En" : "Es"}`;
  if (el.dataset[key]) el.setAttribute(attr, el.dataset[key]);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  localStorage.setItem("site-lang", lang);

  prepareMissingTranslations();
  prepareTranslatedAttributes();

  document.querySelectorAll("[data-es][data-en]").forEach((el) => {
    if (el.dataset.i18nGenerated === "true") {
      if (lang === "en") el.textContent = el.dataset.en;
      else el.innerHTML = el.dataset.es;
    } else {
      el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.es;
    }
  });

  document
    .querySelectorAll("[data-title-es], [data-title-en]")
    .forEach((el) => setTranslatedAttribute(el, "title", lang));
  document
    .querySelectorAll("[data-arialabel-es], [data-arialabel-en]")
    .forEach((el) => setTranslatedAttribute(el, "aria-label", lang));
  document
    .querySelectorAll("[data-alt-es], [data-alt-en]")
    .forEach((el) => setTranslatedAttribute(el, "alt", lang));
  document
    .querySelectorAll("[data-placeholder-es], [data-placeholder-en]")
    .forEach((el) => setTranslatedAttribute(el, "placeholder", lang));

  const langToggle = document.getElementById("lang-toggle-btn");
  if (langToggle && !document.getElementById("lang-label")) {
    langToggle.innerHTML =
      '<span id="lang-icon">🌐</span><span id="lang-label">EN</span>';
  }

  const label = document.getElementById("lang-label");
  if (label) label.textContent = lang === "en" ? "ES" : "EN";
  const themeIcon = getThemeIcon();
  if (themeIcon) {
    themeIcon.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }

  document.documentElement.lang = lang;
  if (typeof buildQuiz === "function") buildQuiz();
  if (typeof simUpdateChallengeBar === "function") simUpdateChallengeBar();
  if (typeof simUpdateHint === "function") simUpdateHint();
  if (window.giRefreshLanguage) window.giRefreshLanguage();
  if (typeof cfRender === "function") cfRender();
}

function toggleLang() {
  setLanguage(currentLang === "es" ? "en" : "es");
}

document.addEventListener("DOMContentLoaded", function () {
  setLanguage(currentLang);
});

function copyCmd(el) {
  const code = el.querySelector(".cmd-code").textContent.trim();
  const btn = el.querySelector(".cmd-copy");
  const copiedText = currentLang === "en" ? "Copied!" : "¡Copiado!";
  const copyText = currentLang === "en" ? "Copy" : "Copiar";

  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = copiedText;
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = copyText;
      btn.classList.remove("copied");
    }, 1800);
  });
}
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
    explanation:
      "git init crea el directorio .git que convierte la carpeta en un repositorio.",
    explanationEn:
      "git init creates the .git directory that turns the folder into a repository.",
  },
  {
    q: "¿Qué diferencia hay entre Git y GitHub?",
    qEn: "What is the difference between Git and GitHub?",
    opts: [
      "Son exactamente lo mismo",
      "Git es la plataforma web, GitHub el software local",
      "Git es el software de control de versiones local; GitHub es la plataforma web en la nube",
      "GitHub solo sirve para proyectos públicos",
    ],
    optsEn: [
      "They are exactly the same",
      "Git is the web platform, GitHub is the local software",
      "Git is the local version control software; GitHub is the cloud-based web platform",
      "GitHub is only for public projects",
    ],
    correct: 2,
    explanation:
      "Git vive en tu ordenador y gestiona versiones. GitHub es la plataforma online basada en Git.",
    explanationEn:
      "Git lives on your computer and manages versions. GitHub is the online platform built on top of Git.",
  },
  {
    q: "¿Qué hace git add . ?",
    qEn: "What does git add . do?",
    opts: [
      "Crea un nuevo repositorio",
      "Prepara todos los archivos modificados para el próximo commit",
      "Sube los cambios a GitHub",
      "Descarta todos los cambios",
    ],
    optsEn: [
      "Creates a new repository",
      "Stages all modified files for the next commit",
      "Uploads the changes to GitHub",
      "Discards all changes",
    ],
    correct: 1,
    explanation:
      "git add . mueve todos los cambios al área de staging, listos para el commit.",
    explanationEn:
      "git add . moves all changes to the staging area, ready to be committed.",
  },
  {
    q: "¿Qué comando sube tus commits al repositorio remoto?",
    qEn: "Which command pushes your commits to the remote repository?",
    opts: [
      "git commit -m",
      "git pull origin main",
      "git push origin main",
      "git sync",
    ],
    optsEn: [
      "git commit -m",
      "git pull origin main",
      "git push origin main",
      "git sync",
    ],
    correct: 2,
    explanation:
      "git push envía los commits locales al repositorio remoto en GitHub.",
    explanationEn:
      "git push sends your local commits to the remote repository on GitHub.",
  },
  {
    q: "¿Para qué sirve una rama (branch) en Git?",
    qEn: "What is a branch used for in Git?",
    opts: [
      "Para hacer copias de seguridad en otro disco",
      "Para trabajar en paralelo sin afectar a la rama principal",
      "Para eliminar archivos del repositorio",
      "Para cambiar el nombre del proyecto",
    ],
    optsEn: [
      "To make backups on another drive",
      "To work in parallel without affecting the main branch",
      "To delete files from the repository",
      "To rename the project",
    ],
    correct: 1,
    explanation:
      "Las ramas permiten desarrollar funcionalidades o correcciones de forma aislada.",
    explanationEn:
      "Branches allow you to develop features or fixes in isolation.",
  },
  {
    q: "¿Qué comando crea una nueva rama y cambia a ella directamente?",
    qEn: "Which command creates a new branch and switches to it immediately?",
    opts: [
      "git branch nueva-rama",
      "git new nueva-rama",
      "git switch -c nueva-rama",
      "git checkout nueva-rama --create",
    ],
    optsEn: [
      "git branch new-branch",
      "git new new-branch",
      "git switch -c new-branch",
      "git checkout new-branch --create",
    ],
    correct: 2,
    explanation:
      "git switch -c crea la rama y te cambia a ella en un solo paso.",
    explanationEn:
      "git switch -c creates the branch and switches to it in a single step.",
  },
  {
    q: "¿Qué hace git merge nombre-rama?",
    qEn: "What does git merge branch-name do?",
    opts: [
      "Crea una copia de la rama",
      "Elimina la rama indicada",
      "Integra los cambios de la rama indicada en la rama actual",
      "Sube la rama a GitHub",
    ],
    optsEn: [
      "Creates a copy of the branch",
      "Deletes the specified branch",
      "Integrates the changes from the specified branch into the current branch",
      "Uploads the branch to GitHub",
    ],
    correct: 2,
    explanation:
      "git merge fusiona los commits de otra rama en la rama en la que estás actualmente.",
    explanationEn:
      "git merge integrates another branch's commits into your current branch.",
  },
  {
    q: "¿Qué es un Pull Request?",
    qEn: "What is a Pull Request?",
    opts: [
      "Un comando de Git para descargar código",
      "Una solicitud para que otros revisen tus cambios antes de fusionarlos en main",
      "Lo mismo que git pull",
      "Una forma de eliminar ramas remotas",
    ],
    optsEn: [
      "A Git command to download code",
      "A request for others to review your changes before merging into main",
      "The same as git pull",
      "A way to delete remote branches",
    ],
    correct: 1,
    explanation:
      "Un PR es una propuesta de cambios en GitHub que permite revisión de código antes del merge.",
    explanationEn:
      "A PR is a proposed change on GitHub that allows code review before merging.",
  },
  {
    q: "¿Qué ocurre cuando hay un conflicto de merge?",
    qEn: "What happens when there is a merge conflict?",
    opts: [
      "Git elige automáticamente la versión más reciente",
      "El repositorio se borra",
      "Git marca las líneas en conflicto y espera que tú elijas cuál conservar",
      "Se cancela el merge sin posibilidad de reintentar",
    ],
    optsEn: [
      "Git automatically picks the most recent version",
      "The repository gets deleted",
      "Git marks the conflicting lines and waits for you to choose which to keep",
      "The merge is cancelled with no way to retry",
    ],
    correct: 2,
    explanation:
      "Git marca las secciones conflictivas con <<<<<<, ======= y >>>>>>>. Tú editas el archivo y haces un nuevo commit.",
    explanationEn:
      "Git marks conflicting sections with <<<<<<, ======= and >>>>>>>. You edit the file and make a new commit.",
  },
  {
    q: "¿Qué muestra el comando git log --oneline?",
    qEn: "What does git log --oneline show?",
    opts: [
      "Solo el último commit",
      "Un listado resumido de todos los commits del historial",
      "Los archivos modificados en el último commit",
      "La configuración global de Git",
    ],
    optsEn: [
      "Only the latest commit",
      "A compact list of all commits in the history",
      "The files modified in the last commit",
      "Git's global configuration",
    ],
    correct: 1,
    explanation:
      "git log --oneline muestra el historial de commits en formato compacto: hash + mensaje.",
    explanationEn:
      "git log --oneline shows the commit history in compact format: hash + message.",
  },
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
    (_, i) => `<span class="quiz-dot" id="qdot-${i}"></span>`,
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
      </div>`,
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
  document.getElementById("quiz-progress-bar").style.width =
    (answered / total) * 100 + "%";
  const lang = currentLang || "es";
  document.getElementById("quiz-progress-text").textContent =
    lang === "en"
      ? `Question ${qCurrent + 1} of ${total}`
      : `Pregunta ${qCurrent + 1} de ${total}`;

  // Dots
  QUIZ_QUESTIONS.forEach((_, i) => {
    const dot = document.getElementById(`qdot-${i}`);
    dot.className = "quiz-dot";
    if (i === qCurrent) dot.classList.add("active");
    else if (qRevealed[i]) {
      dot.classList.add(
        qAnswers[i] === QUIZ_QUESTIONS[i].correct ? "correct" : "wrong",
      );
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
  next.style.transform =
    direction === "next" ? "translateX(60px)" : "translateX(-60px)";
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
  const expl =
    currentLang === "en" && q.explanationEn ? q.explanationEn : q.explanation;
  fb.textContent = (chosen === correct ? "✓ " : "✗ ") + expl;

  quizRefreshUI();
}

function quizShowResults() {
  const total = QUIZ_QUESTIONS.length;
  const score = qAnswers.filter(
    (a, i) => a === QUIZ_QUESTIONS[i].correct,
  ).length;
  const pct = Math.round((score / total) * 100);

  let emoji, label, bg;
  const isEn = currentLang === "en";
  if (pct === 100) {
    emoji = "🏆";
    label = isEn ? "Perfect! You're an expert" : "¡Perfecto! Eres un experto";
    bg = "var(--success-bg)";
  } else if (pct >= 70) {
    emoji = "🎉";
    label = isEn
      ? "Great job! You know the concepts"
      : "¡Muy bien! Dominas los conceptos";
    bg = "var(--accent-bg)";
  } else if (pct >= 50) {
    emoji = "📚";
    label = isEn
      ? "Good, but review a bit more"
      : "Bien, pero repasa un poco más";
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
      msg: "¡Repositorio creado! Ahora Git está vigilando esta carpeta.",
    },
  },
  {
    id: "add",
    label: "2. Añadir archivos",
    hint: "Añade todos los archivos al staging",
    command: "git add .",
    responses: {
      ok: [""],
      msg: "Archivos preparados para el commit (staging area).",
    },
  },
  {
    id: "commit",
    label: "3. Hacer commit",
    hint: 'Crea un commit con el mensaje "primer commit"',
    command: 'git commit -m "primer commit"',
    responses: {
      ok: [
        "[main (root-commit) a1b2c3d] primer commit",
        " 3 files changed, 42 insertions(+)",
      ],
      msg: "¡Commit guardado! Tu código tiene su primera instantánea.",
    },
  },
  {
    id: "branch",
    label: "4. Crear rama",
    hint: 'Crea y cambia a una rama llamada "feature/login"',
    command: "git switch -c feature/login",
    responses: {
      ok: ["Switched to a new branch 'feature/login'"],
      msg: "¡Nueva rama creada! Ahora puedes trabajar de forma aislada.",
    },
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
        " * [new branch]  feature/login -> feature/login",
      ],
      msg: "🎉 ¡Reto completado! Tu rama ya está en GitHub.",
    },
  },
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
      uiText("💡 Pista: ", "💡 Hint: ") +
      uiTranslate(SIM_CHALLENGES[simStep].hint);
  } else {
    hint.textContent = uiTranslate(
      "🏆 ¡Todos los retos completados! Eres un pro de Git.",
    );
  }
}

function buildSimulator() {
  const input = document.getElementById("sim-input");
  if (!input) return;
  simPrint(uiTranslate("Bienvenido al simulador de Git"), "line-info");
  simPrint(
    uiTranslate("Completa los retos escribiendo los comandos correctos."),
    "line-dim",
  );
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
      uiTranslate(
        "Ya completaste todos los retos. ¡Recarga la página para volver a jugar!",
      ),
      "line-dim",
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
        'Comandos útiles: git init | git add . | git commit -m "msg" | git switch -c rama | git push origin rama',
      ),
      "line-info",
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
        'Este es un simulador de Git. Empieza tus comandos con "git" (o escribe "help").',
      ),
      "line-err",
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
      simPrint(
        uiTranslate("🏆 ¡FELICIDADES! Completaste todos los retos."),
        "line-info",
      );
      simPrint(
        uiTranslate(
          "Ya sabes los comandos esenciales de Git. ¡A por el mundo!",
        ),
        "line-ok",
      );
    }
  } else {
    // give hints based on partial match
    if (given.startsWith("git") && !given.includes(expected.split(" ")[1])) {
      simPrint(
        uiTranslate("Comando no reconocido en este contexto. Recuerda: ") +
          uiTranslate(challenge.hint),
        "line-err",
      );
    } else {
      simPrint(
        uiTranslate("Casi... revisa la sintaxis exacta del comando."),
        "line-err",
      );
    }
  }
}

/* ═══════════════════════════════
  LIGHTBOX PARA IMÁGENES
═══════════════════════════════ */
function buildLightbox() {
  const overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.innerHTML = `
    <button id="lightbox-close" aria-label="Cerrar">&#x2715;</button>
    <img id="lightbox-img" src="" alt="">
    <p id="lightbox-caption"></p>
  `;
  document.body.appendChild(overlay);

  const lbImg = document.getElementById("lightbox-img");
  const lbCaption = document.getElementById("lightbox-caption");
  const lbClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lbCaption.textContent = alt || "";
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(function () {
      lbImg.src = "";
    }, 200);
  }

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });
  lbClose.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  document.querySelectorAll(".img-figure img").forEach(function (img) {
    img.addEventListener("click", function () {
      var figure = img.closest("figure");
      var caption =
        figure && figure.querySelector("figcaption")
          ? figure.querySelector("figcaption").textContent
          : img.alt || "";
      openLightbox(img.src, caption);
    });
  });
}

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

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof buildQuiz === "function") buildQuiz();
    if (typeof buildSimulator === "function") buildSimulator();
    if (typeof buildLightbox === "function") buildLightbox();
    if (typeof buildConflictExercise === "function") buildConflictExercise();
    renderFiles([]);
  });
})();

/* ═══════════════════════════════
   EJERCICIO: CONFLICTOS ENTRE RAMAS
═══════════════════════════════ */

const CF_INITIAL_FILE = `<header>
  <h1>Guía básica de GitHub</h1>
  <p>Aprende Git y GitHub paso a paso.</p>
</header>`;

const CF_CONFLICT_FILE = `<header>
<<<<<<< HEAD
  <h1>Guía básica de GitHub con ejercicios interactivos</h1>
=======
  <h1>Guía práctica de GitHub para principiantes</h1>
>>>>>>> feature-titulo
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
