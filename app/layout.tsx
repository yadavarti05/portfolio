import type { Metadata } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile, siteUrl } from "@/lib/data";
import { JsonLd } from "@/components/JsonLd";

const display = Bricolage_Grotesque({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Schibsted_Grotesk({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.summary,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "LLM",
    "RAG",
    "AI Agents",
    "MCP",
    "Deep Learning",
    "Flutter Developer",
    "Mobile App Developer",
    "PyTorch",
    "IIT Delhi",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: profile.summary,
    type: "profile",
    url: siteUrl,
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
  other: {
    // discoverable hints for AI agents reading the page
    "ai:llms": "/llms.txt",
    "ai:resume": "/resume.json",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full`}
    >
      <body className="relative min-h-full">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
