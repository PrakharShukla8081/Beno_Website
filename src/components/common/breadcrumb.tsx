"use client";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="bg-borange sticky top-20 z-49">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-start flex-wrap">
          {items.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <div
                key={item.href}
                className={`w-max md:min-w-32 flex justify-center px-4 py-1.5 ${
                  isActive ? "bg-bwhite" : ""
                }`}
              >
                <a
                  href={item.href}
                  className={`font-medium text-md ${
                    isActive ? "text-bblack" : "text-bwhite"
                  }`}
                >
                  {item.label}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
