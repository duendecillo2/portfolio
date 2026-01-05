"use client";

import { motion } from "framer-motion";
import { Database, Server, Terminal, Code2, Globe, Cpu, Workflow, Bot } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: <Bot className="w-5 h-5" />,
    color: "text-rose-400 bg-rose-400/10",
    skills: ["LLM Integration", "RAG/RACS Architectures", "Evolution API", "Local AI Models", "n8n Workflows", "Cursor & Copilot"],
  },
  {
    title: "Backend Frameworks",
    icon: <Server className="w-5 h-5" />,
    color: "text-indigo-400 bg-indigo-400/10",
    skills: ["Django (Expert)", "NestJS (Expert)", "FastAPI", "Node.js", "Microservices", "REST & GraphQL"],
  },
  {
    title: "Languages & Electronics",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-orange-400 bg-orange-400/10",
    skills: ["Python", "C++", "C#", "C", "SQL", "Arduino", "Raspberry Pi", "Bash"],
  },
  {
    title: "Data & NoSQL",
    icon: <Database className="w-5 h-5" />,
    color: "text-emerald-400 bg-emerald-400/10",
    skills: ["PostgreSQL", "MongoDB (NoSQL)", "Pandas", "ETL Pipelines", "Vector DBs", "Excel/Power BI"],
  },
  {
    title: "DevOps & Infrastructure",
    icon: <Terminal className="w-5 h-5" />,
    color: "text-pink-400 bg-pink-400/10",
    skills: ["Docker", "GitHub Actions", "Redis", "Linux", "AWS", "Nginx"],
  },
  {
    title: "Frontend & Tools",
    icon: <Globe className="w-5 h-5" />,
    color: "text-cyan-400 bg-cyan-400/10",
    skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS", "Git", "Framer Motion"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
          Technical <span className="text-emerald-400">Expertise</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          I specialize in robust backend systems. My toolkit is built around reliable, scalable, and maintainable technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-200">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-sm bg-secondary/30 text-gray-300 rounded-md border border-white/5 hover:border-white/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
