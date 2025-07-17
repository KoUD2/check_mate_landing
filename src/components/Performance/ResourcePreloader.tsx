"use client";

import { useEffect, FC } from "react";

interface ResourcePreloaderProps {
  images?: string[];
  fonts?: string[];
  scripts?: string[];
  styles?: string[];
  priority?: "high" | "low";
}

const ResourcePreloader: FC<ResourcePreloaderProps> = ({
  images = [],
  fonts = [],
  scripts = [],
  styles = [],
  priority = "high",
}) => {
  useEffect(() => {
    // Проверяем что мы на клиенте
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const preloadedElements: HTMLElement[] = [];

    try {
      // Предзагрузка изображений
      images.forEach((src) => {
        if (!src) return;

        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        if (priority === "high") {
          link.setAttribute("fetchpriority", "high");
        }
        document.head.appendChild(link);
        preloadedElements.push(link);

        // Также создаем Image объект для более быстрой загрузки
        const img = new Image();
        img.src = src;
      });

      // Предзагрузка шрифтов
      fonts.forEach((src) => {
        if (!src) return;

        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "font";
        link.type = "font/woff";
        link.href = src;
        link.crossOrigin = "anonymous";
        if (priority === "high") {
          link.setAttribute("fetchpriority", "high");
        }
        document.head.appendChild(link);
        preloadedElements.push(link);
      });

      // Предзагрузка скриптов
      scripts.forEach((src) => {
        if (!src) return;

        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "script";
        link.href = src;
        if (priority === "high") {
          link.setAttribute("fetchpriority", "high");
        }
        document.head.appendChild(link);
        preloadedElements.push(link);
      });

      // Предзагрузка стилей
      styles.forEach((src) => {
        if (!src) return;

        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = src;
        if (priority === "high") {
          link.setAttribute("fetchpriority", "high");
        }
        document.head.appendChild(link);
        preloadedElements.push(link);
      });
    } catch (error) {
      console.warn("Error preloading resources:", error);
    }

    // Cleanup при размонтировании
    return () => {
      try {
        preloadedElements.forEach((element) => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        });
      } catch (error) {
        console.warn("Error cleaning up preloaded resources:", error);
      }
    };
  }, [images, fonts, scripts, styles, priority]);

  return null;
};

// Хук для предзагрузки критических ресурсов
export const useCriticalResourcePreloader = () => {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    try {
      // Предзагружаем критические шрифты (только если они существуют в public)
      const criticalFonts = [
        "/fonts/Gilroy-Medium.woff",
        "/fonts/Gilroy-SemiBold.woff",
      ];

      // Предзагружаем hero изображение (используем placeholder если нет реальных изображений)
      const criticalImages = [
        "/placeholder.svg", // Безопасный fallback
      ];

      criticalFonts.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "font";
        link.type = "font/woff";
        link.href = src;
        link.crossOrigin = "anonymous";
        link.setAttribute("fetchpriority", "high");
        document.head.appendChild(link);
      });

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        link.setAttribute("fetchpriority", "high");
        document.head.appendChild(link);
      });
    } catch (error) {
      console.warn("Error preloading critical resources:", error);
    }
  }, []);
};

// Компонент для критических ресурсов CheckMate (безопасная версия)
export const CheckMateCriticalPreloader: FC = () => {
  return (
    <ResourcePreloader
      fonts={["/fonts/Gilroy-Medium.woff", "/fonts/Gilroy-SemiBold.woff"]}
      images={["/placeholder.svg"]} // Используем безопасный placeholder
      priority="high"
    />
  );
};

export default ResourcePreloader;
