import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiNestjs,
  SiPostgresql,
  SiRabbitmq,
  SiSupabase,
  SiReactquery,
  SiReacthookform,
  SiTypescript,
  SiVercel,
  SiJira,
} from "react-icons/si";

import { useLanguage } from "../context/LanguageContext";

function TechSkills() {
  const { content } = useLanguage();

  return (
    <section id="skills">
      <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black -tracking-wider leading-[0.8] text-primary flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-secondary">{content.skills.title1}</span>
        <span>{content.skills.title2}</span>
      </div>

      <div className="mt-6 md:mt-10 flex flex-col gap-6 md:gap-8">
        <TechSkillCard />
      </div>
    </section>
  );
}

const TechSkillCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-6">
      <div className="group flex items-center justify-center aspect-square p-3 md:p-4 border border-white/20 rounded-lg hover:border-blue-400 transition-all cursor-pointer relative">
        <FaReact className="text-blue-400 text-3xl md:text-4xl lg:text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          React.js
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-3 md:p-4 border border-white/20 rounded-lg hover:border-cyan-400 transition-all cursor-pointer relative">
        <SiTailwindcss className="text-cyan-400 text-3xl md:text-4xl lg:text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Tailwind CSS
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-3 md:p-4 border border-white/20 rounded-lg hover:border-purple-400 transition-all cursor-pointer relative">
        <SiVite className="text-purple-400 text-3xl md:text-4xl lg:text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Vite
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-red-500 transition-all cursor-pointer relative">
        <SiNestjs className="text-red-500 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          NestJS
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-blue-600 transition-all cursor-pointer relative">
        <SiPostgresql className="text-blue-600 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          PostgreSQL
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-orange-500 transition-all cursor-pointer relative">
        <SiRabbitmq className="text-orange-500 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          RabbitMQ
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-green-500 transition-all cursor-pointer relative">
        <SiSupabase className="text-green-500 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Supabase
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-red-600 transition-all cursor-pointer relative">
        <SiReactquery className="text-red-600 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          TanStack Query
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-white transition-all cursor-pointer relative">
        <SiVercel className="text-white text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Vercel
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-pink-500 transition-all cursor-pointer relative">
        <SiReacthookform className="text-pink-500 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          React Hook Form
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-blue-500 transition-all cursor-pointer relative">
        <SiTypescript className="text-blue-500 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          TypeScript
        </span>
      </div>
      <div className="group flex items-center justify-center aspect-square p-4 border border-white/20 rounded-lg hover:border-blue-400 transition-all cursor-pointer relative">
        <SiJira className="text-blue-400 text-5xl" />
        <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
          JIRA
        </span>
      </div>
    </div>
  );
};

export default TechSkills;
