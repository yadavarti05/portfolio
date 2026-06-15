import type { ComponentType, SVGProps } from "react";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { profile } from "@/lib/data";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export function Contact() {
  const links = [
    profile.github && { label: "GitHub", href: profile.github, Icon: GithubIcon },
    profile.linkedin && {
      label: "LinkedIn",
      href: profile.linkedin,
      Icon: LinkedinIcon,
    },
    profile.scholar && {
      label: "Scholar",
      href: profile.scholar,
      Icon: ArrowUpRight as IconType,
    },
  ].filter(Boolean) as { label: string; href: string; Icon: IconType }[];

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line-2 bg-gradient-to-br from-surface to-ink-2 p-8 text-center sm:p-16">
          <div className="eyebrow">08 — Let&apos;s talk</div>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-balance text-5xl leading-[0.95] text-text sm:text-7xl">
            Building something with AI or mobile?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted">
            I&apos;m {profile.status.toLowerCase()}. If my mix of research depth
            and shipping experience fits what you&apos;re hiring for, I&apos;d
            love to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.resumeHref}
              className="inline-flex items-center gap-2 rounded-full border border-line-2 px-6 py-3.5 text-text transition-colors hover:bg-surface"
            >
              View résumé <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-faint">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <footer className="mt-14 border-t border-line pt-8 text-sm text-faint">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span>
            © {profile.name}. Built with Next.js, the Vercel AI SDK &amp; Gemini.
          </span>
          <a href="#top" className="link-underline hover:text-text">
            Back to top ↑
          </a>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-line pt-5 font-mono text-xs">
          <span className="text-faint">Built to be read by AI too —</span>
          <a href="/llms.txt" className="text-muted transition-colors hover:text-accent">
            /llms.txt
          </a>
          <span className="text-faint">·</span>
          <a
            href="/resume.json"
            className="text-muted transition-colors hover:text-accent"
          >
            /resume.json
          </a>
          <span className="text-faint">·</span>
          <span className="text-muted">JSON-LD structured data</span>
        </div>
      </footer>
    </section>
  );
}
