"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className={`flex items-center gap-2 bg-gray-800/50 text-teal-400 border border-teal-500/30 hover:bg-gray-700/50 hover:text-teal-300 ${className}`}
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "Español" : "English"}</span>
    </Button>
  )
}
