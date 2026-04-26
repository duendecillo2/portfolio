import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { International } from "@/components/sections/international";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/sections/site-footer";

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
        
        <SiteFooter />
      </div>
    </main>
  );
}
