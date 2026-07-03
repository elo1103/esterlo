Build a modern SaaS-style web application prototype called:

"Cross-Department Workflow Intelligence"

Purpose:
This is a fictional portfolio demonstration for an automation consultant working with manufacturing and operations companies. The goal is to show how cross-department workflows can move from scattered communication (email, phone, messages) to a structured, visible, and trackable system.

IMPORTANT:

* Use completely fictional data.
* Do not reference any real company, project, employee, SharePoint site, Power Automate flow, or proprietary workflow.
* The application should demonstrate workflow transparency and decision visibility, not just task tracking.

Technology:

* Javascript/css/html
* Static JSON data only
* No backend
* No authentication
* Only front end UI for demo purpose

Design Style:

* Modern B2B SaaS
* Clean, minimal, professional
* Executive-facing dashboard aesthetic
* Mimic Apple's design and website style
* Similar quality to Linear, Notion, Asana — but more enterprise/operations-focused
* Color palette: neutral whites and grays, with subtle accent colors for status indicators (green/yellow/red)

Page Structure:

================================================
SECTION 1 — Workflow Dashboard
==============================

Show KPI cards at the top:

* Active Workflows
* Tasks Pending Handoff
* Overdue Tasks
* Avg. Completion Time (hours)
* Departments Involved

Include a short status summary:

"3 tasks are awaiting department handoff. 1 workflow has been stalled for more than 24 hours."

Below the KPI cards, show a department workload bar:

Departments:
* Engineering
* Procurement
* Production
* Quality
* Shipping

Each bar shows number of active tasks currently assigned to that department.

================================================
SECTION 2 — Active Workflow List
=================================

Display a table of active workflows with columns:

Workflow Name | Initiated By | Current Stage | Assigned Department | Status | Time in Stage | Priority

Use fictional workflows:

* Custom Millwork Order #A-1042
* Exterior Panel Fabrication #B-0831
* Hardware Procurement Request #C-2204
* Site Installation Coordination #D-0559
* Client Approval — Revised Drawings #E-1177

Status examples:
* On Track
* Pending Handoff
* Stalled
* Completed

Highlight stalled or overdue rows with a subtle red or amber background.

================================================
SECTION 3 — Workflow Detail View
==================================

When a user clicks on a workflow, display a side panel or expanded row showing:

Workflow Timeline — a vertical step-by-step timeline showing:

Each stage name
Department responsible
Status (Completed / In Progress / Waiting)
Timestamp or duration

Example for "Custom Millwork Order #A-1042":

Stage 1: Design Review — Engineering — Completed — 2h 15m
Stage 2: Material Procurement — Procurement — Completed — 6h 40m
Stage 3: Shop Fabrication — Production — In Progress — 14h (overdue)
Stage 4: Quality Inspection — Quality — Waiting
Stage 5: Shipping Coordination — Shipping — Waiting

Show a visual indicator of where the workflow is currently blocked.

================================================
SECTION 4 — Notification Log
==============================

Display a feed of recent automated notifications:

Each entry shows:

Notification Type | Sent To | Message | Timestamp

Examples:

* Task Handoff → Production Dept: "Material approved. Fabrication can begin."
* Overdue Alert → Supervisor: "Shop Fabrication has exceeded estimated time by 4 hours."
* Escalation → Management: "Workflow stalled — no action in 24 hours."
* Completion Confirm → Engineering: "Quality inspection passed. Shipping initiated."

Style this like a notification feed — clean, timestamped, subtle icons by type.

================================================
SECTION 5 — Workflow History & Audit Log
=========================================

Display a completed workflow as a read-only record:

Show all stages with:
* Who completed each step
* Timestamp
* Duration
* Notes (optional, fictional)

Example completed workflow:
"Hardware Procurement Request #C-1988 — Completed in 3 days"

Purpose:
Demonstrate that the system retains institutional knowledge — not just current status, but why decisions were made and how long each stage took.

Include a summary line:
"This workflow completed 6 hours ahead of schedule. Procurement responded within 1 hour of receiving the request."

================================================
SECTION 6 — Communication Reduction Insight
=============================================

This section is conceptual — show a simple comparison panel:

Before (Manual Process):
* 12 emails exchanged
* 3 follow-up messages
* 2 status meetings
* 1 escalation phone call

After (Automated Workflow):
* 0 manual follow-ups
* 4 automated notifications sent
* All decisions recorded automatically

Display this as a clean side-by-side comparison, not a chart.

Include a caption:
"Workflow automation did not eliminate communication. It eliminated the need to ask."

================================================

Overall Goal:

This application should feel less like a task tracker and more like a workflow transparency and coordination system.

The central message is:

"The problem is not communication speed.

The problem is that work status is invisible — scattered across emails, messages, and personal memory.

When every department can see where a task is, who is responsible, and what comes next, coordination friction disappears."

================================================

Additional Design Notes:

* The app should have a left sidebar navigation with icons for: Dashboard, Workflows, Notifications, History, Settings (Settings can be a placeholder)
* Use a top bar showing: app name, current date, and a fictional user avatar/name ("Alex Morgan — Operations Manager")
* All data should feel realistic for a manufacturing or millwork company
* Avoid generic tech company data (no "users", "signups", "revenue metrics" — this is an operations tool)
