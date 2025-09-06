"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, type ReactNode } from "react"

export default function LanguageHtmlUpdater({ children }: { children: ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <>{children}</>
}
