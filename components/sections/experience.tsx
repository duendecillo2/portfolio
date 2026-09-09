"use client";

import { motion } from "framer-motion";
import { Server, Braces, Cpu } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/language-context";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  techStack: string[];
  achievements: string[];
  icon: React.ReactNode;
  color: string;
}

const baseExperience: Job[] = [
  {
    company: "Afrus Impact Technologies Corporation",
    role: "Software Engineer",
    period: "Sep 2025 – Present",
    location: "United States · Remote",
    description:
      "Full-time engineer designing end-to-end a batch working engine that processes millions of leads daily, with scalable microservices and AI-powered workflow automation.",
    techStack: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Vue.js",
      "TypeScript",
      "Material UI",
      "OpenAI",
      "Anthropic",
      "RAG",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    achievements: [
      "Designed end to end a batch working engine that works with tons of data daily through millions of leads.",
      "Architected and deployed scalable microservices using Node.js, NestJS, and PostgreSQL, increasing system throughput by 35% and reducing API response times across high-traffic production environments.",
      "Integrated AI-powered capabilities and custom RAG architectures using OpenAI and Anthropic APIs, automating complex workflow data extraction and boosting end-user task efficiency by 40%.",
      "Developed responsive frontend applications with Vue.js, TypeScript, and Material UI, improving user interface performance and reducing page load times by 25%.",
      "Utilized Docker, AWS, and GitHub Actions in daily development and deployment workflows to maintain smooth continuous integration and environment consistency.",
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-cyan-500",
  },
  {
    company: "Blue Alba",
    role: "Software Engineer Intern",
    period: "Jun 2025 – Sep 2025",
    location: "New York, United States · Remote",
    description:
      "Owned the end-to-end technical execution of a standalone MVP in an Agile team, from requirements gathering through production deployment.",
    techStack: ["Node.js", "NestJS", "PostgreSQL", "TypeScript", "Docker"],
    achievements: [
      "Owned the end-to-end technical execution of a standalone MVP software project from initial requirements gathering to final deployment in an Agile environment.",
      "Collaborated with UX/UI designers and product stakeholders to translate functional specifications into scalable application architecture, delivering the product 2 weeks ahead of schedule.",
      "Enforced strict code quality standards through peer code reviews and automated unit testing, achieving 95%+ test coverage and delivering comprehensive production-ready documentation.",
    ],
    icon: <Server className="w-6 h-6" />,
    color: "bg-pink-500",
  },
  {
    company: "Self Employed",
    role: "Full Stack Web Developer",
    period: "Dec 2021 – May 2025",
    location: "Argentina · Remote",
    description:
      "Designed, built, and deployed custom full-stack web solutions for multiple clients, including a real-time auction platform with high-concurrency bidding.",
    techStack: [
      "Django",
      "Python",
      "NestJS",
      "PostgreSQL",
      "Next.js",
      "React",
      "JavaScript",
    ],
    achievements: [
      "Designed, built, and deployed custom full-stack web solutions, including a real-time auction platform supporting high-concurrency bidding operations.",
      "Developed secure RESTful APIs and user authentication logic using Django, Python, NestJS, and PostgreSQL, consistently achieving sub-100ms backend response times.",
      "Delivered 10+ responsive client applications with Next.js, React, and modern JavaScript, meeting end-to-end technical requirements on schedule.",
    ],
    icon: <Braces className="w-6 h-6" />,
    color: "bg-purple-500",
  },
];

const experienceContent: Record<
  Language,
  { headingStart: string; headingAccent: string; achievementsTitle: string; jobs: Job[] }
> = {
  en: {
    headingStart: "Engineering",
    headingAccent: "Journey",
    achievementsTitle: "Key Achievements",
    jobs: baseExperience,
  },
  es: {
    headingStart: "Trayectoria",
    headingAccent: "Profesional",
    achievementsTitle: "Logros Clave",
    jobs: [
      {
        ...baseExperience[0],
        location: "Estados Unidos · Remoto",
        description:
          "Ingeniero full-time a cargo del diseño end-to-end de un batch working engine que procesa millones de leads por día, con microservicios escalables y automatización de workflows con IA.",
        achievements: [
          "Diseñé end-to-end un batch working engine que procesa grandes volúmenes de datos diarios a través de millones de leads.",
          "Diseñé y desplegué microservicios escalables con Node.js, NestJS y PostgreSQL, aumentando el throughput del sistema en un 35% y reduciendo los tiempos de respuesta en entornos de producción de alto tráfico.",
          "Integré capacidades de IA y arquitecturas RAG custom con APIs de OpenAI y Anthropic, automatizando extracción de datos en workflows complejos y mejorando la eficiencia del usuario final en un 40%.",
          "Desarrollé aplicaciones frontend responsivas con Vue.js, TypeScript y Material UI, mejorando el rendimiento de UI y reduciendo los tiempos de carga en un 25%.",
          "Utilicé Docker, AWS y GitHub Actions en los flujos diarios de desarrollo y despliegue para mantener CI fluida y consistencia de entornos.",
        ],
      },
      {
        ...baseExperience[1],
        location: "Nueva York, Estados Unidos · Remoto",
        description:
          "Lideré la ejecución técnica end-to-end de un MVP independiente en un equipo Agile, desde la toma de requisitos hasta el despliegue en producción.",
        achievements: [
          "Fui dueño de la ejecución técnica end-to-end de un proyecto MVP, desde el relevamiento inicial de requisitos hasta el despliegue final, en un entorno Agile.",
          "Colaboré con diseñadores UX/UI y stakeholders de producto para traducir especificaciones funcionales en una arquitectura de aplicación escalable, entregando el producto 2 semanas antes de lo previsto.",
          "Apliqué estándares estrictos de calidad de código mediante code reviews entre pares y tests unitarios automatizados, logrando 95%+ de cobertura y entregando documentación lista para producción.",
        ],
      },
      {
        ...baseExperience[2],
        location: "Argentina · Remoto",
        description:
          "Diseñé, construí y desplegué soluciones web full-stack a medida para múltiples clientes, incluyendo una plataforma de subastas en tiempo real con concurrencia alta.",
        achievements: [
          "Diseñé, construí y desplegué soluciones web full-stack a medida, incluyendo una plataforma de subastas en tiempo real con operaciones de puja de alta concurrencia.",
          "Desarrollé APIs RESTful seguras y lógica de autenticación con Django, Python, NestJS y PostgreSQL, logrando consistentemente tiempos de respuesta backend sub-100ms.",
          "Entregué más de 10 aplicaciones responsivas para clientes con Next.js, React y JavaScript moderno, cumpliendo los requisitos técnicos end-to-end en plazo.",
        ],
      },
    ],
  },
  pt: {
    headingStart: "Jornada de",
    headingAccent: "Engenharia",
    achievementsTitle: "Principais Resultados",
    jobs: [
      {
        ...baseExperience[0],
        location: "Estados Unidos · Remoto",
        description:
          "Engenheiro full-time responsável pelo design end-to-end de um batch working engine que processa milhões de leads por dia, com microsserviços escaláveis e automação de workflows com IA.",
        achievements: [
          "Desenhei end-to-end um batch working engine que processa grandes volumes de dados diários através de milhões de leads.",
          "Arquitecturei e implantei microsserviços escaláveis com Node.js, NestJS e PostgreSQL, aumentando o throughput do sistema em 35% e reduzindo tempos de resposta em ambientes de produção de alto tráfego.",
          "Integrei capacidades de IA e arquiteturas RAG customizadas com APIs da OpenAI e Anthropic, automatizando extração de dados em workflows complexos e aumentando a eficiência do usuário final em 40%.",
          "Desenvolvi aplicações frontend responsivas com Vue.js, TypeScript e Material UI, melhorando o desempenho da UI e reduzindo tempos de carregamento em 25%.",
          "Utilizei Docker, AWS e GitHub Actions nos fluxos diários de desenvolvimento e deploy para manter CI fluida e consistência de ambientes.",
        ],
      },
      {
        ...baseExperience[1],
        location: "Nova York, Estados Unidos · Remoto",
        description:
          "Liderei a execução técnica end-to-end de um MVP independente em um time Agile, desde o levantamento de requisitos até o deploy em produção.",
        achievements: [
          "Fui dono da execução técnica end-to-end de um projeto MVP, do levantamento inicial de requisitos ao deploy final, em um ambiente Agile.",
          "Colaborei com designers de UX/UI e stakeholders de produto para traduzir especificações funcionais em uma arquitetura de aplicação escalável, entregando o produto 2 semanas antes do prazo.",
          "Apliquei padrões rígidos de qualidade de código via code reviews entre pares e testes unitários automatizados, alcançando 95%+ de cobertura e entregando documentação pronta para produção.",
        ],
      },
      {
        ...baseExperience[2],
        location: "Argentina · Remoto",
        description:
          "Desenhei, construí e implantei soluções web full-stack sob medida para múltiplos clientes, incluindo uma plataforma de leilões em tempo real com alta concorrência.",
        achievements: [
          "Desenhei, construí e implantei soluções web full-stack sob medida, incluindo uma plataforma de leilões em tempo real com operações de lance de alta concorrência.",
          "Desenvolvi APIs RESTful seguras e lógica de autenticação com Django, Python, NestJS e PostgreSQL, alcançando consistentemente tempos de resposta backend sub-100ms.",
          "Entreguei mais de 10 aplicações responsivas para clientes com Next.js, React e JavaScript moderno, cumprindo os requisitos técnicos end-to-end dentro do prazo.",
        ],
      },
    ],
  },
  ru: {
    headingStart: "Инженерный",
    headingAccent: "Путь",
    achievementsTitle: "Ключевые Результаты",
    jobs: [
      {
        ...baseExperience[0],
        location: "США · Удалённо",
        description:
          "Full-time инженер, отвечающий за end-to-end проектирование batch working engine, обрабатывающего миллионы лидов в день, с масштабируемыми микросервисами и AI-автоматизацией workflow.",
        achievements: [
          "Спроектировал end-to-end batch working engine, ежедневно обрабатывающий большие объёмы данных через миллионы лидов.",
          "Спроектировал и развернул масштабируемые микросервисы на Node.js, NestJS и PostgreSQL, увеличив пропускную способность системы на 35% и сократив время отклика API в высоконагруженных production-средах.",
          "Интегрировал AI-возможности и кастомные RAG-архитектуры с API OpenAI и Anthropic, автоматизировав извлечение данных в сложных workflow и повысив эффективность конечного пользователя на 40%.",
          "Разработал адаптивные frontend-приложения на Vue.js, TypeScript и Material UI, улучшив производительность UI и сократив время загрузки страниц на 25%.",
          "Использовал Docker, AWS и GitHub Actions в ежедневных процессах разработки и деплоя для поддержания бесперебойного CI и консистентности сред.",
        ],
      },
      {
        ...baseExperience[1],
        location: "Нью-Йорк, США · Удалённо",
        description:
          "Отвечал за end-to-end техническое выполнение самостоятельного MVP в Agile-команде — от сбора требований до продакшн-деплоя.",
        achievements: [
          "Был владельцем end-to-end технического выполнения MVP-проекта — от первичного сбора требований до финального деплоя в Agile-среде.",
          "Сотрудничал с UX/UI-дизайнерами и продуктовыми стейкхолдерами для трансляции функциональных спецификаций в масштабируемую архитектуру приложения, поставив продукт на 2 недели раньше срока.",
          "Обеспечил строгие стандарты качества кода через peer code review и автоматизированное юнит-тестирование, достигнув 95%+ покрытия и подготовив полную production-ready документацию.",
        ],
      },
      {
        ...baseExperience[2],
        location: "Аргентина · Удалённо",
        description:
          "Проектировал, создавал и разворачивал кастомные full-stack web-решения для множества клиентов, включая real-time аукционную платформу с высокой конкурентностью ставок.",
        achievements: [
          "Спроектировал, собрал и развернул кастомные full-stack web-решения, включая real-time аукционную платформу с высококонкурентными операциями ставок.",
          "Разработал защищённые RESTful API и логику аутентификации на Django, Python, NestJS и PostgreSQL, стабильно удерживая sub-100ms backend response time.",
          "Поставил более 10 адаптивных клиентских приложений на Next.js, React и современном JavaScript в срок и в соответствии с end-to-end техническими требованиями.",
        ],
      },
    ],
  },
  zh: {
    headingStart: "工程",
    headingAccent: "经历",
    achievementsTitle: "关键成果",
    jobs: [
      {
        ...baseExperience[0],
        location: "美国 · 远程",
        description:
          "全职工程师，end-to-end 设计一个每日处理数百万条线索的批处理引擎，并构建可扩展微服务与 AI 驱动的流程自动化能力。",
        achievements: [
          "End-to-end 设计了一个每日处理海量数据、覆盖数百万条线索的批处理引擎。",
          "使用 Node.js、NestJS 和 PostgreSQL 架构并部署可扩展微服务，将系统吞吐量提升 35%，并降低高流量生产环境下的 API 响应时间。",
          "集成 AI 能力与基于 OpenAI 和 Anthropic API 的定制 RAG 架构，自动化复杂工作流中的数据提取，将终端用户任务效率提升 40%。",
          "使用 Vue.js、TypeScript 与 Material UI 开发响应式前端应用，提升 UI 性能并将页面加载时间降低 25%。",
          "在日常开发与部署流程中使用 Docker、AWS 与 GitHub Actions，维持顺畅的持续集成与一致的环境。",
        ],
      },
      {
        ...baseExperience[1],
        location: "纽约, 美国 · 远程",
        description:
          "在 Agile 团队中独立负责一个 MVP 项目从需求收集到生产部署的端到端技术执行。",
        achievements: [
          "在 Agile 环境中，独立负责一个独立 MVP 项目从最初需求收集到最终部署的端到端技术执行。",
          "与 UX/UI 设计师与产品方协作，将功能规格转化为可扩展的应用架构，提前 2 周交付产品。",
          "通过同行代码评审与自动化单元测试执行严格的代码质量标准，覆盖率达 95%+，并交付完整的生产就绪文档。",
        ],
      },
      {
        ...baseExperience[2],
        location: "阿根廷 · 远程",
        description:
          "为多个客户设计、构建并部署定制化全栈 Web 解决方案，包括支持高并发出价的实时拍卖平台。",
        achievements: [
          "设计、构建并部署定制化全栈 Web 解决方案，包括支持高并发出价的实时拍卖平台。",
          "使用 Django、Python、NestJS 与 PostgreSQL 开发安全 RESTful API 与用户认证逻辑，后端响应时间稳定低于 100ms。",
          "使用 Next.js、React 与现代 JavaScript 交付 10+ 个响应式客户应用，按时满足端到端技术需求。",
        ],
      },
    ],
  },
};

export function Experience() {
  const { language } = useLanguage();
  const content = experienceContent[language];
  const experience = content.jobs;

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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

      <div className="space-y-12 relative border-l border-gray-800 ml-3 md:ml-6 pl-8 md:pl-12">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot with Icon */}
            <div
              className={`absolute -left-[54px] md:-left-[74px] top-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-gray-950 ${job.color} flex items-center justify-center text-white shadow-lg shadow-${job.color}/20`}
            >
              {job.icon}
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{job.role}</h3>
                  <div className="text-lg font-medium text-indigo-400">{job.company}</div>
                  <div className="text-xs font-mono text-gray-500 mt-1">{job.location}</div>
                </div>
                <span className="text-sm font-mono text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800 self-start">
                  {job.period}
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{job.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {content.achievementsTitle}
                </h4>
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-sm md:text-base text-gray-300">
                      <span
                        className={`mr-3 mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full ${job.color}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
