// One-off image optimizer for asset/.
// - JPG over the size threshold: resized to max 1920px wide, re-encoded (mozjpeg q80), overwritten in place.
// - PNG over the threshold: converted to a same-name .webp (q80, max 1920px); the original PNG is kept.
// Originals are backed up to BACKUP_DIR before overwriting.
// Usage: node optimize-images.js [--dry-run]

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSET_DIR = path.join(__dirname, 'asset');
const BACKUP_DIR = process.env.IMG_BACKUP_DIR || path.join(__dirname, '.image-backup');
const SIZE_THRESHOLD = 500 * 1024;
const MAX_WIDTH = 1920;
const DRY_RUN = process.argv.includes('--dry-run');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// OneDrive briefly locks files during sync; retry, then fall back to unlink + write.
async function writeWithRetry(file, buf) {
  for (let i = 0; i < 5; i++) {
    try {
      fs.writeFileSync(file, buf);
      return;
    } catch (err) {
      if (i === 4) {
        try { fs.unlinkSync(file); } catch (_) {}
        fs.writeFileSync(file, buf);
        return;
      }
      await sleep(300 * (i + 1));
    }
  }
}

function fmt(bytes) {
  return bytes >= 1024 * 1024
    ? (bytes / 1024 / 1024).toFixed(2) + ' MB'
    : Math.round(bytes / 1024) + ' KB';
}

async function main() {
  const files = walk(ASSET_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext) && fs.statSync(f).size > SIZE_THRESHOLD;
  });

  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];

  for (const file of files) {
    const rel = path.relative(__dirname, file);
    const ext = path.extname(file).toLowerCase();
    const before = fs.statSync(file).size;
    totalBefore += before;

    const pipeline = sharp(file).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });

    if (ext === '.png') {
      const out = file.replace(/\.png$/i, '.webp');
      if (DRY_RUN) {
        rows.push([rel, fmt(before), '(dry-run → .webp)']);
        totalAfter += before;
        continue;
      }
      const buf = await pipeline.webp({ quality: 80 }).toBuffer();
      await writeWithRetry(out, buf);
      totalAfter += buf.length;
      rows.push([rel, fmt(before), fmt(buf.length) + ' (.webp, PNG kept)']);
    } else {
      if (DRY_RUN) {
        rows.push([rel, fmt(before), '(dry-run re-encode)']);
        totalAfter += before;
        continue;
      }
      const buf = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      if (buf.length >= before) {
        totalAfter += before;
        rows.push([rel, fmt(before), 'kept (re-encode not smaller)']);
        continue;
      }
      const backup = path.join(BACKUP_DIR, path.relative(__dirname, file));
      fs.mkdirSync(path.dirname(backup), { recursive: true });
      if (!fs.existsSync(backup)) fs.copyFileSync(file, backup);
      await writeWithRetry(file, buf);
      totalAfter += buf.length;
      rows.push([rel, fmt(before), fmt(buf.length)]);
    }
  }

  const w = Math.max(...rows.map((r) => r[0].length), 10);
  for (const [name, b, a] of rows) {
    console.log(name.padEnd(w + 2) + b.padStart(9) + '  →  ' + a);
  }
  console.log('-'.repeat(w + 30));
  console.log(`Total: ${fmt(totalBefore)} → ${fmt(totalAfter)} (${files.length} files)`);
  if (!DRY_RUN) console.log(`Backups of overwritten JPGs: ${BACKUP_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
