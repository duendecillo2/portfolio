"use client"

import { useState, useEffect } from "react"
import { MapPin, Mail, Linkedin, Github } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-teal-400" />,
      label: t("contact.location"),
      value: "La Plata, Buenos Aires, Argentina",
    },
    {
      icon: <Mail className="h-5 w-5 text-teal-400" />,
      label: t("contact.email"),
      value: "jmcanguillen@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-teal-400" />,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/mcanguillen",
      link: "https://linkedin.com/in/mcanguillen",
    },
    {
      icon: <Github className="h-5 w-5 text-teal-400" />,
      label: t("contact.github"),
      value: "github.com/duendecillo2",
      link: "https://github.com/duendecillo2",
    },
  ]

  return (
    <section id="contact" className="py-20 relative scroll-mt-16">
      <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="grid md:grid-cols-2 gap-10">
        <div
          className={cn(
            "space-y-6 opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">{t("contact.info")}</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-sm text-gray-400">{info.label}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "opacity-0 transform translate-x-8 transition-all duration-1000 delay-300 flex items-center justify-center",
            mounted && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 text-center w-full">
            <h3 className="text-xl font-semibold text-gray-200 mb-6">{t("contact.collaborate")}</h3>
            <a
              href="mailto:jmcanguillen@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-medium px-8 py-4 rounded-full hover:shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-300 text-lg"
            >
              <Mail className="h-5 w-5" />
              {t("contact.emailMe")}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Juan Martin Canguillen. {t("contact.copyright")}
        </p>
      </div>
    </section>
  )
}
