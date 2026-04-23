import Link from "next/link";

const Platforms = () => {
  const industries = [
    { icon: "/icons/home/bfsi.png", name: "BFSI", href: "/bfsi" },
    { icon: "/icons/home/it.png", name: "IT", href: "/it" },
    { icon: "/icons/home/ites.png", name: "ITES", href: "/ites" },
    { icon: "/icons/home/retail.png", name: "Retail", href: "/retail" },
    {
      icon: "/icons/home/education.png",
      name: "Education",
      href: "/education",
    },
    {
      icon: "/icons/home/logistics.png",
      name: "Logistics",
      href: "/logistics",
    },
    {
      icon: "/icons/home/technology.png",
      name: "Technology",
      href: "/technology",
    },
    {
      icon: "/icons/home/healthcare.png",
      name: "Healthcare",
      href: "/healthcare",
    },
    {
      icon: "/icons/home/ecommerce.png",
      name: "eCommerce",
      href: "/ecommerce",
    },
    {
      icon: "/icons/home/it&telecom.webp",
      name: "Manufacturing",
      href: "/manufacturing",
    },
    {
      icon: "/icons/home/travel.png",
      name: "Tour & Travels",
      href: "/tour-and-travels",
    },
  ];

  const technologies = [
    [
      {
        icon: "/icons/home/java.webp",
        title: "JAVA",
        desc: "Backend Development",
      },
      {
        icon: "/icons/home/kotlin.webp",
        title: "KOTLIN",
        desc: "Android App Development",
      },
      {
        icon: "/icons/home/objective-c.webp",
        title: "Objective-c",
        desc: "Backend Development",
      },
      {
        icon: "/icons/home/swift.webp",
        title: "Swift",
        desc: "Backend Development",
      },
      {
        icon: "/icons/home/php.webp",
        title: "PHP",
        desc: "Android App Development",
      },
    ],
    [
      {
        icon: "/icons/home/wordpress.webp",
        title: "Wordpress",
        desc: "CMS Development",
      },
      {
        icon: "/icons/home/laravel.webp",
        title: "Laravel",
        desc: "Backend Development",
      },
      {
        icon: "/icons/home/node.webp",
        title: "Node JS",
        desc: "Backend Development",
      },
      {
        icon: "/icons/home/flutter.webp",
        title: "Flutter",
        desc: "App Development",
      },
      {
        icon: "/icons/home/angular.webp",
        title: "Angular",
        desc: "Frontend Development",
      },
    ],
    [
      {
        icon: "/icons/home/vue.webp",
        title: "Vue JS",
        desc: "Frontend Development",
      },
      {
        icon: "/icons/home/react.webp",
        title: "React JS",
        desc: "Frontend Development",
      },
      {
        icon: "/icons/home/google-ads.webp",
        title: "Google Ads",
        desc: "Backend Development",
      },
      {
        icon: "/icons/home/my-sql.webp",
        title: "MySql",
        desc: "Database Management",
      },
      {
        icon: "/icons/home/mongodb.webp",
        title: "Mongo DB",
        desc: "Database Management",
      },
    ],
  ];

  const techPartners = [
    { icon: "/icons/home/azure.webp", name: "azure" },
    { icon: "/icons/home/aws.webp", name: "aws" },
    { icon: "/icons/home/google-cloude.webp", name: "google cloud" },
    { icon: "/icons/home/betrix.webp", name: "betrix" },
  ];

  const renderTechRow = (items: any[], className: string) => (
    <div className="relative overflow-hidden mt-4">
      <div className={`flex justify-center gap-4 w-max ${className}`}>
        {[...items, ...items, ...items].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-md p-2 border border-gray-700 hover:border-borange transition-border duration-200"
          >
            <img
              src={tech.icon}
              alt={tech.title}
              className="object-contain w-12 h-auto aspect-video"
            />
            <div>
              <h6 className="text-sm text-bblack font-medium">{tech.title}</h6>
              <p className="text-sm text-bblack">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container max-w-7xl mx-auto px-4 md:px-8">
      <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-bblack mb-4 text-center">
            Platforms & <span className="text-borange">Technologies</span>
          </h2>
          <p className="text-bblack text-sm sm:text-base md:text-lg leading-relaxed text-center">
            Our technology expertise is defined by a strong engineering driven
            tech stack, smart platform adoption, and seamless integration
            capability.
          </p>
        </div>

        {renderTechRow(technologies[0], "home-technology1-marquee")}
        {renderTechRow(technologies[1], "home-technology2-marquee")}
        {renderTechRow(technologies[2], "home-technology3-marquee")}
      </section>

      <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-bblack mb-4 md:mb-8 text-center">
          <span className="text-borange">Industries</span> We Cater to
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex justify-center gap-4 w-max home-industry-marquee">
            {[...industries, ...industries].map((industry, index) => (
              <Link
                key={index}
                href={industry.href}
                className="flex flex-col items-center gap-1"
              >
                <div className="flex items-center justify-center bg-borange hover:bg-[#14212B] transition-bg duration-300 ease-in-out rounded-md w-20 h-20 p-4">
                  <img src={industry.icon} alt={industry.name} />
                </div>
                <h3 className="text-bblack text-sm">{industry.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-bblack mb-4 text-center">
          Our Global <span className="text-borange">Presence</span>
        </h2>
        <div className="mt-8 md:mt-12 lg:mt-16">
          <img src="/images/home/map.webp" alt="map" className="object-cover" />
        </div>
      </section>

      <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-bblack mb-4 text-center">
          Our Tech Partner&apos;s and{" "}
          <span className="text-borange">Certifications</span>
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mt-8 md:mt-12">
          {techPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-3xl p-4 border border-gray-700 hover:border-borange transition-border duration-200"
            >
              <img
                src={partner.icon}
                alt={partner.name}
                className="object-contain w-32 h-auto aspect-video"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Platforms;
