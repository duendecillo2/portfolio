"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

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
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string): string => {
    if (!mounted) return translations.en[key] || key

    return translations[language][key] || key
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
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.achievements": "Achievements",
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
    "nav.projects": "Proyectos",
    "nav.achievements": "Logros",
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
}
