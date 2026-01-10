import React from "react";
// import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const services = [
    { name: "Custom Software", href: "/CustomeSoftware" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "Consultancy", href: "/business-consultancy" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Custom Website", href: "/customwebsite" },
    { name: "Smart Automation", href: "/smart-automation" },
    { name: "Digital Branding", href: "/digital-marketing" },
    { name: "Digital Partnerships", href: "/digital-partnership" },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-white text-2xl font-light tracking-wider">
              ANSELY
            </h2>
            <p className="text-sm leading-relaxed max-w-md">
              Let us guide you in your digital evolution. We transform your
              vision into reality with innovation and precision. Let's make it a
              success.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h3 className="text-white text-sm font-medium mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              {pages.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-white text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-white text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@ansely.co.uk"
                  className="hover:text-white transition-colors"
                >
                  contact@ansely.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+447380909597"
                  className="hover:text-white transition-colors"
                >
                  +44 738 0909597
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <p>Copyright © {new Date().getFullYear()} Ansely.</p>
            <div className="flex gap-3">
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-4">
            <a
              href="https://instagram.com/ansely"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
            </a>

            <a
              href="https://linkedin.com/company/ansely"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
