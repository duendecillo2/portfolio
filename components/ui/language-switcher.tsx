"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "pt", label: "Português" },
    { value: "ru", label: "Русский" },
    { value: "zh", label: "中文" },
  ] as const

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Globe className="h-4 w-4 text-teal-400" />
      <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "es" | "pt" | "ru" | "zh")}>
        <SelectTrigger
          aria-label="Language selector"
          className="h-9 w-[150px] border-teal-500/30 bg-gray-800/70 text-teal-300 focus:ring-teal-400/40 focus:ring-offset-0"
        >
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="border-teal-500/20 bg-gray-900/95 text-gray-100 backdrop-blur-md">
          {languageOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="focus:bg-teal-500/15 focus:text-teal-300"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
