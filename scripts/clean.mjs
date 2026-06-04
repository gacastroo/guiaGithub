import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const targets = [
  "dist",
  "dist-package",
  "guiaGithub-package.zip"
];

for (const target of targets) {
  const targetPath = path.join(root, target);
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
    console.log(`Eliminado: ${target}`);
  }
}
