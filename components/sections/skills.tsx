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
      title: "🧠 " + t("skills.core.title"),
      description: t("skills.core.description"),
      skills: [
        t("skills.core.skill1"),
        t("skills.core.skill2"),
        t("skills.core.skill3"),
      ],
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "🛠️ " + t("skills.frameworks.title"),
      description: t("skills.frameworks.description"),
      skills: [
        t("skills.frameworks.skill1"),
        t("skills.frameworks.skill2"),
        t("skills.frameworks.skill3"),
      ],
      icon: <Server className="h-5 w-5" />,
    },
    {
      title: "🧩 " + t("skills.architecture.title"),
      description: t("skills.architecture.description"),
      skills: [
        t("skills.architecture.skill1"),
        t("skills.architecture.skill2"),
        t("skills.architecture.skill3"),
        t("skills.architecture.skill4"),
      ],
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "🚀 " + t("skills.methodologies.title"),
      description: t("skills.methodologies.description"),
      skills: [
        t("skills.methodologies.skill1"),
        t("skills.methodologies.skill2"),
        t("skills.methodologies.skill3"),
      ],
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "🧬 " + t("skills.other.title"),
      description: t("skills.other.description"),
      skills: [t("skills.other.skill1")],
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "🌐 " + t("skills.languages.title"),
      description: t("skills.languages.description"),
      skills: [
        t("skills.languages.skill1"),
        t("skills.languages.skill2"), 
        t("skills.languages.skill3")
      ],
      icon: <Palette className="h-5 w-5" />,
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
