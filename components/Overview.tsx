import {
  Sparkles,
  BrainCircuit,
  Smartphone,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  MapPin,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { profile, thesis, pillars, research } from "@/lib/data";

const PILLAR_ICON: Record<string, typeof Sparkles> = {
  genai: Sparkles,
  ml: BrainCircuit,
  mobile: Smartphone,
};

export function Overview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
    >
      <Reveal>
        <div className="flex items-baseline gap-4 border-b border-line pb-6">
          <span className="font-mono text-sm text-faint">01</span>
          <div>
            <div className="eyebrow">The 30-second read</div>
            <h2
              id="overview-heading"
              className="font-display mt-1 text-4xl font-bold leading-none text-text sm:text-5xl"
            >
              At a glance
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {/* Thesis — the big tile */}
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-line-2 bg-surface p-7 sm:p-9">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              The thesis
            </span>
            <p className="font-display mt-5 text-pretty text-2xl font-medium leading-snug text-text sm:text-[1.75rem]">
              {thesis}
            </p>
          </div>
        </Reveal>

        {/* Status / availability */}
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-line-2 bg-accent/[0.06] p-7">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available
              </span>
              <p className="mt-4 text-pretty text-lg leading-snug text-text">
                {profile.status}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-4 w-4" /> {profile.location}
              </p>
            </div>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        {/* Three pillars */}
        {pillars.map((p, i) => {
          const Icon = PILLAR_ICON[p.key] ?? Sparkles;
          return (
            <Reveal key={p.key} delay={0.05 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-line-2 bg-surface p-7 transition-colors hover:border-accent/40">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-xl font-bold text-text">
                  {p.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          );
        })}

        {/* Featured research teaser */}
        <Reveal className="lg:col-span-2" delay={0.05}>
          <a
            href="#research"
            className="group flex h-full flex-col justify-between rounded-2xl border border-line-2 bg-surface p-7 transition-colors hover:border-accent/40 sm:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                <BadgeCheck className="h-3.5 w-3.5" /> Published research
              </span>
              <ArrowUpRight className="h-5 w-5 text-faint transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <h3 className="font-display mt-5 text-pretty text-xl font-semibold leading-snug text-text sm:text-2xl">
              {research.title}
            </h3>
            <p className="mt-3 text-sm text-muted">
              {research.venue} · {research.mentor}
            </p>
          </a>
        </Reveal>

        {/* Ask my AI CTA */}
        <Reveal delay={0.1}>
          <a
            href="#ask"
            className="group flex h-full flex-col justify-between rounded-2xl border border-line-2 bg-text p-7 text-ink transition-transform hover:-translate-y-1"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white">
              <Bot className="h-5 w-5" />
            </span>
            <div className="mt-6">
              <h3 className="font-display text-xl font-bold">Ask my AI</h3>
              <p className="mt-2 text-sm text-ink/70">
                A live, grounded assistant — quiz it on my fit for your role.
              </p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
