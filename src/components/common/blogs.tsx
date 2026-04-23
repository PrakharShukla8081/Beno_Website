"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export interface BlogItem {
  image: string;
  title: string;
  description: string;
  id: string;
  date: string;
  category: string;
}

export interface BlogProps {
  blogs: BlogItem[];
}

export const Blogs: React.FC<BlogProps> = ({ blogs }) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-4 py-6 md:py-8 lg:py-10 xl:py-12">
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".custom-dots",
            clickable: true,
            bulletClass: "custom-dot",
            bulletActiveClass: "custom-dot-active",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-video rounded-sm"
                />
                <div className="flex flex-col gap-4 bg-[#F9F9F9] p-3">
                  <p className="text-bblack font-light text-sm md:text-base">
                    {blog.date} - <span>{blog.category}</span>
                  </p>

                  <h3 className="text-bblack text-xl font-semibold leading-tight md:leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-bblack font-light leading-relaxed line-clamp-3">
                    {blog.description}
                  </p>

                  <div className="flex items-center gap-2 text-borange font-medium">
                    <Link href={`/blog/${blog.id}`}>Read More...</Link>{" "}
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-dots flex justify-center gap-3 mt-4"></div>

      <style>{`
        .custom-dot {
          width: 10px;
          height: 10px;
          background: #ccc;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .custom-dot-active {
          width: 24px !important;
          background: #ff7a00 !important; /* borange */
        }
      `}</style>
    </div>
  );
};

export default Blogs;
