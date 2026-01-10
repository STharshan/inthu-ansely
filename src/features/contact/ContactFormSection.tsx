import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  projectDetails: string;
}

interface ContactFormSectionProps {
  backgroundImage: string;
  heading?: string;
  subheading?: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  backgroundImage,
  heading = "Let's Work Together",
  subheading = "Ready to transform your business? Share your project details with us and our team will reach out to discuss how we can help bring your vision to life.",
}) => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    projectDetails: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const validateEmail = (email: string): boolean => {
    const re =
      /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Honeypot check
    const website =
      (
        formRef.current?.elements.namedItem(
          "website"
        ) as HTMLInputElement | null
      )?.value || "";
    const phoneNumber =
      (
        formRef.current?.elements.namedItem(
          "phone_number"
        ) as HTMLInputElement | null
      )?.value || "";
    if (website || phoneNumber) {
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      setFormState("error");
      setTimeout(() => {
        setFormState("idle");
        setErrorMsg("");
      }, 3000);
      return;
    }

    setFormState("loading");
    setErrorMsg("");

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS configuration is missing");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.projectDetails,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setFormState("success");

      setTimeout(() => {
        setFormState("idle");
      }, 2500);

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        projectDetails: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorMsg("Submission failed. Please try again later.");
      setFormState("error");
      setTimeout(() => {
        setFormState("idle");
        setErrorMsg("");
      }, 3000);
    }
  };

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 mt-24 md:mt-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Side - Heading & Subheading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-4 md:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              {heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              {subheading}
            </motion.p>
          </motion.div>

          {/* Right Side - Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full"
          >
            {/* Glass Container */}
            <div className="glass-container backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl md:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
              >
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-medium text-white/90 mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-white/90 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      required
                      inputMode="email"
                      autoComplete="email"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-medium text-white/90 mb-1.5"
                  >
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                  />
                </div>

                {/* Service & Budget Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs sm:text-sm font-medium text-white/90 mb-1.5"
                    >
                      Select Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-gray-900">
                        Select Your Service
                      </option>
                      <option value="Personal Branding" className="bg-gray-900">
                        Personal Branding
                      </option>
                      <option value="Smart Automation" className="bg-gray-900">
                        Smart Automation
                      </option>
                      <option value="Graphic Design" className="bg-gray-900">
                        Graphic Design
                      </option>
                      <option
                        value="Digital Transformation"
                        className="bg-gray-900"
                      >
                        Digital Transformation
                      </option>
                      <option value="SEO" className="bg-gray-900">
                        SEO
                      </option>
                      <option value="PPC" className="bg-gray-900">
                        PPC
                      </option>
                      <option
                        value="Digital Strategy Consulting"
                        className="bg-gray-900"
                      >
                        Digital Strategy Consulting
                      </option>
                      <option
                        value="Digital Sales Training"
                        className="bg-gray-900"
                      >
                        Digital Sales Training
                      </option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs sm:text-sm font-medium text-white/90 mb-1.5"
                    >
                      Project Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-gray-900">
                        Select Your Range
                      </option>
                      <option value="Under £3000" className="bg-gray-900">
                        Under £3000
                      </option>
                      <option value="£3000 - £10,000" className="bg-gray-900">
                        £3000 - £10,000
                      </option>
                      <option value="£10,000 - £25,000" className="bg-gray-900">
                        £10,000 - £25,000
                      </option>
                      <option value="Above £25,000" className="bg-gray-900">
                        Above £25,000
                      </option>
                      <option value="Custom Budget" className="bg-gray-900">
                        Custom Budget
                      </option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs sm:text-sm font-medium text-white/90 mb-1.5"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us more about your project"
                    required
                    rows={3}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="relative w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue)] text-white text-sm sm:text-base font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 group"
                  >
                    {/* Success Background */}
                    <motion.div
                      className="absolute inset-0 bg-[#00E6C5]"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: formState === "success" ? 1 : 0,
                        opacity: formState === "success" ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Success Message */}
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: formState === "success" ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Message Sent Successfully!
                    </motion.span>

                    {/* Error Message */}
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm sm:text-base px-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: formState === "error" ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errorMsg || "Something went wrong"}
                    </motion.span>

                    {/* Default Label */}
                    <motion.span
                      className="flex items-center gap-2 sm:gap-3"
                      animate={{
                        opacity:
                          formState === "idle" || formState === "loading"
                            ? 1
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {formState === "loading" ? "Submitting..." : "Submit"}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </motion.span>
                  </button>

                  <p className="text-xs sm:text-sm text-white/60 text-center">
                    We will contact you within 24 business hours.
                  </p>
                </div>

                {/* Honeypot fields */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="phone_number"
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
