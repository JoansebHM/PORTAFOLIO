import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

function Education() {
  const { content } = useLanguage();
  const { education } = content;

  return (
    <section id="education">
      <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black -tracking-wider leading-[0.8] text-primary flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-secondary">{education.title1}</span>
        <span>{education.title2}</span>
      </div>

      <div className="mt-6 md:mt-10 flex flex-col gap-6 md:gap-8">
        {education.items.map((item) => (
          <EducationCard
            key={item.id}
            title={item.title}
            institution={item.institution}
            dates={item.dates}
            description={item.description}
            topics={item.topics}
            inProgress={item.id === "eafit" ? education.inProgress : undefined}
            learnTitle={education.learnTitle}
          />
        ))}
      </div>
    </section>
  );
}

interface EducationCardProps {
  title: string;
  institution: string;
  dates: string;
  description?: string;
  topics?: { title: string; text: string }[];
  inProgress?: string;
  learnTitle: string;
}

const EducationCard = ({
  title,
  institution,
  dates,
  description,
  topics,
  inProgress,
  learnTitle,
}: EducationCardProps) => {
  return (
    <div className="flex flex-col text-primary hover:bg-white/5 p-6 md:p-10 rounded-lg transition-all duration-1000">
      <div className="flex flex-col gap-2 justify-center items-center md:items-start text-center md:text-left">
        <span className="text-2xl sm:text-3xl md:text-4xl font-black">{title}</span>
        <span className="text-sm sm:text-md text-gray-300">{institution}</span>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <span className="text-sm sm:text-md text-primary">{dates}</span>
          {inProgress && (
            <span className="text-xs font-bold tracking-wider px-2 py-1 rounded-full border border-white/30 text-secondary">
              {inProgress}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm sm:text-md text-gray-300 mt-2 max-w-xl">{description}</p>
        )}
      </div>

      {topics && topics.length > 0 && (
        <div className="mt-6">
          <span className="block text-sm font-bold tracking-wider text-secondary mb-3 text-center md:text-left">
            {learnTitle.toUpperCase()}
          </span>
          <div className="flex flex-col border border-white/20 rounded-lg divide-y divide-white/20 overflow-hidden">
            {topics.map((topic) => (
              <Dropdown key={topic.title} title={topic.title} text={topic.text} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ title, text }: { title: string; text: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left font-semibold hover:bg-white/5 transition-colors"
      >
        <span>{title}</span>
        <HiChevronDown
          className={`shrink-0 text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm sm:text-md text-gray-300">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
