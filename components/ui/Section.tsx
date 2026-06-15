import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  kicker,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal>
        <div className="flex items-baseline gap-4 border-b border-line pb-6">
          <span className="font-mono text-sm text-faint">{index}</span>
          <div>
            <div className="eyebrow">{kicker}</div>
            <h2 className="font-display mt-1 text-4xl leading-none text-text sm:text-5xl">
              {title}
            </h2>
          </div>
        </div>
        {intro ? (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted">
            {intro}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
