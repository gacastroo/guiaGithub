# Package npm para guiaGithub

Este paquete no convierte la guía en una librería npm pública. Sirve para trabajar la web estática de forma más cómoda.

## Instalación

```bash
npm install
```

## Levantar en local

```bash
npm run dev
```

Después abre la URL que indique la terminal, normalmente `http://localhost:5173/`.

## Formatear código

```bash
npm run format
```

## Revisar HTML, CSS y JavaScript

```bash
npm run lint
```

## Crear un ZIP de distribución

```bash
npm run package
```

Genera:

```text
dist-package/guiaGithub/
guiaGithub-package.zip
```

El ZIP incluye únicamente los archivos necesarios para publicar o compartir la guía:

```text
index.html
assets/
README.md
_headers
```

## Limpiar archivos generados

```bash
npm run clean
```
