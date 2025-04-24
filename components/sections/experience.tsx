"use client"

import { useState, useEffect } from "react"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export default function Experience() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      period: t("experience.job1.period"),
      description: t("experience.job1.description"),
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      period: t("experience.job2.period"),
      description: t("experience.job2.description"),
    },
  ]

  const education = [
    {
      degree: t("experience.edu1.degree"),
      institution: t("experience.edu1.institution"),
      period: t("experience.edu1.period"),
      description: t("experience.edu1.description"),
    },
    {
      degree: t("experience.edu2.degree"),
      institution: t("experience.edu2.institution"),
      period: t("experience.edu2.period"),
      description: t("experience.edu2.description"),
    },
  ]

  return (
    <section id="experience" className="py-20 relative scroll-mt-16">
      <SectionHeading title={t("experience.title")} subtitle={t("experience.subtitle")} />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Professional Experience */}
        <div
          className={cn(
            "opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-800/50 rounded-lg text-teal-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">{t("experience.professional")}</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l border-gray-800">
                  <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-lg font-medium text-gray-200">{exp.title}</h4>
                  <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-800/50 rounded-lg text-teal-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">{t("experience.education")}</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l border-gray-800">
                  <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-lg font-medium text-gray-200">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
