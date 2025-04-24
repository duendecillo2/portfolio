"use client"

import { useLanguage } from "@/contexts/language-context"
import { useMemo } from "react"

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  date: string
  techStack: string[]
  demoUrl?: string
  codeUrl?: string
  imageSrc?: string
  images: string[]
  videoId?: string // YouTube video ID
}

export function useProjects() {
  const { t, language } = useLanguage(); // Add language dependency

  // Use useMemo to re-calculate projects only when language changes
  const projects: Project[] = useMemo(() => [
    {
      id: "auction-website",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      longDescription: t("projects.project1.longDescription"),
      date: t("projects.project1.date"),
      techStack: ["Django", "Python", "WebSockets", "HTML/CSS", "JavaScript", "UX/UI", "PostgreSQL", "SMTP"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/fotoMF1.png",
      images: [
        "/images/fotoMF1.png",
        "/images/fotoMF2.png",
        "/images/fotoMF3.png",
        "/images/fotoMF4.png",
        "/images/fotoMF5.png",
        "/images/fotoMF6.png",
        "/images/fotoMF7.png",
      ],
      videoId: "2lTC5O10n9w",
    },
    {
      id: "ticket-system",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      longDescription: t("projects.project2.longDescription"),
      date: t("projects.project2.date"),
      techStack: ["Django", "React", "Bootstrap", "JavaScript", "REST API", "PostgreSQL", "UX/UI", "HTML/CSS", "SQLite"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/fotoST1.png",
      images: [
        "/images/fotoST1.png",
        "/images/fotoST2.png",
        "/images/fotoST3.png",
        "/images/fotoST4.png",
        "/images/fotoST5.png",
        "/images/fotoST6.png",
        "/images/fotoST7.png",
        "/images/fotoST8.png",
        "/images/fotoST9.png",
        "/images/fotoST10.png",
        "/images/fotoST11.png",
        "/images/fotoST12.png",
      ],
      videoId: "kF1iR2oSZmc",
    },
  ], [t, language]); // Add t and language as dependencies

  return projects;
}
