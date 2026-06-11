# New Portfolio Project

Create a new website portfolio project.

Before making changes:

1. Read CLAUDE.md.
2. Read the provided source note.
3. Inspect:

   * automation.html
   * project/
   * asset/automation
4. Use the existing portfolio project structure as reference.

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

If information is missing, report missing info before finishing. If user doesn't want to provide those info, infer reasonable defaults when possible.

---

## Content Quality Check

Before writing the article, verify the provided content includes:

* A concrete scenario — a specific company type, size, or situation the reader can recognize
* Numbers or estimates in the Results section — time saved, hours reduced, people affected
* Language written from the owner's perspective, not a consultant's

If any of these are missing, ask the user before proceeding:

* "Can you share a specific example or scenario for the Challenge section?"
* "Do you have any numbers or estimates for the Results section?"

Do not invent numbers. Flag missing information and ask.

---

## Portfolio Project Creation

Create a new portfolio project inside:

project/

Follow the layout and styling used by existing portfolio projects.

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

* Use the specified image from asset/automation/

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

## Portfolio Page Update

Update:

automation.html

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
