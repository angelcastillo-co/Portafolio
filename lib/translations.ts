/* ============================================================
   TRANSLATION SYSTEM
   Scalable bilingual dictionary (Spanish default / English)
   Edit content here — components read from this object.
   ============================================================ */

export type Locale = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      hero: 'Inicio',
      about: 'Perfil',
      skills: 'Habilidades',
      experience: 'Trayectoria',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      blog: 'Blog',
      ai: 'Angel AI',
      contact: 'Contacto',
    },
    hero: {
      status: 'SISTEMA EN LÍNEA',
      greeting: 'Bienvenido al sistema de',
      fullName: 'MIGUEL ANGEL CASTILLO MUÑOZ',
      alias: 'También conocido como Angel Castillo',
      roles: [
        'Software Engineer',
        'Creative Technologist',
        'Digital Analytics Developer',
        'UI Systems Designer',
      ],
      intro:
        'Diseño y desarrollo experiencias digitales donde la ingeniería, los datos y el arte convergen. Construyo interfaces que se sienten vivas.',
      cta: 'Explorar sistema',
      contact: 'Contactar',
      statsTitle: 'PANEL DE ATRIBUTOS',
      level: 'NIVEL 12',
      levelTitle: 'Creative Developer',
      xp: 'PROGRESO XP',
      stats: {
        frontend: 'Frontend',
        backend: 'Backend',
        uiux: 'UI / UX',
        data: 'Data Analytics',
        ai: 'AI Systems',
        creativity: 'Creatividad',
      },
    },
    about: {
      tag: 'PERFIL DEL SISTEMA',
      title: 'Sobre mí',
      summaryTitle: 'Resumen',
      summary:
        'Soy Angel Castillo, desarrollador y tecnólogo creativo. Combino desarrollo de software, análisis de datos y diseño de interfaces para crear productos digitales con alma. Mi enfoque une la precisión técnica con la estética.',
      philosophyTitle: 'Filosofía',
      philosophy:
        'Creo que el software debe sentirse humano. Cada interacción, animación y línea de código es una oportunidad para crear algo memorable y elegante.',
      interestsTitle: 'Intereses',
      interests:
        'Sistemas de IA, diseño de interfaces holográficas, motion design, análisis de datos y la intersección entre arte y tecnología.',
      visionTitle: 'Visión',
      vision:
        'Construir la próxima generación de experiencias digitales: inteligentes, inmersivas y profundamente bien diseñadas.',
      metrics: {
        years: 'Años aprendiendo',
        tech: 'Tecnologías',
        systems: 'Sistemas construidos',
        ai: 'Exploración IA',
      },
    },
    skills: {
      tag: 'ÁRBOL DE HABILIDADES',
      title: 'Sistema de habilidades',
      subtitle:
        'Una red interconectada de tecnologías dominadas y en evolución constante.',
      proficiency: 'Dominio',
      stackTitle: 'Stack técnico',
    },
    experience: {
      tag: 'ARCHIVO CLASIFICADO',
      title: 'Trayectoria',
      subtitle: 'Registro cronológico de misiones y formación.',
      present: 'Actual',
      items: [
        {
          period: '2023 — Presente',
          role: 'Diseñador y Desarrollador Web Jr',
          org: 'Raíces Comunicaciones',
          status: 'ACTIVO',
          points: [
            'Diseño de campañas digitales',
            'Creación audiovisual',
            'Desarrollo web',
            'Integración de asistentes IA',
          ],
        },
        {
          period: '2024 — Presente',
          role: 'Ingeniería Informática',
          org: 'Estudios universitarios en curso',
          status: 'EN CURSO',
          points: [
            'Fundamentos avanzados de ingeniería',
            'Arquitectura de software',
            'Estructuras de datos y algoritmos',
          ],
        },
        {
          period: '2022 — 2023',
          role: 'Tecnólogo en Análisis y Desarrollo de Software',
          org: 'SENA',
          status: 'COMPLETADO',
          points: [
            'Análisis y diseño de sistemas',
            'Desarrollo full-stack',
            'Bases de datos relacionales',
          ],
        },
        {
          period: 'Próximamente',
          role: 'Próxima misión',
          org: 'Espacio reservado para experiencia futura',
          status: 'BLOQUEADO',
          points: ['Nuevo capítulo en camino…'],
        },
      ],
    },
    projects: {
      tag: 'MÓDULOS DEL SISTEMA',
      title: 'Proyectos',
      subtitle: 'Archivos clasificados. Abre un módulo para ver los detalles.',
      open: 'ABRIR SISTEMA',
      close: 'Cerrar',
      labels: {
        status: 'ESTADO',
        type: 'TIPO',
        rank: 'RANGO',
        stack: 'STACK',
        description: 'DESCRIPCIÓN',
      },
      items: [
        {
          code: 'PROYECTO_01',
          name: 'Angel AI Platform',
          status: 'En desarrollo',
          type: 'Plataforma de IA',
          rank: 'S+',
          description:
            'Asistente de IA personal con interfaz holográfica. Integra modelos de lenguaje, memoria contextual y una experiencia conversacional inmersiva.',
          stack: ['Next.js', 'AI SDK', 'TypeScript', 'Tailwind'],
        },
        {
          code: 'PROYECTO_02',
          name: 'Nebula Analytics',
          status: 'Operativo',
          type: 'Dashboard de datos',
          rank: 'A',
          description:
            'Panel de análisis digital en tiempo real con visualizaciones avanzadas, métricas personalizadas e informes automatizados.',
          stack: ['React', 'Python', 'Recharts', 'PostgreSQL'],
        },
        {
          code: 'PROYECTO_03',
          name: 'Holo Campaign Engine',
          status: 'Prototipo',
          type: 'Plataforma creativa',
          rank: 'A+',
          description:
            'Motor de creación de campañas digitales con plantillas dinámicas, generación de contenido audiovisual y flujo de publicación.',
          stack: ['Next.js', 'Framer Motion', 'Node', 'Blob'],
        },
      ],
    },
    certifications: {
      tag: 'CREDENCIALES VERIFICADAS',
      title: 'Certificaciones',
      subtitle: 'Registro de credenciales y formación validada.',
      verified: 'VERIFICADO',
      items: [
        {
          name: 'Técnico en Sistemas',
          issuer: 'SENA',
          year: '2021',
        },
        {
          name: 'Marketing Digital',
          issuer: 'Certificación profesional',
          year: '2022',
        },
        {
          name: 'Análisis y Desarrollo de Software',
          issuer: 'SENA — Tecnólogo',
          year: '2023',
        },
        {
          name: 'Ingeniería Informática',
          issuer: 'Estudios en curso',
          year: '2024',
        },
      ],
    },
    blog: {
      tag: 'FEED DE CONOCIMIENTO',
      title: 'Blog',
      subtitle: 'Exploraciones sobre tecnología, diseño y sistemas de IA.',
      readMore: 'Leer más',
      soon: 'PRÓXIMAMENTE',
      items: [
        {
          category: 'AI Systems',
          title: 'Diseñando interfaces para asistentes de IA',
          excerpt:
            'Cómo construir experiencias conversacionales que se sientan humanas, fluidas y confiables.',
          date: '2025',
          readTime: '6 min',
        },
        {
          category: 'Creative Development',
          title: 'El arte del motion design en la web',
          excerpt:
            'Principios de animación que elevan una interfaz de funcional a inolvidable.',
          date: '2025',
          readTime: '5 min',
        },
        {
          category: 'Digital Interfaces',
          title: 'Glassmorphism y futurismo holográfico',
          excerpt:
            'Una guía para crear interfaces premium sin caer en lo recargado.',
          date: '2025',
          readTime: '7 min',
        },
      ],
    },
    ai: {
      tag: 'NÚCLEO DE ASISTENTE',
      title: 'Angel AI',
      online: 'SISTEMA EN LÍNEA',
      subtitle: 'Habla con Angel',
      description:
        'Angel es un agente de inteligencia artificial que te guía en los proyectos que necesites. Pregúntale sobre ideas, tecnologías o próximos pasos: está disponible en el círculo flotante en cualquier momento.',
      placeholder: 'Escribe un mensaje…',
      soon: 'Integración próximamente',
      messages: [
        { from: 'ai', text: 'Hola, soy Angel AI. ¿En qué puedo ayudarte hoy?' },
        { from: 'user', text: '¿Qué tecnologías domina Angel?' },
        {
          from: 'ai',
          text: 'Angel trabaja con React, Next.js, Python y sistemas de IA, con foco en diseño de interfaces.',
        },
      ],
      tryNow: 'Hablar con Angel',
    },
    chat: {
      title: 'Angel',
      role: 'Agente de IA',
      online: 'En línea',
      intro:
        'Hola, soy Angel, un agente de inteligencia artificial. Mi propósito es guiarte en los proyectos que necesites. ¿En qué estás trabajando?',
      placeholder: 'Escribe tu mensaje…',
      send: 'Enviar',
      thinking: 'Angel está escribiendo…',
      open: 'Abrir chat con Angel',
      close: 'Cerrar chat',
      reset: 'Nueva conversación',
      error: 'Hubo un problema de conexión. Intenta de nuevo.',
      suggestions: [
        'Quiero crear una página web',
        '¿Cómo puede ayudarme Angel?',
        'Necesito una app con IA',
      ],
    },
    contact: {
      tag: 'CANAL SEGURO',
      title: 'Contacto',
      subtitle: 'Inicia una transmisión. Respondo en menos de 24 horas.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@correo.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto…',
      send: 'Enviar transmisión',
      sent: 'Transmisión enviada',
      connect: 'Conectar canales',
    },
    footer: {
      tagline: 'Sistema operativo personal de un desarrollador creativo.',
      rights: 'Todos los derechos reservados.',
      built: 'Construido con Next.js y Framer Motion',
    },
    theme: { toggle: 'Cambiar tema' },
  },

  en: {
    nav: {
      hero: 'Home',
      about: 'Profile',
      skills: 'Skills',
      experience: 'Timeline',
      projects: 'Projects',
      certifications: 'Certifications',
      blog: 'Blog',
      ai: 'Angel AI',
      contact: 'Contact',
    },
    hero: {
      status: 'SYSTEM ONLINE',
      greeting: 'Welcome to the system of',
      fullName: 'MIGUEL ANGEL CASTILLO MUÑOZ',
      alias: 'Also known as Angel Castillo',
      roles: [
        'Software Engineer',
        'Creative Technologist',
        'Digital Analytics Developer',
        'UI Systems Designer',
      ],
      intro:
        'I design and build digital experiences where engineering, data and art converge. I craft interfaces that feel alive.',
      cta: 'Explore system',
      contact: 'Get in touch',
      statsTitle: 'ATTRIBUTE PANEL',
      level: 'LEVEL 12',
      levelTitle: 'Creative Developer',
      xp: 'XP PROGRESS',
      stats: {
        frontend: 'Frontend',
        backend: 'Backend',
        uiux: 'UI / UX',
        data: 'Data Analytics',
        ai: 'AI Systems',
        creativity: 'Creativity',
      },
    },
    about: {
      tag: 'SYSTEM PROFILE',
      title: 'About me',
      summaryTitle: 'Summary',
      summary:
        'I am Angel Castillo, a developer and creative technologist. I blend software development, data analytics and interface design to craft digital products with soul, uniting technical precision with aesthetics.',
      philosophyTitle: 'Philosophy',
      philosophy:
        'I believe software should feel human. Every interaction, animation and line of code is a chance to create something memorable and elegant.',
      interestsTitle: 'Interests',
      interests:
        'AI systems, holographic interface design, motion design, data analytics and the intersection of art and technology.',
      visionTitle: 'Vision',
      vision:
        'To build the next generation of digital experiences: intelligent, immersive and deeply well designed.',
      metrics: {
        years: 'Years learning',
        tech: 'Technologies',
        systems: 'Systems built',
        ai: 'AI exploration',
      },
    },
    skills: {
      tag: 'SKILL TREE',
      title: 'Skill system',
      subtitle:
        'An interconnected network of mastered and constantly evolving technologies.',
      proficiency: 'Proficiency',
      stackTitle: 'Tech stack',
    },
    experience: {
      tag: 'CLASSIFIED ARCHIVE',
      title: 'Timeline',
      subtitle: 'Chronological record of missions and training.',
      present: 'Present',
      items: [
        {
          period: '2023 — Present',
          role: 'Jr Web Designer & Developer',
          org: 'Raíces Comunicaciones',
          status: 'ACTIVE',
          points: [
            'Digital campaign design',
            'Audiovisual creation',
            'Web development',
            'AI assistant integration',
          ],
        },
        {
          period: '2024 — Present',
          role: 'Computer Engineering',
          org: 'University studies in progress',
          status: 'IN PROGRESS',
          points: [
            'Advanced engineering foundations',
            'Software architecture',
            'Data structures and algorithms',
          ],
        },
        {
          period: '2022 — 2023',
          role: 'Software Analysis & Development Technologist',
          org: 'SENA',
          status: 'COMPLETED',
          points: [
            'Systems analysis and design',
            'Full-stack development',
            'Relational databases',
          ],
        },
        {
          period: 'Coming soon',
          role: 'Next mission',
          org: 'Reserved space for future experience',
          status: 'LOCKED',
          points: ['A new chapter on the way…'],
        },
      ],
    },
    projects: {
      tag: 'SYSTEM MODULES',
      title: 'Projects',
      subtitle: 'Classified files. Open a module to view the details.',
      open: 'OPEN SYSTEM',
      close: 'Close',
      labels: {
        status: 'STATUS',
        type: 'TYPE',
        rank: 'RANK',
        stack: 'STACK',
        description: 'DESCRIPTION',
      },
      items: [
        {
          code: 'PROJECT_01',
          name: 'Angel AI Platform',
          status: 'In Development',
          type: 'AI Platform',
          rank: 'S+',
          description:
            'A personal AI assistant with a holographic interface. Integrates language models, contextual memory and an immersive conversational experience.',
          stack: ['Next.js', 'AI SDK', 'TypeScript', 'Tailwind'],
        },
        {
          code: 'PROJECT_02',
          name: 'Nebula Analytics',
          status: 'Operational',
          type: 'Data Dashboard',
          rank: 'A',
          description:
            'A real-time digital analytics dashboard with advanced visualizations, custom metrics and automated reporting.',
          stack: ['React', 'Python', 'Recharts', 'PostgreSQL'],
        },
        {
          code: 'PROJECT_03',
          name: 'Holo Campaign Engine',
          status: 'Prototype',
          type: 'Creative Platform',
          rank: 'A+',
          description:
            'A digital campaign creation engine with dynamic templates, audiovisual content generation and a publishing flow.',
          stack: ['Next.js', 'Framer Motion', 'Node', 'Blob'],
        },
      ],
    },
    certifications: {
      tag: 'VERIFIED CREDENTIALS',
      title: 'Certifications',
      subtitle: 'Record of credentials and validated training.',
      verified: 'VERIFIED',
      items: [
        { name: 'Systems Technician', issuer: 'SENA', year: '2021' },
        {
          name: 'Digital Marketing',
          issuer: 'Professional certification',
          year: '2022',
        },
        {
          name: 'Software Analysis & Development',
          issuer: 'SENA — Technologist',
          year: '2023',
        },
        {
          name: 'Computer Engineering',
          issuer: 'Studies in progress',
          year: '2024',
        },
      ],
    },
    blog: {
      tag: 'KNOWLEDGE FEED',
      title: 'Blog',
      subtitle: 'Explorations on technology, design and AI systems.',
      readMore: 'Read more',
      soon: 'COMING SOON',
      items: [
        {
          category: 'AI Systems',
          title: 'Designing interfaces for AI assistants',
          excerpt:
            'How to build conversational experiences that feel human, fluid and trustworthy.',
          date: '2025',
          readTime: '6 min',
        },
        {
          category: 'Creative Development',
          title: 'The art of motion design on the web',
          excerpt:
            'Animation principles that elevate an interface from functional to unforgettable.',
          date: '2025',
          readTime: '5 min',
        },
        {
          category: 'Digital Interfaces',
          title: 'Glassmorphism and holographic futurism',
          excerpt: 'A guide to crafting premium interfaces without the clutter.',
          date: '2025',
          readTime: '7 min',
        },
      ],
    },
    ai: {
      tag: 'ASSISTANT CORE',
      title: 'Angel AI',
      online: 'SYSTEM ONLINE',
      subtitle: 'Talk with Angel',
      description:
        'Angel is an artificial intelligence agent that guides you on the projects you need. Ask about ideas, technologies or next steps — it is available in the floating circle anytime.',
      placeholder: 'Type a message…',
      soon: 'Integration coming soon',
      messages: [
        { from: 'ai', text: 'Hi, I am Angel AI. How can I help you today?' },
        { from: 'user', text: 'What technologies does Angel master?' },
        {
          from: 'ai',
          text: 'Angel works with React, Next.js, Python and AI systems, with a focus on interface design.',
        },
      ],
      tryNow: 'Talk with Angel',
    },
    chat: {
      title: 'Angel',
      role: 'AI Agent',
      online: 'Online',
      intro:
        'Hi, I am Angel, an artificial intelligence agent. My purpose is to guide you on the projects you need. What are you working on?',
      placeholder: 'Type your message…',
      send: 'Send',
      thinking: 'Angel is typing…',
      open: 'Open chat with Angel',
      close: 'Close chat',
      reset: 'New conversation',
      error: 'There was a connection problem. Please try again.',
      suggestions: [
        'I want to build a website',
        'How can Angel help me?',
        'I need an AI-powered app',
      ],
    },
    contact: {
      tag: 'SECURE CHANNEL',
      title: 'Contact',
      subtitle: 'Start a transmission. I reply within 24 hours.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Tell me about your project…',
      send: 'Send transmission',
      sent: 'Transmission sent',
      connect: 'Connect channels',
    },
    footer: {
      tagline: 'The personal operating system of a creative developer.',
      rights: 'All rights reserved.',
      built: 'Built with Next.js and Framer Motion',
    },
    theme: { toggle: 'Toggle theme' },
  },
} as const

/** Widen `as const` literal types so both locales satisfy one shared shape. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { -readonly [K in keyof T]: Widen<T[K]> }

export type Dictionary = Widen<(typeof translations)['es']>
