"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage, type Language } from "@/contexts/language-context";

const contactContent: Record<Language, { title: string; subtitle: string; cta: string; linkedin: string }> = {
  en: {
    title: "Let's build something epic.",
    subtitle: "I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    cta: "Say Hello",
    linkedin: "LinkedIn",
  },
  es: {
    title: "Construyamos algo épico.",
    subtitle: "Actualmente estoy abierto a nuevas oportunidades. Si tenés una consulta o simplemente querés saludar, voy a responderte lo antes posible.",
    cta: "Decir Hola",
    linkedin: "LinkedIn",
  },
  pt: {
    title: "Vamos construir algo épico.",
    subtitle: "Estou aberto a novas oportunidades. Se você tiver uma pergunta ou quiser trocar uma ideia, vou responder o quanto antes.",
    cta: "Fale Comigo",
    linkedin: "LinkedIn",
  },
  ru: {
    title: "Давайте создадим что-то масштабное.",
    subtitle: "Сейчас я открыт к новым возможностям. Если у вас есть вопрос или вы хотите обсудить сотрудничество, я обязательно отвечу.",
    cta: "Написать",
    linkedin: "LinkedIn",
  },
  zh: {
    title: "一起做点真正有影响力的产品。",
    subtitle: "我目前对新的工作机会保持开放。如果你有项目想法或合作需求，欢迎随时联系我。",
    cta: "联系我",
    linkedin: "LinkedIn",
  },
}

export function Contact() {
  const { language } = useLanguage()
  const content = contactContent[language]

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
          {content.title}
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:jmcanguillen@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Mail className="mr-2 h-4 w-4" />
            {content.cta}
          </Link>
          <Link
            href="https://linkedin.com/in/mcanguillen"
            target="_blank"
            className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            {content.linkedin}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
