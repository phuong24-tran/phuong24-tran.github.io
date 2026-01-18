// ====== Active nav while scrolling ======
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll("header .nav a[href^='#']")];

const setActive = () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;

  for (const s of sections) {
    if (s.offsetTop <= y) current = s.id;
  }
  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
};
window.addEventListener("scroll", setActive);
setActive();

// ====== Case study modal ======
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector("[data-modal-title]");
const modalMeta = document.querySelector("[data-modal-meta]");
const modalWhat = document.querySelector("[data-modal-what]");
const modalRole = document.querySelector("[data-modal-role]");
const modalImpact = document.querySelector("[data-modal-impact]");
const modalLinks = document.querySelector("[data-modal-links]");

const closeModal = () => modal.classList.remove("open");
document.querySelector("[data-modal-close]")?.addEventListener("click", closeModal);
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Put your best 4 featured projects here (edit freely)
const CASES = {
  ewss: {
    title: "Early Warning Screening & Support Pathway (EWSS)",
    meta: "Winner · Innovation Sprint – Youth Homelessness · 3 days · 160+ students",
    what: "A systems-thinking pathway for early screening, school-based supports, and shelter diversion to reduce youth homelessness risk.",
    role: [
      "Led visual design + interactive poster experience",
      "Synthesized research into a clickable journey for educators and service providers",
      "Framed prevention levers, risks, and protective systems into a clear narrative"
    ],
    impact: [
      "Designed to be usable by non-technical stakeholders (schools + service providers)",
      "Turns complex systems research into an actionable flow"
    ],
    links: [
      { label: "View poster (PNG)", href: "#", note: "replace with your link" },
      { label: "Interactive poster", href: "#", note: "replace with your link" }
    ]
  },
  aiequity: {
    title: "Illuminating Canada’s AI Opportunity Gap",
    meta: "TECHNATION AI Equity Data Challenge · Phase 1",
    what: "A visual analytics story showing how AI exposure and skill demand vary across regions and sectors, with gender + racial equity lenses.",
    role: [
      "Led poster design + narrative structure",
      "Integrated multiple data sources into one policy-facing story",
      "Translated dense analysis into readable visuals"
    ],
    impact: [
      "Made equity insights legible for policy + public-sector audiences"
    ],
    links: [
      { label: "View poster (PDF)", href: "#", note: "replace with your link" }
    ]
  },
  cybercare: {
    title: "CyberCare Defender – AR Cybersecurity Training",
    meta: "Technation Hackathon · Top 3 (40+ teams)",
    what: "An AR-driven training concept where staff experience phishing/ransomware scenarios in context, plus a 'cybersecurity credit score' to surface cultural gaps.",
    role: [
      "System framing + risk communication visuals",
      "Connected human-factor risks to practical training workflows",
      "Helped translate threat scenarios into stakeholder-friendly language"
    ],
    impact: [
      "Focus on behavior + culture (not just technical controls)"
    ],
    links: [
      { label: "View strategy poster (PDF)", href: "#", note: "replace with your link" }
    ]
  },
  pspc: {
    title: "PSPC Supply Chain Strategy",
    meta: "uOCA Case Competition · 3rd Place",
    what: "Resiliency recommendations for public-sector supply chains under geopolitical instability while aligning with federal priorities.",
    role: [
      "Structured analysis and recommendations under time constraints",
      "Contributed to executive-style storytelling + deck logic"
    ],
    impact: [
      "Clear, actionable recommendations with risk framing"
    ],
    links: [
      { label: "View case deck (PDF)", href: "#", note: "replace with your link" }
    ]
  }
};

// Attach open handlers to anything with data-case="..."
document.querySelectorAll("[data-case]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const key = btn.getAttribute("data-case");
    const c = CASES[key];
    if (!c) return;

    modalTitle.textContent = c.title;
    modalMeta.textContent = c.meta;
    modalWhat.textContent = c.what;

    modalRole.innerHTML = (c.role || []).map(x => `<li>${x}</li>`).join("");
    modalImpact.innerHTML = (c.impact || []).map(x => `<li>${x}</li>`).join("");

    modalLinks.innerHTML = (c.links || []).map(l =>
      `<a class="link" href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a>`
    ).join(" · ");

    modal.classList.add("open");
  });
});
