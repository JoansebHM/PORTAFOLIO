import {
  FaGithub,
  FaLinkedin,

  FaEnvelope,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { content } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    // Try multiple methods to find the element
    let element = document.getElementById(sectionId);
    if (!element) {
      element = document.querySelector(`#${sectionId}`);
    }
    if (!element) {
      element = document.querySelector(`section[id="${sectionId}"]`);
    }

    if (element) {
      const rect = element.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 100;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/JoansebHM",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sebastianherrera05",
    },

    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:sebashm621@gmail.com",
    },
  ];

  const navigationLinks = [
    { name: content.navbar.about, id: "about" },
    { name: content.navbar.projects, id: "projects" },
    { name: content.navbar.experience, id: "experience" },
    { name: content.navbar.skills, id: "skills" },
    { name: content.navbar.contact, id: "contact" },
  ];

  return (
    <footer className="relative bg-background mt-12 md:mt-20 text-primary">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-tertiary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-primary">
              Sebastian Herrera
            </h3>
            <p className="text-primary/80 text-sm md:text-base">
              {content.footer.description}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3 md:gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/70 hover:text-secondary transition-colors duration-300 text-xl"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg font-medium text-primary">{content.footer.navigation}</h4>
            <nav className="space-y-2 flex flex-col items-center sm:items-start">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary/70 hover:text-secondary transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-lg font-medium text-primary">{content.footer.getInTouch}</h4>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <a
                href="mailto:sebashm621@gmail.com"
                className="block text-primary/70 hover:text-secondary transition-colors duration-300"
              >
                sebashm621@gmail.com
              </a>
              <p className="text-primary/70">
                {content.footer.available}
              </p>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-sm text-tertiary hover:text-secondary transition-colors duration-300 group"
              >
                <span>{content.footer.backToTop}</span>
                <HiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary/60 text-sm">
              © {currentYear} {content.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
