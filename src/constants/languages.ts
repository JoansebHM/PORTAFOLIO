import byteHouseGif from "../assets/gifs/bytehouse_gif.gif";
import kiraGif from "../assets/gifs/KIRA_gif.gif";
import sirmedGif from "../assets/gifs/SIRMED_gif.gif";

interface EducationItem {
    id: string;
    title: string;
    institution: string;
    dates: string;
    description?: string;
    topics?: { title: string; text: string }[];
}

export const LANGUAGES = {
    ES: {
        navbar: {
            about: "Sobre mí",
            projects: "Proyectos",
            experience: "Experiencia",
            education: "Estudios",
            skills: "Habilidades",
            contact: "Contacto",
            downloadCV: "Descargar CV",
        },
        presentation: {
            title1: "INGENIERO DE",
            title2: "SOFTWARE",
            description: "Apasionado por crear experiencias de usuario intuitivas y atractivas. Especializado en transformar ideas en productos bellamente diseñados.",
        },
        experience: {
            title1: "+2.5 AÑOS DE",
            title2: "EXPERIENCIA",
            items: [
                {
                    id: "kira",
                    title: "KIRA - Geovisor del Kratos Innovation Team (EAFIT)",
                    description: "Desarrollo de KIRA, un geovisor web móvil para investigación y levantamiento de requisitos en salidas de campo del Kratos Innovation Team de EAFIT. Permite registrar puntos, zonas y elementos en el mapa, asignar zonas por salida, y adjuntar evidencias (fotos, audios y documentos), con React, TypeScript, MapLibre GL y Supabase con PostGIS, seguridad por roles (RLS) y pruebas end-to-end con Playwright.",
                    dates: "OCT 2026 - PRESENTE"
                },
                {
                    id: "sirmed",
                    title: "SIRMED - Sistema de Información para la Gestión del Riesgo de Desastres de Medellín",
                    description: "Contribución al desarrollo del SIRMED, construyendo interfaces React.js responsivas y modulares con arquitectura limpia, desarrollando formularios complejos, integrando APIs REST seguras, creando dashboards interactivos y diseñando componentes escalables en TypeScript.",
                    dates: "SEP 2024 - PRESENTE"
                },
                {
                    id: "bytehouse",
                    title: "BYTEHOUSE - Sistema de Gestión de Inventarios para Tienda Tecnológica",
                    description: "Desarrollo de una aplicación de comercio electrónico completa con React y TypeScript, integrando Supabase para autenticación, APIs REST, dashboards de administración con CRUD completo y validaciones.",
                    dates: "NOV 2025 - ENE 2026"
                },
                {
                    id: "semillero",
                    title: "Semillero SICEI - Institución Universitaria Pascual Bravo",
                    description: "Entendimiento de necesidades de proyectos mediante comunicación con stakeholders, diseño de arquitecturas de software robustas, optimización de algoritmos y colaboración en equipo para entregas exitosas.",
                    dates: "FEB 2024 - DIC 2025"
                }
            ]
        },
        education: {
            title1: "MI",
            title2: "FORMACIÓN",
            inProgress: "EN CURSO",
            learnTitle: "Qué se aprende",
            items: [
                {
                    id: "pascualbravo",
                    title: "Ingeniería de Software",
                    institution: "Institución Universitaria Pascual Bravo · Medellín",
                    dates: "2021 - 2026",
                },
                {
                    id: "eafit",
                    title: "Especialización en Desarrollo de Software",
                    institution: "Universidad EAFIT · Medellín",
                    dates: "1 AGO 2026 - 2027",
                    topics: [
                        { title: "Entender el problema primero", text: "Lo más importante: se forman especialistas que entienden muy bien el problema antes de construir. Solo así se llega siempre a soluciones y propuestas óptimas." },
                        { title: "Arquitectura de software", text: "Diseñar sistemas que escalen y se mantengan en el tiempo, eligiendo la estructura correcta para cada necesidad." },
                        { title: "Servicios de nube", text: "Aprovechar la nube para desplegar, escalar y operar aplicaciones de forma segura y eficiente." },
                        { title: "Gerencia de proyectos", text: "Planear, priorizar y liderar equipos y entregas, alineando el trabajo técnico con los objetivos del negocio." },
                        { title: "Metodologías ágiles modernas", text: "Desarrollar con prácticas ágiles actuales para entregar valor de forma continua y adaptarse al cambio." },
                        { title: "Trade-offs reales de las empresas", text: "Entender las decisiones que viven las empresas, donde cada opción técnica implica costos, tiempos y riesgos." },
                        { title: "Optimización de costos y procesos", text: "Mejorar procesos y reducir costos sin sacrificar la calidad de lo que se entrega." },
                    ],
                },
                {
                    id: "kratos",
                    title: "Grupo estudiantil KRATOS",
                    institution: "Universidad EAFIT",
                    dates: "ACTUALMENTE",
                    description: "Hago parte del grupo estudiantil KRATOS, donde actualmente desarrollamos un estudio de proximidad en el barrio Manila para Postobón, empresa colombiana. En campo nos apoyamos en KIRA, nuestro geovisor.",
                },
            ] as EducationItem[],
        },
        skills: {
            title1: "HABILIDADES",
            title2: "TECH STACK",
        },
        contact: {
            title1: "VAMOS A",
            title2: "CONECTAR",
            description: "¿Listo para dar vida a tus ideas? Colaboremos y creemos algo increíble juntos.",
            sendEmail: "Enviar Correo",
            connectLinkedIn: "Conectar en LinkedIn",
        },
        profile: {
            role: "Un Ingeniero de Software que ha desarrollado innumerables soluciones innovadoras.",
        },
        footer: {
            description: "Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales con tecnologías modernas.",
            navigation: "Navegación",
            getInTouch: "Contacto",
            available: "Disponible para oportunidades freelance",
            backToTop: "Volver arriba",
            rights: "Sebastian Herrera. Todos los derechos reservados.",
        },
        projects: {
            title: "RECIENTES",
            recent: "PROYECTOS",
            visit: "Visitar Proyecto",
            usedTech: "Tecnologías Usadas",
            items: [
                {
                    id: "kira",
                    title: "KIRA",
                    description: "Geovisor del Kratos Innovation Team (EAFIT) para investigación y levantamiento de requisitos en salidas de campo",
                    image: kiraGif,
                    link: "https://kira-two-phi.vercel.app",
                    technologies: ["React.js", "Vite", "Supabase", "PostgreSQL", "TanStack Query"]
                },
                {
                    id: "sirmed",
                    title: "SIRMED",
                    description: "Sistema de información para la gestión de riesgos y desastres Medellín",
                    image: sirmedGif,
                    link: "https://www.medellin.gov.co/sirmed",
                    technologies: ["React.js", "Tailwind CSS", "Vite", "NestJS", "PostgreSQL", "RabbitMQ", "Supabase", "TanStack Query"]
                },
                {
                    id: "bytehouse",
                    title: "ByteHouse",
                    description: "Sistema de gestión de inventarios y ventas para tienda de tecnología",
                    image: byteHouseGif,
                    link: "https://byte-house.vercel.app/",
                    technologies: ["React.js", "Tailwind CSS", "Vite", "NestJS", "PostgreSQL", "RabbitMQ", "Supabase", "TanStack Query"]
                },
            ],
        },
    },
    EN: {
        navbar: {
            about: "About",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            contact: "Contact",
            downloadCV: "Download CV",
        },
        presentation: {
            title1: "SOFTWARE",
            title2: "ENGINEER",
            description: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
        },
        experience: {
            title1: "+2.5 YEARS OF",
            title2: "EXPERIENCE",
            items: [
                {
                    id: "kira",
                    title: "KIRA - Geoviewer for EAFIT's Kratos Innovation Team",
                    description: "Developed KIRA, a mobile-first web geoviewer used as a research and requirements-gathering tool during field trips for EAFIT's Kratos Innovation Team. It lets the team register points, zones and elements on a map, assign zones per trip, and attach evidence (photos, audio and documents), built with React, TypeScript, MapLibre GL and Supabase with PostGIS, role-based security (RLS) and Playwright end-to-end tests.",
                    dates: "OCT 2026 - PRESENT"
                },
                {
                    id: "sirmed",
                    title: "SIRMED - Information System for Disaster Risk Management of Medellín",
                    description: "Contributed to the development of Medellín’s Disaster Risk Management Information System (SIRMED), building responsive and modular React.js interfaces with clean architecture, developing complex forms with React Hook Form and custom validations, integrating secure REST APIs, creating interactive dashboards with Chart.js, designing scalable reusable components in TypeScript, managing global state with Context API, and implementing full-featured admin interfaces with CRUD operations, file management, and validation logic.",
                    dates: "SEP 2024 - PRESENT"
                },
                {
                    id: "bytehouse",
                    title: "BYTEHOUSE - Inventory and Sales Management System for Tech Store",
                    description: "Developed a full-featured e-commerce application with React and TypeScript, integrating Supabase for authentication and data management, consuming REST APIs, building admin dashboards with full CRUD operations, applying form validations, and deploying to production with Vercel.",
                    dates: "NOV 2025 - JAN 2026"
                },
                {
                    id: "semillero",
                    title: "SICEI Seedbed - Pascual Bravo University",
                    description: "Understanding project needs through close communication with stakeholders, designing robust and efficient software architectures, optimizing algorithms to improve performance, and collaborating closely with the team to ensure successful project delivery.",
                    dates: "FEB 2024 - DEC 2025"
                }
            ]
        },
        education: {
            title1: "MY",
            title2: "EDUCATION",
            inProgress: "IN PROGRESS",
            learnTitle: "What you learn",
            items: [
                {
                    id: "pascualbravo",
                    title: "Software Engineering",
                    institution: "Institución Universitaria Pascual Bravo · Medellín",
                    dates: "2021 - 2026",
                },
                {
                    id: "eafit",
                    title: "Specialization in Software Development",
                    institution: "EAFIT University · Medellín",
                    dates: "AUG 1, 2026 - 2027",
                    topics: [
                        { title: "Understand the problem first", text: "The most important part: it trains specialists who understand the problem deeply before building anything. That is how you always reach optimal solutions and proposals." },
                        { title: "Software architecture", text: "Designing systems that scale and stay maintainable over time, choosing the right structure for each need." },
                        { title: "Cloud services", text: "Using the cloud to deploy, scale and operate applications securely and efficiently." },
                        { title: "Project management", text: "Planning, prioritizing and leading teams and deliveries, aligning technical work with business goals." },
                        { title: "Modern agile methodologies", text: "Building with current agile practices to deliver value continuously and adapt to change." },
                        { title: "Real-world business trade-offs", text: "Understanding the decisions companies actually face, where every technical option carries costs, timelines and risks." },
                        { title: "Cost and process optimization", text: "Improving processes and cutting costs without sacrificing the quality of what gets delivered." },
                    ],
                },
                {
                    id: "kratos",
                    title: "KRATOS Student Group",
                    institution: "EAFIT University",
                    dates: "CURRENT",
                    description: "I am part of the KRATOS student group, where we are currently running a proximity study in the Manila neighborhood for Postobón, a Colombian company. In the field we rely on KIRA, our geoviewer.",
                },
            ] as EducationItem[],
        },
        skills: {
            title1: "SKILLS AND",
            title2: "TECH STACK",
        },
        contact: {
            title1: "LET'S",
            title2: "CONNECT",
            description: "Ready to bring your ideas to life? Let's collaborate and create something amazing together.",
            sendEmail: "Send Email",
            connectLinkedIn: "Connect on LinkedIn",
        },
        profile: {
            role: "A Software Engineer who has developed countless innovative solutions.",
        },
        footer: {
            description: "Full Stack Developer passionate about creating exceptional digital experiences with modern technologies.",
            navigation: "Navigation",
            getInTouch: "Get In Touch",
            available: "Available for freelance opportunities",
            backToTop: "Back to top",
            rights: "Sebastian Herrera. All rights reserved.",
        },
        projects: {
            title: "PROJECTS",
            recent: "RECENT",
            visit: "Visit Project",
            usedTech: "Used Technologies",
            items: [
                {
                    id: "kira",
                    title: "KIRA",
                    description: "Geoviewer for EAFIT's Kratos Innovation Team, a research and requirements-gathering tool for field trips",
                    image: kiraGif,
                    link: "https://kira-two-phi.vercel.app",
                    technologies: ["React.js", "Vite", "Supabase", "PostgreSQL", "TanStack Query"]
                },
                {
                    id: "sirmed",
                    title: "SIRMED",
                    description: "Information system for risk and disaster management in Medellin",
                    image: sirmedGif,
                    link: "https://www.medellin.gov.co/sirmed",
                    technologies: ["React.js", "Tailwind CSS", "Vite", "NestJS", "PostgreSQL", "RabbitMQ", "Supabase", "TanStack Query"]
                },
                {
                    id: "bytehouse",
                    title: "ByteHouse",
                    description: "Inventory and sales management system for a technology store",
                    image: byteHouseGif,
                    link: "https://byte-house.vercel.app/",
                    technologies: ["React.js", "Tailwind CSS", "Vite", "NestJS", "PostgreSQL", "RabbitMQ", "Supabase", "TanStack Query"]
                },
            ],
        },
    },
};
