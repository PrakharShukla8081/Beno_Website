import React from "react";

const Vision: React.FC = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-center">
          Our
          <span className="text-borange"> Mission</span>
        </h2>

        <p className="text-bblack text-sm sm:text-base md:text-lg leading-relaxed text-center">
          At Beno Support, we believe that technology is more than code it’s the
          backbone of modern business. Since our inception, we have committed
          ourselves to partner with businesses across industries, helping them
          navigate digital transformation, scale operations, and deliver
          superior customer experiences. Our blend of technical expertise,
          ethical values, and client centric approach makes us a trusted ally in
          the evolving world of IT, AI, and business process outsourcing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-4 md:mt-8 lg:mt-12">
        <div className="flex justify-center">
          <img
            src="/images/about/vision-card1.webp"
            alt="vision-card1"
            className="rounded-[60px] h-[500px] object-cover"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="/images/about/vision-card2.webp"
            alt="vision-card3"
            className="rounded-[60px] h-[500px] object-cover"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="/images/about/vision-card3.webp"
            alt="vision-card3"
            className="rounded-[60px] h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
