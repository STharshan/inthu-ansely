import React, { useState, useRef, useEffect } from "react";

/**
 * LazyImage - Optimized image component with lazy loading and blur placeholder
 *
 * Features:
 * - Native lazy loading with IntersectionObserver fallback
 * - Blur-up placeholder effect while loading
 * - Prevents layout shifts with width/height
 * - Supports all standard img attributes
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {number} width - Image width (helps prevent layout shift)
 * @param {number} height - Image height (helps prevent layout shift)
 * @param {string} placeholderColor - Background color while loading (default: gray)
 */
const LazyImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  placeholderColor = "bg-gray-200 dark:bg-gray-800",
  objectFit = "cover",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px 0px", // Start loading 50px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const containerStyle = {
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "auto",
    aspectRatio: width && height ? `${width}/${height}` : undefined,
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${placeholderColor} ${className}`}
      style={containerStyle}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          className={`w-full h-full transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit }}
          {...props}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse">
          <div className={`w-full h-full ${placeholderColor}`} />
        </div>
      )}
    </div>
  );
};

export default LazyImage;
