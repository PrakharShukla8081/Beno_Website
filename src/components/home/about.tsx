import { FaCheck } from "react-icons/fa6";

const About = () => {
  const aboutPoints = [
    "End to End AI & Data Solutions",
    "Future Ready Tech Systems",
    "Expertise Across Core Domains",
    "Accelerated Digital Transformation",
    "Secure by Design Architecture",
    "Measurable Business Impact",
  ];

  return (
    <section
      className="bg-no-repeat bg-cover bg-center py-8 md:py-12 lg:py-20 xl:py-24"
      style={{ backgroundImage: "url('/images/home/about-bg.webp')" }}
      data-aos="fade-up"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGES */}
        <div
          className="relative flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-lg">
            <img
              src="/images/home/about-main.webp"
              alt="About Beno Support"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div
            className="hidden md:flex absolute bottom-6 right-6 w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-borange shadow-md"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="/images/home/about-abs.webp"
              alt="About"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div
            className="hidden md:flex bg-no-repeat bg-center bg-contain absolute bottom-4 right-32 flex-col items-center justify-center text-white w-32 h-32 p-3"
            style={{ backgroundImage: "url('/images/home/about-star.webp')" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-bold leading-none">20</h2>
            <p className="text-xs mt-1 text-center">Years of Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="flex flex-col items-center md:items-start"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <button className="bg-borange text-white px-6 py-2 rounded-full font-medium mb-4 text-center">
            About Beno Support
          </button>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
            Transforming Businesses with AI, Data & Next Gen Tech
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-center md:text-start">
            Beno Supports is a leading IT, AI, and Data Science solutions
            provider helping enterprises, governments, and startups accelerate
            digital transformation. With deep expertise in AI automation,
            machine learning, cloud engineering, cybersecurity, and custom
            software development we build future ready systems that deliver
            measurable impact.
          </p>

          {/* ORANGE INFO BOX */}
          <div className="bg-[#FFD7A4] border-l-4 border-borange rounded-tr-3xl rounded-br-3xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aboutPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-bblack font-medium"
                data-aos="fade-up"
                data-aos-delay={200 + index * 80} // stagger
              >
                <div className="flex items-center justify-center bg-borange p-1 rounded-full">
                  <FaCheck className="w-3 h-3 text-bwhite" />
                </div>
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
