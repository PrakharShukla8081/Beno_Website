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
  title: "Manufacturing Technology Solutions | Industry 4.0 & Smart Factory",
  description:
    "We deliver AI powered manufacturing platforms, smart factory solutions, industrial automation, and digital production systems for modern manufacturing operations.",
  keywords:
    "manufacturing technology solutions, Industry 4.0 platforms, smart factory systems, industrial automation technology, manufacturing execution systems, digital production platforms, manufacturing analytics solutions, predictive maintenance systems, manufacturing IoT integration, industrial robotics automation, supply chain optimization, quality control automation, manufacturing cloud solutions, production planning systems, manufacturing process optimization, digital twin manufacturing, industrial AI solutions, manufacturing data analytics, plant management systems, manufacturing ERP solutions, industrial control systems, manufacturing performance management, energy management systems, manufacturing security solutions, industrial IoT platforms, manufacturing digital transformation, smart manufacturing systems, production monitoring solutions, manufacturing integration services, industrial automation platforms",
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
    title: "Smart Factory Solutions",
    description:
      "Build intelligent manufacturing platforms with IoT integration, real time production monitoring, and automated process control using AI algorithms.",
    img: "/images/industry/manufacturing/services1.webp",
    href: "/",
  },
  {
    title: "Industrial Automation Systems",
    description:
      "Develop comprehensive automation solutions with robotics integration, PLC programming, and automated material handling for efficient production lines.",
    img: "/images/industry/manufacturing/services2.webp",
    href: "/",
  },
  {
    title: "Manufacturing Execution Systems",
    description:
      "Create advanced MES platforms with production tracking, quality management, and performance analytics for optimized manufacturing operations.",
    img: "/images/industry/manufacturing/services3.webp",
    href: "/",
  },
  {
    title: "Predictive Maintenance Platforms",
    description:
      "Implement AI powered maintenance systems with equipment monitoring, failure prediction, and automated scheduling for reduced downtime.",
    img: "/images/industry/manufacturing/services4.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Manufacturing Technology",
    description:
      "Analyze current production processes, identify automation opportunities, and develop comprehensive Industry 4.0 transformation strategies for factories.",
  },
  {
    title: "Smart Factory Architecture",
    description:
      "Design scalable manufacturing platform architectures with IoT integration, data connectivity, and real time production visibility across operations.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement machine learning algorithms for predictive maintenance, quality control, production optimization, and intelligent process control in manufacturing.",
  },
  {
    title: "IoT & Sensor Implementation",
    description:
      "Integrate industrial IoT devices, sensor networks, equipment monitoring systems, and real time data collection for comprehensive factory visibility.",
  },
  {
    title: "Automation System",
    description:
      "Build automated workflows for production scheduling, material handling, quality inspection, and equipment control across manufacturing operations.",
  },
  {
    title: "Data Integration Solutions",
    description:
      "Connect manufacturing systems, implement industrial protocols, and ensure seamless data flow between production equipment, ERP, and management platforms.",
  },
  {
    title: "Real Time Monitoring",
    description:
      "Set up production dashboards, establish key performance indicators, and implement real time analytics for continuous manufacturing optimization.",
  },
  {
    title: "Quality Management Systems",
    description:
      "Create comprehensive quality control platforms with automated inspection, defect tracking, compliance monitoring, and quality analytics integration.",
  },
  {
    title: "Energy & Resource",
    description:
      "Implement energy management systems, resource tracking solutions, and optimization algorithms for sustainable manufacturing operations.",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure industrial cybersecurity measures, implement access controls, and establish compliance frameworks for manufacturing technology solutions.",
  },
  {
    title: "Testing & Validation Systems",
    description:
      "Conduct comprehensive system testing, validate manufacturing workflows, and ensure solution reliability for critical production operations.",
  },
  {
    title: "Deployment & Continuous",
    description:
      "Manage solution implementation, provide operator training, establish support protocols, and implement iterative improvements based on production data.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI transform manufacturing and Industry 4.0 operations?",
    description:
      "AI revolutionizes manufacturing through predictive maintenance algorithms, intelligent quality control, production optimization, and automated process adjustments. Our AI solutions typically reduce equipment downtime by 30 50%, improve product quality by 20 40%, and optimize production efficiency through data driven insights across all manufacturing functions.",
  },
  {
    title: "What technologies are essential for modern smart factories?",
    description:
      "Essential technologies include industrial IoT platforms, AI powered analytics, robotics automation, digital twin simulations, manufacturing execution systems, and real time production monitoring. We implement these with focus on scalability, reliability, and seamless integration across manufacturing operations.",
  },
  {
    title:
      "How can manufacturing companies benefit from technology integration?",
    description:
      "Technology integration improves production efficiency, reduces operational costs, enhances product quality, enables predictive maintenance, and optimizes resource utilization. Our solutions typically deliver 25 45% increase in production efficiency, 30 50% reduction in maintenance costs, and 20 35% improvement in product quality consistency.",
  },
  {
    title:
      "What are the key components of successful smart factory implementations?",
    description:
      "Successful implementations require integrated IoT networks, real time data analytics, automated production control, quality management systems, and comprehensive monitoring dashboards. Our solutions ensure end to end connectivity while maintaining flexibility for production changes and scaling requirements.",
  },
  {
    title: "How does digital transformation improve manufacturing performance?",
    description:
      "Digital transformation streamlines production processes, enhances real time visibility, improves equipment utilization, enables predictive maintenance, and optimizes supply chain coordination. Our solutions typically increase overall equipment effectiveness by 15 30%, reduce production costs by 20 35%, and improve delivery reliability through optimized operations.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Smart Factory Solutions",
    description:
      "Implement intelligent manufacturing platforms with IoT integration, production monitoring, and automated process control",
    img: "/images/industry/manufacturing/industry1.webp",
    href: "/",
  },
  {
    title: "Industrial Automation Systems",
    description:
      "Develop comprehensive automation solutions with robotics integration, PLC systems, and automated material handling",
    img: "/images/industry/manufacturing/industry2.webp",
    href: "/",
  },
  {
    title: "Production Management Platforms",
    description:
      "Create advanced manufacturing execution systems with production tracking, quality control, and performance analytics",
    img: "/images/industry/manufacturing/industry3.webp",
    href: "/",
  },
];

export default function Manufacturing() {
  return (
    <>
      <Banner
        title="Tech Driven Manufacturing Solution"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/manufacturing/banner.webp"
        bannerContentAlignment="left"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Manufacturing Services", color: "black" },
          ]}
          description1="Beno delivers advanced manufacturing technology solutions that transform production operations through artificial intelligence, industrial automation, and real time data analytics. Our expertise spans smart factory platforms, manufacturing execution systems, industrial IoT integration, and comprehensive automation solutions for modern manufacturing companies across industries."
          list={[
            { text: "AI powered smart factory and Industry 4.0 solutions" },
            {
              text: "Comprehensive industrial automation and robotics systems",
            },
            { text: "Real time production monitoring and quality control" },
            {
              text: "Predictive maintenance and equipment management platforms",
            },
          ]}
          image="/images/industry/manufacturing/about.webp"
          id="about"
          enableReadMore={false}
        />

        <RecentBlog
          blog={{
            image: "/images/industry/manufacturing/recent-blog1.webp",
            title: "Advanced Manufacturing Platform Development",
            description:
              "We specialize in building intelligent manufacturing technology solutions that enhance production efficiency through AI optimization, industrial automation, and real time data analytics. Our platforms integrate predictive maintenance algorithms, comprehensive quality management systems, automated production workflows, and IoT enabled equipment monitoring that connect factory operations, supply chain management, and quality assurance. Through scalable industrial infrastructure and mobile operator interfaces, we create smart manufacturing environments that are efficient, reliable, and adaptable to changing production requirements while reducing operational costs through intelligent automation.",
          }}
          title={[
            { text: "Beno Support", color: "orange" },
            { text: "Provides", color: "black" },
          ]}
          description="From AI powered smart factories to comprehensive industrial automation, we deliver technology solutions that transform manufacturing production and operational efficiency."
          id=""
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI powered smart factory solutions to comprehensive industrial automation, we deliver cutting edge technology that transforms manufacturing production and operational excellence."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From manufacturing technology strategy to AI integration and continuous optimization, we follow a comprehensive methodology ensuring effective and scalable production solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent manufacturing technology solutions combining AI optimization, industrial automation, and production analytics to transform factory operations and efficiency."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Manufacturing", color: "black" },
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
          description="Stay updated with the latest trends in manufacturing technology, Industry 4.0 innovations, and digital transformation strategies for production excellence."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
