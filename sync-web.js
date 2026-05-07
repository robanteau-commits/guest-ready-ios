/**
 * sync-web.js
 * Copies web app files from guest-ready-Staging into the www/ folder
 * for Capacitor to bundle into the iOS app.
 *
 * Run: node sync-web.js
 */

const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '../guest-ready-Staging');
const DEST = path.resolve(__dirname, 'www');

// Files and folders to copy from the staging web app
const INCLUDE = [
  'dashboard.html',
  'calendar.html',
  'messages.html',
  'properties.html',
  'cleaners.html',
  'ai.html',
  'login.html',
  'dispatch.html',
  'accept-invite.html',
  'index.html',
  'terms.html',
  'privacy.html',
  'sidebar.js',
  'mobile-nav.js',
  'env-banner.js',
  'pwa.js',
];

// Folders to copy recursively
const INCLUDE_DIRS = [
  'assets',
  'css',
  'js',
  'images',
  'icons',
];

function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

// Clear www and rebuild
if (fs.existsSync(DEST)) fs.rmSync(DEST, { recursive: true });
fs.mkdirSync(DEST, { recursive: true });

let copied = 0;
for (const file of INCLUDE) {
  const src = path.join(SRC, file);
  if (fs.existsSync(src)) {
    copyFile(src, path.join(DEST, file));
    console.log(`  copied: ${file}`);
    copied++;
  } else {
    console.warn(`  skipped (not found): ${file}`);
  }
}

for (const dir of INCLUDE_DIRS) {
  const src = path.join(SRC, dir);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(DEST, dir));
    console.log(`  copied dir: ${dir}/`);
    copied++;
  }
}

console.log(`\nDone. ${copied} items copied to www/`);
