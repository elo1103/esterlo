# Automatter Lab Website

## Website Purpose

This website serves as:

1. A portfolio of real-world projects.
2. A platform for sharing insights about AI, manufacturing, automation, and decision-making.
3. A knowledge hub for SMB owners interested in digital transformation.
4. A lead generation channel for consulting opportunities.

The goal is not to sell AI hype.

The goal is to demonstrate practical problem-solving through real examples, lessons learned, and system thinking.

---

## Website Positioning

The website sits at the intersection of:

* AI & Automation
* Manufacturing & Design
* Cross-Cultural Experience
* Personal Growth
* Decision-Making Systems

Content should help readers think more clearly about work, systems, and technology.

---

## Target Audience

Primary audience:

* SMB owners
* Manufacturing companies
* Construction companies
* Millwork companies
* Operations managers
* Estimators
* Project managers

Secondary audience:

* Recruiters
* Engineers
* Designers
* Architects
* Technical collaborators

---

## Core Content Series

### Series A — Manufacturing Tech & Design Knowledge

Examples:

* CNC vs 3D Printing
* Robotic Fabrication
* Material Selection
* Parametric Design
* Digital Twin

---

### Series B — AI Automation & Industry Use Cases

Examples:

* AI Estimating
* AI ERP
* Power Automate
* n8n Workflows
* Data Systems
* Workflow Automation

---

### Series C — Cross-Cultural Comparisons

Examples:

* Taiwan vs United States
* Manufacturing Culture
* Technology Adoption
* Business Decision-Making

---

### Series D — Personal Growth

Examples:

* Career Development
* Learning
* Immigration Experience
* Entrepreneurship
* Decision Making

---

### Series E — Trends & Vision

Examples:

* Future of Manufacturing
* Future of AI
* Knowledge Systems
* Organizational Intelligence

---

## Writing Style

Writing style should be inspired by Alan Chan (詹雨安).

Characteristics:

* Calm
* Thoughtful
* Reflective
* Conceptually clear
* Practical
* Human-centered

Avoid:

* Clickbait
* AI hype
* Empty motivational language
* Excessive marketing language
* Internet slang

---

## Article Structure

Preferred structure:

1. Challenge
2. Observation
3. Analysis
4. System Design
5. Results
6. Reflection

Not every article must use all sections.

Choose the structure that best supports the idea.

---

## Language Requirements

Most articles contain:

* Traditional Chinese version
* English version

The English version should not be a literal translation.

Write naturally for English-speaking readers.

---

## Portfolio Philosophy

Portfolio articles should focus on:

* Business problems
* Decision-making process
* Trade-offs
* System design
* Measurable outcomes

Avoid presenting projects as feature lists.

Show why the project mattered.

---

## Portfolio Content Requirements for SMB Audience

Each portfolio article should include:

**1. Concrete scenario**

Include a specific, relatable example early in the article.
Name the industry (manufacturing, millwork, construction).
Name approximate company size if possible.
The reader should recognize their own situation within the first few paragraphs.

**2. Numbers in Results**

Results should include at least one specific metric or estimate.
Examples: time saved per person per day, hours to complete a task before vs. after, number of people previously holding critical knowledge.
Approximations are acceptable. Vague outcomes are not.

**3. Owner's perspective, not consultant's**

Write from the owner's point of view.
Avoid terms like "operational constraints", "decision transparency", "stakeholder alignment".
Use language owners actually use: "I didn't know where the project was stuck", "when that person left, we lost everything", "I was spending half my day chasing people".

**4. Technology Stack (when relevant)**

When the project involves tools, include a Technology Stack section.
Emphasize low-code options first — Microsoft or Google Workspace tools are accessible and affordable for SMBs.
Mention custom development only as a later-stage option.

---

## Technical Constraints

Current stack:

* HTML
* CSS
* JavaScript
* GitHub Pages

Do not introduce frameworks unless explicitly requested.

Do not convert the website to:

* React
* Next.js
* Vue

Favor simple and maintainable solutions.

---

## Git Workflow

Claude may:

* Read files
* Create files
* Modify files
* Suggest improvements

Claude must not:

* Commit changes
* Push changes
* Delete content without explicit instruction

All changes should be reviewed by the repository owner.

---

# Technical Reference

Read this section before editing any file. It documents how the site actually works, so you do not need to rediscover it.

## Repo Map

| Path | Purpose |
|---|---|
| `index.html` | Homepage |
| `about.html` | About page |
| `blog.html` | Blog index — article preview cards live here |
| `automation.html` | AI automation portfolio index — project preview cards |
| `digifab.html` | Digital fabrication portfolio index — project preview cards |
| `blog/articles/*.html` | Blog articles (self-contained bilingual HTML) |
| `project/*.html` | Portfolio project pages (linked from automation.html / digifab.html) |
| `asset/` | All images (`asset/automation/`, `asset/digifab/` subfolders) |
| `styles.css` | Single global stylesheet — all pages share it |
| `script.js` | Single global JS — language toggle, navigation, interactions |
| `sitemap.xml` | Hand-maintained page list for Google. Must be updated when pages are added/removed |
| `robots.txt`, `CNAME`, `favicon.svg`, `404.html` | SEO / hosting infrastructure — rarely touched |
| `build-post.js` + `blog/article-template.html` + `content/posts/*.md` | Optional Markdown→HTML article generator |
| `optimize-images.js` | Image compression script (uses sharp) |
| `blog-draft/`, `prompt/` | Working notes. Not linked pages, but they ARE public in the repo |
| `blog-draft/heptabase-topic-candidates.md` | Curated article topic backlog (mapped to Series A–E, with source card paths) — check here first when picking the next article topic |
| `dist/` | Generated LinkedIn drafts. Git-ignored — must stay private, never commit |

## Source Archive — gpt-migration (sibling repo, read-only)

Some drafts in `blog-draft/` were distilled from `../gpt-migration/` (permanent archive of 2,330 ChatGPT conversations, 2023–2026). When a draft cites `n=XXX`, look up line n of that repo's `classification/digests.jsonl` to locate the original conversation; the full extraction recipe is in that repo's `CLAUDE.md`. **Privacy red line: this website is public — the 46 conversations listed in that repo's `classification/privacy_flagged_list.md` must never be quoted, summarized, or referenced in any published content.**

## Bilingual Mechanism

Every page contains both languages in one file. Content is wrapped in
`data-lang="en"` and `data-lang="zh"` blocks; `script.js` toggles visibility.
Any new content must provide both blocks, following the pattern of existing pages.
The English version should read naturally, not as a literal translation (see Writing Style above).

## Creating an Article — Two Ways

**Way 1 — Hand-written HTML (how most existing articles were made):**
Copy the structure of a recently added file in `blog/articles/` and follow the
"Checklist for Any New Page" below. Use the `/new-article` command.

**Way 2 — Generator:**

```
npm install          # once, if node_modules is missing
node build-post.js content/posts/<file>.md [--force]
```

Reads Markdown with YAML front matter, applies `blog/article-template.html`,
writes `blog/articles/<name>.html`. Front matter fields:

* Required: `title_en`, `date`, `category_id`, `category_en`, `summary_en`
* Optional: `title_zh`, `category_zh`, `summary_zh`, `output_filename`,
  `hero_src`, `hero_alt`, `tags_en`, `tags_zh`, `linkedin_variants`
* Language blocks in the body: `<!--lang:en-->` … `<!--lang:zh-->` …
* Images referenced as `./images/...` resolve to `blog/articles/<name>/images/` first,
  then fall back to `asset/<basename>`. Missing images abort the build.

The generator does NOT update `blog.html` or `sitemap.xml` — do those by hand.

## Checklist for Any New Page (article or project)

1. Create the HTML page — bilingual blocks, navigation, and footer intact.
2. Add a preview card to the correct index page: `blog.html`, `automation.html`, or `digifab.html`. Copy an existing card; keep chronological order.
3. **Add the page URL to `sitemap.xml`** — it is maintained by hand and forgetting this is the most common mistake.
4. Set `<title>`, meta description, canonical URL, and og tags in the page head (copy the pattern from a recent article).
5. Verify every image path exists. GitHub Pages is case-sensitive: `photo.JPG` ≠ `photo.jpg`.
6. Open the page in a browser locally; check layout and the EN/ZH toggle both work.

## Deployment (GitHub Pages)

* The site serves the root of the `main` branch at `https://www.esterlo.com` (via `CNAME`).
* Every push to `main` auto-deploys. Takes 1–3 minutes.
* Verify: repo → Actions tab → newest "pages build and deployment" run is green, then hard-refresh the site (Ctrl+F5).

**Troubleshooting a stale/failed deploy** (learned 2026-07-03):

* The workflow has two key steps: `build` (packages the site) and `deploy` (publishes it).
* `build` failed → a file in the repo is the problem. Avoid filenames starting with `_` and stray `{{ }}` in published files (the legacy Pages pipeline runs Jekyll).
* `deploy` failed with "Deployment failed, try again later" → GitHub-side transient error; the code is fine. Fix: Actions → failed run → "Re-run jobs", or `gh api -X POST repos/<owner>/<repo>/pages/builds` to trigger a fresh build.
* The live site keeps serving the last successful deploy until a new one succeeds — "site looks old" usually means the latest deploy failed, not that the push failed.

## SEO Status

* Google Search Console: domain property `esterlo.com` verified via Cloudflare DNS on 2026-07-03. Do not remove the Google TXT record in Cloudflare.
* `sitemap.xml` submitted. Google re-reads it automatically; no manual action needed when publishing new content. Optionally use URL Inspection → Request Indexing to speed up important new pages.

## Conventions and Pitfalls

* Article filenames: kebab/Title-case matching existing files, e.g. `Why-I-Dont-Start-with-AI.html`.
* Put images in `asset/` (or its subfolders); compress large ones with `optimize-images.js`.
* `node_modules/` is git-ignored. If `build-post.js` fails with a missing module, run `npm install`.
* Development machine is Windows; always write forward-slash paths inside site files.
