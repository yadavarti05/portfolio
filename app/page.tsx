import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { AskAI } from "@/components/AskAI";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <AskAI />
        <Projects />
        <Experience />
        <Research />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
