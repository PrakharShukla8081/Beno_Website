"use client";

import React, { useRef, useState } from "react";
import Maintitle from "@/components/common/maintitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export interface TestimonialItem {
  title: string;
  description: string;
  image: string;
}

export interface TestimonialProps {
  items: TestimonialItem[];
  title?: { text: string; color?: "black" | "orange" }[];
  description?: string;
  id?: string;
}

export const Testimonials: React.FC<TestimonialProps> = ({
  items,
  title = [{ text: "Testimonials", color: "orange" }],
  description,
  id,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<any>(null);

  return (
    <div className="bg-[#FEF2EA]">
      <div
        className="container max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16 xl:py-20"
        id={id}
      >
        <Maintitle title={title} description={description} />

        <div
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="mt-10"
          >
            {items.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                  <div className="flex justify-center">
                    <img
                      src={i.image}
                      alt={i.title}
                      className="w-32 h-32 rounded-full border-4 border-white shadow"
                    />
                  </div>
                  <div className="bg-white rounded-3xl shadow-md px-8 py-12 flex flex-col items-center justify-center text-center -mt-16">
                    <img
                      src="/icons/home/left-quote.webp"
                      alt="left-quote"
                      className="self-start w-16 h-16 object-contain"
                    />

                    <h2 className="font-semibold text-gray-900 text-lg mt-4">
                      {i.title}
                    </h2>

                    <p className="text-gray-700 text-sm leading-relaxed mt-3 max-w-md mx-auto">
                      {i.description}
                    </p>

                    <img
                      src="/icons/home/right-quote.webp"
                      alt="right-quote"
                      className="self-end w-16 h-16 object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <span
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                activeIndex === idx ? "bg-orange-500 scale-110" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
