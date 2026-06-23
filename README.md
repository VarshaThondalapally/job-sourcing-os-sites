# Job Sourcing OS Sites

Public website bundle for Job Sourcing OS.

This repository intentionally contains only public-facing static website assets. It should not include private product repositories, environment files, private data, resumes, tracker exports, or confidential job-search records.

## Live Site Structure

```text
/
+-- index.html       Landing chooser page
+-- investor/        Investor pitch website
+-- jobseekers/      Job-seeker product website
```

## What Job Sourcing OS Is

Job Sourcing OS is opportunity routing intelligence.

It is not:

- a job scraper
- a job board
- a resume bot
- a generic recruiting chatbot
- an auto-apply system

It is an AI operating system for finding active opportunities, verifying the best route, proving fit, reaching humans, tracking responses, and learning from outcomes.

## Local Preview

From this folder:

```powershell
python -m http.server 5180 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:5180/
```

## Deploy With GitHub Pages

Recommended GitHub Pages settings:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

Expected URLs:

```text
https://<github-username>.github.io/job-sourcing-os-sites/
https://<github-username>.github.io/job-sourcing-os-sites/investor/
https://<github-username>.github.io/job-sourcing-os-sites/jobseekers/
```

## Deploy With Vercel

Import this repository into Vercel.

Settings:

```text
Framework preset: Other
Build command: none
Output directory: .
```

## Honesty Guardrails

Do not add claims for:

- users
- revenue
- customers
- partnerships
- interview guarantees
- response-rate lift

unless they are validated and approved.

Use TODO placeholders for missing proof.
