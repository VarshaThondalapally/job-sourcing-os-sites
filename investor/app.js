const layers = [
  {
    number: 1,
    name: "Market Map",
    purpose: "Defines the role families, company types, source tiers, and fit domains before any role is collected.",
    why: "Prevents random sourcing from becoming the strategy.",
    output: "Market map with target roles, acceptable domains, source coverage, and known blockers.",
    example: "Founding AI Engineer, Forward Deployed AI Engineer, AI Product Engineer, and adjacent product/FDE roles.",
    boundary: "AI can propose the map. The human signs the search direction."
  },
  {
    number: 2,
    name: "Source Discovery",
    purpose: "Finds possible opportunities across fresh feeds, official sources, market signals, and human-route surfaces.",
    why: "No single board has complete truth. Discovery and verification must be separate.",
    output: "Raw candidate opportunities with source tier and freshness signal.",
    example: "Jack & Jill surfaces webAI, PermitFlow, Distyl AI, Clera, GC AI, and Gradial before traditional search did.",
    boundary: "A source is a lead, not truth."
  },
  {
    number: 3,
    name: "Ingestion",
    purpose: "Captures title, company, URL, source, date, location, salary, JD text, route hints, and application fields.",
    why: "A role cannot be compared or tracked unless the raw facts are structured.",
    output: "Raw role record.",
    example: "LinkedIn says reposted five days ago; Ashby metadata may reveal an older original date.",
    boundary: "Unknown fields stay unknown. AI cannot fill missing facts with plausible guesses."
  },
  {
    number: 4,
    name: "Entity Resolution",
    purpose: "Combines duplicates and mirrors into one company-role truth record.",
    why: "The same job can appear on LinkedIn, YC, Ashby, company pages, and aggregators with different details.",
    output: "Unified role record with source conflict notes.",
    example: "A LinkedIn post routes to Ashby, while the company careers page has a different CTA.",
    boundary: "Official sources win, but conflicts remain visible."
  },
  {
    number: 5,
    name: "Liveness Verification",
    purpose: "Checks whether the role is active before resume or outreach effort begins.",
    why: "Stale postings create wasted packets and false hope.",
    output: "Active, weak-active, stale, closed, or blocked status with evidence.",
    example: "A promoted LinkedIn role may still fail if the final application form is closed.",
    boundary: "Active means evidence exists. It is not a feeling."
  },
  {
    number: 6,
    name: "Route Intelligence",
    purpose: "Finds the best path to a human, not just the visible Apply button.",
    why: "The route often determines whether the application is seen.",
    output: "Primary route, backup route, contact priority, and message channel.",
    example: "Voiceops had a direct Ali CTA on its careers page; the broader founder route was not the best first route.",
    boundary: "No generic founder outreach until the role-specific route is checked."
  },
  {
    number: 7,
    name: "Fit Engine",
    purpose: "Maps the company's likely failure mode to specific proof from the candidate.",
    why: "True but interchangeable claims do not earn replies.",
    output: "One-sentence fit gate and proof bullets.",
    example: "Their product fails if AI output cannot become reviewable, editable, trusted workflow state.",
    boundary: "If the sentence could go to four companies, it fails."
  },
  {
    number: 8,
    name: "Blocker Engine",
    purpose: "Stops attractive roles that have hard blockers or weak probability.",
    why: "A great fit still fails if work authorization, location, stack, seniority, or domain requirements are incompatible.",
    output: "Blocker matrix and apply / hold / archive recommendation.",
    example: "US Person, clearance, mandatory SF onsite, or hard sponsorship language changes the queue.",
    boundary: "AI cannot hide blockers to preserve momentum."
  },
  {
    number: 9,
    name: "Decision Queues",
    purpose: "Routes every opportunity to the correct next action.",
    why: "Without queues, sourcing, resume work, outreach, and follow-up collapse into one confusing stream.",
    output: "Verified Apply, Verify-Outbound, Hold, Archive, or Watch.",
    example: "A fresh job with no official form goes to Verify-Outbound before a custom resume is made.",
    boundary: "No artifact before gates."
  },
  {
    number: 10,
    name: "Application Packet Layer",
    purpose: "Creates resume deltas, form answers, emails, LinkedIn notes, and proof artifacts after gates pass.",
    why: "Tailoring only matters when it changes the hiring signal.",
    output: "Approved packet with resume version, form answers, outreach, and optional artifact.",
    example: "Market-calibrated base resume plus small role-specific delta, not a brand-new resume for every post.",
    boundary: "No fake stack, traction, metrics, or confidential claims."
  },
  {
    number: 11,
    name: "Outreach CRM",
    purpose: "Tracks humans, source, route quality, message, last touch, next touch, and response.",
    why: "Applications are not the unit of work. Human routes are.",
    output: "Contact plan and follow-up schedule.",
    example: "Founder, role-specific CTA, recruiter, and team-member routes are tracked separately.",
    boundary: "Human approves every send."
  },
  {
    number: 12,
    name: "Inbox + Response Monitor",
    purpose: "Closes the loop after applying by monitoring confirmations, rejections, replies, and task requests.",
    why: "A job search OS must stay alive after submission.",
    output: "Status updates, reply classification, follow-up task, and tracker change.",
    example: "Tennr or Lamar response states update the pipeline instead of staying as static notes.",
    boundary: "Silence is a status, not proof of failure."
  },
  {
    number: 13,
    name: "Feedback Loop",
    purpose: "Learns which sources, routes, messages, and proof artifacts actually produce human responses.",
    why: "Gut feel cannot improve unless it is graded.",
    output: "Source reply rate, route reply rate, failure categories, and weekly adjustments.",
    example: "If HN produces replies and YC does not, the allocation shifts.",
    boundary: "Low sample size must be labeled, not over-read."
  },
  {
    number: 14,
    name: "Quality Control",
    purpose: "Protects against generic, false, sloppy, overconfident, or NDA-sensitive artifacts.",
    why: "Well-written can still be wrong or interchangeable.",
    output: "Pass, revise, or reject with reason.",
    example: "A message that only says 'messy documents' fails if it could be sent to four companies.",
    boundary: "The system rejects relief drafts that feel good but carry no specific signal."
  },
  {
    number: 15,
    name: "Strategy Layer",
    purpose: "Allocates weekly effort across sources, role families, proof artifacts, outreach, and follow-up.",
    why: "Without strategy, the system becomes activity theater.",
    output: "Weekly sourcing and application allocation.",
    example: "Increase fresh-feed coverage, preserve P0 deep packets, and reserve time for proof artifacts.",
    boundary: "AI recommends. Human signs the tradeoff."
  }
];

const workflow = [
  {
    stage: "Discover",
    title: "Fresh source catches a possible role",
    body: "A fresh feed finds a role before it has been validated. The system records it as a lead, not a truth source.",
    artifacts: {
      Input: "Jack & Jill / LinkedIn / HN lead",
      Output: "Raw opportunity record",
      Risk: "Mirror data may be stale",
      Control: "Move to official verification"
    }
  },
  {
    stage: "Verify",
    title: "Official source proves whether the role is live",
    body: "The company careers page, ATS, YC page, or final form decides whether the opportunity is active enough for effort.",
    artifacts: {
      Input: "Role URL and company page",
      Output: "Active / stale / closed / blocked",
      Risk: "Promoted jobs can still be stale",
      Control: "Evidence label required"
    }
  },
  {
    stage: "Route",
    title: "The system finds the best human path",
    body: "Route intelligence checks role-specific CTAs, founder posts, team pages, recruiter notes, and backup contacts.",
    artifacts: {
      Input: "Company web presence",
      Output: "Primary route + backup route",
      Risk: "Wrong founder or generic inbox",
      Control: "Route priority order"
    }
  },
  {
    stage: "Prove",
    title: "Fit becomes a specific failure-mode sentence",
    body: "The system asks what breaks if the company hires the wrong person, then maps that risk to actual proof.",
    artifacts: {
      Input: "JD, company signal, candidate proof",
      Output: "One-sentence fit gate",
      Risk: "Interchangeable outreach",
      Control: "Four-company test"
    }
  },
  {
    stage: "Package",
    title: "Assets are created only after gates pass",
    body: "Resume deltas, form answers, outreach, and proof artifacts are built only when the role is active and specific.",
    artifacts: {
      Input: "Verified role + route + fit",
      Output: "Application packet",
      Risk: "Resume sprawl",
      Control: "Meaningful delta rule"
    }
  },
  {
    stage: "Learn",
    title: "Every outcome updates the operating system",
    body: "Confirmation, rejection, silence, founder reply, or task request updates the tracker and source-route scores.",
    artifacts: {
      Input: "Inbox and tracker status",
      Output: "Feedback loop signal",
      Risk: "Static application tracking",
      Control: "Response monitor"
    }
  }
];

const modules = [
  ["Source Discovery", "Collects leads from fresh feeds, ATS pages, company pages, YC, LinkedIn, HN, and founder/team surfaces."],
  ["Liveness Verification", "Separates active proof from stale or mirrored postings before artifacts are created."],
  ["Route Intelligence", "Finds the best human path: direct CTA, hiring owner, founder, recruiter, or backup route."],
  ["Fit Engine", "Turns JD and company signals into a specific failure-mode fit sentence that cannot be reused everywhere."],
  ["Blocker Engine", "Checks work authorization, location, seniority, required stack, domain requirements, and application limits."],
  ["Packet Builder", "Creates resume deltas, form answers, outreach, and proof artifacts only after gates pass."],
  ["Outreach CRM", "Tracks contacts, route quality, message, follow-up date, response, and next action."],
  ["Inbox Monitor", "Classifies confirmations, rejections, replies, assignments, and silence into live pipeline updates."],
  ["Feedback Loop", "Grades sources and routes by human replies instead of gut feel or vanity application count."]
];

const audits = [
  {
    label: "Voiceops",
    title: "Route-intelligence miss",
    text: "The visible path was not enough. A role-specific CTA existed on the company careers page, proving the need to inspect owned sources before broad founder outreach."
  },
  {
    label: "Jack & Jill",
    title: "Fresh-feed coverage gap",
    text: "A fresh source surfaced webAI, PermitFlow, Distyl AI, Clera, GC AI, and Gradial before the manual sourcing loop did. That made fresh-feed coverage mandatory."
  },
  {
    label: "PermitFlow",
    title: "Duplicate-application prevention",
    text: "The same company can appear across multiple sources. Entity resolution and application history prevent repeated, inconsistent action."
  },
  {
    label: "Tennr",
    title: "Response-monitor loop closure",
    text: "Submission is not the end of the workflow. Confirmation, response state, and follow-up timing must update the operating loop."
  }
];

const memo = [
  ["Thesis", "The hiring market is shifting from search to routing. The winner is not the tool that finds the most jobs, but the system that proves which opportunities are alive, reachable, and worth a specific packet."],
  ["Wedge", "Start with high-agency candidates applying to AI, FDE, product, and founding roles where route quality and proof specificity matter more than mass volume."],
  ["Why now", "AI has made generic applications cheap. That pushes scarce value into verification, human access, evidence-backed fit, and response-learning loops."],
  ["Product surface", "A layered OS: source discovery, liveness verification, route intelligence, blocker engine, packet builder, outreach CRM, inbox monitor, feedback loop, and quality control."],
  ["Defensibility", "The system improves through source-route-response data, failure audits, packet quality history, and human approval patterns. TODO: validate proprietary learning advantage."],
  ["Current proof", "Grounded operating docs, tracker schema, failure audits, source tier logic, and a manual workflow that exposed real misses. TODO: validated user metrics, response lift, revenue."],
  ["Risks", "Overbuilding before response data, generic outreach relapse, source fragility, privacy boundaries, work-authorization sensitivity, and low early sample size."],
  ["Next milestones", "Run structured sourcing for TODO weeks, compare reply rates by source and route, test proof artifact impact, validate pricing, and convert manual loops into software."]
];

const pitchSlides = [
  ["Category", "This is not a job scraper.", "Scraping answers what was posted. Job Sourcing OS answers whether the role is live, reachable, aligned, safe to pursue, and likely to reach a human."],
  ["Problem", "Job extraction creates motion, not signal.", "Candidates drown in fresh-looking but stale, duplicated, or low-route postings. The missing layer is verification and route intelligence."],
  ["Insight", "The best opportunity is not the newest job.", "The best opportunity is active company + reachable human + specific proof fit + tracked follow-up."],
  ["Architecture", "Job extraction is only Layer 3.", "Fifteen layers turn raw postings into a decision loop: source, verify, route, fit, block, packet, outreach, monitor, learn."],
  ["Proof", "Failure audits became product requirements.", "Voiceops proved route misses. Jack & Jill proved fresh-feed gaps. Tennr proved response-monitor loop closure."],
  ["Safety", "AI prepares. Humans approve.", "The system uses evidence labels and human approval points to stop overconfident automation from creating false claims or generic outreach."],
  ["Market", "A wedge into opportunity routing.", "Start with high-agency candidates and career operators, then expand toward structured talent intelligence."],
  ["Ask", "Prove response lift.", "The next milestone is showing that verified routes, specific fit proof, and feedback loops produce more human responses than generic applications."]
];

const layerStack = document.getElementById("layerStack");
const layerDetail = document.getElementById("layerDetail");
const workflowRail = document.getElementById("workflowRail");
const workflowOutput = document.getElementById("workflowOutput");
const moduleGrid = document.getElementById("moduleGrid");
const auditGrid = document.getElementById("auditGrid");
const memoGrid = document.getElementById("memoGrid");

function renderLayers(activeNumber = 15) {
  layerStack.innerHTML = layers
    .map((layer) => {
      const width = 42 + layer.number * 3.7;
      return `
        <button class="layer-button ${layer.number === activeNumber ? "active" : ""}"
          style="--layer-width:${width}%"
          type="button"
          data-layer="${layer.number}">
          <span class="num">${String(layer.number).padStart(2, "0")}</span>
          <span class="name">${layer.name}</span>
        </button>`;
    })
    .join("");
  renderLayerDetail(activeNumber);
}

function renderLayerDetail(number) {
  const layer = layers.find((item) => item.number === number) || layers[layers.length - 1];
  layerDetail.innerHTML = `
    <div class="layer-meta">
      <span>Layer ${String(layer.number).padStart(2, "0")}</span>
      <span>AI boundary enforced</span>
    </div>
    <h3>${layer.name}</h3>
    <dl>
      <div><dt>Purpose</dt><dd>${layer.purpose}</dd></div>
      <div><dt>Why it matters</dt><dd>${layer.why}</dd></div>
      <div><dt>Output artifact</dt><dd>${layer.output}</dd></div>
      <div><dt>Example</dt><dd>${layer.example}</dd></div>
      <div><dt>AI / human boundary</dt><dd>${layer.boundary}</dd></div>
    </dl>
  `;
}

function renderWorkflow(activeIndex = 0) {
  workflowRail.innerHTML = workflow
    .map((step, index) => `
      <button class="workflow-step ${index === activeIndex ? "active" : ""}" type="button" data-step="${index}">
        <span>Step ${index + 1}</span>
        ${step.stage}
      </button>
    `)
    .join("");
  renderWorkflowOutput(activeIndex);
}

function renderWorkflowOutput(index) {
  const step = workflow[index];
  workflowOutput.innerHTML = `
    <p class="eyebrow">${step.stage}</p>
    <h3>${step.title}</h3>
    <p>${step.body}</p>
    <div class="artifact">
      ${Object.entries(step.artifacts)
        .map(([key, value]) => `<div><span>${key}</span>${value}</div>`)
        .join("")}
    </div>
  `;
}

function renderCards() {
  moduleGrid.innerHTML = modules
    .map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`)
    .join("");

  auditGrid.innerHTML = audits
    .map((audit) => `
      <article>
        <div class="audit-label">${audit.label}</div>
        <div>
          <h3>${audit.title}</h3>
          <p>${audit.text}</p>
        </div>
      </article>
    `)
    .join("");

  memoGrid.innerHTML = memo
    .map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`)
    .join("");
}

function bindInteractions() {
  layerStack.addEventListener("click", (event) => {
    const button = event.target.closest("[data-layer]");
    if (!button) return;
    const number = Number(button.dataset.layer);
    document.querySelectorAll(".layer-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderLayerDetail(number);
  });

  workflowRail.addEventListener("click", (event) => {
    const button = event.target.closest("[data-step]");
    if (!button) return;
    const index = Number(button.dataset.step);
    document.querySelectorAll(".workflow-step").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderWorkflowOutput(index);
  });
}

function drawSignalCanvas() {
  const canvas = document.getElementById("signalCanvas");
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const w = rect.width;
  const h = rect.height;
  const nodes = [
    [0.12, 0.18, "Source"],
    [0.33, 0.28, "Verify"],
    [0.58, 0.18, "Route"],
    [0.82, 0.30, "Fit"],
    [0.70, 0.52, "Packet"],
    [0.45, 0.48, "Human"],
    [0.20, 0.58, "Monitor"],
    [0.50, 0.72, "Learn"],
    [0.82, 0.68, "Strategy"]
  ];

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#151712";
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "rgba(247,244,236,0.08)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 38) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 38) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  const t = performance.now() / 1000;
  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [2, 5],
    [1, 6],
    [5, 7]
  ];

  edges.forEach(([a, b], index) => {
    const start = nodes[a];
    const end = nodes[b];
    const x1 = start[0] * w;
    const y1 = start[1] * h;
    const x2 = end[0] * w;
    const y2 = end[1] * h;
    ctx.strokeStyle = index % 3 === 0 ? "rgba(184,255,106,0.44)" : "rgba(117,215,255,0.26)";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    const phase = (Math.sin(t * 1.8 + index) + 1) / 2;
    const px = x1 + (x2 - x1) * phase;
    const py = y1 + (y2 - y1) * phase;
    ctx.fillStyle = index % 3 === 0 ? "#b8ff6a" : "#75d7ff";
    ctx.beginPath();
    ctx.arc(px, py, 3.5, 0, Math.PI * 2);
    ctx.fill();
  });

  nodes.forEach(([nx, ny, label], index) => {
    const x = nx * w;
    const y = ny * h;
    const radius = 22 + Math.sin(t + index) * 2;
    ctx.fillStyle = "rgba(13,14,12,0.86)";
    ctx.strokeStyle = index === 5 ? "#ffbf46" : "#f7f4ec";
    ctx.lineWidth = index === 5 ? 2.5 : 1.2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = index === 5 ? "#ffbf46" : "#f7f4ec";
    ctx.font = "700 12px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + 4);
  });

  requestAnimationFrame(drawSignalCanvas);
}

const pitchDialog = document.getElementById("pitchDialog");
const pitchKicker = document.getElementById("pitchKicker");
const pitchTitle = document.getElementById("pitchTitle");
const pitchBody = document.getElementById("pitchBody");
const pitchCounter = document.getElementById("pitchCounter");
let pitchIndex = 0;

function renderPitch() {
  const slide = pitchSlides[pitchIndex];
  pitchKicker.textContent = slide[0];
  pitchTitle.textContent = slide[1];
  pitchBody.textContent = slide[2];
  pitchCounter.textContent = `${pitchIndex + 1} / ${pitchSlides.length}`;
}

function openPitch() {
  renderPitch();
  pitchDialog.showModal();
}

function bindPitchMode() {
  document.getElementById("pitchModeButton").addEventListener("click", openPitch);
  document.getElementById("pitchModeButtonBottom").addEventListener("click", openPitch);
  document.getElementById("closePitch").addEventListener("click", () => pitchDialog.close());
  document.getElementById("prevPitch").addEventListener("click", () => {
    pitchIndex = (pitchIndex - 1 + pitchSlides.length) % pitchSlides.length;
    renderPitch();
  });
  document.getElementById("nextPitch").addEventListener("click", () => {
    pitchIndex = (pitchIndex + 1) % pitchSlides.length;
    renderPitch();
  });
  document.addEventListener("keydown", (event) => {
    if (!pitchDialog.open) return;
    if (event.key === "ArrowRight") {
      pitchIndex = (pitchIndex + 1) % pitchSlides.length;
      renderPitch();
    }
    if (event.key === "ArrowLeft") {
      pitchIndex = (pitchIndex - 1 + pitchSlides.length) % pitchSlides.length;
      renderPitch();
    }
  });
}

renderLayers();
renderWorkflow();
renderCards();
bindInteractions();
bindPitchMode();
requestAnimationFrame(drawSignalCanvas);
window.addEventListener("resize", drawSignalCanvas);
