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
    "Education Technology Solutions | AI Learning & Digital Transformation",
  description:
    "We deliver AI powered education platforms, learning management systems, student engagement solutions and digital campus technology for modern education institutions.",
  keywords:
    "education technology, AI learning platforms, learning management systems, virtual classroom solutions, student engagement technology, educational analytics, smart campus solutions, digital curriculum development, online assessment systems, personalized learning AI, educational content management, student information systems, teacher productivity tools, parent communication platforms, hybrid learning technology, educational mobile apps, learning analytics dashboards, competency based education software, educational video platforms, interactive learning tools, school management software, educational chatbot solutions, adaptive learning technology, educational cloud solutions, educational data security, accessibility technology education, language learning platforms, STEM education technology, special education technology, early childhood education software",
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
    title: "AI Powered Learning Platforms",
    description:
      "Build intelligent learning management systems with personalized learning paths, adaptive assessments, and AI driven content recommendations for students.",
    img: "/images/industry/education/services1.webp",
    href: "/",
  },
  {
    title: "Virtual Classroom Solutions",
    description:
      "Develop interactive virtual learning environments with real time collaboration, video conferencing, and engagement tracking for hybrid education models.",
    img: "/images/industry/education/services2.webp",
    href: "/",
  },
  {
    title: "Education Analytics Systems",
    description:
      "Create comprehensive analytics dashboards for student performance monitoring, learning outcome tracking, and data driven decision making for institutions.",
    img: "/images/industry/education/services3.webp",
    href: "/",
  },
  {
    title: "School Management Software",
    description:
      "Implement integrated campus management solutions covering admissions, attendance, grading, scheduling, and communication for educational institutions.",
    img: "/images/industry/education/services4.webp",
    href: "/",
  },
  {
    title: "Mobile Learning Applications",
    description:
      "Design responsive educational apps for on the go learning, offline content access, and interactive mobile experiences for students and educators.",
    img: "/images/industry/education/services5.webp",
    href: "/",
  },
];

const processData: processItem[] = [
  {
    title: "Education Technology Strategy",
    description:
      "Define digital learning objectives, assess current infrastructure, and develop comprehensive edtech transformation roadmaps for institutions.",
  },
  {
    title: "Platform Architecture Design",
    description:
      "Design scalable learning platform architectures with integrations for existing systems, data migration plans, and future expansion capabilities.",
  },
  {
    title: "AI Integration Development",
    description:
      "Implement machine learning algorithms for personalized learning, automated assessment, student engagement analytics, and adaptive content delivery.",
  },
  {
    title: "Content Management Solutions",
    description:
      "Develop systems for digital curriculum creation, interactive content delivery, multimedia integration, and learning resource organization.",
  },
  {
    title: "Assessment & Evaluation Systems",
    description:
      "Build automated testing platforms, competency evaluation tools, grading systems, and learning progress tracking with analytics integration.",
  },
  {
    title: "Communication Platform Development",
    description:
      "Create integrated communication systems for teacher student interaction, parent engagement, and administrative notifications across channels.",
  },
  {
    title: "Mobile Experience Design",
    description:
      "Develop responsive Progressive Web Apps and native mobile applications for accessible learning across all devices and connectivity conditions.",
  },
  {
    title: "Data Security Implementation",
    description:
      "Ensure student data protection, implement FERPA compliance measures, establish secure access controls, and create data privacy frameworks.",
  },
  {
    title: "Performance Optimization",
    description:
      "Implement scalable infrastructure, content delivery networks, and performance monitoring for reliable access during peak learning periods.",
  },
  {
    title: "Analytics & Reporting Setup",
    description:
      "Configure learning analytics dashboards, create institutional reporting tools, and implement data visualization for educational insights.",
  },
  {
    title: "Training & Onboarding Systems",
    description:
      "Develop comprehensive training programs, user guides, and onboarding workflows for teachers, students, and administrative staff.",
  },
  {
    title: "Launch & Continuous Support",
    description:
      "Manage deployment, provide ongoing technical support, implement updates, and establish feedback loops for continuous platform improvement.",
  },
];

const faqData: FaqItem[] = [
  {
    title: "How does AI enhance modern education technology?",
    description:
      "AI transforms education through personalized learning paths, adaptive content delivery, automated assessment grading, and predictive analytics for student success. Our AI solutions typically improve learning outcomes by 30 50%, reduce administrative workload by 40 60%, and enable data driven insights for continuous educational improvement across all learning environments.",
  },
  {
    title: "What technologies are essential for digital learning platforms?",
    description:
      "Essential technologies include Learning Management Systems with AI capabilities, video conferencing infrastructure, cloud based content delivery, mobile learning applications, data analytics platforms, and accessibility tools. We implement these with focus on scalability, security, and seamless user experiences for students, teachers, and administrators.",
  },
  {
    title:
      "How can educational institutions benefit from technology integration?",
    description:
      "Technology integration improves learning accessibility, enables personalized education, reduces administrative costs, enhances parent engagement, and provides data driven insights. Our solutions typically deliver 40 70% reduction in administrative time, 25 45% improvement in student engagement, and 30 50% increase in operational efficiency for educational institutions.",
  },
  {
    title: "What are the key components of successful hybrid learning models?",
    description:
      "Successful hybrid learning requires integrated learning management systems, reliable video conferencing, digital content repositories, assessment tools, communication platforms, and analytics dashboards. Our solutions ensure seamless transitions between in person and remote learning while maintaining educational quality and student engagement across all modalities.",
  },
  {
    title: "How does automation improve educational administration?",
    description:
      "Automation streamlines admissions processing, attendance tracking, grading, scheduling, communication, and reporting. Our automated solutions typically reduce administrative workload by 50 80%, improve accuracy to 99.5%, and enable real time data access for informed decision making across educational institutions.",
  },
];

const whatWedoData: WhatWedoItem[] = [
  {
    title: "Learning Management Systems",
    description:
      "Develop comprehensive LMS platforms with AI personalization, content management, and assessment tools",
    img: "/images/industry/education/industry1.webp",
    href: "/",
  },
  {
    title: "Student Engagement Solutions",
    description:
      "Create interactive learning tools, gamification platforms, and communication systems for better engagement",
    img: "/images/industry/education/industry2.webp",
    href: "/",
  },
  {
    title: "Educational Analytics Platforms",
    description:
      "Build data analytics dashboards for performance tracking, learning insights, and institutional reporting",
    img: "/images/industry/education/industry3.webp",
    href: "/",
  },
];

export default function Education() {
  return (
    <>
      <Banner
        title="Tech Driven Education Services"
        titleColor="text-bwhite"
        button1="Learn More"
        href1="/contact-us"
        button2="+91 0120 423 4429"
        href2="tel:+9101204234429"
        bg="/images/industry/education/banner.webp"
        bannerContentAlignment="left"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="overflow-x-hidden">
        <About
          title={[
            { text: "About", color: "orange" },
            { text: "Education Services", color: "black" },
          ]}
          description1="Beno delivers advanced education technology solutions that transform teaching and learning through artificial intelligence, digital platforms, and data driven insights. Our expertise spans intelligent learning management systems, virtual classroom development, educational analytics, and comprehensive campus management solutions for modern educational institutions."
          list={[
            { text: "AI powered personalized learning platforms" },
            { text: "Interactive virtual classroom solutions" },
            { text: "Comprehensive educational analytics systems" },
            { text: "Mobile learning application development" },
          ]}
          image="/images/industry/education/about.webp"
          id="about"
          enableReadMore={false}
        />

        <RecentBlog
          blog={{
            image: "/images/industry/education/recent-blog1.webp",
            title: "Modern Education Platform Development",
            description:
              "We specialize in building intelligent education technology solutions that enhance learning outcomes through AI personalization, interactive content, and data driven insights. Our platforms integrate adaptive learning algorithms, comprehensive assessment tools, and seamless communication systems that connect students, teachers, and parents. Through scalable cloud infrastructure and mobile first design, we create digital learning environments that are accessible, engaging, and effective for diverse educational needs while reducing administrative burden through intelligent automation.",
          }}
          title={[
            { text: "Beno Support", color: "orange" },
            { text: "Provides", color: "black" },
          ]}
          description="From AI powered learning platforms to comprehensive educational analytics, we deliver technology solutions that transform teaching and learning experiences."
          id=""
        />
        <Services
          items={servicesData}
          title={[
            { text: "Our", color: "black" },
            { text: "Expertise", color: "orange" },
          ]}
          description="From AI driven learning platforms to comprehensive educational analytics, we deliver cutting edge technology solutions that enhance teaching and learning outcomes."
          id="services"
        />

        <Process
          items={processData}
          title={[
            { text: "Our", color: "black" },
            { text: "Process", color: "orange" },
          ]}
          description="From strategic edtech planning to AI integration and implementation, we follow a comprehensive methodology ensuring effective and scalable educational solutions."
          id="process"
        />

        <WhatWedo
          items={whatWedoData}
          title={[
            { text: "What", color: "orange" },
            { text: "We Do", color: "white" },
          ]}
          description="We develop intelligent education technology combining AI personalization, learning analytics, and digital platforms to transform teaching and administrative operations."
          id="whatwedo"
        />

        <Faq
          items={faqData}
          title={[
            { text: "FAQ", color: "orange" },
            { text: "for Education", color: "black" },
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
          description="Stay updated with the latest trends in education technology, AI innovations in learning, and digital transformation strategies for educational institutions."
          id="blogs"
        />

        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
