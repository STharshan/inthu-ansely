import React, { useEffect, useState, useRef, useCallback } from "react";

export interface ScrollIndicatorProps {
  sections: string[];
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ sections, className = "" }) => {
  const [activeSection, setActiveSection] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingProgrammaticallyRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intersectingSectionsRef = useRef<Map<string, number>>(new Map());

  const updateActiveSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < sections.length) {
        setActiveSection(index);
      }
    },
    [sections.length]
  );

  const findActiveSectionByScroll = useCallback(() => {
    if (sections.length === 0) return;

    const viewportCenter = window.innerHeight / 2;
    let closestSection = 0;
    let closestDistance = Infinity;

    sections.forEach((sectionId, index) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      }
    });

    updateActiveSection(closestSection);
  }, [sections, updateActiveSection]);

  useEffect(() => {
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (isScrollingProgrammaticallyRef.current) return;

      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          intersectingSectionsRef.current.set(sectionId, entry.intersectionRatio);
        } else {
          intersectingSectionsRef.current.delete(sectionId);
        }
      });

      if (intersectingSectionsRef.current.size > 0) {
        let maxRatio = 0;
        let mostVisibleSection = "";

        intersectingSectionsRef.current.forEach((ratio, sectionId) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = sectionId;
          }
        });

        const index = sections.findIndex((id) => id === mostVisibleSection);
        if (index !== -1) {
          updateActiveSection(index);
        }
      } else {
        findActiveSectionByScroll();
      }
    }, observerOptions);

    const observeElements = () => {
      const elementsToObserve: HTMLElement[] = [];

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element && observerRef.current) {
          elementsToObserve.push(element);
          observerRef.current.observe(element);
        }
      });

      if (elementsToObserve.length === 0 && sections.length > 0) {
        requestAnimationFrame(() => {
          setTimeout(observeElements, 100);
        });
      } else if (elementsToObserve.length > 0) {
        findActiveSectionByScroll();
      }
    };

    requestAnimationFrame(observeElements);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sections, findActiveSectionByScroll, updateActiveSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammaticallyRef.current) {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingProgrammaticallyRef.current = false;
          findActiveSectionByScroll();
        }, 150);
      }
    };

    const handleScrollEnd = () => {
      if (isScrollingProgrammaticallyRef.current) {
        isScrollingProgrammaticallyRef.current = false;
        findActiveSectionByScroll();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    if ("onscrollend" in window) {
      window.addEventListener("scrollend", handleScrollEnd, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if ("onscrollend" in window) {
        window.removeEventListener("scrollend", handleScrollEnd);
      }
    };
  }, [findActiveSectionByScroll]);

  const scrollToSection = useCallback(
    (sectionId: string, index: number) => {
      const element = document.getElementById(sectionId);
      if (element) {
        isScrollingProgrammaticallyRef.current = true;
        updateActiveSection(index);

        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          findActiveSectionByScroll();
          setTimeout(() => {
            isScrollingProgrammaticallyRef.current = false;
          }, 500);
        }, 100);
      }
    },
    [updateActiveSection, findActiveSectionByScroll]
  );

  return (
    <div
      className={`fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        {sections.map((sectionId, index) => {
          const isActive = index === activeSection;
          return (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId, index)}
              className="group relative flex items-center justify-center"
              aria-label={`Go to section ${index + 1}`}
            >
              <div
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "w-3 h-3 bg-[#0045EF] scale-125"
                    : "w-2 h-2 bg-gray-400 dark:bg-gray-600 hover:bg-[#0045EF]/50"
                } rounded-full`}
              />
              {isActive && (
                <div className="absolute w-3 h-3 bg-[#0045EF] rounded-full animate-pulse opacity-75" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollIndicator;
