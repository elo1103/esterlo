// Usage: node build-post.js content/posts/<file>.md [--force]
const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// Simple template applier for {{TOKENS}}
function apply(tpl, map) {
  return Object.entries(map).reduce((s, [k, v]) => s.replaceAll(`{{${k}}}`, v ?? ''), tpl);
}

// Find ./images/... references in Markdown and inline <img>
function findLocalImgs(md) {
  const set = new Set();
  const re1 = /!\[[^\]]*\]\(\s*(\.\/images\/[^)\s]+)(?:\s+"[^"]*")?\s*\)/g;
  const re2 = /<img[^>]*\s+src=["'](\.\/images\/[^"']+)["'][^>]*>/g;
  let m; while ((m = re1.exec(md))) set.add(m[1]);
  let h; while ((h = re2.exec(md))) set.add(h[1]);
  return [...set];
}

// Split language blocks: <!--lang:en--> ... <!--lang:zh--> ...
function splitLang(md) {
  const EN = '<!--lang:en-->';
  const ZH = '<!--lang:zh-->';
  const enStart = md.indexOf(EN);
  const zhStart = md.indexOf(ZH);
  let en = '', zh = '';
  if (enStart !== -1 && zhStart !== -1) {
    en = md.slice(enStart + EN.length, zhStart).trim();
    zh = md.slice(zhStart + ZH.length).trim();
  } else {
    en = md.trim();
  }
  return { en, zh };
}

// Kebabify title
function toKebab(title) {
  return String(title)
    .trim()
    .toLowerCase()
    .replace(/['"“”‘’]/g, '')
    .replace(/[^a-z0-9\s\-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/\-+/g, '-');
}

async function main() {
  const mdPath = process.argv[2];
  if (!mdPath) { console.error('Usage: node build-post.js content/posts/<file>.md [--force]'); process.exit(1); }

  const root = process.cwd();
  const raw = await fs.readFile(mdPath, 'utf8');
  const { data, content } = matter(raw);

  // Required fields
  for (const k of ['title_en','date','category_id','category_en','summary_en']) {
    if (!data[k]) { console.error(`❌ Front-matter missing: ${k}`); process.exit(2); }
  }
  // Optional zh fields
  data.title_zh = data.title_zh || '';
  data.category_zh = data.category_zh || '';
  data.summary_zh = data.summary_zh || '';

  const { en: bodyEnMd, zh: bodyZhMd } = splitLang(content);

  // Output filename logic: front-matter output_filename (without .html) > kebab(title_en)
  const baseName = data.output_filename ? String(data.output_filename).replace(/\.html?$/i,'') : toKebab(data.title_en);
  const outDir = path.join(root, 'blog', 'articles');
  const outFile = path.join(outDir, `${baseName}.html`);

  // Compute prefix from output file folder back to repo root (used for asset/)
  const outDirname = path.dirname(outFile);
  let relToRoot = path.relative(outDirname, root) || '.';
  relToRoot = relToRoot.replace(/\\/g, '/'); // windows slashes
  const assetPrefix = `${relToRoot}/asset/`; // e.g. ../../asset/

  // Image fallback: prefer blog/articles/<basename>/images/ then fallback to asset/
  const referenced = findLocalImgs(bodyEnMd + '\n' + bodyZhMd);
  const missing = [];
  let enForRender = bodyEnMd;
  let zhForRender = bodyZhMd;

  // Hero image (optional)
  let heroSrc = data.hero_src || '';
  let heroAlt = data.hero_alt || '';
  let heroVis = '';
  if (heroSrc) {
    if (heroSrc.startsWith('./images/')) {
      const file = heroSrc.replace('./', '');
      const tryA = path.join(outDir, baseName, file);
      const tryB = path.join(root, 'asset', path.basename(heroSrc));
      if (await fs.pathExists(tryA)) {
        heroSrc = `./images/${path.basename(heroSrc)}`; // article local
      } else if (await fs.pathExists(tryB)) {
        heroSrc = `${assetPrefix}${path.basename(heroSrc)}`; // fallback with relative prefix
      } else {
        missing.push({ ref: heroSrc, A: tryA, B: tryB });
      }
    }
  } else {
    heroVis = 'style="display:none;"';
  }

  // Strip inline images that duplicate hero filename (so hero isn't shown twice)
  const heroBase = heroSrc ? path.basename(data.hero_src || '') : '';
  function stripHeroDuplicates(md) {
    if (!heroBase) return md;
    const assetPrefixEsc = assetPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Remove Markdown form
    md = md.replace(
      new RegExp(`!\\[[^\\]]*\\]\\(\\s*(?:\\.\\/images\\/|${assetPrefixEsc})${heroBase}(?:\\s+"[^"]*")?\\s*\\)`, 'gi'),
      ''
    );
    // Remove HTML <img> form
    md = md.replace(
      new RegExp(`<img[^>]*src=["'](?:\\.\\/images\\/|${assetPrefixEsc})${heroBase}["'][^>]*>`, 'gi'),
      ''
    );
    return md;
  }
  enForRender = stripHeroDuplicates(enForRender);
  zhForRender = stripHeroDuplicates(zhForRender);

  // Replace missing ./images/... with assetPrefix basename
  for (const rel of referenced) {
    const a = path.join(outDir, baseName, rel.replace('./', '')); // check article images/
    const b = path.join(root, 'asset', path.basename(rel));       // check repo asset/
    if (await fs.pathExists(a)) continue;
    if (await fs.pathExists(b)) {
      const from = rel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(from, 'g');
      const replacement = `${assetPrefix}${path.basename(rel)}`;
      enForRender = enForRender.replace(re, replacement);
      zhForRender = zhForRender.replace(re, replacement);
    } else {
      // Ignore hero duplicate warning here as we've stripped them; otherwise track missing
      if (!heroBase || path.basename(rel) !== heroBase) {
        missing.push({ ref: rel, A: a, B: b });
      }
    }
  }

  if (missing.length) {
    console.error('⚠️  Missing images. Please place files then rebuild:');
    for (const it of missing) {
      console.error(`  - ${it.ref}\n    A) ${it.A}\n    B) ${it.B}`);
    }
    process.exit(3);
  }

  // Markdown → HTML (inject lazy/async + class)
  const renderer = new marked.Renderer();
  const orig = renderer.image.bind(renderer);
  renderer.image = (href, title, text) =>
    orig(href, title, text).replace('<img ', '<img class="article-image" loading="lazy" decoding="async" ');
  const bodyEnHtml = marked.parse(enForRender, { renderer });
  const bodyZhHtml = zhForRender ? marked.parse(zhForRender, { renderer }) : '';

  // Tags (bilingual support). Fallback to single 'tags' if provided.
  const normId = (s) => String(s).toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'-').replace(/\-+/g,'-');
  const tagsEn = Array.isArray(data.tags_en) ? data.tags_en : (Array.isArray(data.tags) ? data.tags : []);
  const tagsZh = Array.isArray(data.tags_zh) ? data.tags_zh : [];
  const enList = tagsEn.map(t => `<a href="../../blog.html?category=${normId(t)}" class="tag">${t}</a>`).join('\n');
  const zhSource = tagsZh.length ? tagsZh : tagsEn;
  const zhList = zhSource.map(t => `<a href="../../blog.html?category=${normId(tagsEn[zhSource.indexOf(t)] || t)}" class="tag">${t}</a>`).join('\n');
  const tagsHtml = `<div data-lang="en">${enList}</div><div data-lang="zh" style="display:none;">${zhList}</div>`;

  // Load template
  const tplPath = path.join(root, 'blog', 'article-template.html');
  const tpl = await fs.readFile(tplPath, 'utf8');

  // Apply template
  const html = apply(tpl, {
    TITLE_EN: data.title_en,
    TITLE_ZH: data.title_zh,
    DATE: data.date,
    CATEGORY_ID: normId(data.category_en || data.category_id),
    CATEGORY_EN: data.category_en,
    CATEGORY_ZH: data.category_zh,
    EXCERPT_EN: data.summary_en || '',
    EXCERPT_ZH: data.summary_zh || '',
    HERO_BLOCK_VIS: heroVis,
    HERO_SRC: heroSrc || '',
    HERO_ALT: heroAlt || '',
    BODY_EN: bodyEnHtml,
    BODY_ZH: bodyZhHtml,
    TAGS_HTML: tagsHtml,
    LIKE_ID: `article-${baseName}`
  });

  // Write HTML (prevent accidental overwrite unless --force)
  await fs.ensureDir(outDir);
  if (!process.argv.includes('--force') && await fs.pathExists(outFile)) {
    console.error(`❌ Output exists: ${outFile}\n   (Use --force to overwrite)`);
    process.exit(4);
  }
  await fs.writeFile(outFile, html, 'utf8');
  console.log(`✔ Built: ${outFile}`);

  // LinkedIn draft (optional, unchanged)
  if (data.linkedin_variants && data.linkedin_variants.length) {
    const siteUrl = `/blog/articles/${baseName}.html`;
    const utm = `?utm_source=linkedin&utm_medium=social&utm_campaign=${encodeURIComponent(data.utm_campaign || baseName)}`;
    const lines = [];
    data.linkedin_variants.slice(0, 3).forEach((v, i) => {
      lines.push(`=== Variant ${i + 1} ===`);
      lines.push(v.hook || ''); lines.push('');
      lines.push(v.body || ''); lines.push('');
      lines.push(v.cta || '');  lines.push('');
      lines.push(`${siteUrl}${utm}`); lines.push('');
    });
    const out = path.join(root, 'dist', 'linkedin'); await fs.ensureDir(out);
    const f = path.join(out, `${baseName}.txt`);
    await fs.writeFile(f, lines.join('\n'), 'utf8');
    console.log(`✔ LinkedIn draft: ${f}`);
  }
}

main().catch(e => { console.error(e); process.exit(99); });
