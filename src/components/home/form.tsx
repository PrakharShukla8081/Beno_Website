"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import toast from "react-hot-toast";

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Form = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = {
    location: "B-23/C1, Block B, Sector 62, Noida, Uttar Pradesh 201309",
    enquiry: {
      email: "info@benosupport.com",
      phone: "+91 0120 423 4429",
      skype: "+91 892-988-4560",
    },
  };

  const contactLinks = [
    {
      icon: <IoMdMail className="w-4 h-4 text-borange" />,
      href: `mailto:${contactDetails.enquiry.email}`,
      text: contactDetails.enquiry.email,
    },
    {
      icon: <IoCallSharp className="w-4 h-4 text-borange" />,
      href: `tel:${contactDetails.enquiry.phone.replace(/\s+/g, "")}`,
      text: contactDetails.enquiry.phone,
    },
    {
      icon: <FaWhatsapp className="w-4 h-4 text-borange" />,
      href: contactDetails.enquiry.skype,
      text: contactDetails.enquiry.skype,
    },
  ];

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;

    const fullName = formData.get("fullName") as string;
    if (!fullName?.trim()) {
      newErrors.first_name = "Full name is required";
    } else {
      const nameParts = fullName.trim().split(/\s+/);
      if (nameParts.length < 2) {
        newErrors.last_name = "Please enter both first and last name";
      }
    }

    const email = formData.get("email") as string;
    if (!email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phone = formData.get("phone") as string;
    if (phone && phone.trim() && !phoneRegex.test(phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    const message = formData.get("message") as string;
    if (!message?.trim()) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleInputChange = (fieldName: keyof FormErrors) => {
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      // toast.error("Please fix the errors in the form");
      return;
    }

    const templateParams = {
      first_name: "",
      last_name: "",
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      message: formData.get("message"),
      job_title: "Submittion from Home Page",
      organization: "",
      enquiry: "",
      country: "",
      industry: "",
    };

    const fullName = (formData.get("fullName") as string).trim();
    const nameParts = fullName.split(/\s+/);
    templateParams.first_name = nameParts[0] || "";
    templateParams.last_name = nameParts.slice(1).join(" ") || "";

    emailjs
      .send(
        "service_9jx5mpn",
        "template_7772c3m",
        templateParams,
        "sW_3exb124dDLdvXI",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
          setErrors({});
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className="bg-no-repeat bg-center bg-cover mt-8 md:mt-12 lg:mt-16 xl:mt-20 py-8 md:py-12 lg:py-16 xl:py-20"
      style={{ backgroundImage: "url('/images/home/form-bg.webp')" }}
      data-aos="fade-up"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div
          className="md:col-span-3 bg-bwhite shadow-md rounded-xl p-6 md:p-8 lg:p-10"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-borange"></span>
            <h3 className="text-borange font-semibold text-md tracking-wide">
              CONTACT DETAILS
            </h3>
          </div>

          <h4 className="text-bblack font-semibold text-2xl md:text-3xl mb-2">
            Let&apos;s Get in Touch!
          </h4>
          <p className="text-bblack/80 text-sm md:text-base font-light max-w-md mb-6">
            Have a challenge to solve? A system to modernize? Or a vision
            powered by AI and next gen tech?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex flex-col gap-1">
                <h5 className="text-borange font-medium text-lg">Location:</h5>
                <span className="w-14 h-0.5 bg-borange"></span>
              </div>

              <p
                className="text-bblack text-sm md:text-base mt-2 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {contactDetails.location}
              </p>

              <div className="flex flex-col gap-1 mt-5">
                <h5 className="text-borange font-medium text-lg">Enquiry:</h5>
                <span className="w-14 h-0.5 bg-borange"></span>
              </div>

              <div className="flex flex-col mt-4 gap-2">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-bblack hover:text-borange transition"
                    data-aos="fade-up"
                    data-aos-delay={250 + index * 100}
                  >
                    {link.icon}
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
              noValidate
            >
              <div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="bg-[#F9F9F9] w-full outline-none px-4 py-2 rounded-md text-sm md:text-base focus:ring-1 focus:ring-borange"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  onChange={() => handleInputChange("first_name")}
                />
                {(errors.first_name || errors.last_name) && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name || errors.last_name}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-[#F9F9F9] w-full outline-none px-4 py-2 rounded-md text-sm md:text-base focus:ring-1 focus:ring-borange"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  onChange={() => handleInputChange("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className="bg-[#F9F9F9] w-full outline-none px-4 py-2 rounded-md text-sm md:text-base focus:ring-1 focus:ring-borange"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  onChange={() => handleInputChange("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  rows={4}
                  required
                  className="bg-[#F9F9F9] w-full outline-none px-4 py-2 rounded-md text-sm md:text-base resize-none focus:ring-1 focus:ring-borange"
                  data-aos="fade-up"
                  data-aos-delay="450"
                  onChange={() => handleInputChange("message")}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-borange text-bwhite font-medium text-md px-6 py-2 rounded-full cursor-pointer hover:bg-bblue transition-colors duration-200 w-40 disabled:opacity-50 disabled:cursor-not-allowed"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="md:col-span-2 flex justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/images/home/form-img.webp"
            alt="Contact Us"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
