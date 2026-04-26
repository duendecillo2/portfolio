"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "en" | "es" | "pt" | "ru" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    // Force an update to any component using translations
    document.dispatchEvent(new Event('languageChanged'))
  }

  const t = (key: string): string => {
    if (!mounted) return translations.en?.[key] || key

    const selectedLanguage = translations[language] || translations.en || {}
    return selectedLanguage[key] || translations.en?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations: Partial<Record<Language, Record<string, string>>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.certifications": "Certifications",
    "nav.global": "Global",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Juan Martin Canguillen",
    "hero.subtitle": "Information Systems Engineering Student · Junior Full Stack Developer",
    "hero.viewProjects": "View Projects",
    "hero.downloadCV": "Download CV",

    // About
    "about.title": "About Me",
    "about.subtitle": "Get to know me better",
    "about.description1":
      "I'm a Junior Full Stack Developer with 1 year of experience building web applications using Django and React. I have a solid foundation in data structures, algorithms, and software engineering principles.",
    "about.description2":
      "Currently in my 4th year of Information Systems Engineering at National Technological University (UTN), I'm passionate about developing scalable applications and adapting quickly to new technologies.",
    "about.fact1.title": "Full Stack Developer",
    "about.fact1.description": "Specializing in Django and React",
    "about.fact2.title": "Engineering Student",
    "about.fact2.description": "4th year at UTN La Plata",
    "about.fact3.title": "Continuous Learner",
    "about.fact3.description": "Always expanding knowledge and skills",
    "about.fact4.title": "La Plata, Buenos Aires",
    "about.fact4.description": "Based in Argentina",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technologies and abilities I've acquired",
    "skills.category1": "Programming Skills",
    "skills.category2": "Frameworks & Tools",
    "skills.category3": "Concepts",
    "skills.category4": "Languages",

    // Skills detailed sections
    "skills.core.title": "Core Skills",
    "skills.core.description": "The essentials.",
    "skills.core.skill1": "Languages: Python, JavaScript, C, C#, HTML/CSS, SQL",
    "skills.core.skill2": "Paradigms: Object-Oriented Programming (OOP), Functional Programming, Logic Programming",
    "skills.core.skill3": "Low-level: Advanced C (Kernel dev), Assembler x86, Bash",

    "skills.frameworks.title": "Frameworks, Libraries & Tools",
    "skills.frameworks.description": "Things I use daily as a developer.",
    "skills.frameworks.skill1": "Django, NestJS, React, Node.js, Bootstrap, Tailwind CSS",
    "skills.frameworks.skill2": "Git, Linux, Docker, Nginx, Zustand, React Query",
    "skills.frameworks.skill3": "SQLite, MySQL, PostgreSQL, Redis",

    "skills.architecture.title": "Software Architecture & Design",
    "skills.architecture.description": "This includes my formal training and ability to build well-thought-out software.",
    "skills.architecture.skill1": "MVC, REST APIs",
    "skills.architecture.skill2": "SOLID & GRASP Principles",
    "skills.architecture.skill3": "GoF Design Patterns",
    "skills.architecture.skill4": "UML, BPMN",

    "skills.methodologies.title": "Methodologies & Practices",
    "skills.methodologies.description": "How I work and organize myself in a professional environment.",
    "skills.methodologies.skill1": "Agile",
    "skills.methodologies.skill2": "TDD",
    "skills.methodologies.skill3": "Clean Code",

    "skills.other.title": "Other Languages & Tech",
    "skills.other.description": "More niche things.",
    "skills.other.skill1": "Haskell, Prolog, Smalltalk",

    "skills.languages.title": "Languages",
    "skills.languages.description": "Natural languages.",
    "skills.languages.skill1": "Spanish (Native)",
    "skills.languages.skill2": "English (C1 - Advanced)",
    "skills.languages.skill3": "Portuguese (A2)",

    // Experience
    "experience.title": "Experience & Education",
    "experience.subtitle": "My professional journey",
    "experience.professional": "Professional Experience",
    "experience.job1.title": "Freelance Full Stack Web Developer",
    "experience.job1.company": "Remote",
    "experience.job1.period": "Sep 2024 – Present",
    "experience.job1.description":
      "Developed and deployed web applications for clients using Django and React. Built responsive UIs, REST APIs, and implemented user authentication and admin features.",
    "experience.job2.title": "Beach Attendant & Cashier",
    "experience.job2.company": "1 Hotel / Boucher Brothers – Miami Beach, USA",
    "experience.job2.period": "Dec 2023 to Mar 2024 and Dec 2024 to Mar 2025",
    "experience.job2.description":
      "Customer-facing role in a high-demand environment. Managed POS systems and ensured excellent client service.",
    "experience.education": "Education",
    "experience.edu1.degree": "Bachelor in Information Systems Engineering",
    "experience.edu1.institution": "National Technological University (UTN), La Plata",
    "experience.edu1.period": "Expected 2026",
    "experience.edu1.description": "GPA: 7.67 (on 10 scale) – 4th year student",
    "experience.edu2.degree": "High School Diploma – Social Sciences",
    "experience.edu2.institution": "Nuestra Señora de Luján, La Plata",
    "experience.edu2.period": "Completed",
    "experience.edu2.description": "GPA: 8.40 (on 10 scale)",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Some of my recent work",
    "projects.project1.title": "Auction Website",
    "projects.project1.description":
      "Real-time bidding platform with WebSockets for live updates, user authentication, responsive design, and enhanced UX/UI experience built with Django.",
    "projects.project1.longDescription":
      "This auction website is a comprehensive platform that enables users to create listings, place bids, and participate in real-time auctions. The application leverages WebSockets to provide instant updates on bidding activity without requiring page refreshes, creating a dynamic and engaging user experience.\n\nKey features include user authentication and authorization, real-time notifications, responsive design for all device types, and an intuitive admin interface for managing listings and users. The platform also includes a robust search and filtering system, allowing users to easily find items of interest.\n\nThe frontend was built with HTML, CSS, and JavaScript, with a focus on creating an accessible and user-friendly interface. The backend was developed using Django, with SQLite as the database. WebSockets were implemented using Django Channels to enable the real-time functionality.\n\nThis project demonstrates my ability to build complex, interactive web applications with a focus on user experience and real-time functionality.",
    "projects.project1.date": "2024",
    "projects.project2.title": "Ticket Management System",
    "projects.project2.description":
      "Full-stack web platform with authentication, CRUD operations, and admin panel using Django and React.",
    "projects.project2.longDescription":
      "The Ticket Management System is a comprehensive solution designed to streamline the process of creating, tracking, and resolving support tickets. This full-stack application combines the power of Django on the backend with React on the frontend to deliver a seamless user experience.\n\nThe system features a robust authentication system with role-based access control, allowing different levels of access for administrators, support staff, and end-users. Users can create tickets, attach files, add comments, and track the status of their requests in real-time.\n\nThe admin panel provides powerful tools for managing tickets, including assignment capabilities, priority settings, categorization, and detailed reporting. The dashboard offers at-a-glance insights into ticket volumes, resolution times, and staff performance metrics.\n\nThe frontend was built with React and Bootstrap, creating a responsive and intuitive interface that works across all devices. The backend leverages Django's powerful ORM and REST framework to provide a secure and scalable API.\n\nThis project showcases my ability to build complex, data-driven applications with sophisticated user interfaces and robust backend systems.",
    "projects.project2.date": "2024",
    "projects.project3.title": "Mundo Figus Store",
    "projects.project3.description":
      "Full-stack SEO-driven e-commerce platform designed to scale online sales and organic acquisition.",
    "projects.project3.longDescription":
      "Mundo Figus Store — Full-Stack E-commerce Platform\n\nDesigned and developed a scalable, SEO-driven e-commerce platform for a retail client seeking to expand market reach and increase online sales through organic traffic growth. Built the entire solution end-to-end, acting as Full-Stack Engineer + DevOps Owner.\n\nCore Responsibilities\n\nArchitected a production-grade platform using Next.js, NestJS, PostgreSQL, Docker, and automated CI/CD pipelines.\n\nEngineered an SEO-first storefront with server-side rendering, indexable dynamic pages, metadata optimization, fast load times, and search-friendly product architecture.\n\nDeveloped secure backend services with JWT authentication, role-based admin access, REST APIs, and robust business logic.\n\nModeled and implemented a relational database supporting thousands of products, orders, customers, stock management, and transactional workflows.\n\nIntegrated Mercado Pago payment processing and custom shipping flows.\n\nBuilt advanced e-commerce features: cart, checkout, search, filtering, order history, admin dashboard, stock control, promotions, and catalog management.\n\nDeployed and maintained infrastructure on a private VPS using Nginx, containers, and automated release workflows.\n\nEngineering Highlights\n\nImplemented queue-based processing to handle concurrent order volume safely and prevent race conditions during peak demand.\n\nOptimized platform performance, scalability, and maintainability for long-term growth.\n\nDelivered a business-focused system capable of scaling both technically and commercially.\n\nOutcome\n\nA high-performance online store positioned for growth through SEO acquisition, operational efficiency, and scalable architecture.",
    "projects.project3.date": "2026",
    "projects.liveDemo": "Live Demo",
    "projects.viewCode": "View Code",
    "projects.viewDetails": "View Details",
    "projects.backToProjects": "Back to Projects",
    "projects.technologies": "Technologies Used",
    "projects.projectGallery": "Project Gallery",
    "projects.demoVideo": "Demo Video",
    "projects.description": "Description",

    // Achievements
    "achievements.title": "Achievements",
    "achievements.subtitle": "Recognition and accomplishments",
    "achievements.achievement1.title": "Argentina Programa – #SéProgramar",
    "achievements.achievement1.description": "Certification in Ruby and JavaScript programming",
    "achievements.achievement2.title": "C Language from 0 to Expert",
    "achievements.achievement2.description": "Comprehensive course on C programming",
    "achievements.achievement3.title": "Microsoft & Fundación – C# Fundamentals",
    "achievements.achievement3.description": "Certification in C# programming fundamentals",
    "achievements.achievement4.title": "Junior Achievement Programs",
    "achievements.achievement4.description": "#YoPuedoProgramar, Plan Your Future & Personal Finance",
    "achievements.achievement5.title": "Self-taught English",
    "achievements.achievement5.description": "Achieved bilingual proficiency through self-study",

    // Contact
    "contact.title": "Contact Me",
    "contact.subtitle": "Let's get in touch",
    "contact.info": "Contact Information",
    "contact.location": "Location",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.collaborate": "Ready to collaborate?",
    "contact.emailMe": "Email Me",
    "contact.copyright": "All rights reserved.",
  },
  es: {
    // Navbar
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.certifications": "Certificaciones",
    "nav.global": "Global",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Juan Martin Canguillen",
    "hero.subtitle": "Estudiante de Ingeniería en Sistemas · Desarrollador Full Stack Junior",
    "hero.viewProjects": "Ver Proyectos",
    "hero.downloadCV": "Descargar CV",

    // About
    "about.title": "Sobre Mí",
    "about.subtitle": "Conóceme mejor",
    "about.description1":
      "Soy un Desarrollador Full Stack Junior con 1 año de experiencia construyendo aplicaciones web con Django y React. Tengo una sólida base en estructuras de datos, algoritmos y principios de ingeniería de software.",
    "about.description2":
      "Actualmente en mi 4to año de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN), me apasiona desarrollar aplicaciones escalables y adaptarme rápidamente a nuevas tecnologías.",
    "about.fact1.title": "Desarrollador Full Stack",
    "about.fact1.description": "Especializado en Django y React",
    "about.fact2.title": "Estudiante de Ingeniería",
    "about.fact2.description": "4to año en UTN La Plata",
    "about.fact3.title": "Aprendiz Continuo",
    "about.fact3.description": "Siempre expandiendo conocimientos",
    "about.fact4.title": "La Plata, Buenos Aires",
    "about.fact4.description": "Basado en Argentina",

    // Skills
    "skills.title": "Habilidades",
    "skills.subtitle": "Tecnologías y capacidades que he adquirido",
    "skills.category1": "Habilidades de Programación",
    "skills.category2": "Frameworks y Herramientas",
    "skills.category3": "Conceptos",
    "skills.category4": "Idiomas",

    // Skills detailed sections
    "skills.core.title": "Habilidades Principales",
    "skills.core.description": "Lo esencial.",
    "skills.core.skill1": "Lenguajes: Python, JavaScript, C, C#, HTML/CSS, SQL",
    "skills.core.skill2": "Paradigmas: Programación Orientada a Objetos (POO), Programación Funcional, Programación Lógica",
    "skills.core.skill3": "Bajo nivel: C Avanzado (dev de Kernel), Assembler x86, Bash",

    "skills.frameworks.title": "Frameworks, Librerías y Herramientas",
    "skills.frameworks.description": "Lo que uso a diario como desarrollador.",
    "skills.frameworks.skill1": "Django, NestJS, React, Node.js, Bootstrap, Tailwind CSS",
    "skills.frameworks.skill2": "Git, Linux, Docker, Nginx, Zustand, React Query",
    "skills.frameworks.skill3": "SQLite, MySQL, PostgreSQL, Redis",

    "skills.architecture.title": "Arquitectura y Diseño de Software",
    "skills.architecture.description": "Esto incluye mi formación formal y capacidad para construir software bien diseñado.",
    "skills.architecture.skill1": "MVC, APIs REST",
    "skills.architecture.skill2": "Principios SOLID y GRASP",
    "skills.architecture.skill3": "Patrones de Diseño GoF",
    "skills.architecture.skill4": "UML, BPMN",

    "skills.methodologies.title": "Metodologías y Prácticas",
    "skills.methodologies.description": "Cómo trabajo y me organizo en un entorno profesional.",
    "skills.methodologies.skill1": "Agile",
    "skills.methodologies.skill2": "TDD",
    "skills.methodologies.skill3": "Clean Code",

    "skills.other.title": "Otros Lenguajes y Tecnologías",
    "skills.other.description": "Cosas más específicas.",
    "skills.other.skill1": "Haskell, Prolog, Smalltalk",

    "skills.languages.title": "Idiomas",
    "skills.languages.description": "Lenguajes naturales.",
    "skills.languages.skill1": "Español (Nativo)",
    "skills.languages.skill2": "Inglés (C1 - Avanzado)",
    "skills.languages.skill3": "Portugués (A2)",

    // Experience
    "experience.title": "Experiencia y Educación",
    "experience.subtitle": "Mi trayectoria profesional",
    "experience.professional": "Experiencia Profesional",
    "experience.job1.title": "Desarrollador Web Full Stack Freelance",
    "experience.job1.company": "Remoto",
    "experience.job1.period": "Sep 2024 – Presente",
    "experience.job1.description":
      "Desarrollé e implementé aplicaciones web para clientes usando Django y React. Construí interfaces de usuario responsivas, APIs REST e implementé autenticación de usuarios y funciones de administración.",
    "experience.job2.title": "Asistente de Playa y Cajero",
    "experience.job2.company": "1 Hotel / Boucher Brothers – Miami Beach, USA",
    "experience.job2.period": "Dic 2023 a Mar 2024 y Dic 2024 a Mar 2025",
    "experience.job2.description":
      "Rol de atención al cliente en un entorno de alta demanda. Gestioné sistemas POS y aseguré un excelente servicio al cliente.",
    "experience.education": "Educación",
    "experience.edu1.degree": "Ingeniería en Sistemas de Información",
    "experience.edu1.institution": "Universidad Tecnológica Nacional (UTN), La Plata",
    "experience.edu1.period": "Esperado 2026",
    "experience.edu1.description": "Promedio: 7.67 (escala de 10) – Estudiante de 4to año",
    "experience.edu2.degree": "Diploma de Escuela Secundaria – Ciencias Sociales",
    "experience.edu2.institution": "Nuestra Señora de Luján, La Plata",
    "experience.edu2.period": "Completado",
    "experience.edu2.description": "Promedio: 8.40 (escala de 10)",

    // Projects
    "projects.title": "Proyectos",
    "projects.subtitle": "Algunos de mis trabajos recientes",
    "projects.project1.title": "Sitio Web de Subastas",
    "projects.project1.description":
      "Plataforma de ofertas en tiempo real con WebSockets para actualizaciones en vivo, autenticación de usuarios, diseño responsivo y experiencia UX/UI mejorada construida con Django.",
    "projects.project1.longDescription":
      "Este sitio web de subastas es una plataforma integral que permite a los usuarios crear listados, realizar ofertas y participar en subastas en tiempo real. La aplicación utiliza WebSockets para proporcionar actualizaciones instantáneas sobre la actividad de ofertas sin necesidad de actualizar la página, creando una experiencia de usuario dinámica y atractiva.\n\nLas características clave incluyen autenticación y autorización de usuarios, notificaciones en tiempo real, diseño responsivo para todo tipo de dispositivos y una interfaz de administración intuitiva para gestionar listados y usuarios. La plataforma también incluye un sistema robusto de búsqueda y filtrado, permitiendo a los usuarios encontrar fácilmente artículos de interés.\n\nEl frontend se construyó con HTML, CSS y JavaScript, con un enfoque en crear una interfaz accesible y fácil de usar. El backend se desarrolló utilizando Django, con SQLite como base de datos. Los WebSockets se implementaron utilizando Django Channels para habilitar la funcionalidad en tiempo real.\n\nEste proyecto demuestra mi capacidad para construir aplicaciones web complejas e interactivas con un enfoque en la experiencia del usuario y la funcionalidad en tiempo real.",
    "projects.project1.date": "2024",
    "projects.project2.title": "Sistema de Gestión de Tickets",
    "projects.project2.description":
      "Plataforma web full-stack con autenticación, operaciones CRUD y panel de administración usando Django y React.",
    "projects.project2.longDescription":
      "El Sistema de Gestión de Tickets es una solución integral diseñada para agilizar el proceso de creación, seguimiento y resolución de tickets de soporte. Esta aplicación full-stack combina el poder de Django en el backend con React en el frontend para ofrecer una experiencia de usuario perfecta.\n\nEl sistema cuenta con un sistema de autenticación robusto con control de acceso basado en roles, permitiendo diferentes niveles de acceso para administradores, personal de soporte y usuarios finales. Los usuarios pueden crear tickets, adjuntar archivos, añadir comentarios y seguir el estado de sus solicitudes en tiempo real.\n\nEl panel de administración proporciona herramientas potentes para gestionar tickets, incluyendo capacidades de asignación, configuración de prioridades, categorización e informes detallados. El dashboard ofrece información de un vistazo sobre volúmenes de tickets, tiempos de resolución y métricas de rendimiento del personal.\n\nEl frontend se construyó con React y Bootstrap, creando una interfaz responsiva e intuitiva que funciona en todos los dispositivos. El backend aprovecha el potente ORM de Django y el framework REST para proporcionar una API segura y escalable.\n\nEste proyecto muestra mi capacidad para construir aplicaciones complejas y basadas en datos con interfaces de usuario sofisticadas y sistemas backend robustos.",
    "projects.project2.date": "2024",
    "projects.project3.title": "Mundo Figus Store",
    "projects.project3.description":
      "Plataforma e-commerce full-stack orientada a SEO, diseñada para escalar ventas online y adquisición orgánica.",
    "projects.project3.longDescription":
      "Mundo Figus Store — Full-Stack E-commerce Platform\n\nDesigned and developed a scalable, SEO-driven e-commerce platform for a retail client seeking to expand market reach and increase online sales through organic traffic growth. Built the entire solution end-to-end, acting as Full-Stack Engineer + DevOps Owner.\n\nCore Responsibilities\n\nArchitected a production-grade platform using Next.js, NestJS, PostgreSQL, Docker, and automated CI/CD pipelines.\n\nEngineered an SEO-first storefront with server-side rendering, indexable dynamic pages, metadata optimization, fast load times, and search-friendly product architecture.\n\nDeveloped secure backend services with JWT authentication, role-based admin access, REST APIs, and robust business logic.\n\nModeled and implemented a relational database supporting thousands of products, orders, customers, stock management, and transactional workflows.\n\nIntegrated Mercado Pago payment processing and custom shipping flows.\n\nBuilt advanced e-commerce features: cart, checkout, search, filtering, order history, admin dashboard, stock control, promotions, and catalog management.\n\nDeployed and maintained infrastructure on a private VPS using Nginx, containers, and automated release workflows.\n\nEngineering Highlights\n\nImplemented queue-based processing to handle concurrent order volume safely and prevent race conditions during peak demand.\n\nOptimized platform performance, scalability, and maintainability for long-term growth.\n\nDelivered a business-focused system capable of scaling both technically and commercially.\n\nOutcome\n\nA high-performance online store positioned for growth through SEO acquisition, operational efficiency, and scalable architecture.",
    "projects.project3.date": "2026",
    "projects.liveDemo": "Demo en Vivo",
    "projects.viewCode": "Ver Código",
    "projects.viewDetails": "Ver Detalles",
    "projects.backToProjects": "Volver a Proyectos",
    "projects.technologies": "Tecnologías Utilizadas",
    "projects.projectGallery": "Galería del Proyecto",
    "projects.demoVideo": "Video de Demostración",
    "projects.description": "Descripción",

    // Achievements
    "achievements.title": "Logros",
    "achievements.subtitle": "Reconocimientos y logros",
    "achievements.achievement1.title": "Argentina Programa – #SéProgramar",
    "achievements.achievement1.description": "Certificación en programación Ruby y JavaScript",
    "achievements.achievement2.title": "Lenguaje C de 0 a Experto",
    "achievements.achievement2.description": "Curso completo de programación en C",
    "achievements.achievement3.title": "Microsoft & Fundación – Fundamentos de C#",
    "achievements.achievement3.description": "Certificación en fundamentos de programación C#",
    "achievements.achievement4.title": "Programas Junior Achievement",
    "achievements.achievement4.description": "#YoPuedoProgramar, Plan Your Future & Personal Finance",
    "achievements.achievement5.title": "Inglés Autodidacta",
    "achievements.achievement5.description": "Alcancé nivel bilingüe mediante estudio autodidacta",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Pongámonos en contacto",
    "contact.info": "Información de Contacto",
    "contact.location": "Ubicación",
    "contact.email": "Correo",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.collaborate": "¿Listo para colaborar?",
    "contact.emailMe": "Envíame un Email",
    "contact.copyright": "Todos los derechos reservados.",
  },
  pt: {
    "nav.skills": "Habilidades",
    "nav.experience": "Experiência",
    "nav.education": "Educação",
    "nav.certifications": "Certificações",
    "nav.global": "Global",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "projects.project1.title": "Site de Leilões",
    "projects.project1.description":
      "Plataforma de lances em tempo real com WebSockets, autenticação de usuários e design responsivo em Django.",
    "projects.project1.longDescription":
      "Esta plataforma de leilões permite criar anúncios, enviar lances e acompanhar atualizações em tempo real com WebSockets.\n\nInclui autenticação e autorização, notificações ao vivo, UI responsiva e um painel administrativo para gestão de anúncios e usuários.\n\nO sistema foi desenvolvido com foco em experiência de usuário, desempenho e escalabilidade para ambientes de alta concorrência.",
    "projects.project1.date": "2024",
    "projects.project2.title": "Sistema de Gestão de Tickets",
    "projects.project2.description":
      "Plataforma full-stack com autenticação, operações CRUD e painel administrativo com Django e React.",
    "projects.project2.longDescription":
      "O sistema centraliza a criação, acompanhamento e resolução de tickets de suporte.\n\nPossui controle de acesso por papéis, comentários, anexos, histórico e painéis de monitoramento operacional.\n\nA aplicação combina backend robusto com interface responsiva para equipes de suporte e gestão.",
    "projects.project2.date": "2024",
    "projects.project3.title": "Mundo Figus Store",
    "projects.project3.description":
      "Plataforma e-commerce full-stack orientada a SEO para escalar vendas online e aquisição orgânica.",
    "projects.project3.longDescription":
      "Mundo Figus Store — Plataforma E-commerce Full-Stack\n\nProjetei e desenvolvi uma plataforma escalável orientada a SEO para ampliar alcance comercial e vendas online.\n\nArquitetura com Next.js, NestJS, PostgreSQL, Docker e CI/CD automatizado, com storefront SSR, páginas indexáveis e performance otimizada.\n\nImplementei autenticação JWT, painel administrativo por papéis, integrações de pagamento e fluxos de checkout, estoque e logística.\n\nResultado: loja de alto desempenho pronta para crescimento técnico e comercial.",
    "projects.project3.date": "2026",
    "projects.backToProjects": "Voltar aos Projetos",
    "projects.technologies": "Tecnologias Utilizadas",
    "projects.projectGallery": "Galeria do Projeto",
    "projects.demoVideo": "Vídeo de Demonstração",
    "projects.description": "Descrição",
  },
  ru: {
    "nav.skills": "Навыки",
    "nav.experience": "Опыт",
    "nav.education": "Образование",
    "nav.certifications": "Сертификаты",
    "nav.global": "Международно",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",
    "projects.project1.title": "Аукционная Платформа",
    "projects.project1.description":
      "Платформа для ставок в реальном времени с WebSockets, аутентификацией пользователей и адаптивным интерфейсом на Django.",
    "projects.project1.longDescription":
      "Платформа позволяет создавать лоты, делать ставки и получать обновления в реальном времени через WebSockets.\n\nРеализованы аутентификация и авторизация, live-уведомления, адаптивный интерфейс и админ-панель для управления лотами и пользователями.\n\nПроект ориентирован на UX, производительность и устойчивость под высокой нагрузкой.",
    "projects.project1.date": "2024",
    "projects.project2.title": "Система Управления Тикетами",
    "projects.project2.description":
      "Full-stack платформа с аутентификацией, CRUD-операциями и административной панелью на Django и React.",
    "projects.project2.longDescription":
      "Система упрощает создание, отслеживание и закрытие тикетов поддержки.\n\nПоддерживает ролевой доступ, комментарии, вложения, историю изменений и аналитические панели.\n\nРешение сочетает надежный backend и удобный адаптивный интерфейс для команд поддержки.",
    "projects.project2.date": "2024",
    "projects.project3.title": "Mundo Figus Store",
    "projects.project3.description":
      "Full-stack e-commerce платформа с SEO-фокусом для масштабирования онлайн-продаж и органического трафика.",
    "projects.project3.longDescription":
      "Mundo Figus Store — Full-Stack E-commerce Платформа\n\nЯ спроектировал и реализовал масштабируемую e-commerce платформу с упором на SEO для роста онлайн-продаж.\n\nАрхитектура построена на Next.js, NestJS, PostgreSQL, Docker и автоматизированном CI/CD, включая SSR-витрину и индексируемые динамические страницы.\n\nРеализованы JWT-аутентификация, ролевой админ-доступ, платежная интеграция, корзина, checkout, управление каталогом и складом.\n\nРезультат: производительная система, готовая к техническому и коммерческому росту.",
    "projects.project3.date": "2026",
    "projects.backToProjects": "Назад к Проектам",
    "projects.technologies": "Использованные Технологии",
    "projects.projectGallery": "Галерея Проекта",
    "projects.demoVideo": "Демо Видео",
    "projects.description": "Описание",
  },
  zh: {
    "nav.skills": "技能",
    "nav.experience": "经验",
    "nav.education": "教育",
    "nav.certifications": "证书",
    "nav.global": "国际化",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "projects.project1.title": "拍卖网站",
    "projects.project1.description":
      "基于 WebSockets 的实时竞价平台，包含用户认证与响应式设计，使用 Django 构建。",
    "projects.project1.longDescription":
      "该拍卖平台支持创建商品、实时出价与即时更新。\n\n系统包含认证授权、实时通知、响应式界面以及用于管理商品和用户的后台。\n\n项目重点在于用户体验、性能与高并发场景下的稳定性。",
    "projects.project1.date": "2024",
    "projects.project2.title": "工单管理系统",
    "projects.project2.description":
      "基于 Django 与 React 的全栈平台，提供认证、CRUD 与管理后台。",
    "projects.project2.longDescription":
      "该系统用于高效管理支持工单的创建、跟踪与处理。\n\n支持角色权限、评论、附件、状态追踪和运营看板。\n\n后端可靠、前端响应式，适用于支持团队与管理场景。",
    "projects.project2.date": "2024",
    "projects.project3.title": "Mundo Figus Store",
    "projects.project3.description":
      "面向 SEO 的全栈电商平台，用于提升线上销售与自然流量增长。",
    "projects.project3.longDescription":
      "Mundo Figus Store — 全栈电商平台\n\n我为零售客户从 0 到 1 设计并开发了可扩展的 SEO 电商平台，目标是扩大市场覆盖并提升线上销售。\n\n技术架构采用 Next.js、NestJS、PostgreSQL、Docker 与自动化 CI/CD，构建了 SSR 店铺、可索引动态页面与高性能访问体验。\n\n后端实现 JWT 认证、角色权限、REST API，以及购物车、结账、订单、库存、促销和目录管理等核心能力。\n\n结果是一个高性能、可持续扩展、可支持业务增长的生产级在线商城。",
    "projects.project3.date": "2026",
    "projects.backToProjects": "返回项目",
    "projects.technologies": "使用技术",
    "projects.projectGallery": "项目画廊",
    "projects.demoVideo": "演示视频",
    "projects.description": "描述",
  },
}

function isSupportedLanguage(value: string): value is Language {
  return value === "en" || value === "es" || value === "pt" || value === "ru" || value === "zh"
}
