"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export interface FaqItem {
  title: string;
  description: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              <div
                className="bg-[#FEF2EA] cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="container max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                  <h1 className="text-bblack text-xl md:text-2xl font-medium py-4">
                    {faq.title}
                  </h1>

                  <span className="w-6 h-6 bg-borange flex items-center justify-center text-bwhite rounded-full transition-all duration-300">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
              </div>

              <div
                className={`container max-w-7xl mx-auto px-4 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-[500px] opacity-100 mt-2 md:mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-bblack pb-3">{faq.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
