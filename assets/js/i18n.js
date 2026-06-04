/* ═══════════════════════════════
   LANGUAGE TOGGLE / I18N
═══════════════════════════════ */
let currentLang = localStorage.getItem("lang") || localStorage.getItem("site-lang") || "es";

const STATIC_TRANSLATIONS = {
  "🌐 EN": "🌐 EN",
  '"Git es el cerebro 🧠 , GitHub es la red social 🌐 ."':
    '"Git is the brain 🧠, GitHub is the social network 🌐."',
  '"Git guarda tu código, GitHub lo presume."': '"Git saves your code, GitHub shows it off."',
  "Comparativa visual entre Git y GitHub": "Visual comparison between Git and GitHub",
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
  "Instalación y primeros pasos con Git": "Installation and first steps with Git",
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
  "Repositorio Local: Es la carpeta en tu ordenador. Es donde editas tus archivos día a día. GitHub no ve esto hasta que tú lo envías.":
    "Local Repository: This is the folder on your computer. It is where you edit your files day to day. GitHub does not see it until you send it.",
  "Repositorio Remoto: Es la copia en los servidores de GitHub. Es tu respaldo en la nube y el lugar donde los demás ven tu código.":
    "Remote Repository: This is the copy on GitHub's servers. It is your cloud backup and the place where others can see your code.",
  "💾 Se guarda en tu computadora": "💾 Saved on your computer",
  "☁️ Ahora está en internet": "☁️ Now it is on the internet",
  "Acceder a la creación de un nuevo repositorio": "Access the new repository creation screen",
  "Formulario para configurar el nuevo repositorio": "Form to configure the new repository",
  "Repositorio creado correctamente en GitHub": "Repository created successfully on GitHub",
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
  'Haz clic en el "+" para preparar los cambios (Stage).': 'Click the "+" to stage the changes.',
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
  "Cambio interno sin afectar comportamiento": "Internal change without affecting behavior",
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
  "Consecuencias de eliminar una rama local": "Consequences of deleting a local branch",
  "Una vez eliminada la rama local sin haber hecho push, los commits exclusivos de esa rama se pierden .":
    "Once the local branch is deleted without being pushed, the commits that only existed on that branch are lost.",
  "Si otro compañero tenía esa rama como referencia, deberá actualizar su repositorio local.":
    "If another teammate had that branch as a reference, they will need to update their local repository.",
  "Elimina la rama también del repositorio remoto":
    "Deletes the branch from the remote repository too",
  "Consecuencias de eliminar una rama remota": "Consequences of deleting a remote branch",
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
  "Ignora toda la carpeta de dependencias": "Ignores the entire dependencies folder",
  "Ignora cualquier archivo con extensión .log": "Ignores any file with the .log extension",
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
  "Documentación oficial de Git sobre .gitignore": "Official Git documentation about .gitignore",
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
  "# escribe tus reglas aquí, una por línea": "# write your rules here, one per line",
  "💡 Ver pista 🔄 Reiniciar Comprobar solución ✓": "💡 Show hint 🔄 Restart Check solution ✓",
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
  "Vista general de la integración de Git en VS Code": "Overview of Git integration in VS Code",
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
  "======= — separador entre las dos versiones.": "======= — separator between the two versions.",
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
  "Guillermo Castro Abarca": "Guillermo Castro Abarca"
};

const EXTRA_STATIC_TRANSLATIONS = {
  "🌐 EN": "🌐 EN",
  "🌐": "🌐",
  EN: "EN",
  "🌙": "🌙",
  "🤝": "🤝",
  '"Git es el cerebro 🧠 , GitHub es la red social 🌐 ."':
    '"Git is the brain 🧠, GitHub is the social network 🌐."',
  '"Git guarda tu código, GitHub lo presume."': '"Git saves your code, GitHub shows it off."',
  "Comparativa visual entre Git y GitHub": "Visual comparison between Git and GitHub",
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
  "Instalación y primeros pasos con Git": "Installation and first steps with Git",
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
  "Descarga los cambios del repositorio remoto": "Downloads changes from the remote repository",
  "3 · El ciclo diario": "3 · Daily workflow",
  "Son los comandos que usas diariamente:": "These are the commands you use every day:",
  "Muestra qué ha cambiado": "Shows what has changed",
  "Prepara todos los cambios para el commit": "Stages all changes for the commit",
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
  "Acceder a la creación de un nuevo repositorio": "Access the new repository creation screen",
  "Formulario para configurar el nuevo repositorio": "Form to configure the new repository",
  "Repositorio creado correctamente en GitHub": "Repository created successfully on GitHub",
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
  'Haz clic en el "+" para preparar los cambios (Stage).': 'Click the "+" to stage the changes.',
  "Escribe un mensaje de commit y presiona el botón Commit .":
    "Write a commit message and press the Commit button.",
  "Haz clic en Sync Changes (o Push) para enviar todo a GitHub.":
    "Click Sync Changes (or Push) to send everything to GitHub.",
  "Para usar la terminal en VS Code, presiona Ctrl + Ñ o ve al menú Terminal → New Terminal . Una vez abierta, ejecuta estos comandos en orden:":
    "To use the terminal in VS Code, press Ctrl + Ñ or go to Terminal → New Terminal. Once it is open, run these commands in order:",
  "Nota: Asegúrate de estar dentro de la carpeta de tu proyecto en la terminal antes de escribir estos comandos.":
    "Note: Make sure you are inside your project folder in the terminal before typing these commands.",
  "Estructura de un commit": "Commit structure",
  'git commit -m "tipo: descripción breve"': 'git commit -m "type: short description"',
  Tipos: "Types",
  feat: "feat",
  "Nueva funcionalidad": "New feature",
  fix: "fix",
  "Corrección de bugs": "Bug fix",
  perf: "perf",
  "Mejora de rendimiento": "Performance improvement",
  refactor: "refactor",
  "Cambio interno sin afectar comportamiento": "Internal change without affecting behavior",
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
  "git switch -c feature/mi-nueva-funcionalidad": "git switch -c feature/my-new-feature",
  'git add . && git commit -m "feat: añadir login"': 'git add . && git commit -m "feat: add login"',
  "git push origin feature/mi-nueva-funcionalidad": "git push origin feature/my-new-feature",
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
  "Consecuencias de eliminar una rama local": "Consequences of deleting a local branch",
  "git branch -d solo borra la rama si ya fue fusionada, lo cual es una protección. Pero git branch -D (mayúscula) la elimina aunque tenga commits sin fusionar , perdiendo esos cambios.":
    "git branch -d only deletes the branch if it has already been merged, which is a protection. But git branch -D (uppercase) deletes it even if it has unmerged commits, losing those changes.",
  "Una vez eliminada la rama local sin haber hecho push, los commits exclusivos de esa rama se pierden .":
    "Once a local branch is deleted without having been pushed, the commits that existed only on that branch are lost.",
  "Si otro compañero tenía esa rama como referencia, deberá actualizar su repositorio local.":
    "If another teammate had that branch as a reference, they will need to update their local repository.",
  "Elimina la rama también del repositorio remoto":
    "Deletes the branch from the remote repository too",
  "Consecuencias de eliminar una rama remota": "Consequences of deleting a remote branch",
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
  "# commit B — alguien en main escribe:": "# commit B — someone on main writes:",
  '"Hola mundo"': '"Hello world"',
  "mismo archivo": "same file",
  "rama feature": "feature branch",
  "# commit D — alguien en feature escribe:": "# commit D — someone on feature writes:",
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
  "Escenario 1 · Texto cambiado en la misma línea": "Scenario 1 · Text changed on the same line",
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
  "Escenario 3 · Archivo eliminado vs. modificado": "Scenario 3 · File deleted vs. modified",
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
  "Marca el archivo como resuelto y haz commit": "Mark the file as resolved and commit",
  "Una vez editado, añade el archivo al stage y cierra el merge con un commit.":
    "Once edited, add the file to the stage and close the merge with a commit.",
  'git add src/saludo.js git commit -m "fix: resolver conflicto en saludo.js"':
    'git add src/hello.js git commit -m "fix: resolve conflict in hello.js"',
  "¿Te has liado? Puedes abortar el merge": "Got stuck? You can abort the merge",
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
  "Ignora toda la carpeta de dependencias": "Ignores the whole dependencies folder",
  "*.log": "*.log",
  "Ignora cualquier archivo con extensión .log": "Ignores any file with the .log extension",
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
  "# escribe tus reglas aquí, una por línea": "# write your rules here, one per line",
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
  "¿Qué significan los marcadores del conflicto?": "What do the conflict markers mean?",
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
  "Vista general de la integración de Git en VS Code": "Overview of Git integration in VS Code",
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
  "======= — separador entre las dos versiones.": "======= — separator between the two versions.",
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
  "Inicializa un repositorio en la carpeta actual": "Initialize a repository in the current folder",
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
  "Añade ejercicios interactivos al título": "Add interactive exercises to the title",
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
  "resuelve primero el archivo en el editor...": "resolve the file in the editor first...",
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
  "✅ Correcto. Continúa con el siguiente paso.": "✅ Correct. Continue with the next step.",
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
  "🏆 Ya has completado el ejercicio.": "🏆 You have already completed the exercise.",
  "Bienvenido al ejercicio de conflictos entre ramas.": "Welcome to the branch conflict exercise.",
  'Puedes escribir "git status" en cualquier momento para ver el estado.':
    'You can type "git status" at any time to see the status.'
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
  "Guía práctica de GitHub para principiantes": "Practical GitHub Guide for beginners",
  "Aprende Git y GitHub paso a paso.": "Learn Git and GitHub step by step."
};
Object.assign(STATIC_TRANSLATIONS, LAST_I18N_PATCH);

const ATTR_TRANSLATIONS = {
  title: {
    "Cambiar idioma": "Change language",
    "Cambiar tema": "Change theme",
    Contribuciones: "Contributions",
    "Instalación de Git": "Git Installation"
  },
  "aria-label": {
    Menú: "Menu"
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
    "Commit final tras resolver los conflictos en VS Code":
      "Final commit after resolving conflicts in VS Code"
  }
};

const EXTRA_ATTR_TRANSLATIONS = {
  alt: {
    "Panel Source Control mostrando archivos modificados":
      "Source Control panel showing modified files",
    "Preparando archivos con el botón + en VS Code": "Staging files with the + button in VS Code",
    "Campo de mensaje de commit en VS Code": "Commit message field in VS Code",
    "Menú de ramas en la barra de estado de VS Code": "Branch menu in the VS Code status bar",
    "Selección de rama existente en VS Code": "Existing branch selection in VS Code",
    "Paleta de comandos con Git Merge Branch en VS Code":
      "Command palette with Git Merge Branch in VS Code",
    "Marcadores de conflicto en un archivo dentro de VS Code":
      "Conflict markers in a file inside VS Code",
    ".gitignore": ".gitignore"
  },
  placeholder: {
    "escribe un comando git...": "write a git command...",
    "node_modules/\n*.log\n.env": "node_modules/\n*.log\n.env"
  }
};
Object.entries(EXTRA_ATTR_TRANSLATIONS).forEach(([attr, translations]) => {
  ATTR_TRANSLATIONS[attr] = Object.assign(ATTR_TRANSLATIONS[attr] || {}, translations);
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
  )
    return false;
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
    "span"
  ]);
  if (directTags.has(tag)) return true;
  if (
    tag === "div" &&
    (el.classList.contains("cmd-desc") || el.classList.contains("commit-structure"))
  )
    return true;
  return false;
}

function hasTranslatedAncestor(el) {
  let parent = el.parentElement;
  while (parent) {
    if (parent.dataset?.es || parent.dataset?.en || parent.dataset?.i18nGenerated === "true")
      return true;
    parent = parent.parentElement;
  }
  return false;
}

function prepareMissingTranslations() {
  document
    .querySelectorAll(
      "p, li, figcaption, h2, h3, h4, td, th, button, a, span, div.cmd-desc, div.commit-structure"
    )
    .forEach((el) => {
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
    langToggle.innerHTML = '<span id="lang-icon">🌐</span><span id="lang-label">EN</span>';
  }

  const label = document.getElementById("lang-label");
  if (label) label.textContent = lang === "en" ? "ES" : "EN";
  const themeIcon = getThemeIcon();
  if (themeIcon) {
    themeIcon.textContent =
      document.documentElement.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
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
