"use client";

import { motion } from "framer-motion";
import { Database, Server, Terminal, Globe, Cpu, Workflow, Bot, Calculator, Landmark } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/language-context";

const categoryMeta = [
  { key: "ai", icon: <Bot className="w-5 h-5" />, color: "text-rose-400 bg-rose-400/10" },
  { key: "backend", icon: <Server className="w-5 h-5" />, color: "text-indigo-400 bg-indigo-400/10" },
  { key: "frontend", icon: <Globe className="w-5 h-5" />, color: "text-cyan-400 bg-cyan-400/10" },
  { key: "data", icon: <Database className="w-5 h-5" />, color: "text-emerald-400 bg-emerald-400/10" },
  { key: "languages", icon: <Cpu className="w-5 h-5" />, color: "text-orange-400 bg-orange-400/10" },
  { key: "devops", icon: <Terminal className="w-5 h-5" />, color: "text-pink-400 bg-pink-400/10" },
  { key: "electronics", icon: <Workflow className="w-5 h-5" />, color: "text-amber-400 bg-amber-400/10" },
  { key: "math", icon: <Calculator className="w-5 h-5" />, color: "text-violet-400 bg-violet-400/10" },
  { key: "socioeconomics", icon: <Landmark className="w-5 h-5" />, color: "text-sky-400 bg-sky-400/10" },
] as const;

type LocalizedCategory = {
  title: string;
  skills: string[];
};

type SkillsContent = {
  titleStart: string;
  titleAccent: string;
  subtitle: string;
  categories: Record<(typeof categoryMeta)[number]["key"], LocalizedCategory>;
};

const skillsContent: Record<Language, SkillsContent> = {
  en: {
    titleStart: "Technical",
    titleAccent: "Expertise",
    subtitle: "I specialize in robust backend systems. My toolkit is built around reliable, scalable, and maintainable technologies.",
    categories: {
      ai: {
        title: "AI & Automation",
        skills: ["LLM Integration", "RAG/RACS Architectures", "Evolution API", "Local AI Models", "n8n Workflows", "Cursor & Copilot"],
      },
      backend: {
        title: "Backend Frameworks",
        skills: ["Django (Expert)", "NestJS (Expert)", "FastAPI", "Node.js", "Microservices", "REST & GraphQL"],
      },
      frontend: {
        title: "Frontend & Tools",
        skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS", "Git", "Framer Motion"],
      },
      data: {
        title: "Data & NoSQL",
        skills: ["PostgreSQL", "MongoDB (NoSQL)", "Pandas", "ETL Pipelines", "Vector DBs", "Excel/Power BI"],
      },
      languages: {
        title: "Programming Languages",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "C#", "C", "SQL", "Bash"],
      },
      devops: {
        title: "DevOps & Infrastructure",
        skills: ["Docker", "GitHub Actions", "Redis", "Linux", "AWS", "Nginx"],
      },
      electronics: {
        title: "Electronics",
        skills: ["Arduino", "Raspberry Pi", "Residential Electrical Systems", "General Circuit Analysis"],
      },
      math: {
        title: "Mathematics & Science",
        skills: ["Advanced Mathematics", "Probability & Statistics", "Linear Algebra", "Physics"],
      },
      socioeconomics: {
        title: "Social Sciences, Economics & Finance",
        skills: ["Sociology", "Economics", "Finance"],
      },
    },
  },
  es: {
    titleStart: "Experiencia",
    titleAccent: "Técnica",
    subtitle: "Me especializo en sistemas backend robustos. Mi stack está orientado a tecnologías confiables, escalables y mantenibles.",
    categories: {
      ai: {
        title: "IA y Automatización",
        skills: ["Integración de LLM", "Arquitecturas RAG/RACS", "API Evolution", "Modelos de IA Locales", "Workflows con n8n", "Cursor y Copilot"],
      },
      backend: {
        title: "Frameworks Backend",
        skills: ["Django (Experto)", "NestJS (Experto)", "FastAPI", "Node.js", "Microservicios", "REST y GraphQL"],
      },
      frontend: {
        title: "Frontend y Herramientas",
        skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS", "Git", "Framer Motion"],
      },
      data: {
        title: "Datos y NoSQL",
        skills: ["PostgreSQL", "MongoDB (NoSQL)", "Pandas", "Pipelines ETL", "Bases de Datos Vectoriales", "Excel/Power BI"],
      },
      languages: {
        title: "Lenguajes de Programación",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "C#", "C", "SQL", "Bash"],
      },
      devops: {
        title: "DevOps e Infraestructura",
        skills: ["Docker", "GitHub Actions", "Redis", "Linux", "AWS", "Nginx"],
      },
      electronics: {
        title: "Electrónica",
        skills: ["Arduino", "Raspberry Pi", "Electricidad doméstica", "Circuitos eléctricos en general"],
      },
      math: {
        title: "Matemáticas y Ciencias",
        skills: ["Matemáticas avanzadas", "Probabilidad y estadística", "Álgebra lineal", "Física"],
      },
      socioeconomics: {
        title: "Ciencias Sociales, Economía y Finanzas",
        skills: ["Sociología", "Economía", "Finanzas"],
      },
    },
  },
  pt: {
    titleStart: "Expertise",
    titleAccent: "Técnica",
    subtitle: "Sou especializado em sistemas backend robustos, com foco em tecnologias confiáveis, escaláveis e fáceis de manter.",
    categories: {
      ai: {
        title: "IA e Automação",
        skills: ["Integração de LLM", "Arquiteturas RAG/RACS", "API Evolution", "Modelos Locais de IA", "Workflows com n8n", "Cursor e Copilot"],
      },
      backend: {
        title: "Frameworks Backend",
        skills: ["Django (Especialista)", "NestJS (Especialista)", "FastAPI", "Node.js", "Microsserviços", "REST e GraphQL"],
      },
      frontend: {
        title: "Frontend e Ferramentas",
        skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS", "Git", "Framer Motion"],
      },
      data: {
        title: "Dados e NoSQL",
        skills: ["PostgreSQL", "MongoDB (NoSQL)", "Pandas", "Pipelines ETL", "Bancos Vetoriais", "Excel/Power BI"],
      },
      languages: {
        title: "Linguagens de Programação",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "C#", "C", "SQL", "Bash"],
      },
      devops: {
        title: "DevOps e Infraestrutura",
        skills: ["Docker", "GitHub Actions", "Redis", "Linux", "AWS", "Nginx"],
      },
      electronics: {
        title: "Eletrônica",
        skills: ["Arduino", "Raspberry Pi", "Eletricidade residencial", "Circuitos elétricos em geral"],
      },
      math: {
        title: "Matemática e Ciências",
        skills: ["Matemática avançada", "Probabilidade e estatística", "Álgebra linear", "Física"],
      },
      socioeconomics: {
        title: "Ciências Sociais, Economia e Finanças",
        skills: ["Sociologia", "Economia", "Finanças"],
      },
    },
  },
  ru: {
    titleStart: "Техническая",
    titleAccent: "Экспертиза",
    subtitle: "Специализируюсь на надежных backend-системах и технологиях, рассчитанных на масштабирование и долгосрочную поддержку.",
    categories: {
      ai: {
        title: "ИИ и Автоматизация",
        skills: ["Интеграция LLM", "Архитектуры RAG/RACS", "API Evolution", "Локальные AI-модели", "n8n Workflow", "Cursor и Copilot"],
      },
      backend: {
        title: "Backend Фреймворки",
        skills: ["Django (Эксперт)", "NestJS (Эксперт)", "FastAPI", "Node.js", "Микросервисы", "REST и GraphQL"],
      },
      frontend: {
        title: "Frontend и Инструменты",
        skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS", "Git", "Framer Motion"],
      },
      data: {
        title: "Данные и NoSQL",
        skills: ["PostgreSQL", "MongoDB (NoSQL)", "Pandas", "ETL-пайплайны", "Векторные БД", "Excel/Power BI"],
      },
      languages: {
        title: "Языки Программирования",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "C#", "C", "SQL", "Bash"],
      },
      devops: {
        title: "DevOps и Инфраструктура",
        skills: ["Docker", "GitHub Actions", "Redis", "Linux", "AWS", "Nginx"],
      },
      electronics: {
        title: "Электроника",
        skills: ["Arduino", "Raspberry Pi", "Бытовая электрика", "Общий анализ электрических цепей"],
      },
      math: {
        title: "Математика и Наука",
        skills: ["Продвинутая математика", "Теория вероятностей и статистика", "Линейная алгебра", "Физика"],
      },
      socioeconomics: {
        title: "Социология, Экономика и Финансы",
        skills: ["Социология", "Экономика", "Финансы"],
      },
    },
  },
  zh: {
    titleStart: "技术",
    titleAccent: "专长",
    subtitle: "我专注于稳定可靠的后端系统，技术栈强调可扩展性、可维护性与工程质量。",
    categories: {
      ai: {
        title: "AI 与自动化",
        skills: ["LLM 集成", "RAG/RACS 架构", "Evolution API", "本地 AI 模型", "n8n 工作流", "Cursor 与 Copilot"],
      },
      backend: {
        title: "后端框架",
        skills: ["Django（专家）", "NestJS（专家）", "FastAPI", "Node.js", "微服务", "REST 与 GraphQL"],
      },
      frontend: {
        title: "前端与工具",
        skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS", "Git", "Framer Motion"],
      },
      data: {
        title: "数据与 NoSQL",
        skills: ["PostgreSQL", "MongoDB（NoSQL）", "Pandas", "ETL 流水线", "向量数据库", "Excel/Power BI"],
      },
      languages: {
        title: "编程语言",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "C#", "C", "SQL", "Bash"],
      },
      devops: {
        title: "DevOps 与基础设施",
        skills: ["Docker", "GitHub Actions", "Redis", "Linux", "AWS", "Nginx"],
      },
      electronics: {
        title: "电子技术",
        skills: ["Arduino", "Raspberry Pi", "家庭电气系统", "通用电路分析"],
      },
      math: {
        title: "数学与科学",
        skills: ["高等数学", "概率与统计", "线性代数", "物理"],
      },
      socioeconomics: {
        title: "社会学、经济学与金融",
        skills: ["社会学", "经济学", "金融"],
      },
    },
  },
};

export function Skills() {
  const { language } = useLanguage();
  const content = skillsContent[language];

  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
          {content.titleStart} <span className="text-emerald-400">{content.titleAccent}</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryMeta.map((category, index) => {
          const localizedCategory = content.categories[category.key];

          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>{category.icon}</div>
                <h3 className="font-semibold text-lg text-gray-200">{localizedCategory.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {localizedCategory.skills.map((skill) => (
                  <span
                    key={`${category.key}-${skill}`}
                    className="px-3 py-1.5 text-sm bg-secondary/30 text-gray-300 rounded-md border border-white/5 hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
