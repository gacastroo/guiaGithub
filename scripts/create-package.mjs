import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import archiver from "archiver";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const packageName = "guiaGithub";
const outputDir = path.join(root, "dist-package");
const packageDir = path.join(outputDir, packageName);
const zipPath = path.join(root, `${packageName}-package.zip`);

const entriesToCopy = ["index.html", "assets", "README.md", "_headers"];

function removeIfExists(targetPath) {
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

function copyEntry(entry) {
  const source = path.join(root, entry);
  const destination = path.join(packageDir, entry);

  if (!fs.existsSync(source)) {
    console.warn(`Aviso: no se ha encontrado ${entry}; se omite.`);
    return;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
}

async function zipDirectory(sourceDir, destinationZip) {
  await new Promise((resolve, reject) => {
    const output = fs.createWriteStream(destinationZip);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", resolve);
    archive.on("warning", reject);
    archive.on("error", reject);

    archive.pipe(output);
    archive.directory(sourceDir, packageName);
    archive.finalize();
  });
}

removeIfExists(outputDir);
removeIfExists(zipPath);
fs.mkdirSync(packageDir, { recursive: true });

for (const entry of entriesToCopy) {
  copyEntry(entry);
}

await zipDirectory(packageDir, zipPath);

const sizeMb = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(2);
console.log(`Package creado correctamente: ${path.basename(zipPath)} (${sizeMb} MB)`);
console.log(`Carpeta generada: ${path.relative(root, packageDir)}`);
