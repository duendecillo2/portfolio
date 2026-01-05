"use client";

import { motion } from "framer-motion";
import { Server, Database, Braces, Terminal, Cpu } from "lucide-react";

interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  achievements: string[];
  icon: React.ReactNode;
  color: string;
}

const experience: Job[] = [
  {
    company: "Pergamon Advertising",
    role: "Software Engineer",
    period: "Dec 2025 – Present",
    description: "Architecting backend services for scalable advertising solutions.",
    techStack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "TypeScript"],
    achievements: [
      "Designing high-throughput API endpoints to handle concurrent ad requests.",
      "Optimizing database schemas to reduce query latency by 40%."
    ],
    icon: <Server className="w-6 h-6" />,
    color: "bg-indigo-500"
  },
  {
    company: "Afrus Impact Technologies",
    role: "Full-stack Developer (Contract)",
    period: "Oct 2025 - Dec 2025",
    description: "Building robust web apps with AI/ML integration and scalable backends.",
    techStack: ["Go", "NestJS", "React", "SQL", "LLMs"],
    achievements: [
      "Developed scalable backend services with Go and NestJS.",
      "Integrated Large Language Models (LLMs) to enhance application capabilities."
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-cyan-500"
  },
  {
    company: "ITBA",
    role: "Data & Infrastructure Engineer",
    period: "Sep 2025 – Dec 2025",
    description: "Engineered critical data pipelines for enterprise-grade network analysis.",
    techStack: ["Python", "Pandas", "SQL", "Excel", "Parquet"],
    achievements: [
      "Built resilient ETL pipelines processing TBs of data for Smart Cities.",
      "Implemented complex graph algorithms for network topology analysis."
    ],
    icon: <Database className="w-6 h-6" />,
    color: "bg-emerald-500"
  },
  {
    company: "Freelance Consultant",
    role: "Full Stack Engineer",
    period: "Sep 2024 – Present",
    description: "Delivering bespoke backend architectures and API integrations.",
    techStack: ["Python", "Django", "NestJS", "React", "TypeScript", "SQL", "PostgreSQL"],
    achievements: [
      "Developed secure REST APIs with role-based JWT authentication.",
      "Automated deployment workflows using Docker and CI/CD pipelines."
    ],
    icon: <Braces className="w-6 h-6" />,
    color: "bg-purple-500"
  },
  {
    company: "Blue Alba LLC",
    role: "Software Engineer",
    period: "Jun 2025 – Sep 2025",
    description: "Backend development for data-intensive analytics platform.",
    techStack: ["NestJS", "React", "React Query", "Zustand", "Redis", "Raw SQL", "Docker"],
    achievements: [
      "Optimized aggregation queries for heavy data visualization widgets.",
      "Containerized microservices improving developer onboarding time."
    ],
    icon: <Terminal className="w-6 h-6" />,
    color: "bg-pink-500"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Engineering <span className="text-indigo-500">Journey</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-12 relative border-l border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot with Icon */}
            <div className={`absolute -left-[54px] md:-left-[74px] top-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-gray-950 ${job.color} flex items-center justify-center text-white shadow-lg shadow-${job.color}/20`}>
              {job.icon}
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{job.role}</h3>
                   <div className="text-lg font-medium text-indigo-400">{job.company}</div>
                </div>
                <span className="text-sm font-mono text-gray-500 mt-2 sm:mt-0 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800">
                  {job.period}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {job.description}
              </p>
  
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-sm md:text-base text-gray-300">
                      <span className={`mr-3 mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full ${job.color}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

               {/* Tech Stack Badges */}
               <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                 {job.techStack.map((tech) => (
                   <span 
                     key={tech} 
                     className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-800 text-gray-300 border border-gray-700"
                   >
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
