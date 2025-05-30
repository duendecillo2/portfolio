"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-16" id="hero">
      {/* Animated background glow */}
      <div
        className={cn(
          "absolute w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] opacity-0 transition-opacity duration-1000",
          mounted && "opacity-30",
        )}
      ></div>

      <div
        className={cn(
          "text-center space-y-6 max-w-4xl px-4 opacity-0 transform translate-y-8 transition-all duration-1000",
          mounted && "opacity-100 translate-y-0",
        )}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
            {t("hero.title")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light">{t("hero.subtitle")}</p>
        <div className="pt-4 flex flex-wrap gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
          >
            {t("hero.viewProjects")}
          </Link>
          <a
            href="https://docs.google.com/document/d/19qcrazJjMMUIcsCPT7iDO9Y5XjeOd8Fu9lsQBKJwLM0/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800/50 text-teal-400 border border-teal-500/30 font-medium px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300"
          >
            <span>📄</span> {t("hero.downloadCV")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-teal-400 h-8 w-8" />
        </Link>
      </div>
    </section>
  )
}
