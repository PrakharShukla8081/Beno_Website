"use client";

import React, { memo } from "react";
import Maintitle from "../common/maintitle";

interface BenefitItem {
  id: number;
  title: string;
  description: string;
}

interface BenefitsProps {
  mainTitle: { text: string; color?: "black" | "orange" | "white" }[];
  mainDescription?: string;
  benefitsData: BenefitItem[];
  className?: string;
  aos?: string;
  aosDelay?: number;
}

const Benefits: React.FC<BenefitsProps> = memo(
  ({
    mainTitle,
    mainDescription,
    benefitsData,
    className = "",
    aos = "fade-up",
    aosDelay = 0,
  }) => {
    return (
      <section
        className={`mt-8 md:mt-12 lg:mt-16 xl:mt-20 mb-4 md:mb-6 lg:mb-8 ${className}`}
      >
        <div
          className="container max-w-7xl mx-auto px-4 md:px-8 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contact/form-bg.webp')" }}
        >
          <Maintitle
            title={mainTitle}
            description={mainDescription}
            aos={aos}
            aosDelay={aosDelay}
          />

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {benefitsData.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-3 bg-bwhite p-4 border border-[#D1D1D1] border-l-4 border-l-borange"
              >
                <h4 className="text-xl font-semibold text-bblack">
                  {item.title}
                </h4>
                <p className="text-sm text-[#696969]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

export default Benefits;
