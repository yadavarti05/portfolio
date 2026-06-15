import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Check } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import {
  profile,
  skills,
  experience,
  research,
  projects,
  education,
  highlights,
  achievements,
} from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.name} — Résumé`,
  description: `Résumé of ${profile.name}, ${profile.role}.`,
};

const C = {
  ink: "#16191c",
  muted: "#4d5054",
  faint: "#888a85",
  accent: "#2f6a4f",
  rule: "#e6e4dc",
};

export default function ResumePage() {
  const webLinks = [
    stripProtocol(profile.github),
    stripProtocol(profile.linkedin),
    stripProtocol(profile.scholar),
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-ink-2 py-8 print:bg-white print:py-0">
      {/* toolbar — screen only */}
      <div className="no-print mx-auto mb-6 flex max-w-[820px] items-center justify-between px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
        <PrintButton />
      </div>

      {/* the paper */}
      <article
        className="print-page mx-auto max-w-[820px] border-t-[5px] bg-white px-10 py-11 shadow-[0_40px_90px_-50px_rgba(22,23,28,0.5)] print:max-w-none print:shadow-none sm:px-14"
        style={{ color: C.ink, borderTopColor: C.accent }}
      >
        {/* ── Header ── */}
        <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-4">
          <div>
            <h1
              className="text-[2.7rem] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: C.ink }}
            >
              {profile.name}
            </h1>
            <p
              className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em]"
              style={{ color: C.accent }}
            >
              {profile.role}
            </p>
          </div>
          <ul className="space-y-1 text-[0.82rem]" style={{ color: C.muted }}>
            <li className="flex items-center justify-start gap-2 sm:justify-end">
              <Mail className="h-3.5 w-3.5" style={{ color: C.accent }} />
              {profile.email}
            </li>
            <li className="flex items-center justify-start gap-2 sm:justify-end">
              <Phone className="h-3.5 w-3.5" style={{ color: C.accent }} />
              {profile.phone}
            </li>
            <li className="flex items-center justify-start gap-2 sm:justify-end">
              <MapPin className="h-3.5 w-3.5" style={{ color: C.accent }} />
              {profile.location}
            </li>
          </ul>
        </header>

        {webLinks.length > 0 && (
          <p
            className="border-t pt-3 text-[0.8rem]"
            style={{ borderColor: C.rule, color: C.muted }}
          >
            {webLinks.join("   ·   ")}
          </p>
        )}

        {/* ── 1. Summary ── */}
        <ResumeSection title="Summary">
          <p className="text-[0.9rem] leading-relaxed" style={{ color: C.ink }}>
            {profile.summary}
          </p>
        </ResumeSection>

        {/* ── 2. Career Highlights (front-loaded proof) ── */}
        <ResumeSection title="Career Highlights">
          <div className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h} className="flex gap-2.5 break-inside-avoid">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0"
                  strokeWidth={3}
                  style={{ color: C.accent }}
                />
                <span
                  className="text-[0.85rem] leading-snug"
                  style={{ color: C.muted }}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* ── 3. Technical Skills (high for ATS keyword scan) ── */}
        <ResumeSection title="Technical Skills">
          <div className="space-y-2">
            {skills.map((g) => (
              <p
                key={g.label}
                className="text-[0.86rem] leading-relaxed"
                style={{ color: C.muted }}
              >
                <span className="font-semibold" style={{ color: C.ink }}>
                  {g.label}
                </span>
                {"  —  "}
                {g.items.join(", ")}
              </p>
            ))}
          </div>
        </ResumeSection>

        {/* ── 4. Experience ── */}
        <ResumeSection title="Experience">
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={job.role + job.org} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-[1rem] font-bold" style={{ color: C.ink }}>
                    {job.role}
                    <span style={{ color: C.accent }}> · {job.org}</span>
                  </h3>
                  <span className="text-[0.8rem]" style={{ color: C.faint }}>
                    {job.period}
                  </span>
                </div>
                <p className="text-[0.8rem] italic" style={{ color: C.faint }}>
                  {job.meta}
                </p>
                <ul className="mt-2 space-y-1">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-[0.86rem] leading-relaxed"
                      style={{ color: C.muted }}
                    >
                      <span
                        className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                        style={{ background: C.accent }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* ── 5. Research & Publication (differentiator) ── */}
        <ResumeSection title="Research & Publication">
          <div className="break-inside-avoid">
            <h3 className="text-[0.98rem] font-bold" style={{ color: C.ink }}>
              {research.title}
            </h3>
            <p className="mt-0.5 text-[0.82rem]" style={{ color: C.accent }}>
              {research.venue} · {research.role} · {research.year}
            </p>
            <p className="text-[0.8rem] italic" style={{ color: C.faint }}>
              {research.mentor}
            </p>
            <p
              className="mt-2 text-[0.86rem] leading-relaxed"
              style={{ color: C.muted }}
            >
              {research.abstract}
            </p>
          </div>
        </ResumeSection>

        {/* ── 6. Projects ── */}
        <ResumeSection title="Selected Projects">
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.title} className="break-inside-avoid">
                <h3 className="text-[0.9rem] font-bold" style={{ color: C.ink }}>
                  {p.title}
                  <span className="font-normal" style={{ color: C.accent }}>
                    {"  —  "}
                    {p.category}
                  </span>
                </h3>
                <p
                  className="text-[0.86rem] leading-relaxed"
                  style={{ color: C.muted }}
                >
                  {p.blurb}{" "}
                  <span style={{ color: C.faint }}>({p.tags.join(", ")})</span>
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* ── 7. Education ── */}
        <ResumeSection title="Education">
          {education.map((e) => (
            <div key={e.degree} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-[1rem] font-bold" style={{ color: C.ink }}>
                  {e.degree}
                </h3>
                <span className="text-[0.8rem]" style={{ color: C.faint }}>
                  {e.period}
                </span>
              </div>
              <p className="text-[0.84rem]" style={{ color: C.muted }}>
                {e.org}
              </p>
            </div>
          ))}
        </ResumeSection>

        {/* ── 8. Achievements & Activities ── */}
        <ResumeSection title="Achievements & Activities">
          <ul className="space-y-1.5">
            {achievements.map((a) => (
              <li
                key={a}
                className="flex gap-2.5 text-[0.86rem] leading-relaxed"
                style={{ color: C.muted }}
              >
                <span
                  className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                  style={{ background: C.accent }}
                />
                {a}
              </li>
            ))}
          </ul>
        </ResumeSection>
      </article>
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2
        className="mb-3 border-b pb-1.5 text-[0.72rem] font-bold uppercase tracking-[0.2em]"
        style={{ color: C.accent, borderColor: C.rule }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function stripProtocol(url: string) {
  return url ? url.replace(/^https?:\/\//, "") : "";
}
