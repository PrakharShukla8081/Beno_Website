"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: FaXTwitter,
    href: "https://x.com/benosupport",
    color: "hover:bg-black",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/benosupport/",
    color: "hover:bg-[#3b5998]",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/beno.support/",
    color: "hover:bg-[#C13584]",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/bensupport-technologies/",
    color: "hover:bg-[#0077B5]",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@benosupport",
    color: "hover:bg-[#FF0000]",
  },
];

const FloatingWindow: React.FC = React.memo(() => {
  return (
    <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 flex-col gap-2 p-2 hidden sm:flex">
      {socialLinks.map(({ icon: Icon, href, color }, idx) => (
        <Link
          key={idx}
          href={href}
          target="_blank"
          className={`
            flex items-center justify-center p-2 rounded-sm
            bg-bblue text-white transition-all duration-300
            hover:scale-105 hover:shadow-lg ${color} animate-slide-in
          `}
          style={{
            animationDelay: `${idx * 100}ms`,
            animationFillMode: "both",
          }}
        >
          <Icon className="text-lg" />
        </Link>
      ))}
    </div>
  );
});

FloatingWindow.displayName = "FloatingWindow";

export default FloatingWindow;
