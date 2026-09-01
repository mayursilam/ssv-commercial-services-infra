const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const pages = [
  'index.html',
  'about.html',
  'services.html',
  'security.html',
  'housekeeping.html',
  'infrastructure.html',
  'industries.html',
  'why-ssv.html',
  'contact.html',
  '404.html'
];

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('>>> [SYNC-ALL] Starting full multi-target distribution synchronization...');

// 1. Ensure .nojekyll exists
fs.writeFileSync(path.join(rootDir, '.nojekyll'), '# Disable Jekyll\n', 'utf8');

// Targets to sync
const targetDirs = ['dist', 'docs', 'public'];

targetDirs.forEach((dirName) => {
  const targetPath = path.join(rootDir, dirName);
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  // Copy .nojekyll
  fs.writeFileSync(path.join(targetPath, '.nojekyll'), '# Disable Jekyll\n', 'utf8');

  // Copy all 9 pages + 404
  pages.forEach((pageName) => {
    const srcFile = path.join(rootDir, pageName);
    const destFile = path.join(targetPath, pageName);
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, destFile);
    }
  });

  // Copy assets
  const srcAssets = path.join(rootDir, 'assets');
  const destAssets = path.join(targetPath, 'assets');
  copyDirRecursive(srcAssets, destAssets);

  console.log(`  [OK] Synchronized all files and assets to ${dirName}/`);
});

console.log('>>> [SYNC-ALL] All directories (root, dist/, docs/, public/) synchronized successfully!');
