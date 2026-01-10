"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const companyRef = useRef(null);

  // Check if we're on a blog detail page
  const isBlogDetailPage =
    location.pathname.startsWith("/blog/") && location.pathname !== "/blog";

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

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

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Shutter background - changes based on theme */}
      <div
        className={`navbar-bg max-w-6xl mx-auto rounded-b-xl ${
          scrolled ? "active" : "inactive"
        } ${isDark ? "bg-gray-900" : "bg-white"}`}
      ></div>

      <div
        className={`relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 transition-all duration-700 ease-in-out ${
          scrolled
            ? isDark
              ? "text-white"
              : "text-black"
            : isBlogDetailPage && !isDark
            ? "text-black"
            : "text-white"
        }`}
      >
        {/* Three Column Grid Layout */}
        <div className="grid grid-cols-3 items-center w-full relative z-10">
          {/* Logo - Far Left */}
          <a
            href="/"
            className={`text-[16px] sm:text-[18px] font-bold tracking-[0.25em] transition-all duration-700 flex-shrink-0 justify-self-start ${
              scrolled
                ? isDark
                  ? "text-white"
                  : "text-black"
                : isBlogDetailPage && !isDark
                ? "text-black"
                : "text-white"
            }`}
          >
            ANSELY
          </a>

          {/* Desktop Nav - Center */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10">
            {["Home", "About", "Blog"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`relative text-[13px] uppercase tracking-[0.18em] font-medium group transition-colors duration-700 whitespace-nowrap ${
                  scrolled
                    ? isDark
                      ? "text-white hover:text-blue-400"
                      : "text-black hover:text-[var(--brand-blue)]"
                    : isBlogDetailPage && !isDark
                    ? "text-black hover:text-[var(--brand-blue)]"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-[3px] w-0 h-[1px] transition-all duration-500 group-hover:w-full bg-[var(--brand-blue)]`}
                ></span>
              </a>
            ))}

            {/* Service dropdown */}
            <div
              ref={companyRef}
              className="relative text-[13px] uppercase tracking-[0.18em] font-medium"
            >
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className={`flex items-center gap-1 transition-colors duration-700 whitespace-nowrap ${
                  scrolled
                    ? isDark
                      ? "text-white hover:text-blue-400"
                      : "text-black hover:text-[var(--brand-blue)]"
                    : isBlogDetailPage && !isDark
                    ? "text-black hover:text-[var(--brand-blue)]"
                    : "text-white hover:text-gray-300"
                }`}
              >
                SERVICES
                <FiChevronDown
                  className={`text-sm mt-[2px] transition-transform duration-300 ${
                    isCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCompanyOpen && (
                <div
                  className={`absolute top-full left-0 mt-3 w-56 rounded-md shadow-lg py-2 animate-[fadeIn_0.3s_ease_forwards] ${
                    isDark
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black border border-gray-200"
                  }`}
                >
                  <a
                    href="/CustomeSoftware"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Custom Software
                  </a>
                  <a
                    href="/digital-transformation"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Transformation
                  </a>
                  <a
                    href="/business-consultancy"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Consultancy
                  </a>
                  <a
                    href="/digital-marketing"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="/customwebsite"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Custom Website
                  </a>
                  <a
                    href="/digital-transformation"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Smart Automation
                  </a>
                  <a
                    href="/digital-marketing"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Branding
                  </a>
                  <a
                    href="/digital-partnership"
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Partnerships
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Empty div for mobile to maintain grid */}
          <div className="lg:hidden"></div>

          {/* Right Section - Social Icons + Theme Toggle + CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0 justify-self-end">
            {/* Social Icons - Tablet and Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              {[
                { Icon: FaInstagram, href: "https://instagram.com/ansely" },
                {
                  Icon: FaLinkedinIn,
                  href: "https://linkedin.com/company/ansely",
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`social-icon p-2 rounded-full transition-all duration-500 ease-in-out border ${
                    scrolled
                      ? isDark
                        ? "border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10"
                        : "border-[var(--brand-blue)]/30 text-[var(--brand-blue)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10"
                      : isBlogDetailPage && !isDark
                      ? "border-[var(--brand-blue)]/30 text-[var(--brand-blue)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10"
                      : "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[15px] lg:h-[15px] relative z-10" />
                </a>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`hidden sm:flex p-2 rounded-full border transition-all duration-500 ${
                scrolled
                  ? isDark
                    ? "border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10"
                    : "border-[var(--brand-blue)]/30 text-[var(--brand-blue)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10"
                  : isBlogDetailPage && !isDark
                  ? "border-[var(--brand-blue)]/30 text-[var(--brand-blue)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10"
                  : "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiMoon className="w-[15px] h-[15px] theme-toggle-icon" />
              ) : (
                <FiSun className="w-[15px] h-[15px] theme-toggle-icon" />
              )}
            </button>

            {/* CTA Button - Tablet and Desktop */}
            <a
              href="/contact"
              className={`cta-button hidden sm:inline-block rounded-full px-5 sm:px-6 lg:px-8 py-2 sm:py-[10px] text-[11px] lg:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] font-semibold transition-all duration-700 ease-in-out relative whitespace-nowrap bg-[var(--brand-blue)] text-white hover:shadow-lg hover:bg-[var(--brand-blue-hover)]`}
            >
              <span className="relative z-10">LET'S TALK</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden text-2xl transition-colors duration-700 p-1 ${
                scrolled
                  ? isDark
                    ? "text-white"
                    : "text-black"
                  : isBlogDetailPage && !isDark
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div
          className={`nav-line ${
            scrolled
              ? isDark
                ? "bg-white/20"
                : "bg-black/10"
              : isBlogDetailPage && !isDark
              ? "bg-black/10"
              : "bg-white/20"
          }`}
        ></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 w-full shadow-lg animate-[fadeIn_0.4s_ease_forwards] overflow-hidden ${
            isDark ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <div className="max-w-[1350px] mx-auto px-5 sm:px-8">
            {/* Navigation Links */}
            {["Home", "About", "Blog"].map((item, index) => (
              <div
                key={item}
                className={`border-b py-4 text-[13px] tracking-[0.18em] uppercase font-medium ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
                style={{
                  animation: `slideIn 0.3s ease forwards ${index * 0.1}s`,
                }}
              >
                <a
                  href={`/${item.toLowerCase()}`}
                  className={`block transition-colors ${
                    isDark ? "hover:text-blue-400" : "hover:text-[var(--brand-blue)]"
                  }`}
                >
                  {item}
                </a>
              </div>
            ))}

            {/* Service Dropdown */}
            <div
              className={`border-b py-4 ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="flex items-center justify-between w-full text-[13px] tracking-[0.18em] uppercase font-medium"
              >
                Services
                <FiChevronDown
                  className={`text-sm transition-transform duration-300 ${
                    isCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCompanyOpen && (
                <div className="mt-3 pl-4 space-y-2 animate-[fadeIn_0.3s_ease_forwards]">
                  <a
                    href="/CustomeSoftware"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Custom Software
                  </a>
                  <a
                    href="/digital-transformation"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Transformation
                  </a>
                  <a
                    href="/business-consultancy"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Consultancy
                  </a>
                  <a
                    href="/digital-marketing"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Marketing
                  </a>
                  <a
                    href="/customwebsite"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Custom Website
                  </a>
                  <a
                    href="/smart-automation"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Smart Automation
                  </a>
                  <a
                    href="/digital-marketing"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Branding
                  </a>
                  <a
                    href="/digital-partnership"
                    className={`block py-2 text-sm transition-colors ${
                      isDark
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    Digital Partnerships
                  </a>
                </div>
              )}
            </div>

            {/* Social Icons - Mobile */}
            <div
              className={`flex justify-center gap-4 py-6 border-b ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              {[
                { Icon: FaInstagram, href: "#instagram" },
                { Icon: FaFacebookF, href: "#facebook" },
                { Icon: FaLinkedinIn, href: "#linkedin" },
                { Icon: FaTwitter, href: "#twitter" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`social-icon p-3 rounded-full border transition-all ${
                    isDark
                      ? "border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10"
                      : "border-[var(--brand-blue)]/30 text-[var(--brand-blue)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Theme Toggle - Mobile */}
            <div className="flex justify-center py-4">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-full border transition-all ${
                  isDark
                    ? "border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10"
                    : "border-[var(--brand-blue)]/30 text-[var(--brand-blue)] hover:border-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <FiSun className="w-5 h-5 theme-toggle-icon rotate" />
                ) : (
                  <FiMoon className="w-5 h-5 theme-toggle-icon" />
                )}
              </button>
            </div>

            {/* CTA Button - Mobile */}
            <div className="py-6">
              <a
                href="/contact"
                className="cta-button block text-center bg-[var(--brand-blue)] text-white rounded-full px-8 py-3 text-[12px] tracking-[0.18em] font-semibold hover:bg-[var(--brand-blue-hover)] transition-all relative overflow-hidden"
              >
                <span className="relative z-10">LET'S TALK</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
