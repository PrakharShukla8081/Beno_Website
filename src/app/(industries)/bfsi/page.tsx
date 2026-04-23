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

export const metadata: Metadata = {
  title: "AI Powered BFSI Solutions | Banking Technology & Fintech Automation",
  description:
    "Beno delivers AI driven BFSI automation, blockchain solutions, fintech development, and intelligent banking systems for financial institutions and insurance providers.",
  keywords:
    "AI banking solutions, fintech automation, blockchain BFSI, digital banking transformation, loan processing AI, KYC automation, AML compliance technology, insurance tech solutions, wealth management software, core banking modernization, payment gateway integration, financial cybersecurity, RegTech compliance, open banking APIs, chatbot banking support, predictive analytics finance, cloud banking solutions, mobile banking development, financial data analytics, BFSI digital transformation, mortgage processing automation, investment platform development, financial risk assessment AI, insurance claims automation, banking customer experience technology.",
};

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
    title: "AI Powered Banking Automation",
    description:
      "Implement intelligent automation for loan processing, customer onboarding, and compliance using machine learning algorithms and robotic process automation.",
    img: "/images/industry/bfsi/services1.webp",
    href: "/",
  },
  {
    title: "Fintech Platform Development",
    description:
      "Build secure, scalable fintech applications with blockchain integration, real time payment processing, and advanced financial analytics capabilities.",
    img: "/images/industry/bfsi/services2.webp",
    href: "/",
  },
  {
    title: "Insurance Technology Solutions",
    description:
      "Develop AI driven claims processing, risk assessment models, and personalized insurance platforms with predictive analytics and IoT integration.",
    img: "/images/industry/bfsi/services3.webp",
    href: "/",
  },
  {
    title: "Digital Wealth Management",
    description:
      "Create robo advisory platforms, portfolio management tools, and investment analytics systems with algorithmic trading and risk management features.",
    img: "/images/industry/bfsi/services4.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Digital Strategy & Consulting",
    description:
      "Assess current systems and develop AI driven transformation roadmaps aligned with financial industry compliance and security requirements.",
  },
  {
    title: "Fintech Solution Architecture",
    description:
      "Design scalable financial platforms with microservices architecture, API integrations, and cloud native infrastructure for global deployment.",
  },
  {
    title: "AI Model Development",
    description:
      "Build and train machine learning models for fraud detection, credit scoring, customer behavior analysis, and predictive risk assessment.",
  },
  {
    title: "Blockchain Implementation",
    description:
      "Integrate distributed ledger technology for secure transactions, smart contracts, and transparent audit trails in financial operations.",
  },
  {
    title: "Cybersecurity Integration",
    description:
      "Implement multi layered security protocols, encryption standards, and real time threat monitoring for financial data protection.",
  },
  {
    title: "Cloud Migration & DevOps",
    description:
      "Modernize legacy systems with cloud infrastructure, CI/CD pipelines, and automated deployment for continuous financial service delivery.",
  },
  {
    title: "Compliance Automation",
    description:
      "Develop automated regulatory reporting, compliance monitoring, and audit trail systems that adapt to evolving financial regulations.",
  },
  {
    title: "Data Analytics & Insights",
    description:
      "Implement real time financial data processing, business intelligence dashboards, and predictive analytics for informed decision making.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct comprehensive security testing, performance validation, and compliance verification for financial grade software reliability.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "AI Driven Customer Operations",
    description:
      "Implement intelligent chatbots, personalized banking experiences, and automated customer support with natural language processing",
    img: "/images/industry/bfsi/industry1.webp",
    href: "/",
  },
  {
    title: "Financial Data Analytics",
    description:
      "Develop real time analytics dashboards, predictive modeling, and business intelligence solutions for data driven decisions",
    img: "/images/industry/bfsi/industry2.webp",
    href: "/",
  },
  {
    title: "Insurance Technology Systems",
    description:
      "Build automated claims processing, risk assessment platforms, and digital insurance ecosystems with AI integration",
    img: "/images/industry/bfsi/industry3.webp",
    href: "/",
  },
  {
    title: "Payment Solutions Development",
    description:
      "Create secure payment gateways, mobile banking applications, and digital wallet systems with fraud prevention",
    img: "/images/industry/bfsi/industry4.webp",
    href: "/",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI transform traditional banking operations?",
    description:
      "AI revolutionizes banking through intelligent automation of loan processing, fraud detection, customer service chatbots, and personalized financial recommendations. Our AI solutions reduce processing time by 70%, improve accuracy to 99.5%, and enable 24/7 automated banking services while maintaining strict compliance standards.",
  },
  {
    title: "What fintech technologies are essential for modern banks?",
    description:
      "Essential technologies include blockchain for secure transactions, machine learning for risk assessment, API integrations for open banking, cloud computing for scalability, and mobile first platforms for customer accessibility. We implement these technologies with enterprise grade security and regulatory compliance built into every solution.",
  },
  {
    title: "How can insurance companies leverage AI effectively?",
    description:
      "Insurance companies use AI for automated claims processing (reducing time from days to hours), predictive risk modeling, personalized policy pricing, fraud detection algorithms, and IoT integration for real time risk monitoring. Our solutions typically deliver 40 60% operational efficiency improvements while enhancing customer satisfaction.",
  },
  {
    title: "What are the security considerations for BFSI technology?",
    description:
      "We implement multi layered security including end to end encryption, biometric authentication, real time fraud monitoring, blockchain for immutable records, and AI powered threat detection. All solutions comply with financial regulations (GDPR, PCI DSS, SOC2) and undergo rigorous penetration testing before deployment.",
  },
  {
    title: "How does cloud technology benefit financial institutions?",
    description:
      "Cloud technology enables scalable infrastructure, disaster recovery capabilities, global accessibility, reduced operational costs (typically 30 50% savings), and faster innovation cycles. Our hybrid cloud solutions maintain critical data on premises while leveraging cloud advantages for processing and analytics.",
  },
];

export default function Bfsi() {
  return (
    <>
      <Banner
        title="BFSI (Banking, Financial Services & Insurance)"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/bfsi/banner-bg.webp"
        titleColor="text-bwhite"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "BFSI", color: "black" },
          ]}
          description1="Beno delivers cutting edge technology solutions for the Banking, Financial Services, and Insurance sector, leveraging artificial intelligence, blockchain, and cloud computing to transform traditional operations. Our expertise spans intelligent automation, secure fintech platforms, regulatory technology, and digital banking systems that enhance efficiency, security, and customer experience while ensuring full compliance with financial regulations."
          description2="We implement AI driven solutions that automate complex processes, reduce operational costs by up to 60%, and improve accuracy in risk assessment and fraud detection. Our blockchain integration ensures transparent and secure transactions, while our cloud native architecture provides scalability for global financial operations. Partner with us to future proof your financial services with technology that drives innovation and competitive advantage."
          image="/images/industry/bfsi/about.webp"
          id="about"
          enableReadMore={true}
          defaultExpanded={false}
        />

        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI powered banking automation to blockchain security solutions, we deliver cutting edge technology that transforms financial operations and drives innovation."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From strategic fintech consulting to secure implementation, we follow a comprehensive methodology ensuring regulatory compliance and technological excellence."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent financial technology solutions combining AI, blockchain, and cloud computing to modernize banking, insurance, and financial services operations."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for BFSI", color: "black" },
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
          description="Stay updated with the latest trends in financial technology, AI innovations in banking, and regulatory developments shaping the future of BFSI digital transformation."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
