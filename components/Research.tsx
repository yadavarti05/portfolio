import { FileText, ExternalLink, BadgeCheck } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { research } from "@/lib/data";

export function Research() {
  return (
    <Section
      id="research"
      index="05"
      kicker="Published Work"
      title="Research"
      intro="Peer-reviewed deep-learning research — the proof that I understand what's under the hood, not just the API surface."
    >
      <Reveal>
        <article className="group relative overflow-hidden rounded-2xl border border-line-2 bg-surface/40 p-7 transition-colors hover:border-accent/40 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-80" />

          <div className="relative flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              <BadgeCheck className="h-3.5 w-3.5" />
              {research.venue}
            </span>
            <span className="font-mono text-xs text-faint">{research.year}</span>
          </div>

          <h3 className="font-display relative mt-5 max-w-3xl text-2xl leading-tight text-text sm:text-3xl">
            {research.title}
          </h3>

          <p className="relative mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
            {research.abstract}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {research.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-line bg-ink/40 px-3 py-1.5 text-xs text-muted"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-sm text-muted">
            <span>
              <span className="text-faint">Role — </span>
              {research.role}
            </span>
            <span>
              <span className="text-faint">Mentor — </span>
              {research.mentor}
            </span>
          </div>

          <div className="relative mt-6 flex flex-wrap gap-3">
            {research.link ? (
              <a
                href={research.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" /> Read the paper
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm text-muted">
                <FileText className="h-4 w-4" /> Link on request
              </span>
            )}
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
