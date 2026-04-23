"use client";

import React, { useState } from "react";
import Maintitle from "@/components/common/maintitle";
import { FaMinus, FaPlus } from "react-icons/fa6";

export interface FaqItem {
  title: string;
  description: string;
}

export interface FaqProps {
  items: FaqItem[];
  title?: { text: string; color?: "black" | "orange" }[];
  description?: string;
  id?: string;
}

export const Faq: React.FC<FaqProps> = ({
  items,
  title = [
    { text: "FAQ", color: "orange" },
    { text: "for Retail BPO Services", color: "black" },
  ],
  description,
  id,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="container max-w-5xl mx-auto px-4 md:px-8 pt-8 md:pt-12 lg:pt-16 xl:pt-20"
      id={id}
    >
      <Maintitle title={title} description={description} />

      <div className="mt-6 md:mt-10 space-y-2">
        {items.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`border border-gray-400 ${
                isOpen ? "rounded-md" : "rounded-none"
              } overflow-hidden transition-all bg-gray-50`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between items-center w-full px-4 ${
                  isOpen ? "py-2" : "py-4"
                } text-left transition-all duration-300 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold text-xl">
                    {String(index + 1).padStart(2, "0")}.
                  </span>

                  <span
                    className={`text-base md:text-lg ${
                      isOpen ? "font-semibold" : "font-medium"
                    } text-gray-900`}
                  >
                    {item.title}
                  </span>
                </div>

                <span
                  className={`text-2xl font-semibold text-bwhite bg-bblack rounded-full p-1 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 py-3 text-gray-700 text-sm md:text-[15px] leading-relaxed border-t border-gray-300">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
