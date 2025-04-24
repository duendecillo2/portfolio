"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { useProjects } from "@/data/projects"

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()
  const projects = useProjects()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              date={project.date}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              imageSrc={project.imageSrc}
              images={project.images}
              liveDemo={t("projects.liveDemo")}
              viewCode={t("projects.viewCode")}
              viewDetails={t("projects.viewDetails")}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
