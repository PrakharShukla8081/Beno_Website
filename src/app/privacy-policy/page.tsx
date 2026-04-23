import { FaqItem } from "@/components/terms/faq";
import Banner from "@/components/industry/banner";
import dynamic from "next/dynamic";
import Loader from "../loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Beno Support",
  description:
    "Official Privacy Policy for Beno Support detailing data collection, usage, user rights, and legal compliance, updated January 2024.",
};

const Faq = dynamic(() => import("@/components/terms/faq"), {
  loading: () => <Loader />,
});

const Cta = dynamic(() => import("@/components/common/cta"), {
  loading: () => <Loader />,
});

const faqData: FaqItem[] = [
  {
    title: "Your consent to our Privacy Notice",
    description:
      "By using our website, services, or providing us with your personal information, you consent to the collection, use, and disclosure of your information as described in this Privacy Notice. We process personal data based on the legal grounds outlined in applicable data protection laws, including where processing is necessary for the performance of a contract with you, or where we have a legitimate interest, or based on your explicit consent. Your continued interaction with Beno Support following the posting of changes to this policy will constitute your acceptance of those changes and updates.",
  },
  {
    title: "Ownership of this website and its content",
    description:
      "This website and all its original content, features, and functionality, including but not limited to all software, HTML code, scripts, text, photographs, images, designs, video, and audio are the exclusive property of Beno Support and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. Unauthorized reproduction, modification, distribution, transmission, or display of the content is strictly prohibited and may result in legal action.",
  },
  {
    title: "Trademarks",
    description:
      "The Beno Support name, the Beno Support logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Beno Support or its affiliates or licensors. You must not use such marks without the prior written permission of Beno Support. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners and are protected under relevant trademark laws globally.",
  },
  {
    title: "Disclaimer of Warranties",
    description:
      "This website is provided on an 'as is' and 'as available' basis, without any warranties of any kind, either express or implied. Beno Support hereby disclaims all warranties, including but not limited to any implied warranties of merchantability, non-infringement, and fitness for a particular purpose. Beno Support does not warrant that the website or its content will be accurate, reliable, error free, or uninterrupted, or that defects will be corrected, or that the website or the server that makes it available are free of viruses or other harmful components.",
  },
];

export default function Privacy() {
  return (
    <div className="overflow-x-hidden">
      <Banner
        title="Privacy Policy"
        titleColor="text-bwhite"
        description="These policies were last updated in January, 2024."
        descriptionColor="text-bwhite"
        bg="/images/privacy/banner.webp"
        bannerContentAlignment="left"
        className="min-h-[30vh] md:min-h-[40vh]"
      />

      <section className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <h1 className="text-borange text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
          Our Privacy Policy — January, 2024
        </h1>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          This Privacy Policy describes how Beno Support collects, uses, and
          discloses information, and what choices you have with respect to your
          data. This policy applies to information we collect on our website,
          through email, text, and other electronic communications between you
          and this Website, and through our products and services.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          We collect several types of information from and about users of our
          Website and Services, including personal information (such as name,
          email address, and phone number), and non-personal information (such
          as IP address, browser type, operating system, and details about your
          usage patterns). This information is gathered when you register for a
          service, subscribe to our newsletter, or communicate directly with us.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          The information we collect is primarily used to present our Website
          and its contents to you, provide you with information, products, or
          services that you request from us, fulfill any other purpose for which
          you provide it, and improve our services through analysis of usage
          data. We may also use your information to communicate with you about
          services that may be of interest, strictly in accordance with your
          communication preferences.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          We do not sell your personal information. We may disclose personal
          information to our subsidiaries and affiliates, to contractors,
          service providers, and other third parties we use to support our
          business, and to comply with any court order, law, or legal process,
          including to respond to any government or regulatory request.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          You have rights regarding your personal data, including the right to
          access, correct, or request deletion of any personal information that
          you have provided to us. You may also withdraw your consent at any
          time where we rely on consent to process your personal information. To
          exercise any of these rights, please contact us using the information
          provided on our contact page.
        </p>
      </section>

      <Faq faqs={faqData} />

      <Cta />
    </div>
  );
}
