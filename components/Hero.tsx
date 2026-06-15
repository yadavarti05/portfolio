"use client";

import { motion } from "motion/react";
import { Mail, Sparkles, ArrowRight } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { NeuralBackground } from "./NeuralBackground";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pt-28 pb-8 sm:px-8"
    >
      <NeuralBackground />

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-faint"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {profile.status.toUpperCase()}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease }}
          className="font-display mt-5 text-balance text-6xl font-extrabold leading-[0.92] tracking-tight text-text sm:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
          className="mt-5 max-w-2xl text-pretty text-xl leading-snug text-muted sm:text-2xl"
        >
          <span className="font-medium text-text">{profile.role}.</span>{" "}
          {profile.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#ask"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4" />
            Ask my AI anything
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-3 text-sm text-text transition-colors hover:bg-surface"
          >
            View work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="ml-1 flex items-center gap-1">
            {profile.github && (
              <IconLink href={profile.github} label="GitHub">
                <GithubIcon className="h-[18px] w-[18px]" />
              </IconLink>
            )}
            {profile.linkedin && (
              <IconLink href={profile.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </IconLink>
            )}
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </IconLink>
          </div>
        </motion.div>
      </div>

      {/* stat strip — credibility within the first screen */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="relative z-20 mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-ink/70 px-5 py-5 backdrop-blur">
            <div className="font-display text-2xl font-bold leading-none text-text sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm font-medium text-text">{s.label}</div>
            <div className="text-xs text-faint">{s.sub}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-accent"
    >
      {children}
    </a>
  );
}
