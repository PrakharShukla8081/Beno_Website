"use client";

import React, { useEffect, useState, useCallback } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { usePathname } from "next/navigation";

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-md bg-borange hover:bg-bblue text-bwhite cursor-pointer transition-all duration-300
        ${
          isVisible
            ? "opacity-100 translate-y-0 animate-bounce"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
    >
      <IoIosArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
