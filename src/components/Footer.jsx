import React from "react";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

          {/* Company Info (Wider Column) */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-white text-2xl font-light tracking-wider">
              scion
            </h2>

            <address className="not-italic text-sm leading-relaxed">
              458 Harper Crescent<br />
              Vancouver, BC V6J 3T2<br />
              Canada
            </address>

            <p className="text-sm leading-relaxed max-w-md">
              This text is intended for legal and compliance disclosures relevant
              to scientific and technological operations. For example: Scion web
              and mobile applications are properties of Scion GmbH and Scion SA
              (Pty) Ltd.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h3 className="text-white text-sm font-medium mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              {["Tour", "Welcome", "Overview", "Expertise", "Compare", "Service Industries"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-white text-sm font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              {["Company", "Culture & Careers", "Our Methodology", "Customers"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* More */}
          <div className="md:col-span-3">
            <h3 className="text-white text-sm font-medium mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              {["Blog", "Pricing", "Contact", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <p>Copyright © Medium Rare.</p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Instagram size={18} className="hover:text-white cursor-pointer" />
            <Twitter size={18} className="hover:text-white cursor-pointer" />
            <Linkedin size={18} className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
