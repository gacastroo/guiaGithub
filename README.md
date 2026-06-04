# Guía de GitHub

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)

## Demo

> Puedes abrir directamente el archivo `index.html` en tu navegador.

---

## Descripción

Este proyecto es una guía visual sobre el uso de GitHub, desarrollada como una página web estática.  
El diseño está inspirado en la interfaz de GitHub, con estilos tipo Markdown para mejorar la legibilidad.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/gacastroo/guiaGithub/master/assets/img/PNG/proyecto.png" alt="Vista previa del proyecto" width="1200">
</p>

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript
- github-markdown-css
- npm
- GitHub Packages

---

## 📂 Estructura

<p align="center">
  <img src="https://raw.githubusercontent.com/gacastroo/guiaGithub/master/assets/img/PNG/estructura.png" alt="Estructura del proyecto" width="300">
</p>

---

## ⚙️ Guía de instalación

Puedes usar este proyecto de dos formas: abriéndolo directamente como una web estática o instalando sus dependencias con npm para trabajar en desarrollo.

---

### Opción 1: abrir la guía directamente

Clona el repositorio:

```bash
git clone https://github.com/gacastroo/guiaGithub.git
```

Entra en la carpeta del proyecto:

```bash
cd guiaGithub
```

Abre el archivo `index.html` en tu navegador.

En Windows puedes hacer doble clic sobre el archivo:

```txt
index.html
```

En macOS puedes usar:

```bash
open index.html
```

---

### Opción 2: ejecutar el proyecto con npm

Primero clona el repositorio:

```bash
git clone https://github.com/gacastroo/guiaGithub.git
```

Entra en la carpeta:

```bash
cd guiaGithub
```

Instala las dependencias:

```bash
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Después abre en el navegador la URL que aparezca en la terminal, normalmente:

```txt
http://localhost:5173
```

---

## 📦 Uso como package

Este proyecto también está preparado para publicarse como package en GitHub Packages.

Para instalar el package desde GitHub Packages, primero configura el registro de npm:

```bash
npm config set @gacastroo:registry https://npm.pkg.github.com
```

Después puedes instalarlo con:

```bash
npm install @gacastroo/guia-github
```

---

## 🧪 Scripts disponibles

Estos son algunos scripts útiles del proyecto:

```bash
npm run dev
```

Ejecuta el proyecto en modo desarrollo.

```bash
npm run package
```

Genera un ZIP de distribución.

```bash
npm run format
```

Formatea los archivos del proyecto.

```bash
npm run lint
```

Revisa posibles errores de código o estilo.

---

## 🚀 Publicar una nueva versión del package

Antes de publicar de nuevo en GitHub Packages, tienes que subir la versión del paquete.

Para subir una versión pequeña, por ejemplo de `1.0.0` a `1.0.1`, ejecuta:

```bash
npm version patch --no-git-tag-version
```

Después guarda los cambios:

```bash
git add package.json package-lock.json
git commit -m "chore: bump package version"
git push origin master
```

Si no tienes `package-lock.json`, usa:

```bash
git add package.json
git commit -m "chore: bump package version"
git push origin master
```

Luego ejecuta la Action de GitHub para publicar el paquete.

---

## Características

- Diseño inspirado en GitHub.
- Estilos tipo Markdown.
- Navbar personalizada.
- Modo claro y modo oscuro.
- Cambio de idioma.
- Sección de errores frecuentes.
- Ejercicios interactivos.
- Guía visual para aprender Git y GitHub.
- Responsive básico.
- Estructura limpia y sencilla.
- Preparado para publicarse en GitHub Packages.

---

## Contribuciones

Las contribuciones son bienvenidas.

Para contribuir:

1. Haz un fork del proyecto.
2. Crea una rama nueva:

```bash
git checkout -b feature/nueva-mejora
```

3. Realiza tus cambios.
4. Guarda los cambios con un commit:

```bash
git add .
git commit -m "feat: add nueva mejora"
```

5. Sube la rama:

```bash
git push origin feature/nueva-mejora
```

6. Abre un Pull Request en GitHub hacia la rama `master`.

---

## 📄 Licencia

Este proyecto es de uso educativo.

---

## Autor

Desarrollado como práctica de desarrollo web por Guillermo Castro Abarca.
