import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loader from "@/app/loading";
import Banner from "@/components/industry/banner";
import Breadcrumb from "@/components/common/breadcrumb";
import { serviceItem } from "@/components/industry/services";
import { processItem } from "@/components/industry/process";
import { FaqItem } from "@/components/common/faq";
import { WhatWedoItem } from "@/components/industry/whatWedo";
import About from "@/components/industry/about";
import { blogs } from "../../../../public/json/blogs";

export const metadata: Metadata = {
  title: "Travel Technology Solutions | AI Tourism & Digital Travel Platforms",
  description:
    "We deliver AI powered travel platforms, digital booking systems, smart tourism solutions, and comprehensive travel technology for modern travel businesses and destinations.",
  keywords:
    "travel technology solutions, AI tourism platforms, digital booking systems, smart travel solutions, travel management platforms, tourism analytics solutions, hotel technology systems, airline reservation platforms, travel booking engines, tourism experience platforms, travel mobile applications, travel data analytics, personalization engines, travel recommendation systems, travel IoT integration, travel automation solutions, travel cloud platforms, travel API integration, travel security solutions, travel payment systems, travel loyalty platforms, travel chatbot solutions, travel management systems, travel digital transformation, tour operator technology, travel agency systems, travel performance analytics, travel integration services, travel innovation technology, travel cloud solutions",
};

const Process = dynamic(() => import("@/components/industry/process"), {
  loading: () => <Loader />,
});

const Services = dynamic(() => import("@/components/industry/services"), {
  loading: () => <Loader />,
});

const Faq = dynamic(() => import("@/components/common/faq"), {
  loading: () => <Loader />,
});

const ContactForm = dynamic(() => import("@/components/common/contactForm"), {
  loading: () => <Loader />,
});

const Blogs = dynamic(() => import("@/components/common/blogs"), {
  loading: () => <Loader />,
});

const RecentBlog = dynamic(() => import("@/components/common/recentBlog"), {
  loading: () => <Loader />,
});

const WhatWedo = dynamic(() => import("@/components/industry/whatWedo"), {
  loading: () => <Loader />,
});

const breadcrumbItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "What We Do", href: "#whatwedo" },
  { label: "FAQ's", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Blog", href: "#blogs" },
];

const servicesData: serviceItem[] = [
  {
    title: "AI Powered Travel Platforms",
    description:
      "Build intelligent travel management systems with personalized recommendations, dynamic pricing, and automated booking using machine learning algorithms.",
    img: "/images/industry/tourism/services1.webp",
    href: "/",
  },
  {
    title: "Digital Booking Systems",
    description:
      "Develop comprehensive booking platforms with real time availability, seamless payment integration, and automated itinerary management for travel businesses.",
    img: "/images/industry/tourism/services2.webp",
    href: "/",
  },
  {
    title: "Tourism Experience Solutions",
    description:
      "Create smart tourism platforms with personalized itineraries, destination recommendations, and interactive travel experiences for modern travelers.",
    img: "/images/industry/tourism/services3.webp",
    href: "/",
  },
  {
    title: "Travel Analytics Platforms",
    description:
      "Implement advanced analytics solutions for demand forecasting, revenue optimization, customer behavior analysis, and travel performance monitoring.",
    img: "/images/industry/tourism/services4.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Travel Technology Strategy",
    description:
      "Analyze current travel operations, identify digital transformation opportunities, and develop comprehensive technology roadmaps for travel businesses.",
  },
  {
    title: "Platform Architecture Design",
    description:
      "Design scalable travel platform architectures with seamless integration across booking systems, payment gateways, and partner APIs for unified operations.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement machine learning algorithms for personalized recommendations, dynamic pricing optimization, demand forecasting, and customer behavior analysis.",
  },
  {
    title: "Booking System Development",
    description:
      "Build comprehensive booking engines with real time availability, payment processing, itinerary management, and automated confirmation systems.",
  },
  {
    title: "Mobile Experience",
    description:
      "Create travel mobile applications with booking capabilities, real time notifications, travel guides, and location based services for modern travelers.",
  },
  {
    title: "Data Integration Solutions",
    description:
      "Connect travel systems, implement API integrations, and ensure seamless data flow between airlines, hotels, car rentals, and travel management platforms.",
  },
  {
    title: "Real Time Analytics",
    description:
      "Set up comprehensive travel dashboards, establish key performance indicators, and implement analytics for continuous travel business optimization.",
  },
  {
    title: "Payment & Security",
    description:
      "Ensure secure payment processing, implement fraud detection systems, establish data protection controls, and comply with travel industry regulations.",
  },
  {
    title: "Partner Integration Systems",
    description:
      "Build integration capabilities with airline reservation systems, hotel booking platforms, car rental services, and tourism experience providers.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct comprehensive system testing, validate travel workflows, and ensure solution reliability for critical booking and reservation operations.",
  },
  {
    title: "Training & Implementation",
    description:
      "Provide comprehensive travel system training, create operational documentation, and manage solution implementation across travel business operations.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Establish support protocols, implement monitoring systems, and facilitate continuous technology improvement based on travel performance data.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI transform travel technology and customer experiences?",
    description:
      "AI revolutionizes travel through personalized recommendations, dynamic pricing optimization, intelligent itinerary planning, and automated customer service. Our AI solutions typically increase booking conversion by 25 45%, improve revenue through optimized pricing by 15 30%, and enhance customer satisfaction through personalized travel experiences across all booking channels.",
  },
  {
    title: "What technologies are essential for modern travel platforms?",
    description:
      "Essential technologies include AI powered recommendation engines, real time booking systems, mobile travel applications, comprehensive analytics platforms, and secure payment processing. We implement these with focus on seamless user experiences, operational efficiency, and integration with global travel distribution systems.",
  },
  {
    title: "How can travel businesses benefit from digital transformation?",
    description:
      "Digital transformation improves booking efficiency, enhances customer experiences, optimizes revenue management, and enables data driven decision making. Our solutions typically deliver 30 50% improvement in booking conversion, 25 40% reduction in operational costs, and 35 60% increase in customer retention through enhanced travel experiences.",
  },
  {
    title:
      "What are the key components of successful travel technology platforms?",
    description:
      "Successful platforms require integrated booking systems, personalized recommendation engines, mobile applications, comprehensive analytics, and seamless partner integration. Our solutions ensure end to end travel management while maintaining flexibility for evolving travel industry requirements and customer expectations.",
  },
  {
    title: "How does technology integration improve travel operations?",
    description:
      "Technology integration streamlines booking processes, automates itinerary management, optimizes pricing strategies, and enhances customer service. Our solutions typically increase operational efficiency by 35 60%, reduce booking errors by 70 90%, and improve decision making through real time travel data analytics.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Travel Platform Development",
    description:
      "Implement intelligent travel management systems with booking capabilities, itinerary planning, and customer analytics",
    img: "/images/industry/tourism/industry1.webp",
    href: "/",
  },
  {
    title: "Booking System Solutions",
    description:
      "Develop comprehensive booking platforms with real time availability, payment processing, and automated reservations",
    img: "/images/industry/tourism/industry2.webp",
    href: "/",
  },
  {
    title: "Travel Experience Platforms",
    description:
      "Create personalized travel solutions with itinerary management, destination recommendations, and interactive guides",
    img: "/images/industry/tourism/industry3.webp",
    href: "/",
  },
];

export default function TourTravels() {
  return (
    <>
      <Banner
        title="Travel & Tourism Advisory Services"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/tourism/banner.webp"
        bannerContentAlignment="left"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Travel Services", color: "black" },
          ]}
          description1="Beno delivers advanced travel technology solutions that transform tourism experiences through artificial intelligence, digital booking systems, and real time data analytics. Our expertise spans AI powered travel platforms, comprehensive booking systems, tourism experience solutions, and travel analytics for modern travel businesses and destinations."
          description2="We implement intelligent travel solutions that personalize customer experiences, optimize booking operations, and enhance destination management through cutting edge technology. Our platforms integrate seamlessly with global travel systems while providing scalable infrastructure for business growth and digital transformation in the dynamic travel industry."
          image="/images/industry/tourism/about.webp"
          id="about"
          enableReadMore={true}
        />

        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI powered travel platforms to comprehensive booking systems, we deliver cutting edge technology that transforms tourism experiences and travel operations."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From travel technology strategy to AI integration and continuous optimization, we follow a comprehensive methodology ensuring effective and scalable travel solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent travel technology solutions combining AI personalization, digital booking systems, and tourism analytics to transform travel experiences and operations."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Travel", color: "black" },
          ]}
          id="faq"
        />

        <ContactForm />

        <RecentBlog
          blog={blogs[0]}
          title={[
            { text: "Recent", color: "black" },
            { text: "Blogs", color: "orange" },
          ]}
          description="Stay updated with the latest trends in travel technology, AI innovations in tourism, and digital transformation strategies for travel business excellence."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
