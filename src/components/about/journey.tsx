"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import Maintitle from "../common/maintitle";

const journeyData = [
  {
    year: "2008",
    title: "2008 - The Beginning",
    description:
      "In 2008, Beno Support began as a small team of dedicated tech-enthusiasts, driven by a simple idea: to provide quality ITsupport services. With a lot of passion, hard work and commitment to excellence, this humble beginning laid the foundation for what would grow into a full fledged technology enterprise. From day one, the team prioritized client needs, believing in technology’s power to empower businesses and individuals alike.",
    image: "/images/about/journey1.webp",
  },
  {
    year: "2016",
    title: "2016 - Expansion & Service Diversification",
    description:
      "Over the years, Beno Support expanded beyond just IT support to enter multiple domains of digital business transformation. By embracing software services, cloud solutions, cybersecurity, BPO & staffing, and digital experience platforms, it built a broader service portfolio to meet evolving client needs. This period marked a transition from being a small support focused firm to becoming a comprehensive provider of IT consulting, software development, talent services, managed cloud & security, and business process outsourcing. With growth in team strength, technology stack, and global outlook, Beno Support strengthened its core values of dedication, quality, and client-centric innovation.",
    image: "/images/about/journey1.webp",
  },
  {
    year: "2025",
    title: "2025 - A Mature Global Tech Partner",
    description:
      "Today in 2025, Beno Support stands as a full scale digital transformation partner offering AI driven solutions, cloud services, cybersecurity, talent & HR services, BPO, and end-to-end enterprise software services. With a robust, engineering driven tech ecosystem and modern scalable infrastructure, the company merges technology with business needs to deliver secure, efficient, and future-ready solutions. As a trusted partner, Beno Support today helps businesses across industries from IT to retail, logistics to BFSI navigate digital challenges, transform operations, and grow with resilience and innovation.",
    image: "/images/about/journey1.webp",
  },
];

const JourneySlider: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: "url('/images/about/journey-bg.webp')" }}
      className="bg-center bg-cover bg-no-repeat mt-8 md:mt-12 lg:mt-16 xl:mt-20 py-8 md:py-12 lg:py-16 xl:py-20"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <Maintitle
          title={[{ text: "Our Journey", color: "orange" }]}
          description="From our humble beginnings to becoming a global technology partner, our journey reflects continuous innovation, dedication, and growth."
          descriptionColor="text-bwhite"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".journey-pagination",
            bulletClass: "journey-bullet",
            bulletActiveClass: "journey-bullet-active",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mt-10"
        >
          {journeyData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* LEFT TEXT PART */}
                <div>
                  <h3 className="text-bwhite font-bold text-xl">{item.year}</h3>

                  <div className="flex items-center gap-3 my-4">
                    <div className="border border-bwhite p-1 rounded-full flex items-center justify-center">
                      <span className="w-3 h-3 bg-borange rounded-full"></span>
                    </div>
                    <span className="flex-1 border-t border-dashed border-gray-400"></span>
                    <div className="border border-bwhite p-1 rounded-full flex items-center justify-center">
                      <span className="w-3 h-3 bg-bwhite rounded-full"></span>
                    </div>
                  </div>

                  <h4 className="text-white font-bold text-lg">{item.title}</h4>

                  <p className="text-gray-300 mt-3 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE PART */}
                <div className="flex items-center justify-center lg:justify-start p-6">
                  <img
                    src={item.image}
                    alt="journey"
                    className="w-60 lg:w-80 object-cover rounded-[60px] -rotate-12 relative z-[2] border-r-4 border-b-4 border-bwhite"
                  />

                  <h2 className="text-[90px] text-[#3B1200] font-bold">
                    {item.year}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="journey-pagination flex justify-center gap-2 mt-8 md:mt-10 lg:mt-12"></div>
      </div>
    </section>
  );
};

export default JourneySlider;
