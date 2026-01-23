import { GoDownload } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import CV from "../assets/documents/CV English - Joan Herrera.pdf";

function Navbar() {
  const { language, toggleLanguage, content } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  const handleDownloadCV = () => {
    window.open(CV, "_blank");
  };

  return (
    <header className="backdrop-blur-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <span className="text-primary text-lg font-semibold hover:text-secondary cursor-pointer transition-colors">
            Sebastian Herrera
          </span>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            <ul className="flex gap-8 text-lg font-medium text-primary">
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection("about")}
              >
                {content.navbar.about}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection("projects")}
              >
                {content.navbar.projects}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection("experience")}
              >
                {content.navbar.experience}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection("skills")}
              >
                {content.navbar.skills}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection("contact")}
              >
                {content.navbar.contact}
              </li>
            </ul>

            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full font-medium transition-colors bg-primary text-background hover:bg-secondary"
            >
              {language}
            </button>

            <div
              className="flex items-center gap-2 text-primary text-lg cursor-pointer hover:text-tertiary transition-colors"
              onClick={handleDownloadCV}
            >
              <span className="hidden xl:block">
                {content.navbar.downloadCV}
              </span>
              <GoDownload />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-primary hover:text-secondary transition-colors"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800/50 py-4">
            <ul className="flex flex-col gap-4 text-primary">
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300 py-2"
                onClick={() => {
                  scrollToSection("about");
                  setIsMobileMenuOpen(false);
                }}
              >
                {content.navbar.about}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300 py-2"
                onClick={() => {
                  scrollToSection("projects");
                  setIsMobileMenuOpen(false);
                }}
              >
                {content.navbar.projects}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300 py-2"
                onClick={() => {
                  scrollToSection("experience");
                  setIsMobileMenuOpen(false);
                }}
              >
                {content.navbar.experience}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300 py-2"
                onClick={() => {
                  scrollToSection("skills");
                  setIsMobileMenuOpen(false);
                }}
              >
                {content.navbar.skills}
              </li>
              <li
                className="hover:text-secondary cursor-pointer transition-colors duration-300 py-2"
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                {content.navbar.contact}
              </li>
              <li className="flex items-center gap-4 pt-4 border-t border-gray-800/50 mt-4">
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 rounded-full font-medium transition-colors bg-primary text-black hover:bg-secondary"
                >
                  {language}
                </button>
                <div
                  className="flex items-center gap-2 text-primary cursor-pointer hover:text-tertiary transition-colors"
                  onClick={handleDownloadCV}
                >
                  <span>{content.navbar.downloadCV}</span>
                  <GoDownload />
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
