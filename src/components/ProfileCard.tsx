import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import profileImage from "../assets/images/portfolio_image.jpeg";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function ProfileCard() {
  const { content } = useLanguage();

  return (
    <motion.div
      className="relative h-fit py-8 lg:py-10 px-4 lg:px-5 rounded-lg flex flex-col gap-4 items-center border border-white/20 shadow-2xl max-w-sm mx-auto lg:max-w-none overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* 1. Fondo de Gradientes Radiales Fluidos */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: "#0F011A", // Color base profundo
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #3B0764 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, #581C87 0%, transparent 40%),
            radial-gradient(circle at 100% 100%, #D8B4FE 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, #7C3AED 0%, transparent 30%)
          `,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 50%",
            "50% 100%",
            "0% 50%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 10, // Aún más lento para máxima elegancia
          repeat: Infinity,
          ease: "easeInOut", // Soft movement
        }}
      />

      {/* 2. Filtro de desenfoque y oscurecimiento para legibilidad */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10 pointer-events-none" />

      {/* Profile Image */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center text-center gap-2 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-white drop-shadow-md">
          Sebastian Herrera
        </h2>
        <span className="text-purple-200 text-sm sm:text-base font-medium opacity-90">
          {content.profile.role}
        </span>
      </div>

      <div className="flex flex-row items-center gap-6 justify-center relative z-10 mt-2">
        <a href="#" className="transform transition-transform hover:scale-125 text-white/80 hover:text-white">
          <BsInstagram className="text-xl lg:text-2xl" />
        </a>
        <a href="#" className="transform transition-transform hover:scale-125 text-white/80 hover:text-white">
          <BsGithub className="text-xl lg:text-2xl" />
        </a>
        <a href="#" className="transform transition-transform hover:scale-125 text-white/80 hover:text-white">
          <BsLinkedin className="text-xl lg:text-2xl" />
        </a>
      </div>
    </motion.div>
  );
}

export default ProfileCard;