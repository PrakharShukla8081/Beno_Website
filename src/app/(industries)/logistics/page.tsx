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
  title: "Logistics Technology Solutions | AI Supply Chain & Digital Logistics",
  description:
    "We deliver AI powered logistics platforms, supply chain automation, fleet management systems, and digital logistics solutions for modern transportation and warehousing operations.",
  keywords:
    "logistics technology solutions, AI supply chain management, digital logistics platforms, fleet management systems, warehouse automation technology, transportation management systems, logistics tracking solutions, supply chain optimization, route optimization algorithms, logistics analytics platforms, intelligent freight management, last mile delivery technology, logistics automation systems, inventory management solutions, logistics cloud platforms, logistics IoT integration, predictive logistics analytics, logistics blockchain solutions, logistics mobile applications, logistics ERP systems, logistics data analytics, logistics optimization software, logistics visibility platforms, logistics process automation, logistics digital transformation, smart warehouse solutions, logistics AI algorithms, logistics real time tracking, logistics performance management, logistics integration services",
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
    title: "AI Powered Logistics Platforms",
    description:
      "Build intelligent logistics management systems with predictive analytics, route optimization, and automated dispatch using machine learning algorithms.",
    img: "/images/industry/logistics/services1.webp",
    href: "/",
  },
  {
    title: "Supply Chain Automation Solutions",
    description:
      "Develop comprehensive supply chain platforms with inventory optimization, demand forecasting, and automated order processing for seamless operations.",
    img: "/images/industry/logistics/services2.webp",
    href: "/",
  },
  {
    title: "Fleet Management Systems",
    description:
      "Create advanced fleet management solutions with real time tracking, maintenance scheduling, driver performance analytics, and route optimization.",
    img: "/images/industry/logistics/services3.webp",
    href: "/",
  },
  {
    title: "Warehouse Automation Technology",
    description:
      "Implement intelligent warehouse management systems with inventory tracking, automated picking, space optimization, and IoT enabled monitoring.",
    img: "/images/industry/logistics/services4.webp",
    href: "/",
  },
  {
    title: "Logistics Analytics Platforms",
    description:
      "Build comprehensive analytics solutions for performance monitoring, cost optimization, delivery efficiency analysis, and predictive maintenance.",
    img: "/images/industry/logistics/services5.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Logistics Technology Strategy",
    description:
      "Analyze current logistics operations, identify optimization opportunities, and develop comprehensive digital transformation strategies for supply chain improvement.",
  },
  {
    title: "Platform Architecture Design",
    description:
      "Design scalable logistics platform architectures with integration capabilities, real time data processing, and IoT connectivity for comprehensive visibility.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement machine learning algorithms for route optimization, demand forecasting, predictive maintenance, and intelligent resource allocation in logistics.",
  },
  {
    title: "IoT & Tracking Implementation",
    description:
      "Integrate IoT devices, GPS tracking systems, sensor networks, and real time monitoring solutions for comprehensive logistics visibility and control.",
  },
  {
    title: "Automation Workflow",
    description:
      "Build automated workflows for order processing, shipment tracking, inventory management, and customer communication across logistics operations.",
  },
  {
    title: "Data Integration Solutions",
    description:
      "Connect logistics systems, implement API integrations, and ensure seamless data flow between transportation, warehousing, and customer management platforms.",
  },
  {
    title: "Real Time Analytics",
    description:
      "Set up real time monitoring dashboards, establish key performance indicators, and implement analytics for continuous logistics optimization.",
  },
  {
    title: "Mobile Application",
    description:
      "Create logistics mobile apps for driver management, customer tracking, warehouse operations, and field service coordination across devices.",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure data security measures, implement access controls, and establish compliance frameworks for logistics technology solutions.",
  },
  {
    title: "Performance Optimization",
    description:
      "Implement optimization algorithms for route planning, load balancing, resource allocation, and cost management in logistics operations.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct comprehensive system testing, validate logistics workflows, and ensure solution reliability for critical supply chain operations.",
  },
  {
    title: "Deployment & Continuous",
    description:
      "Manage solution implementation, provide training, establish support protocols, and implement iterative improvements based on logistics performance data.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI transform logistics and supply chain operations?",
    description:
      "AI revolutionizes logistics through predictive analytics for demand forecasting, intelligent route optimization, automated warehouse operations, and real time supply chain visibility. Our AI solutions typically reduce transportation costs by 15 30%, improve delivery accuracy to 99%, and optimize inventory levels through predictive analytics across all logistics functions.",
  },
  {
    title: "What technologies are essential for modern logistics platforms?",
    description:
      "Essential technologies include IoT enabled tracking systems, AI powered route optimization, cloud based logistics management, real time analytics platforms, mobile fleet applications, and warehouse automation systems. We implement these with focus on scalability, real time visibility, and seamless integration across supply chain operations.",
  },
  {
    title: "How can logistics companies benefit from technology integration?",
    description:
      "Technology integration improves delivery efficiency, reduces operational costs, enhances customer visibility, optimizes resource utilization, and enables data driven decision making. Our solutions typically deliver 20 40% reduction in transportation costs, 30 50% improvement in delivery accuracy, and 25 45% increase in warehouse efficiency.",
  },
  {
    title: "What are the key components of successful logistics automation?",
    description:
      "Successful automation requires integrated tracking systems, intelligent route planning, automated warehouse operations, real time data analytics, and seamless customer communication. Our solutions ensure end to end automation while maintaining flexibility for changing logistics requirements and scaling operations.",
  },
  {
    title: "How does digital transformation improve logistics performance?",
    description:
      "Digital transformation streamlines operations, enhances real time visibility, improves customer experiences, and enables predictive optimization. Our solutions typically increase delivery efficiency by 25 45%, reduce operational costs by 20 35%, and improve customer satisfaction through accurate tracking and timely delivery.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Supply Chain Automation",
    description:
      "Implement intelligent automation solutions for order processing, inventory management, and logistics optimization across supply chains",
    img: "/images/industry/logistics/industry1.webp",
    href: "/",
  },
  {
    title: "Fleet Management Solutions",
    description:
      "Develop comprehensive fleet management platforms with real time tracking, route optimization, and performance analytics",
    img: "/images/industry/logistics/industry2.webp",
    href: "/",
  },
  {
    title: "Warehouse Automation Systems",
    description:
      "Create intelligent warehouse management solutions with inventory tracking, automated operations, and space optimization",
    img: "/images/industry/logistics/industry3.webp",
    href: "/",
  },
  {
    title: "Logistics Analytics Platforms",
    description:
      "Build advanced analytics dashboards for performance monitoring, cost optimization, and supply chain efficiency analysis",
    img: "/images/industry/logistics/industry4.webp",
    href: "/",
  },
];

export default function Logistics() {
  return (
    <>
      <Banner
        title="Logistics Consulting Services"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/logistics/banner.webp"
        bannerContentAlignment="left"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Logistics Services", color: "black" },
          ]}
          description1="Beno delivers advanced logistics technology solutions that transform supply chain operations through artificial intelligence, intelligent automation, and real time data analytics. Our expertise spans AI powered logistics platforms, supply chain automation, fleet management systems, and comprehensive warehouse solutions for modern transportation and logistics companies."
          list={[
            { text: "AI powered logistics and route optimization" },
            { text: "Comprehensive supply chain automation platforms" },
            { text: "Real time fleet management and tracking systems" },
            { text: "Intelligent warehouse automation solutions" },
          ]}
          image="/images/industry/logistics/about.webp"
          id="about"
          enableReadMore={false}
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI powered logistics platforms to comprehensive supply chain automation, we deliver cutting edge technology that transforms transportation, warehousing, and delivery operations."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From logistics technology strategy to AI integration and continuous optimization, we follow a comprehensive methodology ensuring effective and scalable supply chain solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent logistics technology solutions combining AI optimization, real time tracking, and supply chain automation to transform transportation and warehousing operations."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Logistics", color: "black" },
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
          description="Stay updated with the latest trends in logistics technology, AI innovations in supply chain management, and digital transformation strategies for transportation excellence."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
