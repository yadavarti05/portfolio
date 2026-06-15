import { profile, skills, research, education, siteUrl } from "@/lib/data";

// schema.org structured data — lets LLMs & search engines parse the candidate
// precisely (name, role, skills, education, publication).
export function JsonLd() {
  const knowsAbout = skills.flatMap((g) => g.items);
  const sameAs = [profile.github, profile.linkedin, profile.scholar].filter(
    Boolean
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: "2026-06-07",
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      description: profile.summary,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      alumniOf: education.map((e) => ({
        "@type": "CollegeOrUniversity",
        name: e.org,
      })),
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Delhi",
      },
      knowsAbout,
      sameAs,
      subjectOf: {
        "@type": "ScholarlyArticle",
        headline: research.title,
        about: "Deep learning, EEG, seizure classification",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
