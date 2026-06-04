# Publicar en GitHub Packages

Este proyecto está preparado para que el paquete aparezca en la sección **Packages** del repositorio de GitHub.

## 1. Subir los archivos al repositorio

```bash
git add package.json .npmrc .github/workflows/release-package.yml GITHUB-PACKAGES-USAGE.md
git commit -m "chore: configure GitHub Packages publishing"
git push origin master
```

## 2. Publicar el package

Puedes hacerlo de dos formas:

### Opción A: desde GitHub Actions

1. Entra en el repositorio en GitHub.
2. Ve a **Actions**.
3. Abre el workflow **Publish package to GitHub Packages**.
4. Pulsa **Run workflow**.

### Opción B: creando una release

1. En GitHub, ve a **Releases**.
2. Crea una nueva release, por ejemplo `v1.0.0`.
3. Al crearla, se ejecutará el workflow y publicará el paquete.

## 3. Ver el package

Cuando el workflow termine correctamente, el paquete debería aparecer en la barra lateral derecha del repositorio, en **Packages**.

## Importante

Si quieres volver a publicar, sube la versión en `package.json`:

```json
"version": "1.0.1"
```

GitHub Packages no permite publicar dos veces la misma versión.
