import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience } from "@/lib/data";

const kindStyles: Record<string, string> = {
  Research: "border-accent/40 bg-accent/10 text-accent",
  Engineering: "border-accent-2/40 bg-accent-2/10 text-accent-2",
  Internship: "border-line-2 bg-surface text-muted",
};

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      kicker="Where I've worked"
      title="Experience"
      intro="A fast-rising arc: foundations → data science → published research → shipping production software."
    >
      <ol className="relative ml-1 border-l border-line">
        {experience.map((job, i) => (
          <li key={job.role + job.org} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink" />
            <Reveal delay={i * 0.05}>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider ${kindStyles[job.kind]}`}
                >
                  {job.kind}
                </span>
                <span className="font-mono text-xs text-faint">{job.period}</span>
              </div>

              <h3 className="font-display mt-2 text-2xl text-text">
                {job.role}
                <span className="text-faint"> · </span>
                <span className="text-muted">{job.org}</span>
              </h3>
              <p className="mt-1 text-sm text-faint">{job.meta}</p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-pretty leading-relaxed text-muted"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-ink/40 px-2.5 py-1 font-mono text-xs text-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
