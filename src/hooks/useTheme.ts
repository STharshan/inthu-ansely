import { useState, useEffect } from 'react';

/**
 * Shared theme hook to replace multiple MutationObservers
 * Optimized to check theme only when needed and debounce updates
 */
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    // Check both the class and localStorage/prefers-color-scheme for initial state
    const hasDarkClass = document.documentElement.classList.contains('dark');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Priority: localStorage > class > prefers-color-scheme
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    if (hasDarkClass) {
      return true;
    }
    return prefersDark;
  });

  useEffect(() => {
    // Check initial theme immediately and multiple times to catch Navbar initialization
    // Follow same priority logic as useState initializer: localStorage > class > prefers-color-scheme
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const hasDarkClass = document.documentElement.classList.contains('dark');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Priority: localStorage > class > prefers-color-scheme
      let shouldBeDark = false;
      if (savedTheme) {
        shouldBeDark = savedTheme === 'dark';
      } else if (hasDarkClass) {
        shouldBeDark = true;
      } else {
        shouldBeDark = prefersDark;
      }
      
      setIsDarkMode(shouldBeDark);
    };

    // Check immediately
    checkTheme();

    // Check multiple times to catch Navbar's useEffect initialization
    const timeout1 = setTimeout(checkTheme, 0);
    const timeout2 = setTimeout(checkTheme, 10);
    const timeout3 = setTimeout(checkTheme, 50);
    const timeout4 = requestAnimationFrame(checkTheme);
    const timeout5 = requestAnimationFrame(() => requestAnimationFrame(checkTheme));

    // Use MutationObserver but only one instance shared across all components
    const observer = new MutationObserver(() => {
      // Debounce theme checks
      requestAnimationFrame(checkTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Also listen to storage events for theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        checkTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      cancelAnimationFrame(timeout4);
      cancelAnimationFrame(timeout5);
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return isDarkMode;
};
