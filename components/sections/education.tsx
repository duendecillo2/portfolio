"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/language-context";

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  grade: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const baseEducation: EducationItem[] = [
  {
    school: "Universidad Empresarial 'Siglo 21'",
    degree: "Bachelor of Science - BS, Computer Software Engineering",
    period: "Oct 2025 - Jun 2027",
    grade: "8.00",
    description: "Focus on scalable software architectures, cloud computing strategies, and agile project management for enterprise environments.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    school: "Universidad Tecnológica Nacional",
    degree: "Bachelor's in Systems Engineering",
    period: "Apr 2022 - Oct 2025",
    grade: "8.00",
    description: "Information Systems Engineering focuses on designing, implementing, organizing, and managing the information systems required by public and private organizations. It combines knowledge of mathematics, programming, data management, software, hardware, and networks.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
  {
    school: "Nuestra Señora De Luján",
    degree: "Bachelor of Science - BS, Social Sciences",
    period: "Mar 2016 - Dec 2021",
    grade: "8.70",
    description: "Developed strong analytical foundations, critical thinking, and communication skills essential for effective stakeholder management and team leadership.",
    icon: <School className="w-6 h-6" />,
    color: "bg-purple-500",
  },
]

const educationContent: Record<Language, { headingStart: string; headingAccent: string; gradeLabel: string; items: EducationItem[] }> = {
  en: {
    headingStart: "Academic",
    headingAccent: "Background",
    gradeLabel: "Grade",
    items: baseEducation,
  },
  es: {
    headingStart: "Formación",
    headingAccent: "Académica",
    gradeLabel: "Promedio",
    items: [
      { ...baseEducation[0], degree: "Licenciatura en Ingeniería de Software", description: "Enfoque en arquitecturas de software escalables, estrategias cloud y gestión ágil de proyectos en entornos empresariales." },
      { ...baseEducation[1], degree: "Ingeniería en Sistemas de Información", description: "La carrera se centra en diseñar, implementar, organizar y gestionar sistemas de información para organizaciones públicas y privadas, integrando matemática, programación, datos, software, hardware y redes." },
      { ...baseEducation[2], degree: "Bachiller en Ciencias Sociales", description: "Desarrollé bases sólidas de análisis, pensamiento crítico y comunicación para una mejor gestión de stakeholders y liderazgo de equipos." },
    ],
  },
  pt: {
    headingStart: "Formação",
    headingAccent: "Acadêmica",
    gradeLabel: "Média",
    items: [
      { ...baseEducation[0], degree: "Bacharelado em Engenharia de Software", description: "Foco em arquiteturas escaláveis de software, estratégias de cloud computing e gestão ágil de projetos em contexto corporativo." },
      { ...baseEducation[1], degree: "Engenharia de Sistemas de Informação", description: "Curso orientado ao desenho, implementação e gestão de sistemas de informação para organizações públicas e privadas." },
      { ...baseEducation[2], degree: "Bacharelado em Ciências Sociais", description: "Base sólida em análise crítica, comunicação e pensamento estruturado para liderança técnica e colaboração com stakeholders." },
    ],
  },
  ru: {
    headingStart: "Академическая",
    headingAccent: "База",
    gradeLabel: "Средний балл",
    items: [
      { ...baseEducation[0], degree: "Бакалавр, Software Engineering", description: "Фокус на масштабируемой архитектуре ПО, cloud-стратегиях и agile-управлении проектами." },
      { ...baseEducation[1], degree: "Бакалавриат, Информационные Системы", description: "Направление включает проектирование, внедрение и управление информационными системами для частных и государственных организаций." },
      { ...baseEducation[2], degree: "Бакалавр, Социальные Науки", description: "Сформировал сильные аналитические навыки, критическое мышление и коммуникацию для эффективной командной работы." },
    ],
  },
  zh: {
    headingStart: "教育",
    headingAccent: "背景",
    gradeLabel: "成绩",
    items: [
      { ...baseEducation[0], degree: "软件工程学士", description: "重点学习可扩展软件架构、云计算策略与企业级敏捷项目管理。" },
      { ...baseEducation[1], degree: "信息系统工程学士", description: "课程聚焦于组织级信息系统的设计、实现、组织与管理，涵盖数学、编程、数据、软硬件与网络。" },
      { ...baseEducation[2], degree: "社会科学学士", description: "培养了分析能力、批判性思维与沟通能力，为跨团队协作与领导力打下基础。" },
    ],
  },
}

export function Education() {
  const { language } = useLanguage()
  const content = educationContent[language]
  const education = content.items

  return (
    <section id="education" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          {content.headingStart} <span className="text-indigo-500">{content.headingAccent}</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-8 relative border-l border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot with Icon */}
            <div className={`absolute -left-[54px] md:-left-[74px] top-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-gray-950 ${item.color} flex items-center justify-center text-white shadow-lg shadow-${item.color}/20`}>
              {item.icon}
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.school}</h3>
                  <div className="text-lg font-medium text-indigo-400">{item.degree}</div>
                </div>
                <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                  <span className="text-sm font-mono text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800 mb-2">
                    {item.period}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                    {content.gradeLabel}: {item.grade}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
