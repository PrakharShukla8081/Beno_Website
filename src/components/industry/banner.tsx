"use client";
import React from "react";
import Button from "../common/button";

interface BannerProps {
  title: string;
  description?: string;
  button1?: string;
  href1?: string;
  button2?: string;
  href2?: string;
  bg: string;
  titleColor?: string;
  descriptionColor?: string;
  bannerContentAlignment?: "center" | "left";
  className?: string;
  onClickButton2?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  button1,
  href1,
  button2,
  href2,
  bg,
  titleColor = "text-bblack",
  descriptionColor = "text-bblack",
  bannerContentAlignment = "center",
  className = "min-h-[40vh] md:min-h-[50vh]",
  onClickButton2,
}) => {
  return (
    <div
      className={`bg-no-repeat bg-center bg-cover py-12 md:py-20 flex items-center ${className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="gap-10 md:gap-16 items-center">
          <div
            className={`flex flex-col ${
              bannerContentAlignment === "center"
                ? "items-center"
                : "md:items-start"
            }`}
          >
            <h1
              className={`${titleColor} text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-4 ${
                bannerContentAlignment === "center"
                  ? "text-center"
                  : "text-center md:text-left"
              } max-w-xl`}
            >
              {title}
            </h1>

            {description && (
              <p
                className={`${descriptionColor} font-extralight text-base sm:text-lg lg:text-xl mb-6 leading-relaxed max-w-lg text-center ${
                  bannerContentAlignment === "left"
                    ? "md:text-left"
                    : "md:text-center"
                }`}
              >
                {description}
              </p>
            )}

            <div className="flex items-center justify-center gap-4">
              {button1 && href1 && <Button text={button1} href={href1} />}

              {button2 &&
                (href2 ? (
                  <Button variant="outlined" text={button2} href={href2} />
                ) : (
                  <Button
                    variant="outlined"
                    text={button2}
                    onClick={onClickButton2}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
