import Branches from "@/components/contact/branches";
import Banner from "@/components/industry/banner";
import dynamic from "next/dynamic";
import Loader from "../loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Beno Support | Book a Consultation or Service Inquiry",
  description:
    "Get in touch with Beno Support for IT services, customer support outsourcing, cybersecurity, software solutions, and business automation inquiries.",
  keywords:
    "Contact Beno Support, IT consulting contact, BPO contact, support desk India",
};

const Form = dynamic(() => import("@/components/contact/form"), {
  loading: () => <Loader />,
});

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      <Banner
        title="Contact"
        description="we believe that those who challenge the status quo today will do remarkable things tomorrow. If you're as passionate about the possibilities as we are, please contact us."
        titleColor="text-bwhite"
        descriptionColor="text-bwhite"
        bg="/images/contact/banner.webp"
        bannerContentAlignment="left"
        className="min-h-[30vh] md:min-h-[40vh]"
      />
      <Branches />
      <Form />
    </div>
  );
}
