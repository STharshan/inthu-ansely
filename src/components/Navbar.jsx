'use client';
import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const companyRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Close dropdowns on outside click
    const handleClickOutside = (e) => {
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setIsCompanyOpen(false);
      }
      if (socialRef.current && !socialRef.current.contains(e.target)) {
        setIsSocialOpen(false);
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
          left: 3.5%;
          right: 3.5%;
          height: 100%;
          background-color: white;
          clip-path: inset(0 0 100% 0);
          opacity: 0;
          border-radius: 0.4rem;
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
          left: 3.5%;
          right: 3.5%;
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

        .social-dropdown::before {
          content: "";
          position: absolute;
          top: -8px;
          right: 22px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid white;
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-50">
        {/* White shutter background */}
        <div className={`navbar-bg ${scrolled ? "active" : "inactive"}`}></div>

        <div
          className={`relative max-w-[1350px] mx-auto flex items-center justify-between px-8 py-5 transition-all duration-700 ease-in-out ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            className={`text-[18px] font-bold tracking-[0.25em] z-10 relative ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            ANSELY
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12 relative z-10">
            {["PROJECTS", "SERVICES"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`relative text-[13px] uppercase tracking-[0.18em] font-medium group transition-colors duration-700 ${
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
                className={`flex items-center gap-1 ${
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-5 relative z-10">
            {/* Social dropdown (click toggle) */}
            <div ref={socialRef} className="relative">
              <button
                onClick={() => setIsSocialOpen(!isSocialOpen)}
                className={`p-[9px] border rounded-full transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "border-black/20 hover:bg-black/10"
                    : "border-white/40 hover:bg-white/20"
                }`}
              >
                <img
                  src="https://cdn.prod.website-files.com/68e8ab5e436b651ebddda37e/68e8ab5f436b651ebddda43c_Social%20follow.svg"
                  alt="social"
                  className={`w-[18px] transition ${scrolled ? "" : "invert"}`}
                />
              </button>

              {isSocialOpen && (
                <div className="absolute right-0 mt-4 bg-white text-black px-4 py-3 rounded-full shadow-lg flex gap-4 social-dropdown animate-[fadeIn_0.3s_ease_forwards]">
                  <a href="#" className="text-lg border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"><FaInstagram /></a>
                  <a href="#" className="text-lg border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"><FaFacebookF /></a>
                  <a href="#" className="text-lg border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"><FaLinkedinIn /></a>
                  <a href="#" className="text-lg border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition"><FaTwitter /></a>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="/contact"
              className={`rounded-full px-8 py-[10px] text-[12px] tracking-[0.18em] font-semibold transition-all duration-700 ease-in-out ${
                scrolled
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-200"
              } hidden md:inline-block`}
            >
              LET’S TALK
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden text-2xl transition ${
                scrolled ? "text-black" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Divider line */}
          <div className={`nav-line ${scrolled ? "scrolled" : ""}`}></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white text-black text-center shadow-md animate-[fadeIn_0.4s_ease_forwards] overflow-hidden">
            {["PROJECTS", "SERVICES", "COMPANY"].map((item) => (
              <div
                key={item}
                className="border-b border-gray-200 py-5 text-[13px] tracking-[0.18em] uppercase font-medium"
              >
                <a href={`/${item.toLowerCase()}`} className="block hover:text-gray-600">
                  {item}
                </a>
              </div>
            ))}
            <div className="flex justify-center gap-6 py-5 text-xl">
              <a href="#" className="hover:text-gray-500"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-500"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-gray-500"><FaTwitter /></a>
            </div>
            <div className="py-4">
              <a
                href="/contact"
                className="inline-block bg-black text-white rounded-full px-8 py-3 text-[12px] tracking-[0.18em] font-semibold hover:bg-gray-800 transition"
              >
                LET’S TALK
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
