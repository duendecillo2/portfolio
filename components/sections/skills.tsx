"use client"

import { useState, useEffect } from "react"
import { Code, Server, Palette, Brain } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "🧠 Core Skills",
      description: "The essentials.",
      skills: [
        "Languages: Python, JavaScript, C, C#, HTML/CSS, SQL",
        "Paradigms: Object-Oriented Programming (OOP), Functional Programming, Logic Programming",
        "Low-level: Advanced C (Kernel dev), Assembler x86, Bash",
      ],
    },
    {
      title: "🛠️ Frameworks, Libraries & Tools",
      description: "Things I use daily as a developer.",
      skills: [
        "Django, React, Node.js, Bootstrap",
        "Git, Linux",
        "SQLite, MySQL, PostgreSQL",
      ],
    },
    {
      title: "🧩 Software Architecture & Design",
      description: "This includes my formal training and ability to build well-thought-out software.",
      skills: [
        "MVC, REST APIs",
        "SOLID & GRASP Principles",
        "GoF Design Patterns",
        "UML, BPMN",
      ],
    },
    {
      title: "🚀 Methodologies & Practices",
      description: "How I work and organize yourself in a professional environment.",
      skills: [
        "Agile",
        "TDD ",
        "Clean Code",
      ],
    },
    {
      title: "🧬 Other Languages & Tech",
      description: "More niche things.",
      skills: ["Haskell, Prolog, Smalltalk"],
    },
    {
      title: "🌐 Languages",
      description: "Natural languages.",
      skills: ["Spanish (Native)", "English (C1 - Advanced)", "Portuguese (A2)"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative scroll-mt-16">
      <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-500 opacity-0 transform translate-y-8",
              mounted && "opacity-100 translate-y-0",
              mounted && `transition-delay-${index * 100}`,
            )}
            style={{
              transitionDelay: mounted ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-800/50 rounded-lg text-teal-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
              </div>

              <div className="flex-grow">
                <p className="text-gray-400 mb-4">{category.description}</p>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="bg-gray-800/30 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-teal-500/30 hover:shadow-[0_0_10px_rgba(45,212,191,0.15)] transition-all duration-300"
                    >
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
