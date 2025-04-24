"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useProjects } from "@/data/projects"
import ImageCarousel from "@/components/ui/image-carousel"
import YouTubeVideo from "@/components/ui/youtube-video"
import Navbar from "@/components/ui/navbar"

export default function ProjectPage() {
  const params = useParams()
  const { t } = useLanguage()
  const projects = useProjects()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projectId = params.id as string
  const project = projects.find((p) => p.id === projectId)

  if (!project && mounted) {
    notFound()
  }

  if (!mounted || !project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <Navbar />
        <div className="container mx-auto px-4 pt-24 flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Loading project...</div>
        </div>
      </div>
    )
  }

  // Ensure we have at least one image
  const allImages = project.imageSrc
    ? [project.imageSrc, ...project.images.filter((img) => img !== project.imageSrc)]
    : project.images

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            <span>{t("projects.backToProjects")}</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span>{project.date}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Project Gallery */}
            <section>
              <h2 className="text-xl font-semibold text-gray-200 mb-4">{t("projects.projectGallery")}</h2>
              <ImageCarousel images={allImages} alt={project.title} />
            </section>

            {/* Demo Video */}
            {project.videoId && (
              <section>
                <h2 className="text-xl font-semibold text-gray-200 mb-4">{t("projects.demoVideo")}</h2>
                <YouTubeVideo videoId={project.videoId} title={`${project.title} - Demo`} />
              </section>
            )}
          </div>

          <div className="space-y-8">
            {/* Project Description */}
            <section className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
              <h2 className="text-xl font-semibold text-gray-200 mb-4">{t("projects.description")}</h2>
              <div className="text-gray-300 space-y-4">
                {(project.longDescription || project.description).split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
              <h2 className="text-xl font-semibold text-gray-200 mb-4">{t("projects.technologies")}</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
