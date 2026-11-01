/**
 * cPanel/Apache often blocks folders named "_next".
 * Rename to "next" and rewrite references in the static export.
 */
import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "out");
const FROM = "_next";
const TO = "next";

const TEXT_EXTENSIONS = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".txt",
  ".map",
  ".webmanifest",
]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === FROM && path.dirname(full) === OUT_DIR) continue;
      walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

function patchFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!TEXT_EXTENSIONS.has(ext)) return;

  const original = fs.readFileSync(filePath, "utf8");
  const updated = original.replaceAll("/_next/", `/${TO}/`);
  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
  }
}

const fromDir = path.join(OUT_DIR, FROM);
const toDir = path.join(OUT_DIR, TO);

if (!fs.existsSync(fromDir)) {
  console.warn(`[cpanel-fix] No ${FROM} folder in out/ — skipping.`);
  process.exit(0);
}

if (fs.existsSync(toDir)) {
  fs.rmSync(toDir, { recursive: true, force: true });
}

fs.renameSync(fromDir, toDir);

const nextHtaccess = `# Allow Next.js static assets on restrictive hosts
Options -Indexes
<IfModule mod_authz_core.c>
  Require all granted
</IfModule>
`;
fs.writeFileSync(path.join(toDir, ".htaccess"), nextHtaccess, "utf8");

for (const file of walk(OUT_DIR)) {
  patchFile(file);
}

console.log(`[cpanel-fix] Renamed /${FROM}/ → /${TO}/ and updated references.`);
