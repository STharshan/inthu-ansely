import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

// ─── Shared data ────────────────────────────────────────────────────────────

const SERVICES = [
  { label: "Custom Software",        to: "/custom-software" },
  { label: "Digital Transformation", to: "/digital-transformation" },
  { label: "Digital Marketing",      to: "/digital-marketing" },
  { label: "Custom Website",         to: "/custom-website" },
  { label: "Smart Automation",       to: "/smart-automation" },
  { label: "Digital Partnerships",   to: "/digital-partnership" },
  { label: "Mobile App Development", to: "/mobile-app-development" },
  { label: "Consultancy",            to: "/business-consultancy" },
];

const SEO_ITEMS = [
  { label: "All SEO Modules",                  to: "/learn/seo" },
  { label: "SEO for Local Businesses",         to: "/learn/seo/local-businesses" },
  { label: "SEO vs Social Media",              to: "/learn/seo/seo-vs-social-media" },
  { label: "Content That Ranks & Converts",   to: "/learn/seo/content-that-ranks" },
  { label: "Technical SEO Explained Simply",  to: "/learn/seo/technical-seo" },
  { label: "Turning SEO Traffic into Sales",  to: "/learn/seo/traffic-to-sales" },
];

const LEARN_ITEMS = [
  { label: "All Courses",            to: "/learn" },
  { label: "AI Learning",            to: "/learn/ai" },
  { label: "PPC Guide",              to: "/learn/ppc" },
  // SEO Guide is handled separately as a nested dropdown
  { label: "React Comparison",       to: "/learn/react-comparison" },
  { label: "Custom Software Guide",  to: "/learn/custom-software-guide" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const companyRef = useRef(null);
  const learnRef = useRef(null);
  const mobileCompanyRef = useRef(null);
  const mobileLearnRef = useRef(null);

  const isBlogDetailPage =
    location.pathname.startsWith("/blog/") && location.pathname !== "/blog";

  // Close all dropdowns + mobile menu
  const closeAll = () => {
    setIsOpen(false);
    setIsCompanyOpen(false);
    setIsLearnOpen(false);
    setIsSeoOpen(false);
  };

  useEffect(() => {
    const savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      const isInsideCompany =
        (companyRef.current && companyRef.current.contains(e.target)) ||
        (mobileCompanyRef.current && mobileCompanyRef.current.contains(e.target));
      const isInsideLearn =
        (learnRef.current && learnRef.current.contains(e.target)) ||
        (mobileLearnRef.current && mobileLearnRef.current.contains(e.target));

      if (!isInsideCompany) setIsCompanyOpen(false);
      if (!isInsideLearn) { setIsLearnOpen(false); setIsSeoOpen(false); }
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

  // ── Shared style helpers ──────────────────────────────────────────────────

  const navTextClass = `transition-colors duration-300 ${
    scrolled
      ? isDark ? "text-white hover:text-blue-400" : "text-black hover:text-[#0045EF]"
      : isBlogDetailPage && !isDark
        ? "text-black hover:text-[#0045EF]"
        : "text-white hover:text-gray-300"
  }`;

  const dropdownClass = `absolute top-full left-0 mt-3 w-56 rounded-md shadow-lg py-2 animate-[fadeIn_0.3s_ease_forwards] z-50 ${
    isDark ? "bg-gray-800 text-white" : "bg-white text-black border border-gray-200"
  }`;

  const dropdownItemClass = `block px-4 py-2 text-sm transition-colors ${
    isDark
      ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
      : "text-gray-700 hover:bg-gray-100 hover:text-[#0045EF]"
  }`;

  const mobileItemClass = `block py-2 text-sm transition-colors ${
    isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-[#0045EF]"
  }`;

  const mobileSubItemClass = `block py-2 text-sm transition-colors ${
    isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-500 hover:text-[#0045EF]"
  }`;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Shutter background */}
      <div
        className={`navbar-bg max-w-6xl mx-auto rounded-b-xl ${
          scrolled ? "active" : "inactive"
        } ${isDark ? "bg-gray-900" : "bg-white"}`}
      />

      <div
        className={`relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 transition-[background-color,box-shadow,border-color] duration-300 ease-in-out ${
          scrolled
            ? isDark ? "text-white" : "text-black"
            : isBlogDetailPage && !isDark ? "text-black" : "text-white"
        }`}
      >
        <div className="grid grid-cols-3 items-center w-full relative z-10">

          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={closeAll}
            className={`text-[16px] sm:text-[18px] font-bold tracking-[0.25em] transition-all duration-300 flex-shrink-0 justify-self-start ${
              scrolled
                ? isDark ? "text-white" : "text-black"
                : isBlogDetailPage && !isDark ? "text-black" : "text-white"
            }`}
          >
            ANSELY
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10">
            {["Home", "About", "Blog", "Careers"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={closeAll}
                className={`relative text-[13px] uppercase tracking-[0.18em] font-medium group ${navTextClass}`}
              >
                {item}
                <span className="absolute left-0 -bottom-[3px] w-0 h-[1px] transition-all duration-500 group-hover:w-full bg-[#0045EF]" />
              </Link>
            ))}

            {/* Services dropdown */}
            <div ref={companyRef} className="relative text-[13px] uppercase tracking-[0.18em] font-medium">
              <button
                onClick={() => { setIsCompanyOpen(!isCompanyOpen); setIsLearnOpen(false); setIsSeoOpen(false); }}
                className={`flex items-center gap-1 ${navTextClass}`}
              >
                SERVICES
                <FiChevronDown className={`text-sm mt-[2px] transition-transform duration-300 ${isCompanyOpen ? "rotate-180" : ""}`} />
              </button>

              {isCompanyOpen && (
                <div className={dropdownClass}>
                  {SERVICES.map(({ label, to }) => (
                    <Link key={to} to={to} onClick={closeAll} className={dropdownItemClass}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Learn dropdown */}
            <div ref={learnRef} className="relative text-[13px] uppercase tracking-[0.18em] font-medium">
              <button
                onClick={() => { setIsLearnOpen(!isLearnOpen); setIsCompanyOpen(false); setIsSeoOpen(false); }}
                className={`flex items-center gap-1 ${navTextClass}`}
              >
                LEARN
                <FiChevronDown className={`text-sm mt-[2px] transition-transform duration-300 ${isLearnOpen ? "rotate-180" : ""}`} />
              </button>

              {isLearnOpen && (
                <div className={dropdownClass}>
                  {/* Items before SEO */}
                  {LEARN_ITEMS.slice(0, 3).map(({ label, to }) => (
                    <Link key={to} to={to} onClick={closeAll} className={dropdownItemClass}>
                      {label}
                    </Link>
                  ))}

                  {/* SEO nested dropdown */}
                  <div className="relative group/seo">
                    <button
                      onClick={() => setIsSeoOpen(!isSeoOpen)}
                      className={`flex items-center justify-between w-full px-4 py-2 text-sm transition-colors ${
                        isDark
                          ? "text-gray-200 hover:bg-gray-700 hover:text-blue-400"
                          : "text-gray-700 hover:bg-gray-100 hover:text-[#0045EF]"
                      }`}
                    >
                      SEO GUIDE
                      <FiChevronRight className={`text-xs transition-transform duration-300 ${isSeoOpen ? "rotate-90" : ""}`} />
                    </button>
                    {isSeoOpen && (
                      <div className={`absolute left-full top-0 ml-1 w-56 rounded-md shadow-lg py-2 animate-[fadeIn_0.3s_ease_forwards] z-50 ${
                        isDark ? "bg-gray-800 text-white" : "bg-white text-black border border-gray-200"
                      }`}>
                        {SEO_ITEMS.map(({ label, to }) => (
                          <Link key={to} to={to} onClick={closeAll} className={dropdownItemClass}>
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Items after SEO */}
                  {LEARN_ITEMS.slice(3).map(({ label, to }) => (
                    <Link key={to} to={to} onClick={closeAll} className={dropdownItemClass}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Empty div for mobile grid */}
          <div className="lg:hidden" />

          {/* ── Right Section ── */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0 justify-self-end">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`hidden sm:flex p-2 rounded-full border transition-all duration-500 ${
                scrolled
                  ? isDark
                    ? "border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10"
                    : "border-[#0045EF]/30 text-[#0045EF] hover:border-[#0045EF] hover:bg-[#0045EF]/10"
                  : isBlogDetailPage && !isDark
                    ? "border-[#0045EF]/30 text-[#0045EF] hover:border-[#0045EF] hover:bg-[#0045EF]/10"
                    : "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {isDark
                ? <FiMoon className="w-[15px] h-[15px] theme-toggle-icon" />
                : <FiSun className="w-[15px] h-[15px] theme-toggle-icon" />}
            </button>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={closeAll}
              className="cta-button hidden sm:inline-block rounded-full px-5 sm:px-6 lg:px-8 py-2 sm:py-[10px] text-[11px] lg:text-[12px] tracking-[0.16em] sm:tracking-[0.18em] font-semibold transition-all duration-300 ease-in-out relative whitespace-nowrap bg-[#0045EF] text-white hover:shadow-lg hover:bg-[#0039CC]"
            >
              <span className="relative z-10">LET'S TALK</span>
            </Link>

            {/* Hamburger */}
            <button
              className={`lg:hidden text-2xl transition-colors duration-300 p-1 ${
                scrolled
                  ? isDark ? "text-white" : "text-black"
                  : isBlogDetailPage && !isDark ? "text-black" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={`nav-line ${
          scrolled
            ? isDark ? "bg-white/20" : "bg-black/10"
            : isBlogDetailPage && !isDark ? "bg-black/10" : "bg-white/20"
        }`} />
      </div>

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full shadow-lg animate-[fadeIn_0.4s_ease_forwards] overflow-hidden ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}>
          <div className="max-w-[1350px] mx-auto px-5 sm:px-8">

            {/* Static links */}
            {["Home", "About", "Blog", "Careers"].map((item, index) => (
              <div
                key={item}
                className={`border-b py-4 text-[13px] tracking-[0.18em] uppercase font-medium ${isDark ? "border-gray-700" : "border-gray-200"}`}
                style={{ animation: `slideIn 0.3s ease forwards ${index * 0.1}s` }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={closeAll}
                  className={`block transition-colors ${isDark ? "hover:text-blue-400" : "hover:text-[#0045EF]"}`}
                >
                  {item}
                </Link>
              </div>
            ))}

            {/* Services */}
            <div ref={mobileCompanyRef} className={`border-b py-4 ${isDark ? "border-gray-700" : "border-gray-200"}`}>
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="flex items-center justify-between w-full text-[13px] tracking-[0.18em] uppercase font-medium"
              >
                Services
                <FiChevronDown className={`text-sm transition-transform duration-300 ${isCompanyOpen ? "rotate-180" : ""}`} />
              </button>
              {isCompanyOpen && (
                <div className="mt-3 pl-4 space-y-2 animate-[fadeIn_0.3s_ease_forwards]">
                  {SERVICES.map(({ label, to }) => (
                    <Link key={to} to={to} onClick={closeAll} className={mobileItemClass}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Learn */}
            <div ref={mobileLearnRef} className={`border-b py-4 ${isDark ? "border-gray-700" : "border-gray-200"}`}>
              <button
                onClick={() => setIsLearnOpen(!isLearnOpen)}
                className="flex items-center justify-between w-full text-[13px] tracking-[0.18em] uppercase font-medium"
              >
                Learn
                <FiChevronDown className={`text-sm transition-transform duration-300 ${isLearnOpen ? "rotate-180" : ""}`} />
              </button>
              {isLearnOpen && (
                <div className="mt-3 pl-4 space-y-2 animate-[fadeIn_0.3s_ease_forwards]">
                  {LEARN_ITEMS.slice(0, 3).map(({ label, to }) => (
                    <Link key={to} to={to} onClick={closeAll} className={mobileItemClass}>
                      {label}
                    </Link>
                  ))}

                  {/* SEO nested */}
                  <div>
                    <button
                      onClick={() => setIsSeoOpen(!isSeoOpen)}
                      className={`flex items-center justify-between w-full py-2 text-sm transition-colors ${
                        isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-600 hover:text-[#0045EF]"
                      }`}
                    >
                      SEO GUIDE
                      <FiChevronDown className={`text-xs transition-transform duration-300 ${isSeoOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isSeoOpen && (
                      <div className="pl-4 space-y-1 mt-1 animate-[fadeIn_0.3s_ease_forwards]">
                        {SEO_ITEMS.map(({ label, to }) => (
                          <Link key={to} to={to} onClick={closeAll} className={mobileSubItemClass}>
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {LEARN_ITEMS.slice(3).map(({ label, to }) => (
                    <Link key={to} to={to} onClick={closeAll} className={mobileItemClass}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle - Mobile */}
            <div className="flex justify-center py-4">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-full border transition-all ${
                  isDark
                    ? "border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10"
                    : "border-[#0045EF]/30 text-[#0045EF] hover:border-[#0045EF] hover:bg-[#0045EF]/10"
                }`}
                aria-label="Toggle theme"
              >
                {isDark
                  ? <FiSun className="w-5 h-5 theme-toggle-icon rotate" />
                  : <FiMoon className="w-5 h-5 theme-toggle-icon" />}
              </button>
            </div>

            {/* CTA - Mobile */}
            <div className="py-6">
              <Link
                to="/contact"
                onClick={closeAll}
                className="cta-button block text-center bg-[#0045EF] text-white rounded-full px-8 py-3 text-[12px] tracking-[0.18em] font-semibold hover:bg-[#0039CC] transition-all relative overflow-hidden"
              >
                <span className="relative z-10">LET'S TALK</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}