# Guía de GitHub

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)

## Demo

Página publicada en GitHub Pages:

https://gacastroo.github.io/guiaGithub/

---

## Descripción

Guía web interactiva para aprender Git y GitHub desde cero de forma visual y práctica.

El proyecto está desarrollado como una web estática con HTML, CSS y JavaScript. Incluye comandos copiables, ejemplos guiados, errores frecuentes, ejercicios interactivos, modo claro/oscuro, cambio de idioma y una sección de contribuciones.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/gacastroo/guiaGithub/master/assets/img/webp/PNG/proyecto.webp" alt="Vista previa del proyecto" width="1200">
</p>

---

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Vite
- npm
- GitHub Pages
- GitHub Packages

---

## Estructura

<p align="center">
  <img src="https://raw.githubusercontent.com/gacastroo/guiaGithub/master/assets/img/webp/PNG/estructura.webp" alt="Estructura del proyecto" width="300">
</p>

---

## Guía de instalación

Puedes usar este proyecto de dos formas: abriéndolo directamente como una web estática o instalando sus dependencias con npm para trabajar en desarrollo.

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

### Opción 2: ejecutar el proyecto con npm

Instala las dependencias:

```bash
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Después abre la URL que aparezca en la terminal, normalmente:

```txt
http://localhost:5173
```

---

## Scripts disponibles

```bash
npm run dev
```

Ejecuta el proyecto en modo desarrollo.

```bash
npm run lint
```

Revisa HTML, CSS y JavaScript.

```bash
npm run format
```

Formatea el proyecto con Prettier.

```bash
npm run package
```

Genera un ZIP de distribución.

---

## Uso como package

Este proyecto está preparado para publicarse en GitHub Packages.

Configura el registro de npm:

```bash
npm config set @gacastroo:registry https://npm.pkg.github.com
```

Instala el package:

```bash
npm install @gacastroo/guia-github
```

---

## Características

- Diseño inspirado en GitHub.
- Modo claro y modo oscuro.
- Cambio de idioma.
- Comandos copiables.
- Sección de errores frecuentes.
- Ejercicios interactivos.
- Guía de contribuciones.
- Documentación técnica.
- Despliegue en GitHub Pages.
- Publicación en GitHub Packages.
- Proyecto preparado con npm.

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

## Licencia

Este proyecto es de uso educativo.

---

## Autor

Desarrollado como práctica de desarrollo web por Guillermo Castro Abarca.
