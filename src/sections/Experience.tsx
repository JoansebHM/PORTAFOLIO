import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { content } = useLanguage();

  return (
    <section id="experience">
      <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black -tracking-wider leading-[0.8] text-primary flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-secondary">{content.experience.title1}</span>
        <span>{content.experience.title2}</span>
      </div>

      <div className="mt-6 md:mt-10 flex flex-col gap-6 md:gap-8">
        {content.experience.items.map((item) => (
          <ExperienceCard
            key={item.id}
            title={item.title}
            description={item.description}
            dates={item.dates}
          />
        ))}
      </div>
    </section>
  );
}

const ExperienceCard = ({
  title,
  description,
  dates,
}: {
  title?: string;
  description?: string;
  dates?: string;
}) => {
  return (
    <div className="group flex flex-col md:flex-row justify-between text-primary hover:bg-purple-200/10 p-6 md:p-10 rounded-lg hover:scale-102 transition-all duration-1000 cursor-pointer">
      <div className="flex flex-col gap-2 justify-center items-center md:items-start text-center md:text-left">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black">{title}</span>
        <span className="text-sm sm:text-md text-gray-300">{description}</span>
        <span className="text-sm sm:text-md text-primary max-w-xs">{dates}</span>
      </div>
    </div>
  );
};

export default Experience;
