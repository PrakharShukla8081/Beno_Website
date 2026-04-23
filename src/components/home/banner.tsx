"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";

const Banner = () => {
  const slides = [
    {
      video: "/videos/home-banner1.mp4",
      poster: "/images/home/banner-poster1.webp",
      title: (
        <>
          AI Technology is <br /> Transforming the Business
        </>
      ),
      description: (
        <>
          Beno Support 360ai expedites corporate metamorphosis{" "}
          <br className="hidden md:block" /> with its comprehensive end to end
          AI ecosystem.
        </>
      ),
      buttonText: "Learn More",
      buttonHref: "/contact-us",
    },
    {
      video: "/videos/home-banner2.mp4",
      poster: "/images/home/banner-poster2.webp",
      title: (
        <>
          Empower Your <br /> Future with AI Innovation
        </>
      ),
      description: (
        <>
          Accelerate growth and efficiency <br className="hidden md:block" />{" "}
          through intelligent automation and predictive insights.
        </>
      ),
      buttonText: "Discover More",
      buttonHref: "/contact-us",
    },
    {
      video: "/videos/home-banner3.mp4",
      poster: "/images/home/banner-poster3.webp",
      title: (
        <>
          Transform Data <br /> Into Smart Decisions
        </>
      ),
      description: (
        <>
          Unlock the power of analytics <br className="hidden md:block" /> with
          AI driven solutions built for the modern enterprise.
        </>
      ),
      buttonText: "Get Started",
      buttonHref: "/contact-us",
    },
  ];

  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: any) => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const currentVideo = videoRefs.current[swiper.realIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;

      requestAnimationFrame(() => {
        const playPromise = currentVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Video play failed, trying with muted:", error);
            currentVideo.muted = true;
            currentVideo.play().catch(() => {});
          });
        }
      });
    }
  };

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, slides.length);

    slides.forEach((slide, index) => {
      const video = document.createElement("video");
      video.src = slide.video;
      video.preload = index === 0 ? "auto" : "metadata";

      const img = new Image();
      img.src = slide.poster;
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 13000,
          disableOnInteraction: false,
        }}
        speed={800}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
        onInit={(swiper) => {
          setTimeout(() => {
            const firstVideo = videoRefs.current[0];
            if (firstVideo) {
              firstVideo.play().catch(() => {
                firstVideo.muted = true;
                firstVideo.play();
              });
            }
          }, 100);
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              src={slide.video}
              poster={slide.poster}
              loop
              muted={index !== 0}
              playsInline
              controls={false}
            />

            <div className="pointer-events-auto relative z-20 container max-w-7xl mx-auto px-4 md:px-8 py-8 min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4 md:gap-8 text-center">
                <h1 className="text-bblue font-semibold text-2xl md:text-4xl lg:text-5xl leading-snug">
                  {slide.title}
                </h1>

                <p className="text-bblue text-base md:text-lg">
                  {slide.description}
                </p>

                <Link
                  href={slide.buttonHref}
                  className="text-bwhite font-medium bg-borange hover:bg-bblue rounded-md py-2 px-6 transition-all duration-200"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>
    </section>
  );
};

export default Banner;
