/* ───────────────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS.
 *  Everything personal lives here so you never have to touch the components.
 *
 *  ▸ Replace every value marked  // TODO  with the real thing.
 *  ▸ The 6 must-fill fields are inside `profile` (name, email, phone,
 *    location, github, linkedin). Fill those first.
 *  ▸ Verify the `skills` list is 100% honest — recruiters probe what you list.
 * ────────────────────────────────────────────────────────────────────────── */

// Set NEXT_PUBLIC_SITE_URL in production (e.g. https://artikumari.dev) for
// correct SEO, sitemap, JSON-LD and social cards.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com";

export const profile = {
  name: "Arti Kumari",
  // Dual-track positioning: speaks to BOTH AI/ML and Flutter recruiters.
  role: "AI/ML Engineer & Flutter Developer",
  // One sharp line for the hero. Keep it concrete — proof, not adjectives.
  headline: "I build at the intersection of applied machine learning and production mobile apps.",
  summary:
    "Computer Engineering graduate (2026) and published deep-learning researcher (IIT Delhi). I ship cross-platform Flutter apps for real clients and design neural networks for research — and I'm now going deep on Generative AI: LLMs, RAG, agents, and MCP.",
  location: "Rajkot, India",
  email: "kumariarti072205@gmail.com",
  phone: "+91 79090 69577",
  // Links — leave "" to hide a link automatically.
  github: "https://github.com/yadavarti05",
  linkedin: "https://linkedin.com/in/your-handle", // TODO
  scholar: "", // TODO (optional) Google Scholar / ORCID
  resumeHref: "/resume", // built-in print-ready CV page

  // Hero credibility chips — the proof a recruiter sees in the first 6 seconds.
  chips: [
    "IIT Delhi · AI/ML Research",
    "Published Author",
    "2+ Live Apps Shipped",
    "GCN · RNN · LSTM",
  ],

  // Currently / open-to line
  status: "Open to AI/ML Engineer & Flutter Developer roles",
};

/* One-line positioning thesis — the single most important sentence on the site. */
export const thesis =
  "Most early-career engineers pick one side — research or shipping. I do both: I publish deep-learning research and ship production apps. That combination is what makes an AI hire low-risk.";

/* Headline numbers — credibility at a glance (recruiters read numbers first). */
export const stats: { value: string; label: string; sub: string }[] = [
  { value: "1", label: "Peer-reviewed paper", sub: "Accepted, intl. conference" },
  { value: "2+", label: "Live apps shipped", sub: "Real clients, in production" },
  { value: "IIT Delhi", label: "AI/ML research", sub: "Prof. T. K. Gandhi" },
  { value: "2026", label: "B.Tech, Comp. Engg", sub: "Final year" },
];

/* Three focus areas — the T-shape, made scannable. */
export const pillars: { key: string; title: string; desc: string }[] = [
  {
    key: "genai",
    title: "Generative AI",
    desc: "LLMs, RAG, agents & MCP — building the new interface layer between people and software.",
  },
  {
    key: "ml",
    title: "ML & Research",
    desc: "Deep learning from first principles — GCN, RNN/LSTM, CNN. Peer-reviewed and published.",
  },
  {
    key: "mobile",
    title: "Mobile Engineering",
    desc: "Production Flutter apps, shipped end-to-end for real clients.",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Generative AI & LLMs",
    items: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents",
      "Model Context Protocol (MCP)",
      "Prompt Engineering",
      "Vercel AI SDK",
      "Google Gemini API",
      "Embeddings & Vector Search",
    ],
  },
  {
    label: "Machine Learning & Deep Learning",
    items: [
      "PyTorch", // TODO verify (research framework you used)
      "TensorFlow / Keras", // TODO verify
      "Graph Convolutional Networks (GCN)",
      "RNN · LSTM",
      "CNN · Neural Networks",
      "Data Augmentation",
      "scikit-learn",
      "NumPy · Pandas",
    ],
  },
  {
    label: "Mobile Development",
    items: [
      "Flutter",
      "Dart",
      "State Management (Provider / Bloc)",
      "REST API Integration",
      "Firebase",
      "Cross-platform iOS & Android",
    ],
  },
  {
    label: "Web & Backend",
    items: [
      "React",
      "JavaScript / TypeScript",
      "HTML · CSS",
      "C# · .NET · ASP.NET",
      "Node.js",
    ],
  },
  {
    label: "Languages & Tools",
    items: [
      "Python",
      "Data Structures & Algorithms",
      "SQL",
      "Git · GitHub",
      "Data Science",
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  meta: string; // location / department
  period: string;
  kind: "Research" | "Engineering" | "Internship";
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Flutter Mobile Application Developer",
    org: "Cipher Craft Pvt. Ltd.",
    meta: "Mobile Engineering",
    period: "2025 — Present", // TODO confirm
    kind: "Engineering",
    bullets: [
      "Build and ship cross-platform production mobile apps in Flutter & Dart for live clients.",
      "Delivered a Construction Company Management app and a CRM — handling role-based access, complex business workflows, and REST API integration.",
      "Built the Trip Portal mobile app with separate admin and customer experiences.",
      "Use AI-assisted development workflows to accelerate delivery without compromising quality.",
    ],
    tags: ["Flutter", "Dart", "REST APIs", "Firebase"],
  },
  {
    role: "AI/ML Research Intern",
    org: "IIT Delhi",
    meta: "Dept. of Electrical Engineering · Mentor: Prof. Tapan Kumar Gandhi",
    period: "2024 — 2025", // TODO confirm dates
    kind: "Research",
    bullets: [
      "Designed and trained Graph Convolutional Neural Networks for single-channel EEG-based seizure classification.",
      "Applied data augmentation to address class imbalance and improve generalization on limited EEG data.",
      "Co-authored a research paper accepted for publication at an international conference.",
      "Gained deep, hands-on experience across the research pipeline and DL architectures (GCN, CNN, RNN/LSTM).",
    ],
    tags: ["Deep Learning", "GCN", "PyTorch", "EEG", "Research"],
  },
  {
    role: "Data Science Intern",
    org: "Cipher Craft Pvt. Ltd.",
    meta: "Data Science",
    period: "2023", // TODO confirm
    kind: "Internship",
    bullets: [
      "Worked on data science projects spanning data cleaning, analysis, and ML modeling in Python.",
      "Built foundational experience with the end-to-end ML workflow: preprocessing, feature engineering, training and evaluation.",
    ],
    tags: ["Python", "Data Science", "scikit-learn"],
  },
];

export const research = {
  title:
    "Graph Convolutional Neural Networks with Data Augmentation for Single-Channel EEG-Based Seizure Classification",
  venue: "Accepted for publication — International Conference",
  role: "Co-author",
  mentor: "Prof. Tapan Kumar Gandhi · Dept. of Electrical Engineering, IIT Delhi",
  year: "2025", // TODO confirm
  link: "", // TODO add DOI / conference link when available
  abstract:
    "A deep-learning approach to seizure classification from single-channel EEG. We model EEG signals as graphs and apply Graph Convolutional Networks combined with data-augmentation strategies to overcome limited, imbalanced data — improving classification performance for automated seizure detection.",
  highlights: [
    "Graph-based modeling of single-channel EEG signals",
    "Data augmentation to counter class imbalance",
    "Peer-reviewed & accepted at an international conference",
  ],
};

export type Project = {
  title: string;
  category: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "EEG Seizure Classification (GCN)",
    category: "Deep Learning · Research",
    blurb:
      "Graph Convolutional Network for single-channel EEG-based seizure detection — the work behind my published paper at IIT Delhi.",
    bullets: [
      "Modeled EEG signals as graphs and trained a GCN classifier",
      "Used data augmentation to handle limited, imbalanced clinical data",
      "Result: a peer-reviewed paper accepted at an international conference",
    ],
    tags: ["PyTorch", "GCN", "Deep Learning", "Healthcare AI"],
    featured: true,
  },
  {
    title: "Ask-My-AI Assistant",
    category: "Generative AI · LLM",
    blurb:
      "The conversational assistant on this site — a Gemini-powered RAG-style agent that answers recruiter questions about my background.",
    bullets: [
      "Built with the Vercel AI SDK and the Google Gemini API",
      "Streams responses, grounded on a curated knowledge base",
      "Graceful offline fallback so it never breaks in a demo",
    ],
    tags: ["Gemini", "Vercel AI SDK", "Next.js", "RAG"],
    featured: true,
  },
  {
    title: "Construction Company Management App",
    category: "Mobile · Flutter",
    blurb:
      "A live cross-platform app digitizing operations for a construction business.",
    bullets: [
      "Role-based access and complex business workflows",
      "REST API integration with a real backend",
    ],
    tags: ["Flutter", "Dart", "REST APIs"],
  },
  {
    title: "CRM Mobile App",
    category: "Mobile · Flutter",
    blurb:
      "Customer-relationship management on mobile — leads, customers, and pipeline in one app.",
    bullets: [
      "Shipped to production for a real client",
      "Clean state management and API-driven data",
    ],
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Trip Portal — Admin & Customer",
    category: "Mobile · Flutter",
    blurb:
      "A travel portal mobile app with two tailored experiences: one for admins, one for customers.",
    bullets: [
      "Two role-specific app flows from a single codebase",
      "End-to-end booking and management UX",
    ],
    tags: ["Flutter", "Dart", "Cross-platform"],
  },
];

export type EducationItem = {
  degree: string;
  org: string;
  period: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech, Computer Engineering",
    org: "RK University",
    period: "2022 — 2026",
    detail:
      "Coursework across Data Structures & Algorithms, Machine Learning, and software engineering. Path: web → C#/.NET → Python & Data Science → React → Flutter → Deep Learning research.",
  },
];

/* Career Highlights — the 4 strongest proof points, front-loaded on the CV. */
export const highlights: string[] = [
  "Published deep-learning researcher — co-authored a peer-reviewed international conference paper at IIT Delhi.",
  "Shipped 2+ live production mobile apps in Flutter for real clients.",
  "Strong ML fundamentals — built GCN, RNN/LSTM and CNN models from the ground up, not just API calls.",
  "Actively building in Generative AI — LLMs, RAG, AI agents and MCP.",
];

/* Extracurricular / awards — kept short, lives at the bottom of the CV. */
export const achievements: string[] = [
  "Winner's trophy — inter-college basketball (sports event).",
  "Active in college tech fests — participant and event volunteer.",
];

/* ── Knowledge base powering the Ask-My-AI assistant (system + fallback) ───── */
export const knowledgeBase = `
NAME: ${profile.name}
ROLE: ${profile.role}
LOCATION: ${profile.location}
STATUS: ${profile.status}

POSITIONING:
${profile.summary}

CAREER STORY (chronological):
- Began B.Tech in Computer Engineering in 2022. Started with web fundamentals (HTML, CSS, JavaScript).
- Through the curriculum, moved into C#, .NET and ASP.NET; studied Data Structures & Algorithms in Python.
- Developed a strong interest in Python and joined a Data Science internship (around 3rd–4th semester).
- In the 5th semester, learned React and Flutter; focused on Flutter for mobile app development.
- In the 7th semester, did an AI/ML research internship at IIT Delhi in the Department of Electrical Engineering, mentored by Prof. Tapan Kumar Gandhi. Learned deep learning and co-authored a research paper.
- Now works as a Flutter Mobile Application Developer, having shipped 2+ live production apps, while going deep on Generative AI.

RESEARCH / PUBLICATION:
- Title: "${research.title}"
- Status: ${research.venue}; role: ${research.role}.
- Mentor: ${research.mentor}.
- Summary: ${research.abstract}

PRODUCTION WORK (Flutter):
- Construction Company Management app (live client).
- CRM mobile app (live client).
- Trip Portal mobile app with separate admin and customer experiences.

SKILLS:
${skills.map((g) => `- ${g.label}: ${g.items.join(", ")}`).join("\n")}

GENERATIVE AI INTEREST:
Aspires to become a great Generative AI engineer. Eager to go deep on LLMs, RAG, AI agents, the Model Context Protocol (MCP), and neural network architectures (RNN, LSTM, GCN). Loves both GenAI and mobile app development.

ACHIEVEMENTS:
${achievements.map((a) => `- ${a}`).join("\n")}

CONTACT:
- Email: ${profile.email}
- Location: ${profile.location}
`.trim();
