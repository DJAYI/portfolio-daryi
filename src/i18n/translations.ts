// Sistema de internacionalización — traducciones centralizadas
export type Lang = "en" | "es";

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
    image: string;
}

export interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    url: string | null;
    github: string | null;
}

export interface Translations {
    meta: {
        title: string;
        description: string;
    };
    header: {
        name: string;
        subtitlePrefix: string;
        subtitleHighlight: string;
        linkedin: string;
        resume: string;
    };
    carousel: {
        title: string;
    };
    experience: {
        title: string;
        items: ExperienceItem[];
    };
    projects: {
        title: string;
        items: ProjectItem[];
    };
    langToggle: {
        label: string;
        switchTo: string;
    };
}

const en: Translations = {
    meta: {
        title: "Portfolio of DJAYI",
        description:
            "Fullstack Developer Portfolio of Danilo Arenas Yi - Showcasing projects, skills, and experience in web development.",
    },
    header: {
        name: "Danilo Arenas Yi",
        subtitlePrefix: "Fullstack Developer with ",
        subtitleHighlight: "+1 Year Experience",
        linkedin: "Connect with me on LinkedIn",
        resume: "See resume",
    },
    carousel: {
        title: "Technologies I Work With",
    },
    experience: {
        title: "Experience",
        items: [
            {
                title: "Software Developer Intern",
                company: "Technological University Foundation Comfenalco",
                period: "01/10/2025 – Present",
                description:
                    "Actively participated in the analysis, design, and development of software solutions to improve the educational quality of the institution. In this role, I focused on developing a web solution with an internationalization (i18n) approach, which optimized efficiency in mobility and event processes, standing out for my commitment and proactivity.",
                technologies: [
                    "Laravel",
                    "React",
                    "TailwindCSS",
                    "Apache",
                    "Git",
                    "GitLab",
                ],
                image:
                    "https://hablalonoticias.com/wp-content/uploads/2021/12/E47CF9D3-655D-4C82-ABF2-4820C44BC96D.jpeg",
            },
            {
                title: "Software Developer Intern",
                company: "Government of Bolívar",
                period: "08/03/2021 – 11/17/2021",
                description:
                    "Supported the IT Department at the Government of Bolívar, applying development methodologies and analysis for the design and implementation of software solutions. I was responsible for evaluating and developing requirements, standing out for my responsibility and collaboration.",
                technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
                image:
                    "https://funcicar.org/wp-content/uploads/2024/01/gobernacion-de-bolivar_8540216_20230921081326.jpg",
            },
        ],
    },
    projects: {
        title: "Projects",
        items: [
            {
                title: "Wanderlust",
                description:
                    "Internationalization management platform for Fundación Universitaria Tecnológico Comfenalco. Event and agreement administration, real-time attendance tracking, SNIES reports, interactive dashboard with maps and automatic geocoding.",
                technologies: [
                    "PHP",
                    "Laravel",
                    "Livewire",
                    "PostgreSQL",
                    "TailwindCSS",
                    "Vite",
                    "Apache",
                    "Git",
                    "GitLab",
                ],
                url: "http://wanderlust.tecnologicocomfenalco.edu.co/",
                github: null,
            },
            {
                title: "IzyTracking",
                description:
                    "Real-time tracking platform connecting tourism agencies with transport providers. Google Maps API and WebSocket integration for live vehicle and route tracking.",
                technologies: [
                    "Angular",
                    "TypeScript",
                    "Laravel",
                    "Node.js",
                    "WebSockets",
                    "Google Maps API",
                ],
                url: null,
                github: null,
            },
            {
                title: "Elyon Survey",
                description:
                    "Survey platform with dynamic form creation, email distribution and result analysis. Robust Spring Boot backend with interactive Angular frontend.",
                technologies: [
                    "SpringBoot",
                    "Angular",
                    "TypeScript",
                    "MySQL",
                    "Git",
                    "GitHub",
                ],
                url: null,
                github: "https://github.com/DJAYI/elyon-survey",
            },
            {
                title: "Elyon Yireh Medellín",
                description:
                    "Corporate landing page for Elyon Yireh Medellín. Modern design with scroll-driven animations and lead conversion focus.",
                technologies: ["HTML", "CSS", "JavaScript"],
                url: "https://elyon-yireh-medellin-landing-clon.netlify.app/",
                github: null,
            },
            {
                title: "VoiceToPhone",
                description:
                    "Website for an IP telephony company. VoIP services showcase, plans and contact with responsive design and optimized performance.",
                technologies: ["Astro", "TailwindCSS", "TypeScript", "Node.js"],
                url: "https://voice-to-phone.netlify.app/",
                github: null,
            },
            {
                title: "Currency APP",
                description:
                    "Mobile app for currency conversion with exchange rate history, statistics and charts. Intuitive interface with offline support and multiple currencies.",
                technologies: [
                    "React Native",
                    "TypeScript",
                    "REST API",
                    "Git",
                    "GitHub",
                ],
                url: null,
                github: "https://github.com/DJAYI/cc-app",
            },
        ],
    },
    langToggle: {
        label: "ES",
        switchTo: "/es/",
    },
};

const es: Translations = {
    meta: {
        title: "Portafolio de DJAYI",
        description:
            "Portafolio de Desarrollador Fullstack de Danilo Arenas Yi - Proyectos, habilidades y experiencia en desarrollo web.",
    },
    header: {
        name: "Danilo Arenas Yi",
        subtitlePrefix: "Desarrollador Fullstack con ",
        subtitleHighlight: "+1 Año de Experiencia",
        linkedin: "Conéctate en LinkedIn",
        resume: "Ver currículum",
    },
    carousel: {
        title: "Tecnologías con las que trabajo",
    },
    experience: {
        title: "Experiencia",
        items: [
            {
                title: "Desarrollador de Software — Pasante",
                company: "Fundación Universitaria Tecnológico Comfenalco",
                period: "01/10/2025 – Presente",
                description:
                    "Participé activamente en el análisis, diseño y desarrollo de soluciones de software para mejorar la calidad educativa de la institución. En este rol, me enfoqué en desarrollar una solución web con enfoque de internacionalización (i18n), que optimizó la eficiencia en los procesos de movilidad y eventos, destacándome por mi compromiso y proactividad.",
                technologies: [
                    "Laravel",
                    "React",
                    "TailwindCSS",
                    "Apache",
                    "Git",
                    "GitLab",
                ],
                image:
                    "https://hablalonoticias.com/wp-content/uploads/2021/12/E47CF9D3-655D-4C82-ABF2-4820C44BC96D.jpeg",
            },
            {
                title: "Desarrollador de Software — Pasante",
                company: "Gobernación de Bolívar",
                period: "08/03/2021 – 11/17/2021",
                description:
                    "Apoyé al Departamento de TI de la Gobernación de Bolívar, aplicando metodologías de desarrollo y análisis para el diseño e implementación de soluciones de software. Fui responsable de evaluar y desarrollar requerimientos, destacándome por mi responsabilidad y colaboración.",
                technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
                image:
                    "https://funcicar.org/wp-content/uploads/2024/01/gobernacion-de-bolivar_8540216_20230921081326.jpg",
            },
        ],
    },
    projects: {
        title: "Proyectos",
        items: [
            {
                title: "Wanderlust",
                description:
                    "Plataforma de gestión de Internacionalización para la Fundación Universitaria Tecnológico Comfenalco. Administración de eventos, convenios, asistencia en tiempo real, reportes SNIES, dashboard interactivo con mapas y geocodificación automática.",
                technologies: [
                    "PHP",
                    "Laravel",
                    "Livewire",
                    "PostgreSQL",
                    "TailwindCSS",
                    "Vite",
                    "Apache",
                    "Git",
                    "GitLab",
                ],
                url: "http://wanderlust.tecnologicocomfenalco.edu.co/",
                github: null,
            },
            {
                title: "IzyTracking",
                description:
                    "Plataforma de seguimiento en tiempo real que conecta agencias de turismo con proveedores de transporte. Integración con Google Maps API y WebSockets para tracking en vivo de vehículos y rutas.",
                technologies: [
                    "Angular",
                    "TypeScript",
                    "Laravel",
                    "Node.js",
                    "WebSockets",
                    "Google Maps API",
                ],
                url: null,
                github: null,
            },
            {
                title: "Elyon Survey",
                description:
                    "Plataforma de encuestas con creación dinámica de formularios, distribución por email y análisis de resultados. Backend robusto con Spring Boot y frontend interactivo en Angular.",
                technologies: [
                    "SpringBoot",
                    "Angular",
                    "TypeScript",
                    "MySQL",
                    "Git",
                    "GitHub",
                ],
                url: null,
                github: "https://github.com/DJAYI/elyon-survey",
            },
            {
                title: "Elyon Yireh Medellín",
                description:
                    "Landing page corporativa para Elyon Yireh sede Medellín. Diseño moderno con animaciones scroll-driven y enfoque en conversión de leads.",
                technologies: ["HTML", "CSS", "JavaScript"],
                url: "https://elyon-yireh-medellin-landing-clon.netlify.app/",
                github: null,
            },
            {
                title: "VoiceToPhone",
                description:
                    "Sitio web para empresa de telefonía IP. Presentación de servicios VoIP, planes y contacto con diseño responsivo y rendimiento optimizado.",
                technologies: ["Astro", "TailwindCSS", "TypeScript", "Node.js"],
                url: "https://voice-to-phone.netlify.app/",
                github: null,
            },
            {
                title: "Currency APP",
                description:
                    "Aplicación móvil para cálculo de divisas con historial de tasas de cambio, estadísticas y gráficos. Interfaz intuitiva con soporte offline y múltiples monedas.",
                technologies: [
                    "React Native",
                    "TypeScript",
                    "REST API",
                    "Git",
                    "GitHub",
                ],
                url: null,
                github: "https://github.com/DJAYI/cc-app",
            },
        ],
    },
    langToggle: {
        label: "EN",
        switchTo: "/en/",
    },
};

const translations: Record<Lang, Translations> = { en, es };

export function getTranslations(lang: Lang): Translations {
    return translations[lang] ?? translations.en;
}

export function getLangFromUrl(url: URL): Lang {
    const segments = url.pathname.split("/");
    if (segments[1] === "es") return "es";
    return "en";
}
