"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function About() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickFacts = [
    {
      icon: <Code className="h-5 w-5 text-teal-400" />,
      title: t("about.fact1.title"),
      description: t("about.fact1.description"),
    },
    {
      icon: <Briefcase className="h-5 w-5 text-teal-400" />,
      title: t("about.fact2.title"),
      description: t("about.fact2.description"),
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-teal-400" />,
      title: t("about.fact3.title"),
      description: t("about.fact3.description"),
    },
    {
      icon: <MapPin className="h-5 w-5 text-teal-400" />,
      title: t("about.fact4.title"),
      description: t("about.fact4.description"),
    },
  ]

  return (
    <section id="about" className="py-20 relative scroll-mt-16">
      <SectionHeading title={t("about.title")} subtitle={t("about.subtitle")} />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div
          className={cn(
            "relative opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-teal-300/20 rounded-2xl -rotate-6 transform scale-95"></div>
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/me.jpg"
                alt="Juan Martin Canguillen"
                width={400}
                height={400}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "space-y-6 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 shadow-lg">
            <p className="text-gray-300 leading-relaxed">{t("about.description1")}</p>
            <p className="text-gray-300 leading-relaxed mt-4">{t("about.description2")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{fact.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-200">{fact.title}</h3>
                    <p className="text-sm text-gray-400">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
          </div>
        </div>
      </div>
    </section>
  )
}
