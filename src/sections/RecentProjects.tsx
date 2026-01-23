import { useLanguage } from "../context/LanguageContext";
import { ProjectCard } from "../components/ProjectCard";

function RecentProjects() {
  const { content } = useLanguage();

  return (
    <section id="projects">
      <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black -tracking-wider leading-[0.8] text-primary flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-secondary">{content.projects.recent}</span>
        <span>{content.projects.title}</span>
      </div>
      <div className="mt-6 md:mt-10 flex flex-col gap-6 md:gap-8">
        {content.projects.items.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            technologies={project.technologies}
            visitText={content.projects.visit}
            usedTechText={content.projects.usedTech}
          />
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;
