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
  title:
    "ITES Technology Solutions | AI Enterprise Services & Digital Operations",
  description:
    "We deliver AI powered ITES solutions including intelligent automation, enterprise support systems, digital operations, and business process optimization services.",
  keywords:
    "ITES technology solutions, AI business process automation, enterprise support systems, digital operations management, robotic process automation, intelligent document processing, customer experience automation, enterprise service desk, business analytics solutions, workflow automation platforms, digital transformation services, enterprise application management, business process optimization, cloud migration services, data management solutions, enterprise security services, IT infrastructure management, business intelligence platforms, enterprise resource planning, supply chain automation, digital workforce solutions, enterprise mobility services, business continuity solutions, IT consulting services, enterprise integration services, digital workplace solutions, enterprise AI implementation, business process reengineering, enterprise cloud services, digital customer engagement",
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
    title: "AI Powered Business Automation",
    description:
      "Implement intelligent automation solutions using machine learning and robotic process automation to streamline enterprise operations and reduce manual workload.",
    img: "/images/industry/ites/services1.webp",
    href: "/",
  },
  {
    title: "Enterprise Support Systems",
    description:
      "Develop comprehensive enterprise service desks, helpdesk platforms, and customer support solutions with AI driven ticket routing and resolution.",
    img: "/images/industry/ites/services2.webp",
    href: "/",
  },
  {
    title: "Digital Operations Management",
    description:
      "Create integrated platforms for workflow automation, process monitoring, and operational analytics to optimize business performance across departments.",
    img: "/images/industry/ites/services3.webp",
    href: "/",
  },
  {
    title: "Business Process Optimization",
    description:
      "Design and implement process improvement solutions with data analytics, performance tracking, and continuous optimization capabilities for enterprise efficiency.",
    img: "/images/industry/ites/services4.webp",
    href: "/",
  },
  {
    title: "Enterprise Analytics Solutions",
    description:
      "Build advanced business intelligence platforms with predictive analytics, real time reporting, and data visualization for informed decision making.",
    img: "/images/industry/ites/services5.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Enterprise Technology",
    description:
      "Analyze current business processes, identify automation opportunities, and develop comprehensive digital transformation strategies for enterprises.",
  },
  {
    title: "Process Automation Design",
    description:
      "Design intelligent automation workflows, define integration requirements, and create implementation roadmaps for business process optimization.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement machine learning algorithms for predictive analytics, intelligent decision support, and automated process optimization across business functions.",
  },
  {
    title: "Digital Platform Development",
    description:
      "Build scalable enterprise platforms with workflow automation, data management, and integration capabilities for seamless business operations.",
  },
  {
    title: "Enterprise System Integration",
    description:
      "Connect existing business systems, implement API integrations, and ensure seamless data flow across departments and business applications.",
  },
  {
    title: "Automation Deployment",
    description:
      "Implement robotic process automation, configure business rules, and deploy intelligent workflows for optimized enterprise operations.",
  },
  {
    title: "Performance Monitoring",
    description:
      "Set up real time monitoring dashboards, establish key performance indicators, and implement analytics for continuous process improvement.",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure data security measures, implement access controls, and establish compliance frameworks for enterprise technology solutions.",
  },
  {
    title: "User Training & Adoption",
    description:
      "Develop comprehensive training programs, create user documentation, and implement change management strategies for successful technology adoption.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Configure business intelligence dashboards, set up automated reporting, and implement data visualization for performance insights.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct comprehensive system testing, validate automation workflows, and ensure solution reliability for critical business operations.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Establish feedback mechanisms, monitor solution performance, and implement iterative improvements based on business needs and analytics.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI transform ITES and business process automation?",
    description:
      "AI revolutionizes ITES through intelligent automation of repetitive tasks, predictive analytics for process optimization, natural language processing for customer interactions, and machine learning for continuous improvement. Our AI solutions typically reduce operational costs by 40 70%, improve process accuracy to 99.5%, and enable scalable business operations across all enterprise functions.",
  },
  {
    title: "What technologies are essential for modern ITES solutions?",
    description:
      "Essential technologies include robotic process automation platforms, AI powered analytics tools, cloud based workflow management systems, enterprise integration platforms, and business intelligence solutions. We implement these with focus on scalability, security, and seamless integration with existing business systems.",
  },
  {
    title: "How can enterprises benefit from ITES technology integration?",
    description:
      "Technology integration improves operational efficiency, reduces manual errors, enhances decision making through data insights, and enables business scalability. Our solutions typically deliver 50 80% reduction in manual processing time, 30 60% improvement in operational accuracy, and 40 70% increase in process throughput for enterprise operations.",
  },
  {
    title:
      "What are the key components of successful business process automation?",
    description:
      "Successful automation requires process analysis and mapping, intelligent workflow design, seamless system integration, comprehensive monitoring, and continuous optimization. Our solutions ensure end to end automation while maintaining flexibility for business process changes and scaling requirements.",
  },
  {
    title: "How does digital transformation improve enterprise operations?",
    description:
      "Digital transformation streamlines business processes, enhances data accessibility, improves customer experiences, and enables data driven decision making. Our solutions typically increase operational efficiency by 35 65%, reduce processing costs by 40 75%, and improve customer satisfaction through faster and more accurate service delivery.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Business Process Automation",
    description:
      "Implement intelligent automation solutions for workflow optimization, data processing, and operational efficiency across enterprises",
    img: "/images/industry/ites/industry1.webp",
    href: "/",
  },
  {
    title: "Enterprise Support Solutions",
    description:
      "Develop comprehensive helpdesk platforms, customer service systems, and technical support solutions for business operations",
    img: "/images/industry/ites/industry2.webp",
    href: "/",
  },
  {
    title: "Digital Operations Platforms",
    description:
      "Create integrated systems for process management, performance monitoring, and operational analytics across business functions",
    img: "/images/industry/ites/industry3.webp",
    href: "/",
  },
  {
    title: "Business Analytics Implementation",
    description:
      "Build advanced analytics dashboards, reporting tools, and business intelligence solutions for data driven decision making",
    img: "/images/industry/ites/industry4.webp",
    href: "/",
  },
];

export default function Ites() {
  return (
    <>
      <Banner
        title="Information Technology Enterprise Services"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/ites/banner.webp"
        titleColor="text-bwhite"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "ITES Services", color: "black" },
          ]}
          description1="Beno delivers advanced enterprise technology solutions that transform business operations through artificial intelligence, intelligent automation, and data driven optimization. Our expertise spans AI powered business process automation, enterprise support systems, digital operations platforms, and comprehensive analytics solutions for modern organizations across industries."
          description2="We implement intelligent automation solutions that streamline business processes, reduce operational costs by up to 65%, and improve accuracy through AI driven decision making. Our enterprise platforms integrate seamlessly with existing systems while providing scalable infrastructure for business growth and digital transformation initiatives across all organizational functions."
          list={[
            { text: "AI powered business process automation" },
            { text: "Enterprise support and helpdesk solutions" },
            { text: "Digital operations and workflow management" },
            { text: "Advanced business analytics and intelligence" },
          ]}
          image="/images/industry/ites/about.webp"
          id="about"
          enableReadMore={false}
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI powered business automation to enterprise analytics solutions, we deliver cutting edge technology that transforms business operations and drives operational excellence."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From enterprise technology assessment to AI integration and continuous improvement, we follow a comprehensive methodology ensuring effective and scalable business solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent enterprise technology solutions combining AI automation, digital operations, and business analytics to transform organizational efficiency and performance."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for ITES", color: "black" },
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
          description="Stay updated with the latest trends in enterprise technology, AI innovations in business automation, and digital transformation strategies for organizational excellence."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
