# New Article

Create a new website article.

Before making changes:

1. Read CLAUDE.md.
2. Read the provided source note.
3. Inspect:

   * blog.html
   * articles/
   * asset/
4. Use the existing article structure as reference.

---

## Inputs

The user may provide:

* Chinese title
* Chinese content
* English title
* English content
* Hero image
* Inline images
* Categories
* Post date

If information is missing, report missing info before finishing. It user doesn't want to provide those info, infer reasonable defaults when possible.

---

## Article Creation

Create a new article inside:

articles/

Follow the layout and styling used by existing articles.

Maintain:

* Navigation
* Footer
* Typography
* Responsive behavior

Do not redesign the website.

---

## Bilingual Content

Include:

* Traditional Chinese section
* English section

English content should be rewritten naturally.

Avoid literal translation.

---

## Images

Hero image:

* Use the specified image from asset/

Inline images:

* Distribute naturally throughout the article
* Place images near relevant sections

Verify all image filenames exist.

Report missing images before finishing.

---

## Categories

Apply the provided categories.

Use existing category styles.

Include category tags at the bottom of the article.

---

## Blog Page Update

Update:

blog.html

Create a new preview card. Reference to existing preview card style. Do not redesign.

Include:

* Article title
* Preview image
* Summary
* Categories
* Link

Place the article in chronological order.

---

## Date

Use the provided publication date.

Match existing website formatting.

---

## Validation

Before finishing:

* Verify article path
* Verify image paths
* Verify blog card link
* Verify category tags
* Verify bilingual sections

---

## Final Report

Provide:

* New article filename
* Modified files
* Images used
* Categories assigned
* Warnings or issues

Do not commit.

Do not push.
