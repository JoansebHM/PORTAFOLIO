import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-secondary text-background
        hover:bg-tertiary
        shadow-lg
        transition
      "
      aria-label="Scroll to top"
    >
      <BsArrowUp className="text-xl" />
    </button>
  );
}
