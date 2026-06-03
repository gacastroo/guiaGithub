  /* ═══════════════════════════════
   NAVEGACIÓN ENTRE SECCIONES
═══════════════════════════════ */
// Cambia de sección visible al hacer clic en el menú
  function show(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('visible');
    btn.classList.add('active');
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  /* ── MOBILE NAV ── */
  function toggleMobileNav() {
    const nav = document.querySelector('nav');
    const scroll = document.getElementById('nav-scroll');
    const hamburger = document.getElementById('nav-hamburger');
    nav.classList.toggle('open');
    scroll.classList.toggle('open');
    hamburger.classList.toggle('open');
    adjustLayout();
  }

  function closeMobileNav() {
    const nav = document.querySelector('nav');
    const scroll = document.getElementById('nav-scroll');
    const hamburger = document.getElementById('nav-hamburger');
    nav.classList.remove('open');
    scroll.classList.remove('open');
    hamburger.classList.remove('open');
    adjustLayout();
  }


  document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    if (!nav.contains(e.target)) closeMobileNav();
  });

  function adjustLayout() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    if (!header || !nav || !main) return;

    const headerH = header.offsetHeight;
    const navH = nav.offsetHeight;

    if (window.innerWidth <= 1024) {
      nav.style.top = `${headerH}px`;
      main.style.paddingTop = `${headerH + navH + 16}px`;
    } else {
      nav.style.top = '';
      main.style.paddingTop = '';
    }
  }

  window.addEventListener('resize', adjustLayout);
  document.addEventListener('DOMContentLoaded', adjustLayout);


  /* ═══════════════════════════════
   DARK MODE TOGGLE
═══════════════════════════════ */
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
    /* ═══════════════════════════════
   LANGUAGE TOGGLE / I18N
═══════════════════════════════ */
  let currentLang = localStorage.getItem('lang') || localStorage.getItem('site-lang') || 'es';

  const STATIC_TRANSLATIONS = {
  "🌐 EN": "🌐 EN",
  "\"Git es el cerebro 🧠 , GitHub es la red social 🌐 .\"": "\"Git is the brain 🧠, GitHub is the social network 🌐.\"",
  "\"Git guarda tu código, GitHub lo presume.\"": "\"Git saves your code, GitHub shows it off.\"",
  "Comparativa visual entre Git y GitHub": "Visual comparison between Git and GitHub",
  "Git": "Git",
  "Software local (en tu ordenador)": "Local software (on your computer)",
  "Control de versiones": "Version control",
  "Guarda instantáneas del proyecto": "Saves snapshots of the project",
  "Ideal para uso individual": "Ideal for individual use",
  "Funciona sin internet": "Works without internet",
  "GitHub": "GitHub",
  "Plataforma web": "Web platform",
  "Colaboración en equipo": "Team collaboration",
  "Basado en Git": "Based on Git",
  "Gestión de proyectos": "Project management",
  "Red social para código": "Social network for code",
  "Un sistema que permite gestionar y rastrear los cambios en el código fuente a lo largo del tiempo, facilitando la colaboración y el desarrollo eficiente de software.": "A system that lets you manage and track changes in source code over time, making collaboration and efficient software development easier.",
  "Descarga Git desde su página oficial e instálalo en tu sistema operativo.": "Download Git from its official website and install it on your operating system.",
  "Página oficial de Git": "Official Git website",
  "Instalación y primeros pasos con Git": "Installation and first steps with Git",
  "Esencial": "Essential",
  "Recomendado": "Recommended",
  "1 · Configuración inicial": "1 · Initial setup",
  "Una vez que has instalado Git, es recomendable configurar tu nombre de usuario y correo electrónico:": "Once you have installed Git, it is recommended to configure your username and email address:",
  "Configura tu nombre de usuario": "Sets your username",
  "Copiar": "Copy",
  "Configura tu correo electrónico": "Sets your email address",
  "2 · Iniciar un proyecto": "2 · Start a project",
  "Crea un repositorio nuevo en la carpeta actual": "Creates a new repository in the current folder",
  "Crea una nueva conexión a un repositorio remoto.": "Creates a new connection to a remote repository.",
  "Descarga un repositorio existente": "Downloads an existing repository",
  "Descarga los cambios del repositorio remoto": "Downloads changes from the remote repository",
  "3 · El ciclo diario": "3 · The daily workflow",
  "Muestra qué ha cambiado": "Shows what has changed",
  "Prepara todos los cambios para el commit": "Stages all changes for the commit",
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
  "Repositorio Local: Es la carpeta en tu ordenador. Es donde editas tus archivos día a día. GitHub no ve esto hasta que tú lo envías.": "Local Repository: This is the folder on your computer. It is where you edit your files day to day. GitHub does not see it until you send it.",
  "Repositorio Remoto: Es la copia en los servidores de GitHub. Es tu respaldo en la nube y el lugar donde los demás ven tu código.": "Remote Repository: This is the copy on GitHub's servers. It is your cloud backup and the place where others can see your code.",
  "💾 Se guarda en tu computadora": "💾 Saved on your computer",
  "☁️ Ahora está en internet": "☁️ Now it is on the internet",
  "Acceder a la creación de un nuevo repositorio": "Access the new repository creation screen",
  "Formulario para configurar el nuevo repositorio": "Form to configure the new repository",
  "Repositorio creado correctamente en GitHub": "Repository created successfully on GitHub",
  "Entra al repositorio en GitHub.": "Open the repository on GitHub.",
  "Haz clic en el botón verde Code y copia la URL del repositorio.": "Click the green Code button and copy the repository URL.",
  "Abre la terminal en VS Code con Ctrl + Ñ o desde Terminal → New Terminal .": "Open the terminal in VS Code with Ctrl + Ñ or from Terminal → New Terminal.",
  "Ve a la carpeta donde quieres guardar el proyecto, por ejemplo:": "Go to the folder where you want to save the project, for example:",
  "Después, ejecuta el comando git clone :": "Then run the git clone command:",
  "Entra dentro de la carpeta que se acaba de descargar:": "Enter the folder that was just downloaded:",
  "Al clonar un repositorio, Git crea automáticamente la conexión con GitHub. Esa conexión se llama normalmente origin .": "When you clone a repository, Git automatically creates the connection with GitHub. That connection is usually called origin.",
  "Puedes comprobarlo con:": "You can check it with:",
  "Si todo está correcto, verás algo parecido a esto:": "If everything is correct, you will see something like this:",
  "Usa esta opción si ya tienes tu proyecto creado en tu computadora y quieres conectarlo con un repositorio nuevo de GitHub.": "Use this option if you already have your project created on your computer and want to connect it to a new GitHub repository.",
  "Crea un repositorio nuevo en GitHub.": "Create a new repository on GitHub.",
  "Copia la URL del repositorio. Será parecida a esta:": "Copy the repository URL. It will look similar to this:",
  "Abre tu proyecto en VS Code y asegúrate de estar dentro de la carpeta correcta en la terminal.": "Open your project in VS Code and make sure you are inside the correct folder in the terminal.",
  "Ahora ejecuta estos comandos en orden:": "Now run these commands in order:",
  "¿Qué hace cada comando?": "What does each command do?",
  "Resumen fácil: git clone descarga un proyecto que ya existe en GitHub. git remote add origin conecta una carpeta local con un repositorio remoto.": "Simple summary: git clone downloads a project that already exists on GitHub. git remote add origin connects a local folder to a remote repository.",
  "Después de hacer esto una vez, tu flujo diario será:": "After doing this once, your daily workflow will be:",
  "Nota: sustituye usuario y nombre-repositorio por los datos reales de tu cuenta y de tu repositorio.": "Note: replace usuario and nombre-repositorio with the real details of your account and repository.",
  "Vincular GitHub con VS Code:": "Link GitHub with VS Code:",
  "Instala la extensión \"GitHub Pull Requests and Issues\" .": "Install the \"GitHub Pull Requests and Issues\" extension.",
  "Haz clic en el icono de usuario (abajo a la izquierda) → \"Sign in to GitHub\" y autoriza la conexión.": "Click the user icon (bottom left) → \"Sign in to GitHub\" and authorize the connection.",
  "Hacer cambios (Flujo diario):": "Making changes (Daily workflow):",
  "Edita tus archivos y guárdalos.": "Edit your files and save them.",
  "Ve a la pestaña de Source Control (icono de nodos a la izquierda).": "Go to the Source Control tab (branch icon on the left).",
  "Haz clic en el \"+\" para preparar los cambios (Stage).": "Click the \"+\" to stage the changes.",
  "Escribe un mensaje de commit y presiona el botón Commit .": "Write a commit message and press the Commit button.",
  "Haz clic en Sync Changes (o Push) para enviar todo a GitHub.": "Click Sync Changes (or Push) to send everything to GitHub.",
  "Para usar la terminal en VS Code, presiona Ctrl + Ñ o ve al menú Terminal → New Terminal . Una vez abierta, ejecuta estos comandos en orden:": "To use the terminal in VS Code, press Ctrl + Ñ or go to Terminal → New Terminal. Once it is open, run these commands in order:",
  "Nota: Asegúrate de estar dentro de la carpeta de tu proyecto en la terminal antes de escribir estos comandos.": "Note: Make sure you are inside your project folder in the terminal before typing these commands.",
  "Estructura de un commit": "Commit structure",
  "Tipos": "Types",
  "feat": "feat",
  "Nueva funcionalidad": "New feature",
  "fix": "fix",
  "Corrección de bugs": "Bug fix",
  "perf": "perf",
  "Mejora de rendimiento": "Performance improvement",
  "refactor": "refactor",
  "Cambio interno sin afectar comportamiento": "Internal change without affecting behavior",
  "style": "style",
  "Formato (espacios, tabs, etc.)": "Formatting (spaces, tabs, etc.)",
  "docs": "docs",
  "Documentación": "Documentation",
  "test": "test",
  "Tests": "Tests",
  "build": "build",
  "Build, dependencias, scripts": "Build, dependencies, scripts",
  "ci": "ci",
  "Integración continua": "Continuous integration",
  "Reglas": "Rules",
  "Imperativo → \"add\", \"fix\", \"update\"": "Imperative → \"add\", \"fix\", \"update\"",
  "Máximo ~50 caracteres": "Maximum ~50 characters",
  "Sin punto final": "No final period",
  "1 commit = 1 cambio": "1 commit = 1 change",
  "Mensaje claro: qué y por qué": "Clear message: what and why",
  "\"Una rama es como una copia paralela de tu proyecto donde puedes experimentar sin miedo a romper nada.\"": "\"A branch is like a parallel copy of your project where you can experiment without fear of breaking anything.\"",
  "\"La rama main es el tronco del árbol. El resto son ramas que crecen a los lados.\"": "\"The main branch is the tree trunk. The others are branches that grow from the sides.\"",
  "Crear y navegar": "Create and navigate",
  "Crea una rama nueva y cambia a ella directamente": "Creates a new branch and switches to it directly",
  "Cambia a una rama ya existente": "Switches to an existing branch",
  "Lista todas las ramas locales (la activa aparece con *)": "Lists all local branches (the active one appears with *)",
  "Lista ramas locales Y remotas": "Lists local AND remote branches",
  "Fusionar y eliminar": "Merge and delete",
  "Fusiona la rama indicada en la rama actual": "Merges the specified branch into the current branch",
  "Consecuencias de hacer un merge": "Consequences of merging",
  "Los commits de la rama fusionada quedan integrados permanentemente en la rama destino.": "The commits from the merged branch become permanently integrated into the target branch.",
  "Puede generar conflictos de merge si ambas ramas modificaron las mismas líneas. Tendrás que resolverlos manualmente antes de continuar.": "It can create merge conflicts if both branches modified the same lines. You will need to resolve them manually before continuing.",
  "Una vez resueltos los conflictos y confirmado el merge, no se puede deshacer fácilmente (requiere git revert o git reset con cuidado).": "Once conflicts are resolved and the merge is confirmed, it cannot be easily undone (it requires git revert or careful use of git reset).",
  "En proyectos compartidos, un merge directo sin Pull Request puede saltarse la revisión del equipo.": "In shared projects, a direct merge without a Pull Request can bypass team review.",
  "Asegúrate de estar en la rama correcta antes de ejecutarlo ( git branch para comprobarlo).": "Make sure you are on the correct branch before running it (use git branch to check).",
  "Elimina una rama local (solo si ya fue fusionada)": "Deletes a local branch (only if it has already been merged)",
  "Consecuencias de eliminar una rama local": "Consequences of deleting a local branch",
  "Una vez eliminada la rama local sin haber hecho push, los commits exclusivos de esa rama se pierden .": "Once the local branch is deleted without being pushed, the commits that only existed on that branch are lost.",
  "Si otro compañero tenía esa rama como referencia, deberá actualizar su repositorio local.": "If another teammate had that branch as a reference, they will need to update their local repository.",
  "Elimina la rama también del repositorio remoto": "Deletes the branch from the remote repository too",
  "Consecuencias de eliminar una rama remota": "Consequences of deleting a remote branch",
  "La rama desaparece del repositorio remoto para todos los colaboradores del proyecto.": "The branch disappears from the remote repository for all project collaborators.",
  "Cualquier Pull Request abierto basado en esa rama quedará automáticamente cerrado o huérfano .": "Any open Pull Request based on that branch will be automatically closed or orphaned.",
  "Los compañeros que tengan la rama en local recibirán errores al hacer git fetch o git pull si intentan actualizarla.": "Teammates who have the branch locally will get errors when running git fetch or git pull if they try to update it.",
  "La acción no tiene confirmación previa : se ejecuta de inmediato. Confirma bien el nombre antes de lanzar el comando.": "This action has no prior confirmation: it runs immediately. Double-check the name before running the command.",
  "Sube tu rama con git push origin nombre-rama": "Push your branch with git push origin branch-name",
  "En GitHub, aparece un botón \"Compare & pull request\" — haz clic": "On GitHub, a \"Compare & pull request\" button appears — click it",
  "Escribe una descripción de qué cambios hiciste y por qué": "Write a description of what changes you made and why",
  "Tus compañeros revisan, comentan y aprueban (o piden cambios)": "Your teammates review, comment, and approve (or request changes)",
  "Cuando todo está bien, se hace clic en \"Merge pull request\" ✅": "When everything is OK, click \"Merge pull request\" ✅",
  "Git marcará el conflicto así en el archivo:": "Git will mark the conflict like this in the file:",
  "Patrón": "Pattern",
  "Significado": "Meaning",
  "Ignora toda la carpeta de dependencias": "Ignores the entire dependencies folder",
  "Ignora cualquier archivo con extensión .log": "Ignores any file with the .log extension",
  "Ignora el archivo de variables de entorno sensibles": "Ignores the sensitive environment variables file",
  "Ignora la carpeta de archivos generados en el build": "Ignores the folder of files generated during the build",
  "JavaScript / Node.js": "JavaScript / Node.js",
  "Por qué se ignora": "Why it is ignored",
  "Contiene todas las dependencias del proyecto. Pueden pesar cientos de MB y se reinstalan fácilmente con npm install .": "Contains all project dependencies. They can weigh hundreds of MB and are easily reinstalled with npm install.",
  "npm-debug.log* yarn-debug.log*": "npm-debug.log* yarn-debug.log*",
  "Logs generados automáticamente cuando ocurre un error durante la instalación. Son locales y no aportan nada al repositorio.": "Logs generated automatically when an error occurs during installation. They are local and add no value to the repository.",
  "Contiene variables de entorno sensibles: claves de API, credenciales de bases de datos, contraseñas. Subirlo supone un grave riesgo de seguridad.": "Contains sensitive environment variables: API keys, database credentials, passwords. Uploading it is a serious security risk.",
  "Carpetas generadas por el proceso de compilación o transpilación (Webpack, Vite…). Se regeneran a partir del código fuente, no tiene sentido versionar su contenido.": "Folders generated by the compilation or transpilation process (Webpack, Vite…). They are regenerated from source code, so versioning their contents does not make sense.",
  "Python": "Python",
  "Carpeta que Python genera automáticamente para almacenar módulos en caché y acelerar su carga. Es específica de cada máquina y sistema operativo.": "Folder that Python automatically generates to store cached modules and speed up loading. It is specific to each machine and operating system.",
  "Archivos de bytecode generados al interpretar los .py . No son código fuente y varían entre versiones de Python y entre sistemas.": "Bytecode files generated when interpreting .py files. They are not source code and vary between Python versions and systems.",
  "Contiene variables de entorno sensibles que nunca deben compartirse públicamente.": "Contains sensitive environment variables that should never be shared publicly.",
  "venv/": "venv/",
  "Entorno virtual local con las dependencias instaladas. Cada desarrollador crea el suyo con python -m venv venv . Contiene rutas absolutas que causan conflictos entre máquinas.": "Local virtual environment with installed dependencies. Each developer creates their own with python -m venv venv. It contains absolute paths that cause conflicts between machines.",
  "Carpetas generadas al empaquetar el proyecto (con setuptools o pyinstaller ). Se regeneran fácilmente y no deben versionarse.": "Folders generated when packaging the project (with setuptools or pyinstaller). They are easily regenerated and should not be versioned.",
  "Java": "Java",
  "Carpeta donde Maven o Gradle depositan todos los archivos generados durante la compilación. Se regenera completamente al construir el proyecto.": "Folder where Maven or Gradle place all files generated during compilation. It is fully regenerated when building the project.",
  "Bytecode compilado por javac a partir del código fuente .java . Es específico de la máquina virtual y se regenera en cada compilación.": "Bytecode compiled by javac from .java source code. It is specific to the virtual machine and is regenerated on every build.",
  "Artefacto empaquetado con el código compilado y sus dependencias. Es la salida del build, no código fuente. Se regenera con mvn package o gradle build .": "Packaged artifact containing compiled code and its dependencies. It is build output, not source code. It is regenerated with mvn package or gradle build.",
  "Similar al .jar pero para aplicaciones web Java desplegadas en servidores como Tomcat. También es un artefacto de build, no fuente.": "Similar to .jar, but for Java web applications deployed on servers like Tomcat. It is also a build artifact, not source.",
  "Registros de ejecución generados localmente durante pruebas o el servidor. Son específicos de cada entorno y no aportan valor al repositorio.": "Execution logs generated locally during tests or by the server. They are environment-specific and add no value to the repository.",
  "PHP": "PHP",
  "Carpeta donde Composer instala todas las dependencias. Puede ser muy pesada y se restaura completamente ejecutando composer install a partir del composer.lock .": "Folder where Composer installs all dependencies. It can be very heavy and is fully restored by running composer install from composer.lock.",
  "Archivos de log generados por el servidor web (Apache, Nginx) o el framework (Laravel, Symfony). Son locales y no deben versionarse.": "Log files generated by the web server (Apache, Nginx) or framework (Laravel, Symfony). They are local and should not be versioned.",
  "Contiene configuración sensible del entorno: credenciales de base de datos, claves de cifrado, tokens de servicios externos. Nunca debe subirse al repositorio.": "Contains sensitive environment configuration: database credentials, encryption keys, external service tokens. It should never be uploaded to the repository.",
  "Documentación oficial de Git sobre .gitignore: Documentación oficial de Git sobre .gitignore": "Official Git documentation about .gitignore: Official Git documentation about .gitignore",
  "Documentación oficial de Git sobre .gitignore": "Official Git documentation about .gitignore",
  "Generador de .gitignore en línea: Generador de .gitignore en línea": "Online .gitignore generator: Online .gitignore generator",
  "Generador de .gitignore en línea": "Online .gitignore generator",
  "Plantillas de .gitignore en GitHub: Plantillas de .gitignore en GitHub": "GitHub .gitignore templates: GitHub .gitignore templates",
  "Plantillas de .gitignore en GitHub": "GitHub .gitignore templates",
  "Pon a prueba lo que has aprendido. Una pregunta a la vez.": "Test what you have learned. One question at a time.",
  "Pregunta 1 de 10": "Question 1 of 10",
  "← Anterior Confirmar Siguiente →": "← Previous Confirm Next →",
  "← Anterior": "← Previous",
  "Confirmar": "Confirm",
  "Siguiente →": "Next →",
  "Practica los comandos reales de Git en un terminal simulado. Completa los 5 retos para ganar.": "Practice real Git commands in a simulated terminal. Complete the 5 challenges to win.",
  "Tienes un proyecto Node.js. Escribe las reglas correctas en el .gitignore para que solo queden los archivos de código fuente. Observa cómo cambia el estado de cada archivo en tiempo real.": "You have a Node.js project. Write the correct rules in the .gitignore so that only the source code files remain. Watch each file status change in real time.",
  "0 de 6 archivos ignorados correctamente": "0 of 6 files ignored correctly",
  "📁 Archivos del proyecto": "📁 Project files",
  "📄 .gitignore": "📄 .gitignore",
  "# escribe tus reglas aquí, una por línea": "# write your rules here, one per line",
  "💡 Ver pista 🔄 Reiniciar Comprobar solución ✓": "💡 Show hint 🔄 Restart Check solution ✓",
  "💡 Ver pista": "💡 Show hint",
  "🔄 Reiniciar": "🔄 Restart",
  "Comprobar solución ✓": "Check solution ✓",
  "¿Por qué estas reglas?": "Why these rules?",
  "Carpeta de dependencias. Puede pesar cientos de MB y se reinstala con npm install .": "Dependencies folder. It can weigh hundreds of MB and is reinstalled with npm install.",
  "Salida del build (Webpack, Vite…). Se regenera a partir del código fuente.": "Build output (Webpack, Vite…). It is regenerated from the source code.",
  "Variables de entorno sensibles: claves API, credenciales. Nunca debe subirse.": "Sensitive environment variables: API keys, credentials. It should never be uploaded.",
  "Variante local del .env, igualmente sensible y específica de cada máquina.": "Local variant of .env, equally sensitive and specific to each machine.",
  "Comodín que ignora todos los archivos .log. Son registros locales de ejecución.": "Wildcard that ignores all .log files. They are local execution logs.",
  "Metadatos internos de macOS. No aportan nada al repositorio.": "Internal macOS metadata. It adds nothing to the repository.",
  "Vista general de la integración de Git en VS Code": "Overview of Git integration in VS Code",
  "Cuando editas un archivo, VS Code lo marca automáticamente en el explorador de archivos con una letra:": "When you edit a file, VS Code automatically marks it in the file explorer with a letter:",
  "M (Modified) — archivo modificado.": "M (Modified) — modified file.",
  "U (Untracked) — archivo nuevo que Git aún no conoce.": "U (Untracked) — new file that Git does not know yet.",
  "D (Deleted) — archivo eliminado.": "D (Deleted) — deleted file.",
  "En el panel Source Control verás los mismos archivos agrupados en dos secciones: Changes (cambios sin preparar) y Staged Changes (cambios listos para el commit).": "In the Source Control panel, you will see the same files grouped into two sections: Changes (unstaged changes) and Staged Changes (changes ready for commit).",
  "El panel Source Control lista todos los archivos con cambios pendientes": "The Source Control panel lists all files with pending changes",
  "Antes de hacer un commit debes preparar los archivos que quieres incluir. En VS Code tienes dos formas de hacerlo:": "Before making a commit, you must stage the files you want to include. In VS Code, there are two ways to do this:",
  "Haz clic en el icono + que aparece al pasar el ratón por encima de un archivo en la sección Changes para añadirlo individualmente.": "Click the + icon that appears when you hover over a file in the Changes section to add it individually.",
  "Haz clic en el + junto al encabezado Changes para preparar todos los archivos a la vez.": "Click the + next to the Changes heading to stage all files at once.",
  "Los archivos preparados se moverán a la sección Staged Changes . Si cambias de opinión, haz clic en el icono − para retirarlos del stage.": "Staged files will move to the Staged Changes section. If you change your mind, click the − icon to unstage them.",
  "Haz clic en + para mover un archivo a Staged Changes": "Click + to move a file to Staged Changes",
  "Una vez preparados los archivos, escribe un mensaje descriptivo en el campo de texto que dice \"Message (Ctrl+Enter to commit)\" y pulsa Ctrl+Enter (o haz clic en el botón Commit ✔ ). El commit quedará registrado en el historial local de tu repositorio.": "Once the files are staged, write a descriptive message in the text field that says \"Message (Ctrl+Enter to commit)\" and press Ctrl+Enter (or click the Commit ✔ button). The commit will be recorded in your local repository history.",
  "Consejo: Un buen mensaje de commit responde a la pregunta \"¿Qué hace este cambio?\", por ejemplo: Añade formulario de contacto .": "Tip: A good commit message answers the question \"What does this change do?\", for example: Add contact form.",
  "Escribe el mensaje y pulsa Ctrl+Enter para confirmar el commit": "Write the message and press Ctrl+Enter to confirm the commit",
  "En la esquina inferior izquierda de VS Code verás el nombre de la rama actual (normalmente main o master ). Haz clic sobre él para abrir el menú de ramas y selecciona Create new branch… . Escribe el nombre de tu nueva rama (por ejemplo, feature/formulario-contacto ) y pulsa Enter .": "In the bottom-left corner of VS Code, you will see the name of the current branch (usually main or master). Click it to open the branch menu and select Create new branch…. Type the name of your new branch (for example, feature/contact-form) and press Enter.",
  "VS Code creará la rama y cambiará a ella automáticamente. Todos los commits que hagas a partir de ahora irán a esta rama sin afectar a main .": "VS Code will create the branch and switch to it automatically. All commits you make from now on will go to this branch without affecting main.",
  "Haz clic en el nombre de la rama (barra inferior) para ver todas las opciones de rama": "Click the branch name (bottom bar) to see all branch options",
  "Desde el mismo menú de la barra de estado puedes seleccionar cualquier rama existente para cambiar a ella. VS Code actualizará los archivos del proyecto al estado de esa rama de forma instantánea.": "From the same status bar menu, you can select any existing branch to switch to it. VS Code will instantly update the project files to that branch state.",
  "La lista muestra todas las ramas locales; haz clic en una para cambiarte a ella": "The list shows all local branches; click one to switch to it",
  "Cuando tu funcionalidad esté lista y quieras incorporarla a main , sigue estos pasos dentro de VS Code:": "When your feature is ready and you want to merge it into main, follow these steps in VS Code:",
  "Cambia a la rama de destino ( main ) usando la barra de estado inferior.": "Switch to the target branch (main) using the bottom status bar.",
  "Abre la paleta de comandos con Ctrl+Shift+P y escribe Git: Merge Branch… .": "Open the command palette with Ctrl+Shift+P and type Git: Merge Branch….",
  "Selecciona la rama que quieres fusionar (p. ej., feature/formulario-contacto ).": "Select the branch you want to merge (e.g., feature/contact-form).",
  "Si no hay conflictos, VS Code completará el merge automáticamente y los cambios quedarán integrados en main .": "If there are no conflicts, VS Code will complete the merge automatically and the changes will be integrated into main.",
  "Busca \"Git: Merge Branch\" en la paleta de comandos para iniciar la fusión": "Search for \"Git: Merge Branch\" in the command palette to start the merge",
  "Cuando se produce un conflicto, VS Code marca el archivo con una C roja en el explorador y en el panel Source Control. Al abrirlo, verás el código dividido en bloques con marcadores especiales:": "When a conflict occurs, VS Code marks the file with a red C in the explorer and in the Source Control panel. When you open it, you will see the code divided into blocks with special markers:",
  "<<<<<<< HEAD — inicio de tu versión (rama actual).": "<<<<<<< HEAD — start of your version (current branch).",
  "======= — separador entre las dos versiones.": "======= — separator between the two versions.",
  ">>>>>>> feature/… — inicio de la versión entrante (rama que estás fusionando).": ">>>>>>> feature/… — start of the incoming version (the branch you are merging).",
  "VS Code resalta visualmente los bloques en conflicto con colores diferenciados": "VS Code visually highlights conflict blocks with different colors",
  "Encima de cada bloque en conflicto aparecen cuatro acciones rápidas. Elige la que mejor se adapte a tu caso:": "Above each conflict block, four quick actions appear. Choose the one that best fits your case:",
  "Accept Current Change — conserva únicamente tu versión (HEAD).": "Accept Current Change — keeps only your version (HEAD).",
  "Accept Incoming Change — conserva únicamente la versión de la otra rama .": "Accept Incoming Change — keeps only the version from the other branch.",
  "Accept Both Changes — incluye las dos versiones, una detrás de la otra.": "Accept Both Changes — includes both versions, one after the other.",
  "Compare Changes — abre una vista de diferencias en dos paneles para decidir con más calma.": "Compare Changes — opens a two-panel diff view so you can decide more carefully.",
  "También puedes editar el archivo manualmente: simplemente borra los marcadores ( <<< , === , >>> ) y deja el código exactamente como quieres que quede.": "You can also edit the file manually: simply delete the markers (<<<, ===, >>>) and leave the code exactly as you want it.",
  "Una vez resueltos todos los conflictos del archivo, guárdalo ( Ctrl+S ). VS Code dejará de marcarlo con la C roja. Repite el proceso con cada archivo en conflicto y, cuando todos estén limpios, ve al panel Source Control y realiza un commit para cerrar el merge:": "Once all conflicts in the file are resolved, save it (Ctrl+S). VS Code will stop marking it with the red C. Repeat the process with each conflicted file and, when all are clean, go to the Source Control panel and make a commit to close the merge:",
  "Prepara los archivos resueltos con + .": "Stage the resolved files with +.",
  "Escribe un mensaje como Merge feature/formulario-contacto en main .": "Write a message such as Merge feature/contact-form into main.",
  "Pulsa Ctrl+Enter para confirmar.": "Press Ctrl+Enter to confirm.",
  "Tras resolver todos los conflictos, un commit final cierra el proceso de merge": "After resolving all conflicts, a final commit closes the merge process",
  "© 2026 Guía de GitHub · Guillermo Castro Abarca": "© 2026 GitHub Guide · Guillermo Castro Abarca",
  "Guillermo Castro Abarca": "Guillermo Castro Abarca"
};

  const ATTR_TRANSLATIONS = {
    title: {
      "Cambiar idioma": "Change language",
      "Cambiar tema": "Change theme",
      "Contribuciones": "Contributions",
      "Instalación de Git": "Git Installation"
    },
    "aria-label": {
      "Menú": "Menu"
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
      "Vista general de integración Git en VS Code": "Overview of Git integration in VS Code",
      "Commit final tras resolver los conflictos en VS Code": "Final commit after resolving conflicts in VS Code"
    }
  };

  const norm = (value) => (value || "").replace(/\s+/g, " ").trim();

  function isEligibleForGeneratedTranslation(el) {
    const tag = el.tagName.toLowerCase();
    const directTags = new Set(["p", "li", "figcaption", "h2", "h3", "h4", "td", "th", "button", "a", "span"]);
    if (directTags.has(tag)) return true;
    if (tag === "div" && (el.classList.contains("cmd-desc") || el.classList.contains("commit-structure"))) return true;
    return false;
  }

  function hasTranslatedAncestor(el) {
    let parent = el.parentElement;
    while (parent) {
      if (parent.dataset?.es || parent.dataset?.en || parent.dataset?.i18nGenerated === "true") return true;
      parent = parent.parentElement;
    }
    return false;
  }

  function prepareMissingTranslations() {
    document.querySelectorAll("p, li, figcaption, h2, h3, h4, td, th, button, a, span, div.cmd-desc, div.commit-structure").forEach((el) => {
      if (!isEligibleForGeneratedTranslation(el)) return;
      if (el.dataset.es || el.dataset.en || el.dataset.i18nGenerated === "true") return;
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
    localStorage.setItem('lang', lang);
    localStorage.setItem('site-lang', lang);

    prepareMissingTranslations();
    prepareTranslatedAttributes();

    document.querySelectorAll('[data-es][data-en]').forEach((el) => {
      if (el.dataset.i18nGenerated === 'true') {
        if (lang === 'en') el.textContent = el.dataset.en;
        else el.innerHTML = el.dataset.es;
      } else {
        el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.es;
      }
    });

    document.querySelectorAll('[data-title-es], [data-title-en]').forEach((el) => setTranslatedAttribute(el, 'title', lang));
    document.querySelectorAll('[data-arialabel-es], [data-arialabel-en]').forEach((el) => setTranslatedAttribute(el, 'aria-label', lang));
    document.querySelectorAll('[data-alt-es], [data-alt-en]').forEach((el) => setTranslatedAttribute(el, 'alt', lang));

    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';

    document.documentElement.lang = lang;
    if (typeof buildQuiz === 'function') buildQuiz();
  }


  function toggleLang() {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  }

document.addEventListener('DOMContentLoaded', function() {
  setLanguage(currentLang);
});

  
  function copyCmd(el) {
    const code = el.querySelector('.cmd-code').textContent.trim();
    const btn  = el.querySelector('.cmd-copy');
    const copiedText = currentLang === 'en' ? 'Copied!' : '¡Copiado!';
    const copyText = currentLang === 'en' ? 'Copy' : 'Copiar';

    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = copiedText;
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = copyText; btn.classList.remove('copied'); }, 1800);
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

  /* ═══════════════════════════════
  LIGHTBOX PARA IMÁGENES
═══════════════════════════════ */
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

  /* ═══════════════════════════════
  SIMULADOR DE .GITIGNORE
═══════════════════════════════ */

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

  document.addEventListener('DOMContentLoaded', function () {
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
      /^git checkout -b feature-titulo$/i
    ],
    output: "Switched to a new branch 'feature-titulo'\n[feature-titulo a12b34c] Cambia título para principiantes",
    after: function () {
      cfState.branch = "feature-titulo";
      cfState.featureCommit = true;
      cfState.fileContent = `<header>
  <h1>Guía práctica de GitHub para principiantes</h1>
  <p>Aprende Git y GitHub paso a paso.</p>
</header>`;
    }
  },
  {
    title: "Vuelve a main",
    task: "Vuelve a la rama main. Allí también se cambiará la misma línea del archivo.",
    hint: "Usa: git switch main",
    valid: [
      /^git switch main$/i,
      /^git checkout main$/i
    ],
    output: "Switched to branch 'main'\n[main d45e67f] Añade ejercicios interactivos al título",
    after: function () {
      cfState.branch = "main";
      cfState.mainCommit = true;
      cfState.fileContent = `<header>
  <h1>Guía básica de GitHub con ejercicios interactivos</h1>
  <p>Aprende Git y GitHub paso a paso.</p>
</header>`;
    }
  },
  {
    title: "Fusiona la rama",
    task: "Fusiona feature-titulo dentro de main. Como ambas ramas tocaron la misma línea, aparecerá un conflicto.",
    hint: "Usa: git merge feature-titulo",
    valid: [
      /^git merge feature-titulo$/i
    ],
    output:
      "Auto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result.",
    after: function () {
      cfState.conflict = true;
      cfState.fileContent = CF_CONFLICT_FILE;
    }
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
    }
  },
  {
    title: "Marca el conflicto como resuelto",
    task: "Usa git add para decirle a Git que index.html ya está resuelto.",
    hint: "Usa: git add index.html",
    valid: [
      /^git add index\.html$/i,
      /^git add \.$/i
    ],
    output: "Archivo preparado. Git ya sabe que el conflicto está resuelto.",
    after: function () {
      cfState.staged = true;
    }
  },
  {
    title: "Finaliza el merge",
    task: "Haz un commit para cerrar el merge y guardar la resolución del conflicto.",
    hint: 'Usa: git commit -m "resuelve conflicto en título"',
    valid: [
      /^git commit$/i,
      /^git commit -m .+$/i
    ],
    output: "[main f89a10b] Resuelve conflicto en título\nMerge finalizado correctamente.",
    after: function () {
      cfState.done = true;
    }
  }
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
    fileContent: CF_INITIAL_FILE
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

  const step = cfCurrentStep();
  const progress = cfState.done
    ? 100
    : Math.round((cfState.step / CF_STEPS.length) * 100);

  const bar = document.getElementById("cf-progress-bar");
  if (bar) bar.style.width = progress + "%";

  const label = document.getElementById("cf-progress-label");
  if (label) {
    label.textContent = cfState.done
      ? "Ejercicio completado"
      : `Paso ${cfState.step + 1} de ${CF_STEPS.length}`;
  }

  const state = document.getElementById("cf-state");
  if (state) {
    state.innerHTML = `
      <div class="cf-state-row">
        <span class="cf-state-label">Rama actual</span>
        <span class="cf-state-value">
          <span class="cf-pill active">${cfState.branch}</span>
        </span>
      </div>

      <div class="cf-state-row">
        <span class="cf-state-label">Commit en feature</span>
        <span class="cf-state-value">
          <span class="cf-pill ${cfState.featureCommit ? "ok" : ""}">
            ${cfState.featureCommit ? "hecho" : "pendiente"}
          </span>
        </span>
      </div>

      <div class="cf-state-row">
        <span class="cf-state-label">Commit en main</span>
        <span class="cf-state-value">
          <span class="cf-pill ${cfState.mainCommit ? "ok" : ""}">
            ${cfState.mainCommit ? "hecho" : "pendiente"}
          </span>
        </span>
      </div>

      <div class="cf-state-row">
        <span class="cf-state-label">Estado del merge</span>
        <span class="cf-state-value">
          ${cfMergeBadge()}
        </span>
      </div>
    `;
  }

  const task = document.getElementById("cf-task-box");
  if (task) {
    task.innerHTML = `<strong>${step.title}</strong><br>${step.task}`;
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
    input.placeholder = cfState.step === 3
      ? "resuelve primero el archivo en el editor..."
      : "escribe un comando git...";
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
    return '<span class="cf-pill ok">finalizado</span>';
  }

  if (cfState.staged) {
    return '<span class="cf-pill warn">pendiente de commit</span>';
  }

  if (cfState.resolved) {
    return '<span class="cf-pill warn">resuelto sin add</span>';
  }

  if (cfState.conflict) {
    return '<span class="cf-pill err">conflicto</span>';
  }

  return '<span class="cf-pill">sin iniciar</span>';
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

  if (normalized.toLowerCase() === "clear" || normalized.toLowerCase() === "cls") {
    const out = document.getElementById("cf-output");
    if (out) out.innerHTML = "";
    return;
  }

  if (!normalized.toLowerCase().startsWith("git")) {
    cfPrint('Este simulador solo acepta comandos de Git. Prueba con "git status".', "line-err");
    cfSetFeedback("❌ Escribe un comando que empiece por <code>git</code>.", "err");
    return;
  }

  if (cfState.done) {
    cfPrint("El ejercicio ya está completado.", "line-dim");
    return;
  }

  const step = cfCurrentStep();

  if (cfState.step === 3) {
    cfPrint("Ahora no toca escribir comandos. Primero resuelve el archivo en el editor.", "line-err");
    return;
  }

  const isValid = step.valid.some(regex => regex.test(normalized));

  if (!isValid) {
    cfPrint("Comando incorrecto para este paso.", "line-err");
    cfSetFeedback(
      '❌ Ese comando no es el que toca ahora. Puedes escribir <code>git status</code> para orientarte.',
      "err"
    );
    return;
  }

  step.after();

  if (step.output) {
    const cls = step.output.includes("CONFLICT") ? "line-err" : "line-ok";
    cfPrint(step.output, cls);
  }

  cfState.step++;

  if (cfState.done) {
    cfSetFeedback(
      "✅ Ejercicio completado. Has provocado un conflicto, lo has resuelto y has cerrado el merge.",
      "ok"
    );
  } else {
    cfSetFeedback("✅ Correcto. Continúa con el siguiente paso.", "ok");
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
      "❌ Todavía quedan marcadores de conflicto. Elimina <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code> y <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.",
      "err"
    );
    return;
  }

  if (!hasH1 || !hasGithub) {
    cfSetFeedback(
      "❌ La solución debe conservar una línea <code>&lt;h1&gt;</code> relacionada con GitHub.",
      "err"
    );
    return;
  }

  if (!hasBeginners || !hasExercises) {
    cfSetFeedback(
      "⚠️ La idea es combinar las dos versiones: debe aparecer la idea de <strong>principiantes</strong> y la de <strong>ejercicios interactivos</strong>.",
      "err"
    );
    return;
  }

  cfState.fileContent = content;
  cfCurrentStep().after();
  cfState.step++;

  cfPrint("index.html editado correctamente. El conflicto ya no tiene marcadores.", "line-ok");
  cfSetFeedback("✅ Resolución correcta. Ahora usa <code>git add index.html</code>.", "ok");
  cfRender();
};

window.cfShowHint = function () {
  if (cfState.done) {
    cfSetFeedback("🏆 Ya has completado el ejercicio.", "info");
    return;
  }

  cfSetFeedback("💡 " + cfCurrentStep().hint, "info");
};

window.cfReset = function () {
  cfResetState();

  const out = document.getElementById("cf-output");
  if (out) out.innerHTML = "";

  cfPrint("Bienvenido al ejercicio de conflictos entre ramas.", "line-info");
  cfPrint('Puedes escribir "git status" en cualquier momento para ver el estado.', "line-dim");

  cfClearFeedback();
  cfRender();
};

function buildConflictExercise() {
  const input = document.getElementById("cf-input");
  if (!input) return;

  cfResetState();

  cfPrint("Bienvenido al ejercicio de conflictos entre ramas.", "line-info");
  cfPrint('Puedes escribir "git status" en cualquier momento para ver el estado.', "line-dim");

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

  const html = cfState.fileContent.split("\n").map(line => {
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
  }).join("");

  view.innerHTML = html;
  view.style.display = "block";
}


