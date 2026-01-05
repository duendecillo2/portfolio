import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { International } from "@/components/sections/international";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <div className="relative isolate">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <International />
        <Projects />
        <Contact />
        
        <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border/40">
          <p>© {new Date().getFullYear()} Juan Martin Canguillen. Built with Next.js & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
}
