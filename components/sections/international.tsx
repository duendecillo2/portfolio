"use client";

import { motion } from "framer-motion";
import { Globe, Plane, Languages, MessageCircle } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/language-context";

const internationalContent: Record<
  Language,
  {
    titleStart: string
    titleAccent: string
    subtitle: string
    languagesTitle: string
    spanish: string
    english: string
    portuguese: string
    spanishLevel: string
    englishLevel: string
    portugueseLevel: string
    adaptabilityTitle: string
    adaptabilityDescription: string
    workTravelTitle: string
    job1Title: string
    job1Place: string
    job1Period: string
    job1Description: string
    job1Badge1: string
    job1Badge2: string
    job2Title: string
    job2Place: string
    job2Period: string
    job2Description: string
    job2Badge1: string
    job2Badge2: string
  }
> = {
  en: {
    titleStart: "Global",
    titleAccent: "Mindset",
    subtitle: "My international experience and multilingual proficiency enable me to seamlessly integrate into diverse, global engineering teams.",
    languagesTitle: "Languages",
    spanish: "Spanish",
    english: "English",
    portuguese: "Portuguese",
    spanishLevel: "Native",
    englishLevel: "Advanced (C1/C2)",
    portugueseLevel: "Conversational",
    adaptabilityTitle: "Cultural Adaptability",
    adaptabilityDescription:
      "Proven ability to thrive in fast-paced international environments in the US, handling diverse customer interactions with resilience.",
    workTravelTitle: "Work & Travel USA Experience",
    job1Title: "Beach Attendant",
    job1Place: "1 Hotels | Miami, FL",
    job1Period: "Dec 2024 - Mar 2025",
    job1Description:
      "Provided premium service in a high-end hospitality environment. Refined English communication skills through constant interaction with international guests and effectively solving on-site issues.",
    job1Badge1: "Customer Service",
    job1Badge2: "English Fluency",
    job2Title: "Beach Attendant & Cashier",
    job2Place: "Boucher Brothers Management | Miami Beach, FL",
    job2Period: "Dec 2023 - Mar 2024",
    job2Description:
      "Handled fast-paced transactions and logistics in a high-volume tourist area. Developed situational leadership and cash handling procedures while collaborating with a multicultural team.",
    job2Badge1: "Adaptability",
    job2Badge2: "Teamwork",
  },
  es: {
    titleStart: "Enfoque",
    titleAccent: "Global",
    subtitle: "Mi experiencia internacional y dominio de varios idiomas me permiten integrarme de forma efectiva en equipos de ingeniería diversos y globales.",
    languagesTitle: "Idiomas",
    spanish: "Español",
    english: "Inglés",
    portuguese: "Portugués",
    spanishLevel: "Nativo",
    englishLevel: "Avanzado (C1/C2)",
    portugueseLevel: "Conversacional",
    adaptabilityTitle: "Adaptabilidad Cultural",
    adaptabilityDescription:
      "Capacidad comprobada para rendir en entornos internacionales de alto ritmo en EE.UU., gestionando interacciones diversas con resiliencia.",
    workTravelTitle: "Experiencia Work & Travel USA",
    job1Title: "Asistente de Playa",
    job1Place: "1 Hotels | Miami, FL",
    job1Period: "Dic 2024 - Mar 2025",
    job1Description:
      "Brindé servicio premium en un entorno hotelero de alta gama. Perfeccioné la comunicación en inglés interactuando con huéspedes internacionales y resolviendo incidencias en sitio.",
    job1Badge1: "Atención al Cliente",
    job1Badge2: "Fluidez en Inglés",
    job2Title: "Asistente de Playa y Cajero",
    job2Place: "Boucher Brothers Management | Miami Beach, FL",
    job2Period: "Dic 2023 - Mar 2024",
    job2Description:
      "Gestioné transacciones y logística en una zona turística de alto volumen. Fortalecí liderazgo situacional y manejo de caja trabajando con un equipo multicultural.",
    job2Badge1: "Adaptabilidad",
    job2Badge2: "Trabajo en Equipo",
  },
  pt: {
    titleStart: "Visão",
    titleAccent: "Global",
    subtitle: "Minha experiência internacional e proficiência multilíngue me permitem integrar rapidamente equipes globais de engenharia.",
    languagesTitle: "Idiomas",
    spanish: "Espanhol",
    english: "Inglês",
    portuguese: "Português",
    spanishLevel: "Nativo",
    englishLevel: "Avançado (C1/C2)",
    portugueseLevel: "Conversacional",
    adaptabilityTitle: "Adaptabilidade Cultural",
    adaptabilityDescription:
      "Capacidade comprovada de atuar em ambientes internacionais de ritmo acelerado nos EUA, lidando com interações diversas com resiliência.",
    workTravelTitle: "Experiência Work & Travel nos EUA",
    job1Title: "Atendente de Praia",
    job1Place: "1 Hotels | Miami, FL",
    job1Period: "Dez 2024 - Mar 2025",
    job1Description:
      "Prestei atendimento premium em ambiente de hospitalidade de alto padrão. Aprimorei o inglês com interação constante com hóspedes internacionais.",
    job1Badge1: "Atendimento ao Cliente",
    job1Badge2: "Fluência em Inglês",
    job2Title: "Atendente de Praia e Caixa",
    job2Place: "Boucher Brothers Management | Miami Beach, FL",
    job2Period: "Dez 2023 - Mar 2024",
    job2Description:
      "Gerenciei transações e logística em área turística de alto volume, desenvolvendo liderança situacional e colaboração multicultural.",
    job2Badge1: "Adaptabilidade",
    job2Badge2: "Trabalho em Equipe",
  },
  ru: {
    titleStart: "Глобальное",
    titleAccent: "Мышление",
    subtitle: "Международный опыт и владение несколькими языками помогают мне эффективно работать в глобальных инженерных командах.",
    languagesTitle: "Языки",
    spanish: "Испанский",
    english: "Английский",
    portuguese: "Португальский",
    spanishLevel: "Родной",
    englishLevel: "Продвинутый (C1/C2)",
    portugueseLevel: "Разговорный",
    adaptabilityTitle: "Культурная Адаптивность",
    adaptabilityDescription:
      "Подтвержденный опыт работы в динамичной международной среде США с устойчивой коммуникацией с клиентами из разных культур.",
    workTravelTitle: "Опыт Work & Travel в США",
    job1Title: "Beach Attendant",
    job1Place: "1 Hotels | Miami, FL",
    job1Period: "Дек 2024 - Мар 2025",
    job1Description:
      "Обеспечивал премиальный сервис в high-end гостиничной среде. Улучшил деловую коммуникацию на английском при работе с международными гостями.",
    job1Badge1: "Клиентский Сервис",
    job1Badge2: "Свободный Английский",
    job2Title: "Beach Attendant & Cashier",
    job2Place: "Boucher Brothers Management | Miami Beach, FL",
    job2Period: "Дек 2023 - Мар 2024",
    job2Description:
      "Работал с транзакциями и логистикой в зоне высокого туристического потока. Развил ситуативное лидерство и командное взаимодействие.",
    job2Badge1: "Адаптивность",
    job2Badge2: "Командная Работа",
  },
  zh: {
    titleStart: "国际化",
    titleAccent: "视野",
    subtitle: "我的国际经历与多语言能力，让我能够快速融入多元化的全球工程团队。",
    languagesTitle: "语言",
    spanish: "西班牙语",
    english: "英语",
    portuguese: "葡萄牙语",
    spanishLevel: "母语",
    englishLevel: "高级 (C1/C2)",
    portugueseLevel: "日常交流",
    adaptabilityTitle: "跨文化适应力",
    adaptabilityDescription:
      "已验证可在美国高节奏国际环境中稳定交付，并高效处理多元客户沟通场景。",
    workTravelTitle: "美国 Work & Travel 经历",
    job1Title: "海滩服务专员",
    job1Place: "1 Hotels | Miami, FL",
    job1Period: "2024年12月 - 2025年3月",
    job1Description:
      "在高端酒店环境提供高质量服务，通过与国际客人的持续互动显著提升英语沟通与现场问题处理能力。",
    job1Badge1: "客户服务",
    job1Badge2: "英语沟通",
    job2Title: "海滩服务与收银",
    job2Place: "Boucher Brothers Management | Miami Beach, FL",
    job2Period: "2023年12月 - 2024年3月",
    job2Description:
      "在高客流旅游区域处理交易与运营流程，提升了情境领导力、现金管理能力与跨文化协作能力。",
    job2Badge1: "适应能力",
    job2Badge2: "团队协作",
  },
}

export function International() {
  const { language } = useLanguage()
  const content = internationalContent[language]

  return (
    <section id="international" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          {content.titleStart} <span className="text-indigo-500">{content.titleAccent}</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl text-lg">
          {content.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Languages Column */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{content.languagesTitle}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">{content.spanish}</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">{content.spanishLevel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">{content.english}</span>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">{content.englishLevel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">{content.portuguese}</span>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">{content.portugueseLevel}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="p-6 rounded-xl bg-indigo-600/10 border border-indigo-500/20"
          >
             <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                <h4 className="font-bold text-white">{content.adaptabilityTitle}</h4>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed">
               {content.adaptabilityDescription}
             </p>
          </motion.div>
        </div>

        {/* Work & Travel Column */}
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
             <Plane className="w-5 h-5 text-pink-400" />
             {content.workTravelTitle}
           </h3>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-pink-500/20 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
               <h4 className="text-lg font-bold text-white">{content.job1Title}</h4>
               <span className="text-sm text-gray-400">{content.job1Place}</span>
            </div>
            <span className="text-xs font-mono text-gray-500 mb-4 block">{content.job1Period}</span>
            <p className="text-gray-400 text-sm mb-4">
              {content.job1Description}
            </p>
             <div className="flex gap-2">
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">{content.job1Badge1}</span>
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">{content.job1Badge2}</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-pink-500/20 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
               <h4 className="text-lg font-bold text-white">{content.job2Title}</h4>
               <span className="text-sm text-gray-400">{content.job2Place}</span>
            </div>
            <span className="text-xs font-mono text-gray-500 mb-4 block">{content.job2Period}</span>
            <p className="text-gray-400 text-sm mb-4">
              {content.job2Description}
            </p>
             <div className="flex gap-2">
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">{content.job2Badge1}</span>
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">{content.job2Badge2}</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
