import { useState, useEffect } from 'react';

/**
 * Shared theme hook - uses MutationObserver to detect class changes
 * Single check on mount + observer for changes (no redundant timeouts)
 */
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Single check on mount to catch any initialization
    checkTheme();

    // Watch for class changes on <html>
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Listen for cross-tab theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') checkTheme();
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return isDarkMode;
};
