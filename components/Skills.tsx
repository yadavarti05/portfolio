import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      index="06"
      kicker="Toolkit"
      title="Skills"
      intro="T-shaped: depth in ML & GenAI, breadth across mobile, web, and backend."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 3) * 0.06}>
            <div className="flex h-full flex-col bg-ink-2 p-6">
              <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <span className="text-faint">{String(i + 1).padStart(2, "0")}</span>
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-surface/50 px-2.5 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* filler tile — keeps the grid complete + adds personality */}
        <Reveal delay={0.12}>
          <div className="flex h-full flex-col justify-between gap-6 bg-ink-2 p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-faint">
              Currently
            </span>
            <p className="font-display text-2xl leading-tight text-text">
              Going deep on{" "}
              <span className="text-accent">Generative AI</span> — LLMs, agents
              &amp; MCP.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
