import type { ElementType } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="work"
      index="03"
      kicker="What I've built"
      title="Selected Work"
      intro="Shipped products and research, spanning Generative AI, deep learning, and production mobile."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => {
          const Wrapper: ElementType = p.link ? "a" : "div";
          return (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.featured ? "sm:col-span-2" : ""}>
              <Wrapper
                {...(p.link
                  ? { href: p.link, target: "_blank", rel: "noreferrer" }
                  : {})}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line-2 bg-surface/40 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 ${
                  p.featured ? "sm:p-8" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {p.category}
                  </span>
                  {p.featured ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[0.6rem] uppercase text-accent">
                      <Star className="h-3 w-3 fill-accent" /> Featured
                    </span>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-faint transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </div>

                <h3
                  className={`font-display mt-3 text-text ${
                    p.featured ? "text-3xl" : "text-2xl"
                  }`}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted">
                  {p.blurb}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 pt-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-ink/40 px-2.5 py-1 font-mono text-xs text-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
