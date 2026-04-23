"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
  showLabel?: boolean;
}

const WhatsAppButton = ({
  phoneNumber = "+918929884561",
  message = "Hello, I'm interested in your services",
  label = "Chat with us",
  showLabel = false,
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-[#25D366] text-white
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${showLabel ? "px-4 py-3" : "p-3"}
        hover:bg-[#128C7E]
        active:scale-95
      `}
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <div className="relative">
        <FaWhatsapp className="w-6 h-6" />
        {/* Online indicator dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full">
          <div className="w-full h-full bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Label - only shows on hover if showLabel is false, always shows if showLabel is true */}
      {(showLabel || isHovered) && (
        <span className="font-medium whitespace-nowrap pr-1">{label}</span>
      )}
    </button>
  );
};

export default WhatsAppButton;
