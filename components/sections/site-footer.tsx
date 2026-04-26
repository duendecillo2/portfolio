"use client";

import { useLanguage, type Language } from "@/contexts/language-context";

const footerContent: Record<Language, string> = {
  en: "Built with Next.js & Tailwind.",
  es: "Construido con Next.js y Tailwind.",
  pt: "Construído com Next.js e Tailwind.",
  ru: "Собрано на Next.js и Tailwind.",
  zh: "基于 Next.js 与 Tailwind 构建。",
}

export function SiteFooter() {
  const { language } = useLanguage()

  return (
    <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border/40">
      <p>© {new Date().getFullYear()} Juan Martin Canguillen. {footerContent[language]}</p>
    </footer>
  )
}
