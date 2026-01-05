'use client';
import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const companyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Close dropdowns on outside click
    const handleClickOutside = (e) => {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setIsCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <style>{`
        /* === Shutter Animations === */
        @keyframes shutterDown {
          0% { clip-path: inset(0 0 100% 0); opacity: 0; }
          40% { opacity: 0.7; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        @keyframes shutterUp {
          0% { clip-path: inset(0 0 0 0); opacity: 1; }
          60% { opacity: 0.6; }
          100% { clip-path: inset(0 0 100% 0); opacity: 0; }
        }

        .navbar-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background-color: white;
          clip-path: inset(0 0 100% 0);
          opacity: 0;
        }

        .navbar-bg.active {
          animation: shutterDown 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .navbar-bg.inactive {
          animation: shutterUp 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .nav-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.2);
          transition: background-color 0.6s ease;
        }

        .nav-line.scrolled {
          background-color: rgba(0, 0, 0, 0.12);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .social-icon {
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.2;
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
        }

        .social-icon:hover::before {
          width: 100%;
          height: 100%;
        }

        .cta-button {
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .cta-button:hover::before {
          width: 300%;
          height: 300%;
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-50">
        {/* White shutter background */}
        <div className={`navbar-bg max-w-6xl mx-auto rounded-b-xl ${scrolled ? "active" : "inactive"}`}></div>

        <div className={`relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 transition-all duration-700 ease-in-out ${scrolled ? "text-black" : "text-white"}`}>
          {/* Three Column Grid Layout */}
          <div className="grid grid-cols-3 items-center w-full relative z-10">
            
            {/* Logo - Far Left */}
            <a
              href="/"
              className={`text-[16px] sm:text-[18px] font-bold tracking-[0.25em] transition-all duration-700 flex-shrink-0 justify-self-start ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              ANSELY
            </a>

            {/* Desktop Nav - Center */}
            <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10">
              {["PROJECTS", "SERVICES"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`relative text-[13px] uppercase tracking-[0.18em] font-medium group transition-colors duration-700 whitespace-nowrap ${
                    scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-[3px] w-0 h-[1px] transition-all duration-500 group-hover:w-full ${
                      scrolled ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                </a>
              ))}

              {/* Company dropdown (click toggle) */}
              <div ref={companyRef} className="relative text-[13px] uppercase tracking-[0.18em] font-medium">
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className={`flex items-center gap-1 transition-colors duration-700 whitespace-nowrap ${
                    scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                  }`}
                >
                  COMPANY
                  <FiChevronDown
                    className={`text-sm mt-[2px] transition-transform duration-300 ${
                      isCompanyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCompanyOpen && (
                  <div
                    className="absolute top-full left-0 mt-3 w-44 rounded-md shadow-lg py-2 bg-white text-black animate-[fadeIn_0.3s_ease_forwards]"
                  >
                    {["ABOUT", "JOURNAL", "CONTACT"].map((item) => (
                      <a
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Empty div for mobile to maintain grid */}
            <div className="lg:hidden"></div>

            {/* Right Section - Social Icons + CTA Button - Far Right */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0 justify-self-end">
              {/* Social Icons - Tablet and Desktop */}
              <div className="hidden sm:flex items-center gap-2">
                {[
                  { Icon: FaInstagram, href: "#instagram" },
                  { Icon: FaFacebookF, href: "#facebook" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`social-icon p-2 rounded-full transition-all duration-500 ease-in-out border ${
                      scrolled
                        ? "border-black/15 text-black hover:border-black/30 hover:bg-black/5"
                        : "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[15px] lg:h-[15px] relative z-10" />
                  </a>
                ))}
              </div>

              {/* CTA Button - Tablet and Desktop */}
              <a
                href="/contact"
                className={`cta-button hidden sm:inline-block rounded-full px-5 sm:px-6 lg:px-8 py-2 sm:py-[10px] text-[11px] lg:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] font-semibold transition-all duration-700 ease-in-out relative whitespace-nowrap ${
                  scrolled
                    ? "bg-black text-white hover:shadow-lg"
                    : "bg-white text-black hover:shadow-xl"
                }`}
              >
                <span className="relative z-10">LET'S TALK</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden text-2xl transition-colors duration-700 p-1 ${
                  scrolled ? "text-black" : "text-white"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Divider line */}
          <div className={`nav-line ${scrolled ? "scrolled" : ""}`}></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white text-black shadow-lg animate-[fadeIn_0.4s_ease_forwards] overflow-hidden">
            <div className="max-w-[1350px] mx-auto px-5 sm:px-8">
              {/* Navigation Links */}
              {["PROJECTS", "SERVICES"].map((item, index) => (
                <div
                  key={item}
                  className="border-b border-gray-200 py-4 text-[13px] tracking-[0.18em] uppercase font-medium"
                  style={{ animation: `slideIn 0.3s ease forwards ${index * 0.1}s` }}
                >
                  <a href={`/${item.toLowerCase()}`} className="block hover:text-gray-600 transition-colors">
                    {item}
                  </a>
                </div>
              ))}

              {/* Company Dropdown */}
              <div className="border-b border-gray-200 py-4">
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="flex items-center justify-between w-full text-[13px] tracking-[0.18em] uppercase font-medium"
                >
                  COMPANY
                  <FiChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      isCompanyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {isCompanyOpen && (
                  <div className="mt-3 pl-4 space-y-2 animate-[fadeIn_0.3s_ease_forwards]">
                    {["ABOUT", "JOURNAL", "CONTACT"].map((item) => (
                      <a
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="block py-2 text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Icons - Mobile */}
              <div className="flex justify-center gap-4 py-6 border-b border-gray-200">
                {[
                  { Icon: FaInstagram, href: "#instagram" },
                  { Icon: FaFacebookF, href: "#facebook" },
                  { Icon: FaLinkedinIn, href: "#linkedin" },
                  { Icon: FaTwitter, href: "#twitter" }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="social-icon p-3 rounded-full border border-gray-300 text-black hover:border-black hover:bg-gray-100 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* CTA Button - Mobile */}
              <div className="py-6">
                <a
                  href="/contact"
                  className="cta-button block text-center bg-black text-white rounded-full px-8 py-3 text-[12px] tracking-[0.18em] font-semibold hover:bg-gray-800 transition-all relative overflow-hidden"
                >
                  <span className="relative z-10">LET'S TALK</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}