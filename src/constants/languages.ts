import byteHouseGif from "../assets/gifs/bytehouse_gif.gif";
import sirmedGif from "../assets/gifs/SIRMED_gif.gif";

export const LANGUAGES = {
    ES: {
        navbar: {
            about: "Sobre mí",
            projects: "Proyectos",
            experience: "Experiencia",
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
            title1: "1.5 AÑOS DE",
            title2: "EXPERIENCIA",
            items: [
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
            title1: "1.5 YEARS OF",
            title2: "EXPERIENCE",
            items: [
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
