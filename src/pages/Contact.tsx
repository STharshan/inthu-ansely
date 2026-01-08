import React from "react";
import ContactFormSection from "../components/ContactPage/ContactFormSection";
import FAQSection from "../components/ContactPage/FAQSection";

const Contact: React.FC = () => {
  return (
    <div className="contact-page min-h-screen bg-black text-white">
      {/* Contact Form Section*/}
      <ContactFormSection
        backgroundImage="/a1.jpg"
        heading="Let's Work Together"
        subheading="Ready to transform your business? Share your project details with us and our team will reach out to discuss how we can help bring your vision to life."
      />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Contact;
