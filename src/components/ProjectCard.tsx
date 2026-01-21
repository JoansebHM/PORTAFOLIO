import { useState } from "react";
import { createPortal } from "react-dom";
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";
import {
    SiNestjs,
    SiPostgresql,
    SiRabbitmq,
    SiReactquery,
    SiSupabase,
    SiTailwindcss,
    SiVite,
} from "react-icons/si";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies?: string[];
    visitText: string;
    usedTechText: string;
}

export const ProjectCard = ({
    title,
    description,
    image,
    link,
    technologies = [],
    visitText,
    usedTechText,
}: ProjectCardProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div
                className="group flex flex-col md:flex-row justify-between text-primary hover:bg-purple-200/10 p-6 md:p-10 rounded-lg hover:scale-102 transition-all duration-1000 cursor-pointer"
                onClick={() => setModalOpen(true)}
            >
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start text-center md:text-left w-full">
                    <div className="rounded-lg w-full md:w-60 h-48 md:h-40 overflow-hidden shrink-0">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-2xl sm:text-3xl sm:text-4xl font-black">{title}</span>
                        <span className="text-sm sm:text-md text-gray-300 max-w-xs mt-2 mx-auto md:mx-0">
                            {description}
                        </span>
                    </div>
                </div>
                <FaExternalLinkAlt className="hidden sm:block group-hover:text-purple-400 transition-colors mt-2" />
            </div>

            {modalOpen &&
                createPortal(
                    <ProjectModal
                        title={title}
                        description={description}
                        image={image}
                        link={link}
                        technologies={technologies}
                        visitText={visitText}
                        usedTechText={usedTechText}
                        onClose={() => setModalOpen(false)}
                    />,
                    document.body
                )}
        </>
    );
};

const ProjectModal = ({
    title,
    description,
    image,
    link,
    technologies,
    visitText,
    usedTechText,
    onClose,
}: ProjectCardProps & { onClose: () => void }) => {
    const getIcon = (tech: string) => {
        switch (tech) {
            case "React.js":
                return <FaReact className="text-blue-400" />;
            case "Tailwind CSS":
                return <SiTailwindcss className="text-cyan-400" />;
            case "Vite":
                return <SiVite className="text-purple-400" />;
            case "NestJS":
                return <SiNestjs className="text-red-500" />;
            case "PostgreSQL":
                return <SiPostgresql className="text-blue-600" />;
            case "RabbitMQ":
                return <SiRabbitmq className="text-orange-500" />;
            case "Supabase":
                return <SiSupabase className="text-green-500" />;
            case "TanStack Query":
                return <SiReactquery className="text-red-600" />;
            default:
                return null;
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="h-auto max-h-[90vh] overflow-auto bg-color-background p-6 rounded-2xl max-w-4xl w-full relative border border-white/30"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
                >
                    ×
                </button>

                <h2 className="text-3xl md:text-4xl font-black mb-6 text-primary">{title}</h2>

                <div className="rounded-xl overflow-hidden mb-6">
                    <img src={image} alt={title} className="w-full h-48 md:h-80 object-cover" />
                </div>

                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {description}
                </p>

                <h2 className="text-2xl md:text-3xl font-black mb-6 text-primary">
                    {usedTechText}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {technologies?.map((tech) => (
                        <div
                            key={tech}
                            className="flex items-center gap-2 p-3 border border-white/20 rounded-lg hover:border-purple-400 transition-all cursor-pointer"
                        >
                            {getIcon(tech)}
                            <span className="text-gray-300">{tech}</span>
                        </div>
                    ))}
                </div>

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    >
                        <FaExternalLinkAlt className="text-sm" />
                        {visitText}
                    </a>
                )}
            </div>
        </div>
    );
};
