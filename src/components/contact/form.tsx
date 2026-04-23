"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { IoMdArrowDropdown } from "react-icons/io";
import Maintitle from "../common/maintitle";
import toast from "react-hot-toast";

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  job_title?: string;
  organization?: string;
  phone?: string;
  enquiry?: string;
  country?: string;
  industry?: string;
  message?: string;
}

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;

    // First Name validation
    const firstName = formData.get("first_name") as string;
    if (!firstName.trim()) {
      newErrors.first_name = "First name is required";
    } else if (firstName.length < 2) {
      newErrors.first_name = "First name must be at least 2 characters";
    }

    // Last Name validation
    const lastName = formData.get("last_name") as string;
    if (!lastName.trim()) {
      newErrors.last_name = "Last name is required";
    } else if (lastName.length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters";
    }

    // Email validation
    const email = formData.get("email") as string;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (if provided)
    const phone = formData.get("phone") as string;
    if (phone && phone.trim() && !phoneRegex.test(phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Job Title validation (if provided)
    const jobTitle = formData.get("job_title") as string;
    if (jobTitle && jobTitle.trim().length > 100) {
      newErrors.job_title = "Job title cannot exceed 100 characters";
    }

    // Organization validation (if provided)
    const organization = formData.get("organization") as string;
    if (organization && organization.trim().length > 100) {
      newErrors.organization = "Organization name cannot exceed 100 characters";
    }

    // Enquiry validation
    const enquiry = formData.get("enquiry") as string;
    if (!enquiry || enquiry === "Enquiry Type") {
      newErrors.enquiry = "Please select an enquiry type";
    }

    // Country validation
    const country = formData.get("country") as string;
    if (!country || country === "Country") {
      newErrors.country = "Please select a country";
    }

    // Industry validation
    const industry = formData.get("industry") as string;
    if (!industry || industry === "Industry") {
      newErrors.industry = "Please select an industry";
    }

    // Message validation
    const message = formData.get("message") as string;
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
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

    emailjs
      .sendForm(
        "service_9jx5mpn",
        "template_7772c3m",
        formRef.current,
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
    <div className="my-8 md:my-12 py-8 md:py-12 lg:py-16 xl:py-20 bg-[#14212B]">
      <div
        className="container max-w-7xl mx-auto px-4 md:px-8 pt-4 lg:pt-8 pb-4 lg:pb-12 bg-cover bg-center bg-no-repeat h-full"
        style={{ backgroundImage: "url('/images/contact/form-bg.webp')" }}
      >
        <Maintitle
          title={[{ text: "Let's get in touch with us", color: "white" }]}
        />

        <form ref={formRef} onSubmit={sendEmail} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 md:mt-8 lg:mt-12">
            <div>
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                required
                className="bg-white/90 w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("first_name")}
              />
              {errors.first_name && (
                <p className="text-red-400 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>

            <div>
              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                required
                className="bg-white/90 w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("last_name")}
              />
              {errors.last_name && (
                <p className="text-red-400 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="E-Mail Address"
                required
                className="bg-white/90 w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="job_title"
                type="text"
                placeholder="Job Title"
                className="bg-white/90 w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("job_title")}
              />
              {errors.job_title && (
                <p className="text-red-400 text-sm mt-1">{errors.job_title}</p>
              )}
            </div>

            <div>
              <input
                name="organization"
                type="text"
                placeholder="Organization Name"
                className="bg-white/90 w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("organization")}
              />
              {errors.organization && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.organization}
                </p>
              )}
            </div>

            <div>
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="bg-white/90 w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("phone")}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="relative">
              <select
                name="enquiry"
                className="bg-white/90 appearance-none w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("enquiry")}
              >
                <option>Enquiry Type</option>
                <option>General</option>
                <option>Support</option>
                <option>Partnership</option>
                <option>Business</option>
              </select>
              <IoMdArrowDropdown
                className="absolute right-2 top-1/2 -translate-y-1/2"
                size={26}
              />
              {errors.enquiry && (
                <p className="text-red-400 text-sm mt-1">{errors.enquiry}</p>
              )}
            </div>

            <div className="relative">
              <select
                name="country"
                className="bg-white/90 appearance-none w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("country")}
              >
                <option>Country</option>
                <option>India</option>
                <option>USA</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <IoMdArrowDropdown
                className="absolute right-2 top-1/2 -translate-y-1/2"
                size={26}
              />
              {errors.country && (
                <p className="text-red-400 text-sm mt-1">{errors.country}</p>
              )}
            </div>

            <div className="relative">
              <select
                name="industry"
                className="bg-white/90 appearance-none w-full py-3 px-4 rounded-md outline-none"
                onChange={() => handleInputChange("industry")}
              >
                <option>Industry</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Finance</option>
                <option>Technology</option>
                <option>Retail</option>
                <option>Other</option>
              </select>
              <IoMdArrowDropdown
                className="absolute right-2 top-1/2 -translate-y-1/2"
                size={26}
              />
              {errors.industry && (
                <p className="text-red-400 text-sm mt-1">{errors.industry}</p>
              )}
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <textarea
              name="message"
              placeholder="Your brief message..."
              rows={5}
              required
              className="bg-white/90 w-full py-3 px-4 rounded-md outline-none resize-none"
              onChange={() => handleInputChange("message")}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="mt-4 md:mt-6 flex justify-center">
            <input
              type="submit"
              value={isSubmitting ? "Sending..." : "Send Message"}
              disabled={isSubmitting}
              className="text-white py-3 px-10 bg-bblue rounded-full text-xl cursor-pointer hover:bg-borange transition-all duration-150 ease-in disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
