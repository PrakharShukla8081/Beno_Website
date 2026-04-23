import Banner from "@/components/industry/banner";
import { FaqItem } from "@/components/terms/faq";
import dynamic from "next/dynamic";
import Loader from "../loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Beno Support",
  description:
    "Governing Terms and Conditions for the use of Beno Support website and services, outlining user obligations, liability limitations, and intellectual property rights.",
};

const Faq = dynamic(() => import("@/components/terms/faq"), {
  loading: () => <Loader />,
});

const Cta = dynamic(() => import("@/components/common/cta"), {
  loading: () => <Loader />,
});

const faqData: FaqItem[] = [
  {
    title: "Acceptance of our Privacy Notice",
    description:
      "By agreeing to these Terms and Conditions, you also acknowledge and consent to our data collection and handling practices as described in our separate Privacy Policy. The Privacy Policy is incorporated by reference into these Terms. We reserve the right to make changes to the Privacy Policy at any time, and your continued use of our services constitutes binding acceptance of those changes. Please review both documents regularly to ensure compliance.",
  },
  {
    title: "Ownership of this website and its content",
    description:
      "All intellectual property rights, including copyrights, patents, patent disclosures and trade secrets, in and to the website and its content, and any derivative works thereto shall be owned by Beno Support. You agree not to modify, reproduce, distribute, create derivative works from, publicly display, publicly perform, or in any way exploit any of the content, software, and materials on the website in whole or in part without prior written permission.",
  },
  {
    title: "Trademarks",
    description:
      "The Beno Support name, logo, and all related names, product names, service names, designs, and slogans are trademarks of Beno Support or its affiliates or licensors. Users are strictly prohibited from using these marks without the express written permission of the Company. Any unauthorized use of the trademarks or confusingly similar marks is a violation of federal and state trademark laws and will result in legal action and claim for damages.",
  },
  {
    title: "Limitation of Liability",
    description:
      "In no event shall Beno Support, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any unauthorized access to or use of our servers and/or any and all personal information stored therein; (iii) any interruption or cessation of transmission to or from the Service.",
  },
];

export default function Terms() {
  return (
    <div className="overflow-x-hidden">
      <Banner
        title="Terms & Conditions"
        titleColor="text-bwhite"
        description="These terms and conditions were last updated in January, 2024."
        descriptionColor="text-bwhite"
        bg="/images/terms/banner.webp"
        bannerContentAlignment="left"
        className="min-h-[30vh] md:min-h-[40vh]"
      />

      <section className="container max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <h1 className="text-borange text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
          Our Terms and Conditions — January, 2024
        </h1>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          Welcome to Beno Support. These Terms and Conditions govern your access
          to and use of our website, services, and any content or functionality
          offered on or through them. By accessing or using the Service, you
          agree to be bound by these Terms, which establish a contractual
          relationship between you and Beno Support.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          As a user, you agree to use the Service only for lawful purposes and
          in accordance with these Terms. You are prohibited from using the
          Service in any way that violates any applicable federal, state, local,
          or international law, or for the purpose of exploiting, harming, or
          attempting to exploit or harm minors in any way by exposing them to
          inappropriate content.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          We may terminate or suspend your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms. Upon termination, your right to
          use the Service will immediately cease. All provisions of the Terms
          which by their nature should survive termination shall survive
          termination, including, without limitation, ownership provisions,
          warranty disclaimers, indemnity, and limitations of liability.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          These Terms shall be governed and construed in accordance with the
          laws of [Jurisdiction/State], without regard to its conflict of law
          provisions. Any legal action or proceeding arising under these Terms
          will be brought exclusively in the courts located in [City, State],
          and the parties hereby consent to the personal jurisdiction and venue
          therein.
        </p>
        <p className="mt-4 md:mt-8 text-md text-center md:text-left text-bblack">
          Beno Support reserves the right, at its sole discretion, to modify or
          replace these Terms at any time. If a revision is material we will
          provide at least 30 days notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion, and your continued use of the Service after the revised
          Terms have taken effect signifies your acceptance of the new Terms.
        </p>
      </section>

      <Faq faqs={faqData} />

      <Cta />
    </div>
  );
}
