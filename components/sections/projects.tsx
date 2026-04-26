"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, LineChart, Globe, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage, type Language } from "@/contexts/language-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  video?: string;
  icon?: React.ReactNode;
  images?: string[];
  highlights: string[];
}

interface ProjectBase {
  id: string
  tags: string[]
  link?: string
  github?: string
  video?: string
  icon?: React.ReactNode
  images?: string[]
}

const baseProjects: ProjectBase[] = [
  {
    id: "dental",
    tags: ["React", "CSS Modules", "React Icons", "Interactive UI"],
    video: "https://youtu.be/pp_iJ4TESk0",
    images: ["/images/ND1.png", "/images/ND2.png", "/images/ND3.png", "/images/ND4.png"],
  },
  {
    id: "mundo",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Nginx", "Mercado Pago", "CI/CD", "JWT"],
    video: "https://youtu.be/y7x6XbN12sE",
    images: ["/images/MFWEB1.Png", "/images/MFWEB2.Png", "/images/MFWEB3.Png", "/images/MFWEB4.Png"],
  },
  {
    id: "auction",
    tags: ["Django", "Django Channels", "WebSockets", "Docker", "Vanilla JavaScript"],
    github: "https://github.com/mcanguillen",
    video: "https://www.youtube.com/watch?v=2lTC5O10n9w",
    images: [
      "/images/fotoMF1.png",
      "/images/fotoMF2.png",
      "/images/fotoMF3.png",
      "/images/fotoMF4.png",
      "/images/fotoMF5.png",
      "/images/fotoMF6.png",
      "/images/fotoMF7.png"
    ],
  },
  {
    id: "analytics",
    tags: ["React", "TypeScript", "Bootstrap", "Postgres"],
    github: "https://github.com/mcanguillen",
    video: "https://www.youtube.com/watch?v=kF1iR2oSZmc",
    images: [
      "/images/fotoST1.png",
      "/images/fotoST2.png",
      "/images/fotoST3.png",
      "/images/fotoST4.png",
      "/images/fotoST5.png",
      "/images/fotoST6.png",
      "/images/fotoST7.png",
      "/images/fotoST8.png",
    ],
  },
  {
    id: "portfolio",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    link: "https://portfolio-martin-canguillen.vercel.app/",
    icon: <Globe className="w-10 h-10 text-primary mb-4" />,
  }
];

const projectsContent: Record<
  Language,
  {
    heading: string
    subtitle: string
    watchDemo: string
    liveDemo: string
    items: Record<string, { title: string; description: string; highlights: string[] }>
  }
> = {
  en: {
    heading: "Selected Work",
    subtitle: "A selection of projects that demonstrate my ability to solve complex engineering problems and deliver high-quality products.",
    watchDemo: "Watch Demo",
    liveDemo: "Live Demo",
    items: {
      dental: {
        title: "Dental Clinic Platform",
        description: "A comprehensive landing page for a dental practice featuring interactive treatment modals, location services, and patient FAQs.",
        highlights: [
          "Designed a clean, trustworthy UI with accessible navigation.",
          "Implemented custom modals for detailed procedure information.",
          "Integrated location services and responsive FAQ sections.",
        ],
      },
      mundo: {
        title: "Mundo Figus Store",
        description: "Full-stack SEO-first e-commerce platform built end-to-end with ownership across architecture, backend, frontend, data model, infrastructure, and deployment.",
        highlights: [
          "Built a production-grade architecture with SSR storefront, REST APIs, auth, admin roles, and transactional workflows.",
          "Implemented SEO-driven product pages, metadata strategy, and performance optimization for organic acquisition.",
          "Deployed and operated the platform on private VPS infrastructure with containers, Nginx, and automated releases.",
        ],
      },
      auction: {
        title: "Real-Time Auction Platform",
        description: "A backend-driven real-time auction system leveraging Django Channels for instant bidirectional WebSocket communication.",
        highlights: [
          "Architected a robust WebSocket layer using Django Channels for sub-second updates.",
          "Implemented complex bidding logic with purely backend-managed state.",
          "Containerized the complete ecosystem using Docker for scalable production deployment.",
        ],
      },
      analytics: {
        title: "Enterprise Analytics Dashboard",
        description: "Ticket Management System with responsive data grids and comprehensive admin panels.",
        highlights: [
          "Virtualized data grids for performance.",
          "Completely responsive UI for mobile administration.",
          "Integrated with complex backend ETL pipelines.",
        ],
      },
      portfolio: {
        title: "Portfolio & Client Sites",
        description: "High-performance marketing sites and personal portfolio with focus on SEO and Vital metrics.",
        highlights: [
          "Lighthouse scores > 90 across all metrics.",
          "Fully accessible and responsive designs.",
          "Automated CI/CD pipelines via GitHub Actions.",
        ],
      },
    },
  },
  es: {
    heading: "Proyectos Destacados",
    subtitle: "Una selección de proyectos que demuestran mi capacidad para resolver problemas de ingeniería complejos y entregar productos de alta calidad.",
    watchDemo: "Ver Demo",
    liveDemo: "Demo en Vivo",
    items: {
      dental: {
        title: "Plataforma de Clínica Dental",
        description: "Landing page integral para una clínica dental con modales interactivos, servicios de ubicación y FAQs para pacientes.",
        highlights: [
          "Diseñé una UI limpia y confiable con navegación accesible.",
          "Implementé modales personalizados para información detallada de tratamientos.",
          "Integré servicios de ubicación y secciones FAQ responsivas.",
        ],
      },
      mundo: {
        title: "Mundo Figus Store",
        description: "Plataforma e-commerce full-stack orientada a SEO, desarrollada end-to-end con ownership completo.",
        highlights: [
          "Construí una arquitectura productiva con SSR, APIs REST, auth y flujos transaccionales.",
          "Implementé estrategia SEO con páginas indexables y optimización de performance.",
          "Desplegué y operé infraestructura en VPS privado con contenedores y Nginx.",
        ],
      },
      auction: {
        title: "Plataforma de Subastas en Tiempo Real",
        description: "Sistema de subastas backend-driven en tiempo real usando Django Channels y comunicación WebSocket bidireccional.",
        highlights: [
          "Arquitectura WebSocket robusta para actualizaciones en sub-segundos.",
          "Lógica compleja de pujas gestionada en backend.",
          "Ecosistema completo containerizado con Docker para despliegue escalable.",
        ],
      },
      analytics: {
        title: "Dashboard Analítico Empresarial",
        description: "Sistema de gestión de tickets con grillas responsivas y paneles de administración integrales.",
        highlights: [
          "Virtualización de grillas para alto rendimiento.",
          "UI completamente responsiva para administración móvil.",
          "Integración con pipelines ETL complejos de backend.",
        ],
      },
      portfolio: {
        title: "Portfolio y Sitios para Clientes",
        description: "Sitios de alto rendimiento y portfolio personal con foco en SEO y métricas de Core Web Vitals.",
        highlights: [
          "Lighthouse > 90 en métricas clave.",
          "Diseños totalmente accesibles y responsivos.",
          "Pipelines CI/CD automatizados con GitHub Actions.",
        ],
      },
    },
  },
  pt: {
    heading: "Projetos em Destaque",
    subtitle: "Seleção de projetos que demonstram minha capacidade de resolver problemas complexos de engenharia e entregar produtos de alta qualidade.",
    watchDemo: "Assistir Demo",
    liveDemo: "Demo ao Vivo",
    items: {
      dental: { title: "Plataforma de Clínica Odontológica", description: "Landing page completa para clínica odontológica com modais interativos, localização e FAQ.", highlights: ["UI limpa e confiável com navegação acessível.", "Modais personalizados para detalhes de tratamentos.", "Seções responsivas com serviços de localização e FAQ."] },
      mundo: { title: "Mundo Figus Store", description: "Plataforma e-commerce full-stack orientada a SEO, construída ponta a ponta.", highlights: ["Arquitetura de produção com SSR, APIs REST, autenticação e fluxos transacionais.", "Estratégia SEO com páginas indexáveis e otimização de performance.", "Infraestrutura em VPS privado com contêineres, Nginx e releases automatizados."] },
      auction: { title: "Plataforma de Leilão em Tempo Real", description: "Sistema de leilão em tempo real com Django Channels e comunicação WebSocket bidirecional.", highlights: ["Camada WebSocket robusta para atualizações em sub-segundos.", "Lógica de lances complexa controlada no backend.", "Ecosistema completo containerizado com Docker para escala."] },
      analytics: { title: "Dashboard Analítico Corporativo", description: "Sistema de tickets com grids responsivos e painéis administrativos completos.", highlights: ["Virtualização de grids para melhor performance.", "UI totalmente responsiva para administração mobile.", "Integração com pipelines ETL complexos de backend."] },
      portfolio: { title: "Portfólio e Sites para Clientes", description: "Sites de alta performance e portfólio pessoal com foco em SEO e métricas vitais.", highlights: ["Pontuações Lighthouse acima de 90.", "Designs acessíveis e responsivos.", "CI/CD automatizado com GitHub Actions."] },
    },
  },
  ru: {
    heading: "Избранные Проекты",
    subtitle: "Подборка проектов, демонстрирующих мой подход к решению сложных инженерных задач и поставке качественных продуктов.",
    watchDemo: "Смотреть Демо",
    liveDemo: "Live Демо",
    items: {
      dental: { title: "Платформа Стоматологической Клиники", description: "Комплексный лендинг с интерактивными модулями лечения, локацией и FAQ.", highlights: ["Разработал чистый и доверительный UI с доступной навигацией.", "Реализовал кастомные модальные окна для процедур.", "Интегрировал сервисы локации и адаптивный FAQ."] },
      mundo: { title: "Mundo Figus Store", description: "Full-stack e-commerce платформа с SEO-фокусом, реализованная end-to-end.", highlights: ["Построил production-архитектуру с SSR, REST API, auth и транзакционными workflow.", "Реализовал SEO-структуру и оптимизацию производительности.", "Развернул инфраструктуру на приватном VPS с контейнерами и Nginx."] },
      auction: { title: "Платформа Онлайн-Аукциона", description: "Backend-driven система аукциона в реальном времени на Django Channels и WebSockets.", highlights: ["Спроектировал устойчивый WebSocket-слой для мгновенных обновлений.", "Реализовал сложную логику ставок на backend.", "Контейнеризировал экосистему в Docker для масштабируемого продакшена."] },
      analytics: { title: "Корпоративный Аналитический Дашборд", description: "Система управления тикетами с адаптивными таблицами и админ-панелями.", highlights: ["Виртуализация таблиц для высокой производительности.", "Полностью адаптивный UI для мобильного администрирования.", "Интеграция со сложными ETL-пайплайнами backend."] },
      portfolio: { title: "Портфолио и Клиентские Сайты", description: "Высокопроизводительные маркетинговые сайты и личное портфолио с упором на SEO.", highlights: ["Lighthouse > 90 по ключевым метрикам.", "Полная доступность и адаптивность интерфейсов.", "Автоматизированные CI/CD пайплайны через GitHub Actions."] },
    },
  },
  zh: {
    heading: "精选项目",
    subtitle: "以下项目展示了我解决复杂工程问题并交付高质量产品的能力。",
    watchDemo: "观看演示",
    liveDemo: "在线演示",
    items: {
      dental: { title: "牙科诊所平台", description: "为牙科诊所打造的综合落地页，包含交互式治疗弹窗、定位服务与患者 FAQ。", highlights: ["设计了清晰可信且可访问的界面。", "实现了用于治疗细节展示的定制弹窗。", "集成定位服务与响应式 FAQ 模块。"] },
      mundo: { title: "Mundo Figus Store", description: "以 SEO 为核心的全栈电商平台，从架构到部署端到端负责。", highlights: ["构建生产级架构，覆盖 SSR 店铺、REST API、鉴权与交易流程。", "实现 SEO 导向页面结构与性能优化策略。", "在私有 VPS 上完成容器化部署与自动化发布。"] },
      auction: { title: "实时拍卖平台", description: "基于 Django Channels 的实时拍卖系统，支持双向 WebSocket 通信。", highlights: ["设计了稳定的 WebSocket 架构以实现秒级更新。", "实现了由后端驱动的复杂竞价逻辑。", "使用 Docker 完整容器化以支持可扩展部署。"] },
      analytics: { title: "企业分析看板", description: "工单管理系统，包含响应式数据网格与完整管理后台。", highlights: ["通过网格虚拟化提升性能。", "实现适配移动管理场景的响应式 UI。", "与复杂后端 ETL 流程完成集成。"] },
      portfolio: { title: "个人作品集与客户站点", description: "高性能营销站点与个人作品集，聚焦 SEO 与核心性能指标。", highlights: ["Lighthouse 关键指标超过 90。", "实现可访问且响应式的界面设计。", "通过 GitHub Actions 构建自动化 CI/CD。"] },
    },
  },
}

export function Projects() {
  const { language } = useLanguage()
  const content = projectsContent[language]
  const projects: Project[] = baseProjects.map((project) => {
    const translated = content.items[project.id]
    return {
      ...project,
      title: translated.title,
      description: translated.description,
      highlights: translated.highlights,
    }
  })

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary">{content.heading}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group flex flex-col justify-between rounded-xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                {project.images && project.images.length > 0 ? (
                   <div className="w-full h-56 bg-black/50 relative">
                     <Carousel className="w-full h-full">
                        <CarouselContent>
                          {project.images.map((img, i) => (
                            <CarouselItem key={i} className="relative w-full h-56">
                              <Image 
                                src={img} 
                                alt={`${project.title} screenshot ${i + 1}`} 
                                fill 
                                className="object-cover"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <CarouselPrevious className="relative inset-0" />
                        </div>
                        <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <CarouselNext className="relative inset-0" />
                        </div>
                     </Carousel>
                   </div>
                ) : (
                  <div className="p-6 md:p-8 pb-0">
                    <div className="bg-primary/10 w-fit p-3 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                      {project.icon || <Trophy className="w-10 h-10 text-primary" />}
                    </div>
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {project.highlights.map((h, i) => (
                       <li key={i} className="text-sm text-muted-foreground/80 flex items-start">
                         <span className="mr-2 text-primary">•</span>
                         {h}
                       </li>
                    ))}
                  </ul>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-[10px] font-mono uppercase tracking-wider font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-white/10">
                      {project.video && (
                        <Link href={project.video} target="_blank" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                           <Play className="w-4 h-4 mr-2" />
                           {content.watchDemo}
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {content.liveDemo}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
