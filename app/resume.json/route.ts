import {
  profile,
  skills,
  experience,
  research,
  projects,
  education,
  highlights,
  achievements,
  siteUrl,
} from "@/lib/data";

export const dynamic = "force-static";

// JSON Resume schema (https://jsonresume.org) — machine-readable resume for
// AI recruiting tools and ATS integrations.
export function GET() {
  const resume = {
    $schema:
      "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: profile.name,
      label: profile.role,
      email: profile.email,
      phone: profile.phone,
      url: siteUrl,
      summary: profile.summary,
      location: { city: profile.location },
      profiles: [
        profile.github && { network: "GitHub", url: profile.github },
        profile.linkedin && { network: "LinkedIn", url: profile.linkedin },
      ].filter(Boolean),
    },
    work: experience.map((j) => ({
      name: j.org,
      position: j.role,
      summary: j.meta,
      highlights: j.bullets,
      keywords: j.tags,
    })),
    education: education.map((e) => ({
      institution: e.org,
      studyType: e.degree,
      area: "Computer Engineering",
      note: e.detail,
    })),
    publications: [
      {
        name: research.title,
        publisher: research.venue,
        summary: research.abstract,
        note: research.mentor,
      },
    ],
    projects: projects.map((p) => ({
      name: p.title,
      description: p.blurb,
      highlights: p.bullets,
      keywords: p.tags,
      type: p.category,
    })),
    skills: skills.map((g) => ({ name: g.label, keywords: g.items })),
    awards: achievements.map((a) => ({ title: a })),
    meta: {
      highlights,
      canonical: `${siteUrl}/resume.json`,
      note: "Provided for AI assistants and automated recruiting tools.",
    },
  };

  return Response.json(resume);
}
