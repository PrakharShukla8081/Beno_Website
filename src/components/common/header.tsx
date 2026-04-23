"use client";

import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import React, { useState, useRef, useEffect, useCallback, memo } from "react";

declare global {
  interface Window {
    gtranslateSettings?: any;
  }
}

interface NavItem {
  label: string;
  href: string;
}

const NAVIGATION_ITEMS: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

const SERVICES_ITEMS: NavItem[] = [
  { label: "BPO Services", href: "/bpo-services" },
  { label: "HR & Talent Services", href: "/hr-talent-services" },
  { label: "Digital Transformation", href: "/digital-transformation" },
  { label: "IT Consulting & Support", href: "/it-consulting-support" },
  { label: "Cyber Security", href: "/cyber-security" },
  { label: "Cloud Services", href: "/cloud-services" },
  { label: "Software Services", href: "/software-services" },
  { label: "Digital Experience", href: "/digital-experience" },
];

const INDUSTRIES_ITEMS: NavItem[] = [
  { label: "BFSI", href: "/bfsi" },
  { label: "IT", href: "/it" },
  { label: "ITES", href: "/ites" },
  { label: "Retail", href: "/retail" },
  { label: "Education", href: "/education" },
  { label: "Logistics", href: "/logistics" },
  { label: "Technology", href: "/technology" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "eCommerce", href: "/ecommerce" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Tour & Travels", href: "/tour-and-travels" },
];

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);
  return { isOpen, toggle, close, open, ref };
};

const DesktopDropdown = memo(
  ({
    title,
    items,
    isOpen,
    onMouseEnter,
    onMouseLeave,
  }: {
    title: string;
    items: NavItem[];
    isOpen: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="flex items-center text-md font-medium text-bblack hover:text-borange transition-colors duration-200"
        aria-expanded={isOpen}
      >
        {title}
        <MdOutlineKeyboardArrowDown
          className={`w-4 h-8 ml-1 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="grid grid-cols-3 gap-x-4 px-4 w-max">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-2 rounded-lg text-md text-bblack font-medium hover:text-borange transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
);
DesktopDropdown.displayName = "DesktopDropdown";

const MobileDropdownSection = memo(
  ({
    title,
    items,
    setIsMobileMenuOpen,
  }: {
    title: string;
    items: NavItem[];
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => (
    <details className="group border-b border-gray-200 last:border-b-0">
      <summary className="flex items-center justify-between cursor-pointer list-none p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200">
        <span className="text-base font-semibold text-bblack group-open:text-borange transition-colors duration-200">
          {title}
        </span>
        <MdOutlineKeyboardArrowDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
      </summary>

      <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-[500px]">
        <div className="pl-5 pr-4 py-2 bg-white space-y-2 border-l-2 border-borange shadow-inner">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)} // ✅ CLOSE MENU
              className="block text-gray-700 text-md font-medium py-2 hover:text-borange hover:translate-x-1 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  )
);

MobileDropdownSection.displayName = "MobileDropdownSection";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesDropdown = useDropdown();
  const industriesDropdown = useDropdown();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      [servicesDropdown, industriesDropdown].forEach((d) => {
        if (d.ref.current && !d.ref.current.contains(event.target as Node)) {
          d.close();
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesDropdown, industriesDropdown]);

  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "hi", "ar", "fr", "es"],
      native_language_names: true,
      detect_browser_language: true,
      wrapper_selector: ".gtranslate_wrapper",
      flag_style: "2d",
      switcher_horizontal_position: "right",
      switcher_vertical_position: "top",
      float_switcher_open_direction: "bottom",
    };

    const addTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    addTranslateScript();
  }, []);

  return (
    <header
      className="bg-cover bg-center bg-no-repeat sticky top-0 z-50 shadow-sm py-1.5 bg-bwhite h-20"
      style={{ backgroundImage: "url('/images/header/header-bg.webp')" }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="focus:outline-none">
            <Image
              src="/images/header/header-logo.webp"
              alt="Company Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <DesktopDropdown
              title="Services"
              items={SERVICES_ITEMS}
              isOpen={servicesDropdown.isOpen}
              onMouseEnter={servicesDropdown.open}
              onMouseLeave={servicesDropdown.close}
            />
            <DesktopDropdown
              title="Industries"
              items={INDUSTRIES_ITEMS}
              isOpen={industriesDropdown.isOpen}
              onMouseEnter={industriesDropdown.open}
              onMouseLeave={industriesDropdown.close}
            />
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-md font-medium text-bblack hover:text-borange transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div>
            <button
              className="lg:hidden p-2 rounded-lg text-bblack hover:text-borange hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <IoCloseOutline className="w-6 h-6" />
              ) : (
                <CiMenuBurger className="w-6 h-6" />
              )}
            </button>
          </div>
          <div className="gtranslate_wrapper"></div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col py-4">
              <MobileDropdownSection
                title="Services"
                items={SERVICES_ITEMS}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
              <MobileDropdownSection
                title="Industries"
                items={INDUSTRIES_ITEMS}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  key={item.href}
                  href={item.href}
                  className="p-4 text-base font-medium text-bblack hover:text-borange hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-borange"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
