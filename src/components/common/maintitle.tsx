"use client";

import React from "react";

interface TitleSegment {
  text: string;
  color?: "black" | "orange" | "white";
}

interface MainTitleProps {
  title: TitleSegment[];
  description?: string;
  descriptionColor?: string;
  aos?: string;
  aosDelay?: number;
}

const Maintitle: React.FC<MainTitleProps> = ({
  title,
  description,
  descriptionColor = "text-bblack",
  aos = "fade-up",
  aosDelay = 0,
}) => {
  return (
    <div data-aos={aos} data-aos-delay={aosDelay}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-center">
        {title.map((seg, index) => (
          <span
            key={index}
            className={
              seg.color === "orange"
                ? "text-borange"
                : seg.color === "white"
                ? "text-bwhite"
                : "text-bblack"
            }
          >
            {seg.text}{" "}
          </span>
        ))}
      </h2>

      {description && (
        <p
          className={`${descriptionColor} text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Maintitle;
