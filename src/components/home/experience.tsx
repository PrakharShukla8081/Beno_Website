"use client";
import { useState, useEffect, useRef } from "react";

const Experience = () => {
  const stats = [
    { number: 75, label: "Happy Clients", suffix: "+" },
    { number: 100, label: "Team Mates", suffix: "+" },
    { number: 14, label: "Years of Experience", suffix: "+" },
    { number: 600, label: "Projects Delivered", suffix: "+" },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(stat.number * progress);
          return updated;
        });
        if (progress === 1) clearInterval(counter);
      }, 1000 / frameRate);
    });
  }, [hasAnimated]);

  const StatCard = ({
    number,
    label,
    suffix,
  }: {
    number: number;
    label: string;
    suffix: string;
  }) => (
    <div className="bg-bwhite rounded-3xl w-full max-w-[260px] sm:max-w-[280px] h-44 sm:h-48 border-4 sm:border-[6px] border-gray-600 flex flex-col items-center justify-center flex-grow-1">
      <h3 className="text-bblue font-extrabold text-5xl sm:text-6xl lg:text-7xl mb-2">
        {number}
        {suffix}
      </h3>
      <p className="text-bblue font-semibold text-lg sm:text-xl">{label}</p>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="bg-no-repeat bg-cover bg-center py-12 md:py-16 lg:py-24 mt-8 md:mt-12 lg:mt-12 xl:mt-20"
      style={{ backgroundImage: "url('/images/home/experience-bg.webp')" }}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="flex flex-col items-center justify-center mb-10">
          <button className="bg-borange text-white px-6 py-2 rounded-full font-medium mb-4">
            Our Experience
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-bwhite mb-4">
            Innovate Faster. Scale Smarter. Secure Stronger. Powered by AI.
          </h2>
          <p className="text-bwhite text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
            Beno Support is a multidisciplinary technology and business
            solutions company specializing in IT services, AI engineering, data
            science, cybersecurity, cloud infrastructure, BPO operations,
            HR/talent outsourcing, and digital experience transformation. We
            enable organizations including enterprises, startups, and public
            institutions to modernize systems, automate processes, scale
            operations, and improve customer engagement through next generation
            technology.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={counts[index]}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
