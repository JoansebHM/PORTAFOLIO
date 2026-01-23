import Stats from "../components/Stats";
import { useLanguage } from "../context/LanguageContext";

function Presentation() {
  const { content } = useLanguage();

  return (
    <section id="about">
      <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black -tracking-wider leading-[0.8] text-primary flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-secondary">{content.presentation.title1}</span>
        <span>{content.presentation.title2}</span>
      </div>

      {/* Descripción */}
      <p className="text-primary text-lg sm:text-xl md:text-2xl mt-4 md:mt-6 text-center md:text-left">
        {content.presentation.description}
      </p>

      {/* Stats */}
      <Stats />
    </section>
  );
}

export default Presentation;
