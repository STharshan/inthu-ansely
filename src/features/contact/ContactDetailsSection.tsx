import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactDetailsSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Head Office */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center transition-colors duration-300">
              <MapPin className="w-7 h-7 text-gray-900 dark:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-gray-900 dark:text-white transition-colors duration-300">
              Head Office
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xs transition-colors duration-300">
              We live in the digital world.
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center transition-colors duration-300">
              <Phone className="w-7 h-7 text-gray-900 dark:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-gray-900 dark:text-white transition-colors duration-300">
              Phone
            </h3>
            <a
              href="tel:+447380909597"
              className="text-gray-600 dark:text-gray-300 text-base md:text-lg hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              +44 738 090 9597
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center transition-colors duration-300">
              <Mail className="w-7 h-7 text-gray-900 dark:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-gray-900 dark:text-white transition-colors duration-300">
              Email
            </h3>
            <a
              href="mailto:contact@ansely.co.uk"
              className="text-gray-600 dark:text-gray-300 text-base md:text-lg hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              contact@ansely.co.uk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
