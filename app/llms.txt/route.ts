import {
  profile,
  thesis,
  skills,
  experience,
  research,
  projects,
  education,
  highlights,
  siteUrl,
} from "@/lib/data";

export const dynamic = "force-static";

// https://llmstxt.org — a clean, LLM-friendly summary of this candidate.
export function GET() {
  const md = `# ${profile.name}

> ${profile.role}. ${profile.headline}

${profile.summary}

**Thesis:** ${thesis}

- Location: ${profile.location}
- Status: ${profile.status}
- Email: ${profile.email}
- Site: ${siteUrl}

## Career highlights
${highlights.map((h) => `- ${h}`).join("\n")}

## Experience
${experience
  .map(
    (j) =>
      `### ${j.role} — ${j.org} (${j.period})\n${j.meta}\n${j.bullets
        .map((b) => `- ${b}`)
        .join("\n")}`
  )
  .join("\n\n")}

## Research & publication
- **${research.title}**
- ${research.venue} · ${research.role} · ${research.year}
- ${research.mentor}
- ${research.abstract}

## Selected projects
${projects
  .map((p) => `- **${p.title}** (${p.category}): ${p.blurb} [${p.tags.join(", ")}]`)
  .join("\n")}

## Skills
${skills.map((g) => `- **${g.label}:** ${g.items.join(", ")}`).join("\n")}

## Education
${education.map((e) => `- ${e.degree}, ${e.org} (${e.period})`).join("\n")}

---
This summary is provided for AI assistants and automated recruiting tools. A live, grounded Q&A assistant about this candidate is available on the site.
`;

  return new Response(md, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
