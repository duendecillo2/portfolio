"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, LineChart, Globe, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  video?: string;
  icon?: React.ReactNode;
  images?: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Dental Clinic Platform",
    description: "A comprehensive landing page for a dental practice featuring interactive treatment modals, location services, and patient FAQs.",
    tags: ["React", "CSS Modules", "React Icons", "Interactive UI"],
    video: "https://youtu.be/pp_iJ4TESk0",
    images: ["/images/ND1.png", "/images/ND2.png", "/images/ND3.png", "/images/ND4.png"],
    highlights: [
      "Designed a clean, trustworthy UI with accessible navigation.",
      "Implemented custom modals for detailed procedure information.",
      "Integrated location services and responsive FAQ sections."
    ]
  },
  {
    title: "Real-Time Auction Platform",
    description: "A backend-driven real-time auction system leveraging Django Channels for instant bidirectional WebSocket communication.",
    tags: ["Django", "Django Channels", "WebSockets", "Docker", "Vanilla JavaScript"],
    github: "https://github.com/mcanguillen",
    video: "https://www.youtube.com/watch?v=2lTC5O10n9w",
    images: [
      "/images/fotoMF1.png",
      "/images/fotoMF2.png",
      "/images/fotoMF3.png",
      "/images/fotoMF4.png",
      "/images/fotoMF5.png",
      "/images/fotoMF6.png",
      "/images/fotoMF7.png"
    ],
    highlights: [
      "Architected a robust WebSocket layer using Django Channels for sub-second updates.",
      "Implemented complex bidding logic with purely backend-managed state.",
      "Containerized the complete ecosystem using Docker for scalable production deployment."
    ]
  },
  {
    title: "Enterprise Analytics Dashboard", // Ticket Management System
    description: "Ticket Management System with responsive data grids and comprehensive admin panels.",
    tags: ["React", "TypeScript", "Bootstrap", "Postgres"],
    github: "https://github.com/mcanguillen",
    video: "https://www.youtube.com/watch?v=kF1iR2oSZmc",
    images: [
      "/images/fotoST1.png",
      "/images/fotoST2.png",
      "/images/fotoST3.png",
      "/images/fotoST4.png",
      "/images/fotoST5.png",
      "/images/fotoST6.png",
      "/images/fotoST7.png",
      "/images/fotoST8.png",
    ],
    highlights: [
      "Virtualized data grids for performance.",
      "Completely responsive UI for mobile administration.",
      "Integrated with complex backend ETL pipelines."
    ]
  },
  {
    title: "Portfolio & Client Sites",
    description: "High-performance marketing sites and personal portfolio with focus on SEO and Vital metrics.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    link: "https://portfolio-martin-canguillen.vercel.app/",
    icon: <Globe className="w-10 h-10 text-primary mb-4" />,
    highlights: [
      "Lighthouse scores > 90 across all metrics.",
      "Fully accessible and responsive designs.",
      "Automated CI/CD pipelines via GitHub Actions."
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary">Selected Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that demonstrate my ability to solve complex engineering problems and deliver high-quality products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group flex flex-col justify-between rounded-xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                {project.images && project.images.length > 0 ? (
                   <div className="w-full h-56 bg-black/50 relative">
                     <Carousel className="w-full h-full">
                        <CarouselContent>
                          {project.images.map((img, i) => (
                            <CarouselItem key={i} className="relative w-full h-56">
                              <Image 
                                src={img} 
                                alt={`${project.title} screenshot ${i + 1}`} 
                                fill 
                                className="object-cover"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <CarouselPrevious className="relative inset-0" />
                        </div>
                        <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <CarouselNext className="relative inset-0" />
                        </div>
                     </Carousel>
                   </div>
                ) : (
                  <div className="p-6 md:p-8 pb-0">
                    <div className="bg-primary/10 w-fit p-3 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                      {project.icon || <Trophy className="w-10 h-10 text-primary" />}
                    </div>
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {project.highlights.map((h, i) => (
                       <li key={i} className="text-sm text-muted-foreground/80 flex items-start">
                         <span className="mr-2 text-primary">•</span>
                         {h}
                       </li>
                    ))}
                  </ul>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-[10px] font-mono uppercase tracking-wider font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/10">
                      {project.video && (
                        <Link href={project.video} target="_blank" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                           <Play className="w-4 h-4 mr-2" />
                           Watch Demo
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
