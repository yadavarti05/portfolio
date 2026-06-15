import { GraduationCap, Trophy } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { education, highlights, achievements } from "@/lib/data";

const homeHighlights = [...highlights, ...achievements];

export function Education() {
  return (
    <Section id="education" index="07" kicker="Background" title="Education & Highlights">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line-2 bg-surface/40 p-7">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
              <GraduationCap className="h-4 w-4" /> Education
            </h3>
            <div className="mt-5 space-y-6">
              {education.map((e) => (
                <div key={e.degree}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-xl text-text">{e.degree}</h4>
                    <span className="font-mono text-xs text-faint">{e.period}</span>
                  </div>
                  <p className="text-sm text-muted">{e.org}</p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-faint">
                    {e.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-line-2 bg-surface/40 p-7">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
              <Trophy className="h-4 w-4" /> Highlights
            </h3>
            <ul className="mt-5 space-y-3">
              {homeHighlights.map((a) => (
                <li key={a} className="flex gap-3 text-pretty leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
