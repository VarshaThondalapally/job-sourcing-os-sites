# Job Sourcing OS Job-Seeker Website

This is the job-seeker-facing version of Job Sourcing OS.

It explains the product in plain language for candidates who are tired of stale job boards, generic AI applications, unclear follow-up, and applying into the dark.

## Positioning

Job Sourcing OS helps job seekers:

- find active roles
- verify whether a role is real and reachable
- identify the best person-proven route to a human
- explain fit with specific proof
- avoid generic AI messages
- track applications and responses
- learn from outcomes

It is not:

- an auto-apply bot
- a job scraper
- a resume spam tool
- a guarantee of interviews

Layer 12 is Persona Outreach CRM. Outreach cannot happen just because someone works at the company. Every contact needs route confidence A/B/C/D, public evidence, persona fit, and send/hold quality control before a message exists.

## Files

```text
index.html   Main single-page website
styles.css   Visual design and responsive layout
app.js       Workflow, architecture layers, examples, and FAQ content
README.md    This file
```

## How To Run Locally

```powershell
cd jobseekers
python -m http.server 5174
```

Then open:

```text
http://127.0.0.1:5174/
```

## What To Edit

Most product content lives in `app.js`:

- `workflow`
- `layers`
- `examples`
- `faqs`

The homepage copy lives in `index.html`.

The visual style lives in `styles.css`.

## Current Honesty Guardrails

This site intentionally does not claim:

- live users
- revenue
- interview guarantees
- verified response-rate lift
- customer logos
- partnerships

The waitlist form is disabled and marked as a placeholder until a real signup flow exists.
