# Informe de optimización

Cambios aplicados en esta versión:

## Peso del proyecto

- Eliminadas carpetas locales que no deben distribuirse: `.git`, `node_modules`, `dist`, `dist-package` y `.vscode`.
- Eliminadas imágenes no referenciadas por la web o el README.
- Convertidas imágenes pesadas a WebP cuando el nuevo formato reducía el peso.
- Reducida la imagen de perfil de 1254x1254 a 320x320, suficiente para mostrarse como avatar de 160px.

## Rendimiento

- Añadido `decoding="async"` a las imágenes.
- Añadidos atributos `width` y `height` a las imágenes para reducir saltos visuales durante la carga.
- Mantenido `loading="lazy"` en imágenes de contenido.

## Calidad del proyecto

- Actualizado el README para mostrar correctamente imágenes en GitHub y GitHub Packages usando rutas absolutas `raw.githubusercontent.com`.
- Añadido script `npm run check` para ejecutar formato y lint en un solo comando.
- Añadido script `npm run package:dry` para revisar qué se publicará en el package antes de publicarlo.
- Actualizado `homepage` en `package.json` para apuntar a la demo publicada.
- Ajustada la configuración de lint para que sea útil en este proyecto y no falle por reglas puramente estilísticas que ya cubre Prettier.

## Recomendaciones pendientes

- Separar el CSS inline de `assets/html/contribution.html` a un archivo `assets/css/contribution.css`.
- Dividir `assets/js/script.js` en módulos por funcionalidad: navegación, idioma, quiz, simulador, gitignore y conflictos.
- Valorar una estructura `src/` + `dist/` si quieres desplegar siempre una versión construida con Vite.
- Añadir un archivo `CONTRIBUTING.md` si quieres que la parte de contribuciones quede más profesional.
- Añadir una licencia real si vas a declarar `MIT` en `package.json`.
