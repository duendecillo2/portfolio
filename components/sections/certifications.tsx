"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, FileJson, BadgeCheck } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

const certifications: Certification[] = [
  {
    name: "JavaScript with NodeJS",
    issuer: "Udemy",
    date: "Jul 2025",
    credentialId: "UC-89f93d31-6090-496b-8b4c-4159cf7b04c6",
    skills: ["Node.js", "JavaScript"],
    icon: <FileJson className="w-6 h-6" />,
    color: "text-green-400 bg-green-400/10",
  },
  {
    name: "Generative AI Core Foundations",
    issuer: "Microsoft",
    date: "Jun 2025",
    skills: ["Artificial Intelligence (AI)"],
    icon: <BadgeCheck className="w-6 h-6" />,
    color: "text-blue-400 bg-blue-400/10",
  },
  {
    name: "Foundation C# With Microsoft",
    issuer: "Microsoft",
    date: "Aug 2024",
    skills: ["C#", "Analytical Capability", "Critical Thinking"],
    icon: <BadgeCheck className="w-6 h-6" />,
    color: "text-purple-400 bg-purple-400/10",
  },
  {
    name: "#ICanCode JA",
    issuer: "Junior Achievement Argentina",
    date: "Jul 2024",
    skills: ["CSS", "HTML5", "JavaScript", "Bootstrap"],
    icon: <Award className="w-6 h-6" />,
    color: "text-yellow-400 bg-yellow-400/10",
  },
  {
    name: "C Language From Zero To Expert",
    issuer: "Udemy",
    date: "Sep 2022",
    credentialId: "UC-69720ff3-1d01-4035-9f4a-58dc6fed3023",
    skills: ["C (Programming Language)", "Analytical Capability"],
    icon: <FileJson className="w-6 h-6" />,
    color: "text-orange-400 bg-orange-400/10",
  },
  {
    name: "Plan Your Future - JA",
    issuer: "Junior Achievement Argentina",
    date: "Oct 2022",
    skills: ["Planning", "Public Speaking", "Soft Skills"],
    icon: <Award className="w-6 h-6" />,
    color: "text-teal-400 bg-teal-400/10",
  },
  {
    name: "Certification in Ruby and JS: 'Sé Programar'",
    issuer: "Mumuki / Argentina Programa",
    date: "Apr 2022",
    credentialId: "X3ewano9u_S6RWg3",
    skills: ["JavaScript", "Ruby", "Problem Solving"],
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: "text-rose-400 bg-rose-400/10",
  },
  {
    name: "#Socios2021 Apprenticeship",
    issuer: "Junior Achievement Argentina",
    date: "Jun 2022",
    skills: ["Public Speaking", "Critical Thinking", "Leadership"],
    icon: <Award className="w-6 h-6" />,
    color: "text-blue-400 bg-blue-400/10",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Licenses & <span className="text-indigo-500">Certifications</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-indigo-500/30 transition-all hover:bg-card/60"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2 rounded-lg ${cert.color}`}>
                {cert.icon}
              </div>
              <span className="text-xs font-mono text-gray-500 bg-secondary/30 px-2 py-1 rounded">
                {cert.date}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-200 mb-1 leading-tight group-hover:text-indigo-400 transition-colors">
              {cert.name}
            </h3>
            <p className="text-sm font-medium text-gray-400 mb-3">{cert.issuer}</p>

            {cert.credentialId && (
              <div className="text-xs text-gray-600 font-mono mb-4 break-all">
                ID: {cert.credentialId}
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
              {cert.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-gray-800 text-gray-400 border border-gray-700"
                >
                  {skill}
                </span>
              ))}
              {cert.skills.length > 3 && (
                <span className="px-2 py-1 text-[10px] text-gray-500">+{cert.skills.length - 3}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
