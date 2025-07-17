"use client";

import Image, { ImageProps } from "next/image";
import { FC, useState, useEffect, useRef } from "react";

interface LazyImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const LazyImage: FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  threshold = 0.1,
  rootMargin = "50px",
  className,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [threshold, rootMargin, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <Image
          src={hasError ? fallbackSrc : src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          {...props}
        />
      )}
      {!isInView && !priority && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(45deg, #ff561f, #ff8c42)",
              animation: "pulse 2s infinite",
            }}
          />
        </div>
      )}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default LazyImage;
