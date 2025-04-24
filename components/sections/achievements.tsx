"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import AchievementCard from "@/components/ui/achievement-card"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export default function Achievements() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const achievements = [
    {
      icon: "🏆",
      title: t("achievements.achievement1.title"),
      description: t("achievements.achievement1.description"),
    },
    {
      icon: "📚",
      title: t("achievements.achievement2.title"),
      description: t("achievements.achievement2.description"),
    },
    {
      icon: "💻",
      title: t("achievements.achievement3.title"),
      description: t("achievements.achievement3.description"),
    },
    {
      icon: "🎓",
      title: t("achievements.achievement4.title"),
      description: t("achievements.achievement4.description"),
    },
    {
      icon: "🌐",
      title: t("achievements.achievement5.title"),
      description: t("achievements.achievement5.description"),
    },
  ]

  return (
    <section id="achievements" className="py-20 relative scroll-mt-16">
      <SectionHeading title={t("achievements.title")} subtitle={t("achievements.subtitle")} />

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 150}ms` : "0ms",
            }}
          >
            <AchievementCard icon={achievement.icon} title={achievement.title} description={achievement.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
