import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProfileCard from "../components/ProfileCard";
import Presentation from "./Presentation";
import RecentProjects from "./RecentProjects";
import Experience from "./Experience";
import TechSkills from "./TechSkills";
import Contact from "../components/Contact";

function Hero() {
  const containerRef = useRef(null);

  return (
    <section className="relative pt-16 md:pt-24">
      {/* Texto vertical pegado al viewport */}
      <a
        href="https://github.com/JoansebHM"
        target="_blank"
        rel="noreferrer"
        className="
          fixed -left-10 top-1/2 -translate-y-1/2
          hidden lg:block
          text-sm font-medium text-primary
          writing-mode-vertical-rl rotate-90
          tracking-widest
          hover:text-secondary
          z-40
        "
      >
        @JoansebHM.dev
      </a>

      {/* Contenido centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Imagen / Profile */}
          <div className="lg:sticky lg:top-16 lg:self-start w-full lg:w-auto flex justify-center lg:block">
            <ProfileCard />
          </div>

          {/* Texto principal con efecto scroll */}
          <div
            ref={containerRef}
            className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-32 max-w-3xl relative w-full"
          >
            <ScrollFadeComponent>
              <Presentation />
            </ScrollFadeComponent>
            <ScrollFadeComponent>
              <RecentProjects />
            </ScrollFadeComponent>
            <ScrollFadeComponent>
              <Experience />
            </ScrollFadeComponent>
            <ScrollFadeComponent>
              <TechSkills />
            </ScrollFadeComponent>
            <ScrollFadeComponent>
              <Contact />
            </ScrollFadeComponent>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollFadeComponent({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
      }}
    >
      {children}
    </motion.div>
  );
}

export default Hero;
