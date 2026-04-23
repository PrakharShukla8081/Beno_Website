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
    "Healthcare Technology Solutions | AI Medical & Digital Health Platforms",
  description:
    "We deliver AI powered healthcare platforms, telehealth solutions, electronic health records, and medical analytics for modern healthcare providers and institutions.",
  keywords:
    "healthcare technology, AI medical platforms, telehealth solutions, electronic health records, medical analytics systems, healthcare data management, patient engagement technology, clinical decision support, medical imaging AI, healthcare workflow automation, remote patient monitoring, healthcare cloud solutions, medical appointment systems, pharmacy management software, healthcare cybersecurity, medical billing automation, healthcare interoperability, population health management, medical research platforms, healthcare mobile applications, clinical trial management, healthcare AI diagnostics, medical device integration, healthcare compliance solutions, health information exchange, medical chatbot solutions, healthcare data analytics, patient portal development, medical practice management, digital therapeutics platforms",
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
    title: "AI Powered Healthcare Platforms",
    description:
      "Build intelligent medical systems with predictive analytics, clinical decision support, and patient management tools using machine learning algorithms.",
    img: "/images/industry/healthcare/services1.webp",
    href: "/",
  },
  {
    title: "Telehealth & Remote Care Solutions",
    description:
      "Develop comprehensive virtual care platforms with video consultations, remote monitoring, and digital health assessments for accessible healthcare delivery.",
    img: "/images/industry/healthcare/services2.webp",
    href: "/",
  },
  {
    title: "Electronic Health Records Systems",
    description:
      "Create secure EHR platforms with interoperability features, clinical documentation, and data analytics for comprehensive patient information management.",
    img: "/images/industry/healthcare/services3.webp",
    href: "/",
  },
  {
    title: "Medical Analytics & Insights",
    description:
      "Implement advanced analytics solutions for population health management, clinical outcomes analysis, and operational efficiency optimization.",
    img: "/images/industry/healthcare/services4.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Healthcare Technology",
    description:
      "Define digital health objectives, assess clinical workflows, and develop comprehensive healthcare transformation roadmaps for medical institutions.",
  },
  {
    title: "Platform Architecture Design",
    description:
      "Design scalable healthcare platform architectures with HIPAA compliance, data security measures, and interoperability with existing medical systems.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement medical AI algorithms for diagnostic support, predictive analytics, treatment recommendations, and clinical decision making assistance.",
  },
  {
    title: "Clinical Workflow Automation",
    description:
      "Develop automated systems for appointment scheduling, patient intake, billing processes, and administrative task management in healthcare settings.",
  },
  {
    title: "Data Management Solutions",
    description:
      "Build secure data storage, patient record management, health information exchange, and clinical data analytics infrastructure for healthcare providers.",
  },
  {
    title: "Patient Engagement Systems",
    description:
      "Create comprehensive patient portals, communication platforms, mobile health applications, and digital education tools for improved care experiences.",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure HIPAA compliance, implement robust cybersecurity measures, establish access controls, and create audit trails for protected health information.",
  },
  {
    title: "Interoperability Development",
    description:
      "Build integration capabilities with laboratory systems, pharmacy networks, medical devices, and healthcare information exchange standards.",
  },
  {
    title: "Performance & Reliability",
    description:
      "Implement scalable cloud infrastructure, disaster recovery systems, and performance optimization for critical healthcare operations continuity.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Configure clinical analytics dashboards, operational reporting tools, and performance measurement systems for data driven healthcare management.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct comprehensive security testing, clinical workflow validation, and regulatory compliance verification for healthcare software reliability.",
  },
  {
    title: "Deployment & Ongoing Support",
    description:
      "Manage implementation, provide clinical training, establish support protocols, and maintain continuous platform improvement for healthcare operations.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI transform healthcare technology solutions?",
    description:
      "AI revolutionizes healthcare through predictive analytics for patient outcomes, automated diagnostic support, personalized treatment recommendations, and intelligent clinical workflow optimization. Our AI solutions typically improve diagnostic accuracy by 30 50%, reduce administrative workload by 40 70%, and enhance patient engagement through personalized care experiences across all healthcare settings.",
  },
  {
    title: "What technologies are essential for modern healthcare platforms?",
    description:
      "Essential technologies include electronic health records with AI capabilities, telehealth infrastructure, healthcare data analytics, mobile health applications, interoperability standards like FHIR, and cloud based security solutions. We implement these with focus on HIPAA compliance, clinical workflow integration, and seamless patient provider experiences.",
  },
  {
    title:
      "How can healthcare institutions benefit from technology integration?",
    description:
      "Technology integration improves patient care coordination, reduces medical errors, enhances operational efficiency, enables data driven decision making, and expands healthcare accessibility. Our solutions typically deliver 35 60% reduction in administrative costs, 25 45% improvement in patient satisfaction, and 30 55% increase in clinical workflow efficiency.",
  },
  {
    title:
      "What are the key components of successful telehealth implementations?",
    description:
      "Successful telehealth requires secure video conferencing platforms, integrated electronic health records, remote patient monitoring capabilities, digital prescription systems, and comprehensive patient engagement tools. Our solutions ensure seamless virtual care delivery while maintaining clinical quality, data security, and regulatory compliance.",
  },
  {
    title: "How does automation improve healthcare administration?",
    description:
      "Automation streamlines patient scheduling, medical billing, insurance verification, appointment reminders, and clinical documentation. Our automated solutions typically reduce administrative workload by 50 80%, improve billing accuracy to 99.2%, and enable real time data access for informed clinical decision making.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Healthcare Platform Development",
    description:
      "Build comprehensive medical systems with EHR integration, telehealth capabilities, and clinical workflow automation",
    img: "/images/industry/healthcare/industry1.webp",
    href: "/",
  },
  {
    title: "Patient Engagement Solutions",
    description:
      "Create digital health applications, patient portals, and communication systems for better care experiences",
    img: "/images/industry/healthcare/industry2.webp",
    href: "/",
  },
  {
    title: "Medical Analytics Platforms",
    description:
      "Develop data analytics dashboards for clinical insights, operational efficiency, and population health management",
    img: "/images/industry/healthcare/industry3.webp",
    href: "/",
  },
];

export default function Healthcare() {
  return (
    <>
      <Banner
        title="Health Care Advisory Services"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/healthcare/banner.webp"
        bannerContentAlignment="left"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Healthcare Services", color: "black" },
          ]}
          description1="Beno delivers advanced healthcare technology solutions that transform medical care through artificial intelligence, digital platforms, and data driven insights. Our expertise spans intelligent healthcare systems, telehealth platforms, electronic health records, and comprehensive analytics solutions for modern healthcare providers and institutions."
          list={[
            { text: "AI powered diagnostic and treatment platforms" },
            { text: "Comprehensive telehealth and remote care solutions" },
            { text: "Secure electronic health records systems" },
            { text: "Advanced medical analytics and insights platforms" },
          ]}
          image="/images/industry/healthcare/about.webp"
          id="about"
          enableReadMore={false}
        />

        <RecentBlog
          blog={{
            image: "/images/industry/education/recent-blog1.webp",
            title: "Modern Healthcare Platform Development",
            description:
              "We specialize in building intelligent healthcare technology solutions that enhance patient care through AI diagnostics, telehealth capabilities, and data driven insights. Our platforms integrate clinical decision support systems, comprehensive patient management tools, and secure data exchange capabilities that connect healthcare providers, patients, and medical institutions. Through scalable cloud infrastructure and mobile health applications, we create digital healthcare environments that are accessible, secure, and effective for diverse medical needs while reducing administrative burden through intelligent automation.",
          }}
          title={[
            { text: "Beno Support", color: "orange" },
            { text: "Provides", color: "black" },
          ]}
          description="From AI powered healthcare platforms to comprehensive medical analytics, we deliver technology solutions that transform patient care and clinical operations."
          id=""
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI driven healthcare platforms to comprehensive medical analytics, we deliver cutting edge technology solutions that enhance patient care and clinical outcomes."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From strategic healthcare technology planning to AI integration and implementation, we follow a comprehensive methodology ensuring effective and compliant medical solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent healthcare technology combining AI diagnostics, telehealth platforms, and medical analytics to transform patient care and clinical operations."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Healthcare", color: "black" },
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
          description="Stay updated with the latest trends in healthcare technology, AI innovations in medicine, and digital transformation strategies for healthcare institutions."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
