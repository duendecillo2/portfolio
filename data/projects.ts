"use client"

import { useLanguage } from "@/contexts/language-context"

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
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      id: "auction-website",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      longDescription: `Mundo Figus Auctions is a real-time online auction platform designed to offer a dynamic, intuitive, and competitive experience for both administrators and regular users. It brings together the thrill of traditional auctions with the speed and accessibility of modern web applications.

Administrators can create and manage auctions, assigning each one to a specific category for better organization and navigation. They also have control over setting the minimum increment required for each bid, ensuring fair and consistent bidding activity.

Products are neatly organized into categories, allowing users to easily browse and find the type of item they're interested in. Registered users can participate in active auctions by placing live bids against other users, while a real-time countdown displays the remaining time until each auction closes — creating urgency and encouraging active engagement.

The platform offers seamless live updates through real-time communication, ensuring that every bid is reflected instantly without needing to refresh the page. Combined with a clean, responsive UI and a focus on UX best practices, Mundo Figus provides an enjoyable and user-friendly experience on both desktop and mobile devices.

Whether you're listing items or placing bids, Mundo Figus delivers a sleek, reliable, and engaging environment tailored for smooth interactions and real-time auction excitement.`,
      date: t("projects.project1.date"),
      techStack: ["Django", "Python", "WebSockets", "HTML/CSS", "JavaScript", "UX/UI", "PostgreSQL", "SMTP"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/fotoMF1.png", // Updated to use fotoMF1.png
      images: [
        "/images/fotoMF1.png",
        "/images/fotoMF2.png",
        "/images/fotoMF3.png",
        "/images/fotoMF4.png",
        "/images/fotoMF5.png",
        "/images/fotoMF6.png",
        "/images/fotoMF7.png",
      ],
      videoId: "2lTC5O10n9w", // Replace with actual YouTube video ID
    },
    {
      id: "ticket-system",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      longDescription: `SolvingTickets is a web platform designed to efficiently manage the creation, tracking, and resolution of support tickets within an organization. It's built to streamline internal communication and organization, allowing any user to report issues, ask questions, or request technical assistance in a clear and structured way.

Each ticket can be updated with new comments or relevant information, and users can easily monitor the progress of their requests. There's also an option to ask another user to handle a ticket, promoting collaboration and teamwork.

The system includes an admin panel where administrators can oversee the entire ticket workflow: they can reply, resolve, or reassign tickets to other admins who might be better suited to handle specific issues. Administrators also have moderation capabilities, such as blocking users or managing system access, ensuring a secure and controlled environment.

The interface is intuitive and designed to provide a smooth user experience, making it quick and easy to submit and track tickets. TicketSolve is ideal for teams that need a simple yet powerful tool to centralize support and improve internal problem-solving processes.`,
      date: t("projects.project2.date"),
      techStack: ["Django", "React", "Bootstrap", "JavaScript", "REST API", "PostgreSQL", "UX/UI", "HTML/CSS", "SQLite"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/fotoST1.png", // Updated to use fotoST1.png
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
      videoId: "kF1iR2oSZmc", // Replace with actual YouTube video ID
    },
  ]

  return projects
}
