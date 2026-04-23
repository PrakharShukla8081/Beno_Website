"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const Recognise = () => {
  return (
    <section className="bg-[#D9D9D973] py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
        <div className="p-2 border-2 border-bblack rounded-full cursor-pointer prev-button">
          <IoIosArrowBack className="text-bblack font-medium" size={22} />
        </div>
        <h4 className="font-medium text-2xl">Recognitions</h4>
        <div className="p-2 border-2 border-bblack rounded-full cursor-pointer next-button">
          <IoIosArrowForward className="text-bblack font-medium" size={22} />
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="!w-[80%] md:!w-[70%] lg:!w-[60%] max-w-4xl">
          <div
            style={{ backgroundImage: "url('/images/about/reco1.webp')" }}
            className="bg-center bg-cover bg-no-repeat min-h-[400px] flex flex-col gap-4 items-center justify-center"
          >
            <h4 className="text-2xl text-bwhite">Prominent Award</h4>
            <h2 className="font-medium text-3xl text-bwhite text-center px-4">
              “Best Tech Brand of 2026 by CC Kate”
            </h2>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-bwhite font-medium"
            >
              Read more <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[80%] md:!w-[70%] lg:!w-[60%] max-w-4xl">
          <div
            style={{ backgroundImage: "url('/images/about/reco2.webp')" }}
            className="bg-center bg-cover bg-no-repeat min-h-[400px] flex flex-col gap-4 items-center justify-center"
          >
            <h4 className="text-2xl text-bwhite">Prominent Award</h4>
            <h2 className="font-medium text-3xl text-bwhite text-center px-4">
              “Best Tech Brand of 2026 by CC Kate”
            </h2>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-bwhite font-medium"
            >
              Read more <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[80%] md:!w-[70%] lg:!w-[60%] max-w-4xl">
          <div
            style={{ backgroundImage: "url('/images/about/reco3.webp')" }}
            className="bg-center bg-cover bg-no-repeat min-h-[400px] flex flex-col gap-4 items-center justify-center"
          >
            <h4 className="text-2xl text-bwhite">Prominent Award</h4>
            <h2 className="font-medium text-3xl text-bwhite text-center px-4">
              “Best Tech Brand of 2026 by CC Kate”
            </h2>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-bwhite font-medium"
            >
              Read more <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[80%] md:!w-[70%] lg:!w-[60%] max-w-4xl">
          <div
            style={{ backgroundImage: "url('/images/about/reco1.webp')" }}
            className="bg-center bg-cover bg-no-repeat min-h-[400px] flex flex-col gap-4 items-center justify-center"
          >
            <h4 className="text-2xl text-bwhite">Prominent Award</h4>
            <h2 className="font-medium text-3xl text-bwhite text-center px-4">
              “Best Tech Brand of 2026 by CC Kate”
            </h2>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-bwhite font-medium"
            >
              Read more <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[80%] md:!w-[70%] lg:!w-[60%] max-w-4xl">
          <div
            style={{ backgroundImage: "url('/images/about/reco2.webp')" }}
            className="bg-center bg-cover bg-no-repeat min-h-[400px] flex flex-col gap-4 items-center justify-center"
          >
            <h4 className="text-2xl text-bwhite">Prominent Award</h4>
            <h2 className="font-medium text-3xl text-bwhite text-center px-4">
              “Best Tech Brand of 2026 by CC Kate”
            </h2>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-bwhite font-medium"
            >
              Read more <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[80%] md:!w-[70%] lg:!w-[60%] max-w-4xl">
          <div
            style={{ backgroundImage: "url('/images/about/reco3.webp')" }}
            className="bg-center bg-cover bg-no-repeat min-h-[400px] flex flex-col gap-4 items-center justify-center"
          >
            <h4 className="text-2xl text-bwhite">Prominent Award</h4>
            <h2 className="font-medium text-3xl text-bwhite text-center px-4">
              “Best Tech Brand of 2026 by CC Kate”
            </h2>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-bwhite font-medium"
            >
              Read more <IoIosArrowForward />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center mt-8">
        <Link href={"/"} className="text-bwhite bg-[#009643] py-2 px-6">
          See all Recognitions
        </Link>
      </div>
    </section>
  );
};

export default Recognise;
