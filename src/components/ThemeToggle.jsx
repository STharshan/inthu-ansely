import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

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

    const toggle = () => {
        const root = document.documentElement;
        const next = !isDark;
        setIsDark(next);
        root.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={`rounded-full border p-2 flex items-center transition-colors
       
        ${scrolled
                    ? "border-black/15 text-[#0045EF] hover:border-black/30 hover:bg-black/5"
                    : "border-[#0045EF] text-black hover:border-white/50 hover:bg-white/10"
                }`}
        >
            {isDark ? <FaMoon size={16} /> : <FaSun size={16} />}
        </button>
    );
}
