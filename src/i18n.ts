export const locales = ["en", "es"] as const;

export type Lang = (typeof locales)[number];

export const translations = {
  en: {
    name: "Sergio Naranjo",
    tagline: "Software engineer · Builds web products",
    homeTitle: "Sergio Naranjo — Software Engineer",
    langToggle: "Switch language",
    themeToggle: "Toggle theme",
    bio: {
      title: "Sergio",
      description: "A little about me",
      role: "Software engineer",
      experience: "{years}+ years of experience",
      location: "based in Manizales, Colombia 🇨🇴",
      age: "{age} years old",
    },
    presentation: {
      text: "I love solving problems by building web products that are easy to use, that's the part of the job I care about most. Right now, I help my team at <companylink>YipitData</companylink> transform complex data workflows into intuitive, AI-powered dashboards and agentic experiences that give users real insights. Outside of work, I keep building side projects, solving my own problems, and sharing what I learn along the way.",
    },
    topProjects: {
      title: "Top Projects",
      description: "The work I'm proudest of",
      work: "Work",
      personal: "Personal",
      inProgress: "In Progress",
      viewDetails: "View details",
      visitSite: "Visit site",
      sourceCode: "Source code",
      back: "Back to home",
      problemLabel: "The problem",
      solutionLabel: "What I built",
      impactLabel: "Impact",
      stackLabel: "Tech stack",
      items: {
        datascope: {
          tagline:
            "A no-code app for building mobile forms and collecting field data, used by more than 200,000 people in 17 countries.",
          problem:
            "The frontend was built on old Ruby on Rails server-rendered views. It was slow to change, inconsistent, and getting harder to maintain as the product grew.",
          solution:
            "I led the move to React, using React Query and Material UI. I built a design system with over 20 reusable components, wrote Firebase cloud functions to automate some processes, and set up Zustand and React Query caching to keep things fast.",
          impact:
            "Features shipped about 40% faster, backend load dropped around 20% (which cut infra costs and incidents), and what I built reached over 5,000 monthly active users.",
        },
        cobralo: {
          tagline:
            "A simple tool for Colombian freelancers to create and sign invoices.",
          problem:
            'A friend and I kept having to make "cuentas de cobro" for clients. My sister works in agriculture, where farmers often have to make and sign these invoices themselves, usually without much tech background.',
          solution:
            "I built a simple invoice editor with a live preview. You fill in the details, get a clean invoice, and sign it. No accounting knowledge needed.",
          impact:
            "It has made invoicing a lot easier for freelancers and for people who aren't used to tech, including farmers.",
        },
        "gol-data": {
          tagline:
            "A football app powered by AI, with views that change based on what you ask.",
          problem:
            "There is a ton of football data around, but finding a specific answer usually means digging through stat tables that were never made for your question.",
          solution:
            "I'm building an app where you ask in plain words and it builds the right view for you, using AI.",
        },
      },
    },
    experience: {
      title: "Experience",
      description: "My profesional journey through the years",
      current: "Current",
    },
    contact: {
      title: "Contact & Media",
      description: "Feel free to check my social media and contact me",
      resume: "CV",
      emailCopied: "Email copied to clipboard!",
    },
    techStack: {
      title: "Tech Stack",
      description: "All the tools and technologies I use to build amazing things",
    },
  },
  es: {
    name: "Sergio Naranjo",
    tagline: "Ingeniero de software · Construyo productos web",
    homeTitle: "Sergio Naranjo — Ingeniero de software",
    langToggle: "Cambiar idioma",
    themeToggle: "Cambiar tema",
    bio: {
      title: "Sergio",
      description: "Un poco sobre mí",
      role: "Ingeniero de software",
      experience: "{years}+ años de experiencia",
      location: "Manizales, Colombia 🇨🇴",
      age: "{age} años",
    },
    presentation: {
      text: "Me encanta resolver problemas construyendo productos web fáciles de usar, esa es la parte del trabajo que más me apasiona. Ahora mismo, ayudo a mi equipo en <companylink>YipitData</companylink> a transformar flujos de datos complejos en dashboards y experiencias agénticas con IA, que les dan a los usuarios insights reales. Fuera del trabajo, sigo construyendo proyectos personales, resolviendo mis propios problemas y compartiendo lo que aprendo en el camino.",
    },
    topProjects: {
      title: "Proyectos destacados",
      description: "El trabajo del que estoy más orgulloso",
      work: "Profesional",
      personal: "Personal",
      inProgress: "En progreso",
      viewDetails: "Ver detalles",
      visitSite: "Visitar sitio",
      sourceCode: "Código fuente",
      back: "Volver al inicio",
      problemLabel: "El problema",
      solutionLabel: "Qué construí",
      impactLabel: "Impacto",
      stackLabel: "Stack tecnológico",
      items: {
        datascope: {
          tagline:
            "Una app no-code para crear formularios móviles y recolectar datos en campo, usada por más de 200.000 personas en 17 países.",
          problem:
            "El frontend estaba hecho sobre vistas viejas renderizadas en el servidor con Ruby on Rails. Era lento de cambiar, inconsistente y cada vez más difícil de mantener a medida que el producto crecía.",
          solution:
            "Lideré el paso a React, con React Query y Material UI. Construí un design system con más de 20 componentes reutilizables, escribí cloud functions en Firebase para automatizar algunos procesos y configuré caché con Zustand y React Query para mantener todo rápido.",
          impact:
            "Las features salieron alrededor de un 40% más rápido, la carga del backend bajó cerca de un 20% (lo que redujo costos de infraestructura e incidentes) y lo que construí llegó a más de 5.000 usuarios activos mensuales.",
        },
        cobralo: {
          tagline:
            "Una herramienta simple para que freelancers colombianos creen y firmen sus cuentas de cobro.",
          problem:
            "Un amigo y yo teníamos que hacer cuentas de cobro para los clientes todo el tiempo. Mi hermana trabaja en el campo, donde los agricultores muchas veces tienen que hacer y firmar estas cuentas ellos mismos, casi siempre sin mucho conocimiento técnico.",
          solution:
            "Construí un editor de cuentas de cobro simple con vista previa en vivo. Llenas los datos, obtienes una cuenta limpia y la firmas. Sin saber de contabilidad.",
          impact:
            "Ha hecho que cobrar sea mucho más fácil para freelancers y para gente que no está acostumbrada a la tecnología, incluidos agricultores.",
        },
        "gol-data": {
          tagline:
            "Una app de fútbol con IA, con vistas que cambian según lo que preguntes.",
          problem:
            "Hay muchísimos datos de fútbol dando vueltas, pero encontrar una respuesta concreta suele implicar rebuscar en tablas de estadísticas que nunca se pensaron para tu pregunta.",
          solution:
            "Estoy construyendo una app donde preguntas en palabras normales y ella arma la vista adecuada para ti, usando IA.",
        },
      },
    },
    experience: {
      title: "Experiencia",
      description: "Mi trayectoria profesional a través de los años",
      current: "Actual",
    },
    contact: {
      title: "Contacto y redes",
      description: "No dudes en revisar mis redes sociales y contactarme",
      resume: "CV",
      emailCopied: "¡Correo copiado al portapapeles!",
    },
    techStack: {
      title: "Stack tecnológico",
      description:
        "Todas las herramientas y tecnologías que uso para construir cosas increíbles",
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}

export function otherLocale(lang: Lang): Lang {
  return lang === "en" ? "es" : "en";
}

export const ogLocale: Record<Lang, string> = { en: "en_US", es: "es_ES" };

export function localizedPath(locale: Lang, pathname: string): string {
  const bare = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  if (locale === "en") return bare;
  return bare === "/" ? "/es/" : `/es${bare}`;
}
