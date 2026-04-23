"use client";

import { useState, useEffect } from "react";

export interface TestimonialItem {
  name: string;
  image: string;
  message: string;
}

export interface TestimonialsProps {
  title?: string;
  description?: string;
  items: TestimonialItem[];
  interval?: number;
  id?: string;
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "Testimonials",
  description = "Vestibulum dapibus lobortis mauris a consectetur. Suspendisse ut velit et nisl volutpat facilisis. In faucibus imperdiet tempus. Phasellus sed velit egestas, ullamcorper nibh sit amet, hendrerit velit.",
  items,
  interval = 2000,
  id,
  className = "mt-8 md:mt-12 lg:mt-16 xl:mt-20",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, interval, items.length]);

  const activeTestimonial = items[activeIndex];

  return (
    <div id={id}>
      <div
        className="bg-[#FEF2EA] pb-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`relative ${className}`}>
          <div className="bg-borange pt-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-bwhite text-center">
              {title}
            </h2>
          </div>

          <div
            className="bg-borange pt-4 pb-24"
            style={{ clipPath: "ellipse(55% 100% at 50% 0%)" }}
          >
            <p className="text-bwhite text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center px-4">
              {description}
            </p>
          </div>

          <img
            src={activeTestimonial.image}
            alt={activeTestimonial.name}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full -mb-16 mx-auto transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="w-80 sm:w-[480px] mx-auto mt-20 flex flex-col items-center border-2 border-bblack border-t-0 px-4 py-8 rounded-br-4xl relative transition-all duration-500 ease-in-out">
          <h3 className="text-lg font-medium text-bblack">
            {activeTestimonial.name}
          </h3>
          <p className="text-center text-bblack leading-7 mt-2">
            {activeTestimonial.message}
          </p>

          <div className="absolute -top-6 -left-3 w-6 h-6 rounded-full border-2 border-bblack"></div>
          <div className="absolute -top-6 -right-3 w-6 h-6 rounded-full border-2 border-bblack"></div>
          <div className="absolute -bottom-5.5 left-12 w-10 h-10 border-b-2 border-r-2 border-bblack rotate-45 bg-[#FEF2EA]"></div>

          <img
            src="/icons/home/left-quote.webp"
            alt="left-quote"
            className="hidden sm:block w-12 h-12 object-contain absolute -top-12 -left-20"
          />
          <img
            src="/icons/home/right-quote.webp"
            alt="right-quote"
            className="hidden sm:block w-12 h-12 object-contain absolute -top-12 -right-20"
          />
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full border border-borange transition-all duration-300 ${
                index === activeIndex
                  ? "bg-borange scale-110"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      <img
        src="/images/home/test-bottom-bg.webp"
        alt="testimonials-bottom-bg"
        className="-mt-12 object-contain"
      />
    </div>
  );
};

export default Testimonials;
