# Job Sourcing OS Investor Website

This is a single-page investor pitch website for Job Sourcing OS.

It is not a converted PowerPoint deck. It transforms the existing pitch deck and the full operating documentation into an interactive website for YC, accelerators, angel investors, and startup reviewers.

## What It Is

Job Sourcing OS is positioned as opportunity routing intelligence.

It is not:

- a job scraper
- a job board
- a resume bot
- a generic recruiting chatbot

It is an AI operating system for finding active opportunities, verifying the best role and person route, proving fit, reaching humans through evidence-backed channels, tracking responses, and learning from outcomes.

## Source Material

This public folder contains only sanitized website assets and editable investor copy.
Private sourcing docs, trackers, resumes, application packets, and work samples should
stay outside this repository.

## Files

```text
index.html          Main single-page investor website
styles.css          Visual system and responsive layout
app.js              Interactive layer architecture, workflow demo, cards, pitch mode
INVESTOR_COPY.md    Editable website copy and positioning
INVESTOR_MEMO.md    Editable investor memo
VISUAL_DIRECTION.md Visual direction and hyper-realistic AI prompts
README.md           This file
```

## How To Run Locally

This is a static site. You can open `index.html` directly in a browser.

For a local server:

```powershell
cd investor
python -m http.server 5173
```

Then open:

```text
http://localhost:5173
```

## How To Edit Content

The interactive architecture, workflow demo, modules, failure audits, and investor memo cards live in:

```text
app.js
```

Edit these arrays:

```text
layers
workflow
modules
audits
memo
pitchSlides
```

Edit layout and visual styling in:

```text
styles.css
```

Edit investor-facing copy and messaging first in:

```text
INVESTOR_COPY.md
INVESTOR_MEMO.md
```

Then reflect approved copy in `index.html` and `app.js`.

## Where The Architecture Data Lives

The website uses the same 15-layer architecture as the documentation:

1. Market Map
2. Source Discovery
3. Ingestion
4. Entity Resolution
5. Liveness Verification
6. Freshness + Hiring Intent
7. Fit Engine
8. Blocker Engine
9. Route Intelligence
10. Decision Queue
11. Application Packet
12. Persona Outreach CRM
13. Inbox + Follow-Up Monitor
14. Feedback Loop
15. Strategy Control

Each layer card includes:

- layer name
- purpose
- why it matters
- output artifact
- example
- AI/human boundary

Layer 12 is persona outreach, not generic outreach. The site must not imply that finding an employee at the company is enough for a message. Contacts require route confidence A/B/C/D, public evidence, persona fit, and send/hold QC.

## Deployment To Vercel

Option 1: Drag-and-drop deploy

1. Go to Vercel.
2. Create a new project.
3. Upload this folder.
4. Use default static settings.

Option 2: Git deploy

1. Commit this folder to a repository.
2. Import the repo in Vercel.
3. Set the root directory to:

```text
investor
```

4. No build command is required.
5. Output directory can stay empty or root, depending on Vercel static settings.

## Current TODO Metrics

The site intentionally avoids fake traction.

The following remain TODO until validated:

- user volume
- response-rate lift
- paid pilots
- revenue
- market sizing
- pricing
- retention
- source-level reply rates
- route-level reply rates

## Quality Rules

Before sending this site to an investor or accelerator:

- remove or validate every TODO
- make sure the product is framed bigger than a personal job-search tool
- keep failure audits as learning loops, not excuses
- preserve the AI/human approval boundary
- preserve the person-route proof boundary before outreach
- avoid fake traction, fake customer logos, and inflated market numbers
