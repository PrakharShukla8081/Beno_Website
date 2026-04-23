import Loader from "@/app/loading";
import dynamic from "next/dynamic";
import { ArticleItem } from "@/components/services/articles";
import Banner from "@/components/services/banner";
import Breadcrumb from "@/components/common/breadcrumb";
import { FaqItem } from "@/components/common/faq";
import { InsustryItem } from "@/components/services/industries";
import { ServicesItem } from "@/components/services/services";
import { TestimonialItem } from "@/components/home/testimonials";
import { Metadata } from "next";
import About from "@/components/services/about";
import { blogs } from "../../../../public/json/blogs";

const Articles = dynamic(() => import("@/components/services/articles"), {
  loading: () => <Loader />,
});

const About2 = dynamic(() => import("@/components/services/about2"), {
  loading: () => <Loader />,
});

const Industries = dynamic(() => import("@/components/services/industries"), {
  loading: () => <Loader />,
});

const Services = dynamic(() => import("@/components/services/services"), {
  loading: () => <Loader />,
});

const Testimonials = dynamic(() => import("@/components/home/testimonials"), {
  loading: () => <Loader />,
});

const Faq = dynamic(() => import("@/components/common/faq"), {
  loading: () => <Loader />,
});

const ContactForm = dynamic(() => import("@/components/common/contactForm"), {
  loading: () => <Loader />,
});

const RecentBlog = dynamic(() => import("@/components/common/recentBlog"), {
  loading: () => <Loader />,
});

const Blogs = dynamic(() => import("@/components/common/blogs"), {
  loading: () => <Loader />,
});
export const metadata: Metadata = {
  title: "IT Consulting & AI Managed Services",
  description:
    "Enterprise-grade IT infrastructure support, cloud migration, AI system integration, and proactive cybersecurity consulting for scaling businesses.",
  keywords:
    "IT consulting, managed IT services, AI support, cloud infrastructure, cybersecurity",
};

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/images/services/ics/article1.webp",
    title: (
      <>
        IT Strategy <br /> Q4 Tech <br /> REPORT
      </>
    ),
    shortDesc: "Analyzing infrastructure efficiency before scaling operations.",
    longDesc:
      "We provide deep dive audits into your current technology stack. Our quarterly reports identify bottlenecks in server performance and suggest AI driven optimizations to reduce latency.",
  },
  {
    id: 2,
    image: "/images/services/ics/article2.webp",
    title: (
      <>
        Innovation <br /> starts with <br /> security.
      </>
    ),
    shortDesc: "Building a Zero Trust architecture for modern remote teams.",
    longDesc:
      "Security is not an afterthought it is the foundation. We implement robust identity management and endpoint protection to ensure your data remains secure while your team works from anywhere.",
  },
  {
    id: 3,
    image: "/images/services/ics/article3.webp",
    title: (
      <>
        Is there a <br /> Future of <br /> Ops with AI?
      </>
    ),
    shortDesc: "Predictive maintenance is replacing reactive break fix models.",
    longDesc:
      "AI allows us to predict hardware failures before they happen. By analyzing system logs in real time, we automate patches and updates, ensuring your business never faces unplanned downtime.",
  },
  {
    id: 4,
    image: "/images/services/ics/article4.webp",
    title: (
      <>
        Realizing <br /> the Power <br /> of Hybrid <br /> Cloud
      </>
    ),
    shortDesc: "Balancing cost and performance with scalable cloud solutions.",
    longDesc:
      "We help you navigate the complexity of AWS, Azure, and private clouds. Our hybrid strategies ensure you get the flexibility of the public cloud with the security of on premise infrastructure.",
  },
  {
    id: 5,
    image: "/images/services/ics/article5.webp",
    title: (
      <>
        Look into the <br /> potential <br /> of automated <br /> growth
      </>
    ),
    shortDesc:
      "Leveraging RPA to streamline repetitive IT administrative tasks.",
    longDesc:
      "Reduce the burden on your internal staff. We deploy Robotic Process Automation to handle user provisioning, password resets, and ticket routing, freeing humans for complex problem solving.",
  },
  {
    id: 6,
    image: "/images/services/ics/article6.webp",
    title: (
      <>
        Achieving <br /> Digital <br /> Maturity
      </>
    ),
    shortDesc: "Aligning IT roadmaps directly with long term business goals.",
    longDesc:
      "Technology should drive revenue, not just cost. We act as your strategic partner, ensuring every software license and hardware purchase contributes directly to your corporate objectives.",
  },
];

const servicesData: ServicesItem[] = [
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Migrating legacy systems to scalable cloud environments like AWS and Azure for superior agility.",
    img: "/images/services/ics/services1.webp",
    href: "/",
  },
  {
    title: "Cybersecurity & Compliance",
    description:
      "Implementing proactive threat detection and Zero Trust architectures to protect critical assets.",
    img: "/images/services/ics/services2.webp",
    href: "/",
  },
  {
    title: "Managed IT Helpdesk",
    description:
      "24/7 AI assisted resolution for hardware and software issues to keep your workforce productive.",
    img: "/images/services/ics/services3.webp",
    href: "/",
  },
  {
    title: "Data Analytics & BI",
    description:
      "Turning raw operational data into actionable strategic intelligence using advanced dashboarding.",
    img: "/images/services/ics/services4.webp",
    href: "/",
  },
  {
    title: "System Integration",
    description:
      "Seamlessly connecting disparate software and APIs to create a unified and efficient workflow.",
    img: "/images/services/ics/services5.webp",
    href: "/",
  },
  {
    title: "Network Management",
    description:
      "Optimizing bandwidth, VPNs, and connectivity solutions to support a global remote workforce.",
    img: "/images/services/ics/services6.webp",
    href: "/",
  },
];

const breadcrumbItems = [
  { label: "Services", href: "#services" },
  { label: "Articles", href: "#articles" },
  { label: "Industries", href: "#industries" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ's", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Blog", href: "#blogs" },
];

const industryData: InsustryItem[] = [
  {
    title: "BFSI",
    description:
      "Ensuring secure transaction processing and regulatory compliance with bank grade encryption standards.",
    img: "/images/services/ics/industry1.webp",
    href: "/",
  },
  {
    title: "Healthcare",
    description:
      "Managing HIPAA compliant data storage and supporting telemedicine infrastructure for patient care.",
    img: "/images/services/ics/industry2.webp",
    href: "/",
  },
  {
    title: "Manufacturing",
    description:
      "Integrating IoT devices and smart sensors to optimize factory floor operations and supply chains.",
    img: "/images/services/ics/industry3.webp",
    href: "/",
  },
  {
    title: "Technology & SaaS",
    description:
      "Providing high availability server management and DevOps support for rapid software deployment.",
    img: "/images/services/ics/industry4.webp",
    href: "/",
  },
  {
    title: "E-Commerce",
    description:
      "Guaranteeing 99.9% uptime for digital storefronts and securing payment gateways during peak traffic.",
    img: "/images/services/ics/industry5.webp",
    href: "/",
  },
  {
    title: "Logistics",
    description:
      "Supporting real time tracking systems and fleet management software with robust mobile data solutions.",
    img: "/images/services/ics/industry6.webp",
    href: "/",
  },
];

const testimonialsData: TestimonialItem[] = [
  {
    name: "David Chen",
    image: "/images/home/test-user.webp",
    message:
      "The migration to the cloud was seamless. Their AI monitoring tools caught potential issues before they even affected our users. A truly proactive IT partner.",
  },
  {
    name: "Amanda Clarke",
    image: "/images/home/test-user.webp",
    message:
      "Finally an IT consulting firm that speaks business language. They optimized our network costs and improved security without disrupting our daily operations.",
  },
  {
    name: "Robert Fox",
    image: "/images/home/test-user.webp",
    message:
      "Their managed helpdesk services transformed our employee experience. Response times dropped significantly, and the technical expertise is top notch.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "What is managed IT support?",
    description:
      "Managed IT support transfers the responsibility of your IT infrastructure to us. We handle proactive monitoring, security updates, data backups, and helpdesk support, ensuring your systems run smoothly while you focus on core business goals.",
  },
  {
    title: "How do you handle data security?",
    description:
      "Security is our priority. We employ a multi layered approach including endpoint protection, firewalls, and 24/7 Security Operations Center (SOC) monitoring. We also assist with compliance frameworks like GDPR and HIPAA.",
  },
  {
    title: "What is the role of AI in your services?",
    description:
      "We utilize AI for predictive analytics to identify hardware failures before they occur. AI also powers our automated ticketing systems and threat detection algorithms, allowing us to respond to incidents faster than traditional methods.",
  },
  {
    title: "Can you support remote workforces?",
    description:
      "Absolutely. We specialize in configuring VPNs, cloud desktops, and secure remote access points. We manage devices globally, ensuring that your distributed team has the same level of security and access as they would in the office.",
  },
  {
    title: "Do you offer cloud migration services?",
    description:
      "Yes. Whether you are moving to AWS, Azure, or Google Cloud, we handle the entire lifecycle. This includes strategy, data migration, application refactoring, and post migration optimization to ensure cost efficiency.",
  },
];

export default function ItConsultingSupport() {
  return (
    <>
      <Banner
        title="Proactive IT Strategies for Digital Resilience"
        description="Elevating business continuity with AI-driven monitoring and strategic consulting. We secure your infrastructure while you scale your vision."
        button="Explore Solutions"
        href="/"
        bg="/images/services/ics/banner-bg.webp"
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
      />

      <Breadcrumb items={breadcrumbItems} />

      <div className="overflow-x-hidden">
        <About
          title1="Intelligent IT:"
          title2="Built for Scale"
          description1="Modern enterprises require more than just break-fix support. We engineer resilient IT ecosystems that adapt to market shifts. By integrating predictive analytics with robust infrastructure, we ensure your technology stack is an asset, not a bottleneck."
          description2="From cloud migration to cybersecurity defense, our managed services provide a shield around your operations. We leverage automation to detect anomalies before they escalate, ensuring maximum uptime and operational fluidity."
          image="/images/services/ics/about.webp"
          id="about"
        />
        <Services
          items={servicesData}
          title={[
            { text: "What", color: "black" },
            { text: "We Deliver", color: "orange" },
          ]}
          description="A robust digital foundation needs comprehensive IT solutions to handle complexity so enterprises can innovate without technical friction."
          id="services"
        />

        <Articles
          items={articlesData}
          mainTitle={[
            { text: "Insights", color: "orange" },
            { text: "IT Support", color: "black" },
          ]}
          id="articles"
        />

        <Industries
          items={industryData}
          title={[
            { text: "Industries We", color: "black" },
            { text: "Empower", color: "orange" },
          ]}
          description="We provide tailored technological footprints to diverse segments to ensure secure and managed digital transformation."
          id="industries"
        />

        <About2
          title1="Tech Enablement:"
          title2="Future Proofing"
          description1="We do not just solve problems; we prevent them. Our consulting approach involves a deep analysis of your IT posture to identify gaps in security and efficiency, and we deploy AI tools to continuously monitor network health."
          description2="Partnership is key. Acting as your fractional CIO, we guide you through digital transformation. Whether adopting Generative AI or strengthening data governance, our team ensures your technology evolves faster than the competition."
          image="/images/services/ics/about2.webp"
          id="about"
          boxTitle="AI-Powered Technology Enablement"
          boxSubtitle="Future-proofing businesses through intelligent systems"
          boxDescription="We leverage AI and advanced analytics to monitor, optimize, and secure IT infrastructure, enabling proactive problem-solving and scalable digital transformation that keeps your business ahead of the curve."
        />

        <Testimonials
          title="Client Success Stories"
          description="See how our proactive IT management has helped businesses achieve stability, security, and scalable growth."
          items={testimonialsData}
          interval={2500}
          id="testimonials"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for IT Services", color: "black" },
          ]}
          id="faq"
        />

        <ContactForm />

        <RecentBlog
          blog={blogs[0]}
          title={[
            { text: "Recent", color: "black" },
            { text: "Insights", color: "orange" },
          ]}
          description="Stay updated with the latest trends in cloud computing, cybersecurity, and digital infrastructure management."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
