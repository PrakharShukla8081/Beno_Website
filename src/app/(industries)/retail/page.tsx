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
  title: "Retail Technology Solutions | AI Retail & Digital Storefronts",
  description:
    "We deliver AI powered retail platforms, omnichannel solutions, smart store technology, and digital commerce systems for modern retail businesses and brands.",
  keywords:
    "retail technology solutions, AI retail platforms, omnichannel retail systems, smart store technology, retail analytics solutions, digital commerce platforms, retail automation systems, point of sale technology, inventory management solutions, customer experience platforms, retail cloud solutions, mobile commerce applications, retail data analytics, personalization engines, retail IoT integration, supply chain optimization, retail AI algorithms, retail mobile applications, retail ERP systems, customer loyalty platforms, retail payment solutions, visual commerce technology, retail automation tools, retail digital transformation, store management systems, retail performance analytics, retail integration services, retail security solutions, retail cloud platforms, retail innovation technology",
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
    title: "AI Powered Retail Platforms",
    description:
      "Build intelligent retail management systems with personalized recommendations, inventory optimization, and automated customer engagement using machine learning.",
    img: "/images/industry/retail/services1.webp",
    href: "/",
  },
  {
    title: "Omnichannel Retail Solutions",
    description:
      "Develop comprehensive retail platforms with seamless integration across online stores, mobile apps, physical locations, and social commerce channels.",
    img: "/images/industry/retail/services2.webp",
    href: "/",
  },
  {
    title: "Smart Store Technology",
    description:
      "Create intelligent store systems with IoT integration, automated checkout, smart inventory management, and real time customer analytics.",
    img: "/images/industry/retail/services3.webp",
    href: "/",
  },
  {
    title: "Retail Analytics Platforms",
    description:
      "Implement advanced analytics solutions for customer behavior analysis, sales forecasting, inventory optimization, and performance monitoring.",
    img: "/images/industry/retail/services4.webp",
    href: "/",
  },
  {
    title: "Digital Commerce Systems",
    description:
      "Build comprehensive ecommerce platforms with personalized shopping experiences, automated merchandising, and seamless payment integration.",
    img: "/images/industry/retail/services5.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Retail Technology Strategy",
    description:
      "Analyze current retail operations, identify digital transformation opportunities, and develop comprehensive technology roadmaps for retail businesses.",
  },
  {
    title: "Omnichannel Architecture",
    description:
      "Design scalable retail platform architectures with seamless integration across online, mobile, and physical store channels for unified customer experiences.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement machine learning algorithms for personalized recommendations, demand forecasting, inventory optimization, and customer behavior analysis.",
  },
  {
    title: "Smart Store Implementation",
    description:
      "Integrate IoT devices, automated checkout systems, smart inventory tracking, and real time store analytics for intelligent retail environments.",
  },
  {
    title: "Customer Experience",
    description:
      "Build personalized shopping experiences, loyalty programs, mobile applications, and seamless payment systems for enhanced customer engagement.",
  },
  {
    title: "Data Integration Solutions",
    description:
      "Connect retail systems, implement API integrations, and ensure seamless data flow between POS, inventory, CRM, and ecommerce platforms.",
  },
  {
    title: "Real Time Analytics",
    description:
      "Set up comprehensive retail dashboards, establish key performance indicators, and implement analytics for continuous retail optimization.",
  },
  {
    title: "Mobile Application",
    description:
      "Create retail mobile apps for shopping, loyalty management, store navigation, and personalized customer experiences across devices.",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure payment security measures, implement data protection controls, and establish compliance frameworks for retail technology solutions.",
  },
  {
    title: "Inventory Optimization",
    description:
      "Implement intelligent inventory management with demand forecasting, automated replenishment, and real time stock visibility across channels.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct comprehensive system testing, validate retail workflows, and ensure solution reliability for critical retail operations.",
  },
  {
    title: "Deployment & Continuous",
    description:
      "Manage solution implementation, provide staff training, establish support protocols, and implement iterative improvements based on retail performance data.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI transform retail operations and customer experiences?",
    description:
      "AI revolutionizes retail through personalized product recommendations, intelligent inventory management, predictive analytics for demand forecasting, and automated customer service. Our AI solutions typically increase sales conversion by 20 40%, improve inventory turnover by 25 45%, and enhance customer satisfaction through personalized shopping experiences across all retail channels.",
  },
  {
    title: "What technologies are essential for modern omnichannel retail?",
    description:
      "Essential technologies include unified commerce platforms, AI powered personalization engines, real time inventory management, mobile shopping applications, and integrated payment systems. We implement these with focus on seamless customer experiences, data consistency, and operational efficiency across all retail touchpoints.",
  },
  {
    title: "How can retail businesses benefit from smart store technology?",
    description:
      "Smart store technology improves operational efficiency, enhances customer experiences, reduces labor costs, and provides real time insights into store performance. Our solutions typically deliver 30 50% reduction in checkout time, 20 35% improvement in inventory accuracy, and 15 30% increase in customer engagement through interactive shopping experiences.",
  },
  {
    title:
      "What are the key components of successful retail digital transformation?",
    description:
      "Successful transformation requires integrated ecommerce platforms, unified customer data, real time inventory visibility, personalized marketing automation, and seamless payment systems. Our solutions ensure comprehensive digital integration while maintaining flexibility for evolving retail strategies and customer expectations.",
  },
  {
    title:
      "How does technology integration improve retail operational efficiency?",
    description:
      "Technology integration streamlines inventory management, automates customer service, optimizes pricing strategies, and enhances supply chain coordination. Our solutions typically increase operational efficiency by 25 45%, reduce manual errors by 60 80%, and improve decision making through real time data analytics across retail operations.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Retail Platform Development",
    description:
      "Implement intelligent retail management systems with omnichannel integration, inventory optimization, and customer analytics",
    img: "/images/industry/retail/industry1.webp",
    href: "/",
  },
  {
    title: "Smart Store Solutions",
    description:
      "Develop comprehensive smart store systems with IoT integration, automated checkout, and real time store analytics",
    img: "/images/industry/retail/industry2.webp",
    href: "/",
  },
  {
    title: "Customer Experience Platforms",
    description:
      "Create personalized shopping experiences, loyalty programs, and mobile applications for enhanced customer engagement",
    img: "/images/industry/retail/industry3.webp",
    href: "/",
  },
];

export default function Retail() {
  return (
    <>
      <Banner
        title="Retail Consulting Services"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/retail/banner.webp"
        bannerContentAlignment="left"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Retail Services", color: "black" },
          ]}
          description1="Beno delivers advanced retail technology solutions that transform shopping experiences through artificial intelligence, omnichannel integration, and real time data analytics. Our expertise spans AI powered retail platforms, smart store technology, comprehensive commerce systems, and customer experience solutions for modern retail businesses and brands."
          description2="We implement intelligent retail solutions that personalize shopping experiences, optimize inventory management, and enhance operational efficiency across all channels. Our platforms integrate seamlessly with existing retail systems while providing scalable infrastructure for business growth and digital transformation initiatives in the competitive retail landscape."
          list={[
            {
              text: "AI powered retail personalization and recommendation engines",
            },
            { text: "Comprehensive omnichannel retail platforms" },
            { text: "Smart store technology and IoT integration" },
            { text: "Advanced retail analytics and customer insights" },
          ]}
          image="/images/industry/retail/about.webp"
          id="about"
          enableReadMore={false}
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI powered retail platforms to comprehensive omnichannel solutions, we deliver cutting edge technology that transforms shopping experiences and retail operations."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From retail technology strategy to AI integration and continuous optimization, we follow a comprehensive methodology ensuring effective and scalable retail solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent retail technology solutions combining AI personalization, omnichannel integration, and smart store technology to transform shopping experiences and retail efficiency."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Retail", color: "black" },
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
          description="Stay updated with the latest trends in retail technology, AI innovations in shopping, and digital transformation strategies for retail excellence."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
