import Link from "next/link";

const Clients = () => {
  const clientTab1 = [
    { logo: "/images/home/client1.png", name: "client1" },
    { logo: "/images/home/client2.png", name: "client2" },
    { logo: "/images/home/client3.png", name: "client3" },
    { logo: "/images/home/client4.png", name: "client4" },
    { logo: "/images/home/client5.png", name: "client5" },
    { logo: "/images/home/client6.png", name: "client6" },
    { logo: "/images/home/client7.png", name: "client7" },
    { logo: "/images/home/client8.png", name: "client8" },
    { logo: "/images/home/client9.png", name: "client9" },
    { logo: "/images/home/client10.png", name: "client10" },
    { logo: "/images/home/client11.png", name: "client11" },
    { logo: "/images/home/client12.png", name: "client12" },
  ];

  const clientTab2 = [
    { logo: "/images/home/client13.png", name: "client13" },
    { logo: "/images/home/client14.png", name: "client14" },
    { logo: "/images/home/client15.png", name: "client15" },
    { logo: "/images/home/client16.png", name: "client16" },
    { logo: "/images/home/client17.png", name: "client17" },
    { logo: "/images/home/client18.png", name: "client18" },
    { logo: "/images/home/client19.png", name: "client19" },
    { logo: "/images/home/client20.png", name: "client20" },
    { logo: "/images/home/client21.png", name: "client21" },
  ];

  const clientTab3 = [
    { logo: "/images/home/client22.png", name: "client22" },
    { logo: "/images/home/client23.png", name: "client23" },
    { logo: "/images/home/client24.png", name: "client24" },
    { logo: "/images/home/client25.png", name: "client25" },
    { logo: "/images/home/client26.png", name: "client26" },
    { logo: "/images/home/client27.png", name: "client27" },
    { logo: "/images/home/client28.png", name: "client28" },
    { logo: "/images/home/client29.png", name: "client29" },
    { logo: "/images/home/client30.png", name: "client30" },
  ];

  const renderClientColumn = (
    clients: { logo: string; name: string }[],
    reverse = false
  ) => (
    <div
      className={`overflow-hidden h-[400px] ${
        reverse ? "client-marquee-reverse" : "client-marquee"
      }`}
    >
      <div className="flex flex-col items-center gap-4 w-full">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 shadow-md rounded-xl bg-[#ffffff]"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-28 h-auto object-contain aspect-video"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col items-center md:items-start justify-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-bblack">
            Our Featured <span className="text-borange">Clients</span>
          </h2>
          <p className="text-bblack text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center md:text-left">
            We partner with leading enterprises, public sector organizations,
            and ambitious startups across the globe to drive innovation and
            digital transformation.
          </p>
          <Link
            href="/contact-us"
            className="text-bwhite font-medium bg-borange hover:bg-bblue rounded-md py-2 px-6 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6">
          {renderClientColumn(clientTab1)}
          {renderClientColumn(clientTab2, true)}
          {renderClientColumn(clientTab3)}
        </div>
      </div>
    </section>
  );
};

export default Clients;
