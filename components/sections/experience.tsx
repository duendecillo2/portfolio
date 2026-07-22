"use client";

import { motion } from "framer-motion";
import { Server, Database, Braces, Terminal, Cpu } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/language-context";

interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  achievements: string[];
  icon: React.ReactNode;
  color: string;
}

const baseExperience: Job[] = [
  {
    company: "Afrus Org",
    role: "Software Engineer",
    period: "Apr 2026 – Present",
    description: "Building robust web apps with AI/ML integration and scalable backends.",
    techStack: ["Go", "NestJS", "React", "SQL", "LLMs"],
    achievements: [
      "Developed scalable backend services with Go and NestJS.",
      "Integrated Large Language Models (LLMs) to enhance application capabilities.",
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-cyan-500",
  },
  {
    company: "Physaflow",
    role: "Data & Infrastructure Engineer",
    period: "Sep 2025 – Apr 2026",
    description: "Engineered critical data pipelines for enterprise-grade network analysis.",
    techStack: ["Python", "Pandas", "SQL", "Excel", "Parquet"],
    achievements: [
      "Built resilient ETL pipelines processing TBs of data for Smart Cities.",
      "Implemented complex graph algorithms for network topology analysis.",
    ],
    icon: <Database className="w-6 h-6" />,
    color: "bg-emerald-500",
  },
  {
    company: "Pergamon Advertising",
    role: "Software Engineer",
    period: "Oct 2025 – Mar 2026",
    description:
      "Software Engineer leading a high-impact project, from functional analysis through production deployment.",
    techStack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "TypeScript"],
    achievements: [
      "Designing high-throughput API endpoints to handle concurrent ad requests.",
      "Optimizing database schemas to reduce query latency by 40%.",
    ],
    icon: <Server className="w-6 h-6" />,
    color: "bg-indigo-500",
  },
  {
    company: "Blue Alba LLC",
    role: "Software Engineer",
    period: "Jun 2025 – Sep 2025",
    description: "Backend development for data-intensive analytics platform.",
    techStack: ["NestJS", "React", "React Query", "Zustand", "Redis", "Raw SQL", "Docker"],
    achievements: [
      "Optimized aggregation queries for heavy data visualization widgets.",
      "Containerized microservices improving developer onboarding time.",
    ],
    icon: <Terminal className="w-6 h-6" />,
    color: "bg-pink-500",
  },
  {
    company: "Freelance Consultant",
    role: "Full Stack Engineer",
    period: "Dec 2021 – Jun 2025",
    description: "Delivering bespoke backend architectures and API integrations.",
    techStack: ["Python", "Django", "NestJS", "React", "TypeScript", "SQL", "PostgreSQL"],
    achievements: [
      "Developed secure REST APIs with role-based JWT authentication.",
      "Automated deployment workflows using Docker and CI/CD pipelines.",
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
        description:
          "Construcción de aplicaciones web robustas con integración AI/ML y backends escalables.",
        achievements: [
          "Desarrollé servicios backend escalables con Go y NestJS.",
          "Integré modelos LLM para ampliar capacidades del producto.",
        ],
      },
      {
        ...baseExperience[1],
        description:
          "Diseñé pipelines de datos críticos para análisis de redes a escala empresarial.",
        achievements: [
          "Construí pipelines ETL resilientes para procesar grandes volúmenes de datos.",
          "Implementé algoritmos complejos de grafos para análisis de topología de red.",
        ],
      },
      {
        ...baseExperience[2],
        description:
          "Ingeniero de software a cargo de un proyecto de alto impacto, desde el análisis funcional hasta el despliegue en producción.",
        achievements: [
          "Diseño de APIs de alto throughput para manejar solicitudes publicitarias concurrentes.",
          "Optimización de esquemas de base de datos para reducir la latencia de consultas en un 40%.",
        ],
      },
      {
        ...baseExperience[3],
        description: "Desarrollo backend para una plataforma analítica intensiva en datos.",
        achievements: [
          "Optimicé consultas de agregación para widgets de visualización pesada.",
          "Contenericé microservicios para mejorar tiempos de onboarding técnico.",
        ],
      },
      {
        ...baseExperience[4],
        description: "Desarrollo arquitecturas backend a medida e integraciones de API.",
        achievements: [
          "Desarrollé APIs REST seguras con autenticación JWT y control de roles.",
          "Automaticé despliegues con Docker y pipelines de CI/CD.",
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
        description:
          "Construção de aplicações web robustas com integração AI/ML e backends escaláveis.",
        achievements: [
          "Desenvolvimento de serviços backend escaláveis com Go e NestJS.",
          "Integração de modelos LLM para ampliar capacidades da aplicação.",
        ],
      },
      {
        ...baseExperience[1],
        description:
          "Engenharia de pipelines de dados críticos para análise de redes em nível corporativo.",
        achievements: [
          "Construção de pipelines ETL resilientes para alto volume de dados.",
          "Implementação de algoritmos de grafos para análise de topologia de rede.",
        ],
      },
      {
        ...baseExperience[2],
        description:
          "Engenheiro de software liderando um projeto de alto impacto, da análise funcional ao deploy em produção.",
        achievements: [
          "Desenho de APIs de alto throughput para lidar com requisições concorrentes de anúncios.",
          "Otimização de schemas de banco para reduzir latência de consultas em 40%.",
        ],
      },
      {
        ...baseExperience[3],
        description: "Desenvolvimento backend para plataforma analítica intensiva em dados.",
        achievements: [
          "Otimização de consultas de agregação para widgets analíticos pesados.",
          "Containerização de microsserviços para acelerar onboarding de engenharia.",
        ],
      },
      {
        ...baseExperience[4],
        description: "Entrega de arquiteturas backend sob medida e integrações de API.",
        achievements: [
          "Desenvolvimento de APIs REST seguras com autenticação JWT e controle por papéis.",
          "Automação de deploys com Docker e pipelines de CI/CD.",
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
        description:
          "Создание надежных web-приложений с AI/ML-интеграцией и масштабируемым backend.",
        achievements: [
          "Разработка масштабируемых backend-сервисов на Go и NestJS.",
          "Интеграция LLM для расширения функциональности продукта.",
        ],
      },
      {
        ...baseExperience[1],
        description: "Разработка критичных data-пайплайнов для enterprise-анализа сетей.",
        achievements: [
          "Построение отказоустойчивых ETL-пайплайнов для больших объемов данных.",
          "Реализация сложных графовых алгоритмов для анализа топологии сети.",
        ],
      },
      {
        ...baseExperience[2],
        description:
          "Software Engineer, ведущий high-impact проект: от функционального анализа до продакшн-деплоя.",
        achievements: [
          "Проектирование высокопроизводительных API для параллельных рекламных запросов.",
          "Оптимизация схем БД, снизившая задержку запросов на 40%.",
        ],
      },
      {
        ...baseExperience[3],
        description: "Backend-разработка для data-intensive аналитической платформы.",
        achievements: [
          "Оптимизация агрегирующих запросов для тяжелых аналитических виджетов.",
          "Контейнеризация микросервисов и ускорение инженерного онбординга.",
        ],
      },
      {
        ...baseExperience[4],
        description: "Разработка кастомной backend-архитектуры и API-интеграций.",
        achievements: [
          "Создание защищенных REST API с JWT и ролевой моделью доступа.",
          "Автоматизация деплоя с Docker и CI/CD пайплайнами.",
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
        description: "开发集成 AI/ML 能力的可扩展 Web 应用。",
        achievements: [
          "使用 Go 与 NestJS 构建可扩展后端服务。",
          "集成 LLM 提升应用能力与业务价值。",
        ],
      },
      {
        ...baseExperience[1],
        description: "构建企业级网络分析所需的关键数据管道。",
        achievements: ["搭建高韧性 ETL 管道以处理大规模数据。", "实现复杂图算法用于网络拓扑分析。"],
      },
      {
        ...baseExperience[2],
        description: "作为软件工程师负责高影响力项目，从功能分析到生产部署全流程主导。",
        achievements: [
          "设计高吞吐 API 以处理并发广告请求。",
          "优化数据库模型，将查询延迟降低约 40%。",
        ],
      },
      {
        ...baseExperience[3],
        description: "负责数据密集型分析平台的后端开发。",
        achievements: ["优化重型可视化场景下的聚合查询。", "容器化微服务并改进研发团队入职效率。"],
      },
      {
        ...baseExperience[4],
        description: "为客户交付定制化后端架构与 API 集成方案。",
        achievements: [
          "开发基于 JWT 与角色权限控制的安全 REST API。",
          "通过 Docker 与 CI/CD 自动化发布流程。",
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{job.role}</h3>
                  <div className="text-lg font-medium text-indigo-400">{job.company}</div>
                </div>
                <span className="text-sm font-mono text-gray-500 mt-2 sm:mt-0 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800">
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
