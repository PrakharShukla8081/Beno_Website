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
  title: "AI Powered Ecommerce Solutions | Automation & Digital Transformation",
  description:
    "We deliver AI driven ecommerce automation, personalized customer experiences, marketplace integrations and intelligent analytics for online retail growth.",
  keywords:
    "ecommerce automation, AI personalization, marketplace integration, omnichannel retail, customer experience automation, inventory optimization, predictive analytics, chatbot commerce, recommendation engines, payment gateway solutions, order management systems, supply chain automation, mobile commerce development, headless ecommerce, conversion rate optimization, voice commerce, social commerce, AI pricing optimization, visual search technology, augmented reality shopping, ecommerce analytics, subscription management, fraud detection, returns automation, ecommerce cloud solutions, multi channel retail, smart logistics, customer data platforms, commerce API integration, automated marketing, digital storefront development",
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
    title: "AI Powered Ecommerce Platforms",
    description:
      "Build intelligent online stores with personalized recommendations, predictive search, and automated customer engagement using machine learning algorithms.",
    img: "/images/industry/ecommerce/services1.webp",
    href: "/",
  },
  {
    title: "Marketplace Integration Solutions",
    description:
      "Seamlessly connect with Amazon, Shopify, Magento and global marketplaces through API driven integrations and automated inventory synchronization.",
    img: "/images/industry/ecommerce/services2.webp",
    href: "/",
  },
  {
    title: "Omnichannel Retail Technology",
    description:
      "Create unified shopping experiences across web, mobile, social media and physical stores with real time inventory and customer data synchronization.",
    img: "/images/industry/ecommerce/services3.webp",
    href: "/",
  },
  {
    title: "Customer Experience Automation",
    description:
      "Implement intelligent chatbots, personalized marketing automation, and AI driven customer support to enhance engagement and increase conversion rates.",
    img: "/images/industry/ecommerce/services4.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Ecommerce Strategy & Architecture",
    description:
      "Define digital commerce vision, select optimal technology stack, and design scalable architecture for global online retail operations.",
  },
  {
    title: "Platform Selection & Development",
    description:
      "Build custom ecommerce solutions or customize enterprise platforms like Shopify Plus, Adobe Commerce, or headless commerce architectures.",
  },
  {
    title: "AI Integration & Personalization",
    description:
      "Implement machine learning models for personalized recommendations, dynamic pricing, customer segmentation, and predictive analytics.",
  },
  {
    title: "Payment & Checkout Optimization",
    description:
      "Integrate secure payment gateways, streamline checkout processes, and implement fraud detection systems for maximum conversion rates.",
  },
  {
    title: "Inventory & Order Management",
    description:
      "Develop automated inventory tracking, order processing systems, and supply chain integration for efficient operations.",
  },
  {
    title: "Mobile Commerce Development",
    description:
      "Create responsive Progressive Web Apps and native mobile applications with seamless shopping experiences across all devices.",
  },
  {
    title: "Marketing Automation Integration",
    description:
      "Connect CRM, email marketing, social media, and advertising platforms for coordinated customer journey management.",
  },
  {
    title: "Performance Optimization",
    description:
      "Implement advanced caching, CDN integration, and continuous performance monitoring for optimal site speed and reliability.",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure PCI DSS compliance, implement robust security protocols, and establish data protection measures for customer information.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Set up comprehensive tracking, implement business intelligence tools, and create custom reporting dashboards for performance insights.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Conduct rigorous testing across devices, browsers, and user scenarios to ensure flawless shopping experiences.",
  },
  {
    title: "Launch & Continuous Improvement",
    description:
      "Manage deployment, monitor performance, and implement iterative improvements based on user feedback and analytics.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI enhance ecommerce customer experiences?",
    description:
      "AI transforms ecommerce through personalized product recommendations, intelligent search, predictive analytics, and automated customer service. Our AI solutions typically increase conversion rates by 25 40%, improve average order value by 20 35%, and reduce cart abandonment through personalized engagement and smart checkout optimization.",
  },
  {
    title: "What technologies are essential for modern ecommerce platforms?",
    description:
      "Essential technologies include headless commerce architecture, Progressive Web Apps for mobile optimization, AI driven personalization engines, API first integrations, cloud infrastructure for scalability, and real time analytics platforms. We implement these with focus on performance, security, and seamless omnichannel experiences.",
  },
  {
    title: "How can marketplace integration benefit online retailers?",
    description:
      "Marketplace integration expands reach across platforms like Amazon, eBay, and Shopify while maintaining centralized inventory and order management. Our solutions automate product listing, pricing synchronization, and order processing, typically increasing sales channels by 3 5 times while reducing manual effort by 70 80%.",
  },
  {
    title: "What are the key components of successful omnichannel retail?",
    description:
      "Successful omnichannel requires unified customer data, real time inventory synchronization, consistent branding across channels, integrated payment systems, and seamless fulfillment options. Our solutions typically deliver 30 50% increase in customer retention and 20 40% growth in average customer lifetime value.",
  },
  {
    title: "How does automation improve ecommerce operations?",
    description:
      "Automation streamlines inventory management, order processing, customer service, and marketing campaigns. Our automated solutions typically reduce operational costs by 40 60%, improve order accuracy to 99.8%, and enable 24 7 customer support through AI chatbots and automated workflows.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Customer Experience Solutions",
    description:
      "Implement AI chatbots, personalized recommendations, and automated support systems for enhanced shopping journeys",
    img: "/images/industry/ecommerce/industry1.webp",
    href: "/",
  },
  {
    title: "Platform Development & Integration",
    description:
      "Build scalable ecommerce platforms with marketplace integrations, payment systems, and inventory management",
    img: "/images/industry/ecommerce/industry2.webp",
    href: "/",
  },
  {
    title: "Analytics & Business Intelligence",
    description:
      "Develop comprehensive analytics dashboards with predictive insights and real time performance monitoring",
    img: "/images/industry/ecommerce/industry3.webp",
    href: "/",
  },
];

export default function Ecommerce() {
  return (
    <>
      <Banner
        title="Intelligent Ecommerce Technology Solutions"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/ecommerce/banner.webp"
        bannerContentAlignment="left"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Ecommerce Services", color: "black" },
          ]}
          description1="Beno delivers cutting edge ecommerce technology solutions that transform online retail through artificial intelligence, automation, and seamless digital experiences. Our expertise spans intelligent platform development, omnichannel integration, AI powered personalization, and data driven optimization for global ecommerce brands and marketplaces."
          list={[
            { text: "AI powered personalization and recommendation engines" },
            { text: "Seamless marketplace and platform integrations" },
            { text: "Mobile optimized Progressive Web App development" },
            { text: "Real time analytics and performance optimization" },
          ]}
          image="/images/industry/ecommerce/about.webp"
          id="about"
          enableReadMore={false}
        />

        <RecentBlog
          blog={{
            image: "/images/industry/ecommerce/recent-blog1.webp",
            title: "Intelligent Ecommerce Platform Development",
            description:
              "We specialize in building AI enhanced ecommerce solutions that deliver personalized shopping experiences, automated operations, and data driven growth. Our platforms integrate machine learning for product recommendations, natural language processing for customer service, and predictive analytics for inventory optimization. Through seamless marketplace connections and mobile first design, we create digital storefronts that convert browsers into loyal customers while reducing operational overhead through intelligent automation.",
          }}
          title={[
            { text: "Beno Support", color: "orange" },
            { text: "Provides", color: "black" },
          ]}
          description="From AI powered personalization to seamless marketplace integration, we deliver ecommerce technology that drives growth and enhances customer experiences."
          id=""
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI driven platform development to seamless marketplace integration, we deliver cutting edge ecommerce solutions that drive growth and optimize operations."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From strategic architecture design to AI integration and optimization, we follow a comprehensive methodology ensuring scalable and high performing ecommerce solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent ecommerce technology combining AI personalization, omnichannel integration, and data analytics to transform online retail operations and customer experiences."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Ecommerce", color: "black" },
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
          description="Stay updated with the latest trends in ecommerce technology, AI innovations in retail, and digital transformation strategies for online business growth."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
