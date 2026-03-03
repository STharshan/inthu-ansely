import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed md:bottom-20 md:right-7 bottom-16 right-4 z-50 p-3 rounded-full bg-[#0045EF] text-white shadow-lg hover:bg-[#0039CC] transition-opacity duration-300"
    >
      <FiArrowUp className=" sm:w-5 sm:h-5" />
    </button>
  );
};

export default ScrollToTopButton;
