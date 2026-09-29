// Usage: npm run assets
// Figma ke saare images/SVGs public/images me download karta hai.
// NOTE: Figma ke asset links 7 din tak hi chalte hain (29 Sep 2026 ko bane the).
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, "../public/images");
const manifest = JSON.parse(await readFile(path.join(here, "assets.json"), "utf8"));

await mkdir(outDir, { recursive: true });

let ok = 0;
const failed = [];
for (const [file, url] of Object.entries(manifest)) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(path.join(outDir, file), Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    failed.push(`${file} (${e.message})`);
  }
}

console.log(`Downloaded ${ok}/${Object.keys(manifest).length}`);
if (failed.length) {
  console.log("Failed:\n - " + failed.join("\n - "));
  console.log("Inhe Figma se manually export karke public/images me daal do (same filename).");
}
