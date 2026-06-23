const workflow = [
  {
    label: "Find",
    title: "Collect roles without trusting every source",
    body: "The system pulls from fresh feeds, LinkedIn, ATS pages, company careers pages, YC, HN, and founder posts. A posting is treated as a lead until official evidence confirms it.",
    artifacts: {
      Input: "Fresh role lead",
      Output: "Raw opportunity record",
      Guardrail: "Source is not truth",
      User: "You see why it entered the board"
    }
  },
  {
    label: "Verify",
    title: "Check whether the role is actually active",
    body: "Before you rewrite a resume, the system checks the final form, company page, ATS status, posting date conflicts, and visible hiring activity.",
    artifacts: {
      Input: "Role URL + company page",
      Output: "Active, stale, closed, or verify",
      Guardrail: "No packet before liveness",
      User: "You avoid stale applications"
    }
  },
  {
    label: "Route",
    title: "Prove the person route before messaging",
    body: "The system looks for role-specific CTAs, hiring owners, founder posts, team pages, recruiter contacts, and public person evidence before defaulting to a generic apply button. Someone working at the company is not enough.",
    artifacts: {
      Input: "Company web presence",
      Output: "A/B/C/D route confidence",
      Guardrail: "Person relevance must be cited",
      User: "You know why this person is a valid route"
    }
  },
  {
    label: "Prove",
    title: "Turn fit into one specific sentence",
    body: "Instead of repeating the JD, the system asks: what will break if this company hires the wrong person, and what real proof do you have for that exact failure mode?",
    artifacts: {
      Input: "JD + company signals + your proof",
      Output: "Specific fit sentence",
      Guardrail: "Four-company test",
      User: "Your message stops sounding generic"
    }
  },
  {
    label: "Apply",
    title: "Create the packet only after the gates pass",
    body: "Resume deltas, form answers, LinkedIn notes, cold emails, and proof artifacts are created only when the role is live, the person route is proven, and the message passes send/hold quality control.",
    artifacts: {
      Input: "Verified role + route confidence + fit",
      Output: "Application packet + persona message",
      Guardrail: "No fake claims or company-level outreach",
      User: "You approve before anything is sent"
    }
  },
  {
    label: "Learn",
    title: "Use every outcome to improve the next action",
    body: "The system tracks confirmations, silence, rejections, founder replies, recruiter replies, assignments, and follow-ups so the search improves from reality.",
    artifacts: {
      Input: "Inbox + tracker status",
      Output: "Source and route feedback",
      Guardrail: "Low data stays low-confidence",
      User: "You learn what is working"
    }
  }
];

const layers = [
  ["01", "Market Map", "Decides what kinds of roles and companies are worth searching before the noise begins."],
  ["02", "Source Discovery", "Finds possible jobs across many places without assuming any source is true."],
  ["03", "Ingestion", "Captures raw facts: title, company, source, date, location, JD, and route hints."],
  ["04", "Entity Resolution", "Combines duplicates from LinkedIn, ATS pages, company pages, and mirrors."],
  ["05", "Liveness Verification", "Checks whether the role is still real and accepting applications."],
  ["06", "Freshness + Hiring Intent", "Checks whether the company is actively hiring now, not merely hosting an old page."],
  ["07", "Fit Engine", "Connects the company&apos;s real problem to your specific proof."],
  ["08", "Blocker Engine", "Checks sponsorship, location, seniority, stack, domain, and application limits."],
  ["09", "Route Intelligence", "Proves the application route and person route; every contact is A Direct, B Strong Adjacent, C Weak Adjacent, or D Invalid."],
  ["10", "Decision Queue", "Sends each role to apply, verify, outreach, follow up, watch, hold, or archive."],
  ["11", "Application Packet", "Builds resume deltas, form answers, and proof artifacts only after the form and blockers are known."],
  ["12", "Persona Outreach CRM", "Creates messages only after route confidence, public evidence, persona fit, and send/hold QC pass."],
  ["13", "Inbox + Follow-Up Monitor", "Watches confirmations, replies, rejections, assignments, accepted connections, and due follow-ups."],
  ["14", "Feedback Loop", "Learns which sources, routes, personas, and proof artifacts produce real human responses."],
  ["15", "Strategy Control", "Sets the next highest-probability action so effort does not become random activity."]
];

const examples = [
  {
    title: "Route miss",
    text: "A role-specific contact can exist on a company careers page even when a job board points somewhere else. The system now checks owned sources before outreach."
  },
  {
    title: "Person-route miss",
    text: "A company-relevant note can still be wrong if the person is not proven relevant to the role. The system now labels every contact A/B/C/D before a message exists."
  },
  {
    title: "Fresh-feed gap",
    text: "A fresh source can surface strong roles before manual search does. The system treats fresh feeds as discovery, then official pages as truth."
  },
  {
    title: "Duplicate prevention",
    text: "The same role can appear in multiple places. The system resolves duplicates before you accidentally submit inconsistent applications."
  },
  {
    title: "Response loop",
    text: "Submission is not the finish line. Confirmations, silence, replies, and tasks update the next action."
  }
];

const faqs = [
  {
    q: "Is this an auto-apply tool?",
    a: "No. It is designed for selective, serious applications where quality, route, and proof matter. You approve sensitive decisions and sends."
  },
  {
    q: "Will it write my resume for every job?",
    a: "Not blindly. The system starts from role-family resumes and only creates meaningful deltas when the job passes gates."
  },
  {
    q: "Can it guarantee interviews?",
    a: "No. The honest goal is to improve the probability of reaching humans by removing stale jobs, weak routes, and generic messaging."
  },
  {
    q: "How does it avoid overconfident AI?",
    a: "It labels evidence, keeps unknowns visible, uses approval gates, rejects messages that could be sent to four companies, and blocks company-level outreach that lacks person-route proof."
  },
  {
    q: "Who is it best for?",
    a: "People applying to high-signal roles where fit is nuanced: AI, product, FDE, founding roles, career switches, or searches with blockers."
  },
  {
    q: "Is it live?",
    a: "This page describes the product direction and manual operating workflow. TODO: connect live waitlist, onboarding, and user metrics."
  }
];

const workflowSteps = document.getElementById("workflowSteps");
const workflowPanel = document.getElementById("workflowPanel");
const layerGrid = document.getElementById("layerGrid");
const exampleGrid = document.getElementById("exampleGrid");
const faqList = document.getElementById("faqList");

function renderWorkflow(active = 0) {
  workflowSteps.innerHTML = workflow
    .map((step, index) => `
      <button class="workflow-step ${index === active ? "active" : ""}" type="button" data-step="${index}">
        <span>Gate ${index + 1}</span>
        ${step.label}
      </button>
    `)
    .join("");
  renderWorkflowPanel(active);
}

function renderWorkflowPanel(index) {
  const step = workflow[index];
  workflowPanel.innerHTML = `
    <p class="eyebrow">${step.label}</p>
    <h3>${step.title}</h3>
    <p>${step.body}</p>
    <div class="artifact-list">
      ${Object.entries(step.artifacts)
        .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
        .join("")}
    </div>
  `;
}

function renderStaticCards() {
  layerGrid.innerHTML = layers
    .map(([num, title, text]) => `
      <article class="layer-card">
        <span>${num}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `)
    .join("");

  exampleGrid.innerHTML = examples
    .map((item) => `<article><h3>${item.title}</h3><p>${item.text}</p></article>`)
    .join("");

  faqList.innerHTML = faqs
    .map((item) => `<article class="faq-item"><h3>${item.q}</h3><p>${item.a}</p></article>`)
    .join("");
}

workflowSteps?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-step]");
  if (!button) return;
  const index = Number(button.dataset.step);
  document.querySelectorAll(".workflow-step").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderWorkflowPanel(index);
});

renderWorkflow();
renderStaticCards();
