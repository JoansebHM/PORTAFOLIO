import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { content } = useLanguage();

  return (
    <section>
      <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black -tracking-wider leading-[0.8] text-primary flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-secondary">{content.contact.title1}</span>
        <span>{content.contact.title2}</span>
      </div>
      <div className="mt-6 md:mt-10 flex flex-col items-center md:items-start">
        <p className="text-primary text-lg sm:text-xl md:text-xl mb-6 md:mb-8 text-center md:text-left">
          {content.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
          <a
            href="mailto:sebashm621@gmail.com"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border border-white/20 text-primary font-semibold rounded-lg hover:bg-tertiary transition-colors duration-300 text-sm md:text-base w-full sm:w-auto"
          >
            {content.contact.sendEmail}
          </a>
          <a
            href="https://www.linkedin.com/in/sebastianherrera05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-background transition-colors duration-300 text-sm md:text-base w-full sm:w-auto"
          >
            {content.contact.connectLinkedIn}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
