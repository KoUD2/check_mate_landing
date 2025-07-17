"use client";

import { useEffect, FC } from "react";

// Расширяем интерфейс Window для аналитики
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (
      id: number,
      action: string,
      target?: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// Типы для Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
}

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

interface PerformanceMonitorProps {
  onMetric?: (name: string, value: number) => void;
  reportToAnalytics?: boolean;
}

const PerformanceMonitor: FC<PerformanceMonitorProps> = ({
  onMetric,
  reportToAnalytics = false, // Изменено на false по умолчанию для безопасности
}) => {
  useEffect(() => {
    // Проверяем что мы на клиенте и поддерживается PerformanceObserver
    if (typeof window === "undefined") {
      return;
    }

    if (!window.performance || !("PerformanceObserver" in window)) {
      console.warn("PerformanceObserver not supported");
      return;
    }

    const metrics: PerformanceMetrics = {};
    const observers: PerformanceObserver[] = [];

    // Функция для отправки метрик
    const reportMetric = (name: string, value: number) => {
      try {
        // Вызываем callback если предоставлен
        if (onMetric && typeof onMetric === "function") {
          onMetric(name, value);
        }

        // Отправляем в Google Analytics только если включено
        if (reportToAnalytics && typeof window !== "undefined" && window.gtag) {
          window.gtag("event", name, {
            event_category: "Web Vitals",
            value: Math.round(value),
            non_interaction: true,
          });
        }

        // Отправляем в Yandex.Metrica только если включено
        if (
          reportToAnalytics &&
          typeof window !== "undefined" &&
          window.ym &&
          process.env.NEXT_PUBLIC_YM_ID
        ) {
          window.ym(
            parseInt(process.env.NEXT_PUBLIC_YM_ID),
            "reachGoal",
            "web_vital",
            {
              metric: name,
              value: Math.round(value),
            }
          );
        }

        console.log(`Performance metric ${name}:`, value);
      } catch (error) {
        console.warn(`Error reporting metric ${name}:`, error);
      }
    };

    // Безопасное создание наблюдателя
    const createObserver = (
      entryTypes: string[],
      callback: (list: PerformanceObserverEntryList) => void
    ): PerformanceObserver | null => {
      try {
        const observer = new PerformanceObserver(callback);
        observer.observe({ entryTypes });
        observers.push(observer);
        return observer;
      } catch (error) {
        console.warn(
          `Observer for ${entryTypes.join(", ")} not supported:`,
          error
        );
        return null;
      }
    };

    // Наблюдатель для paint метрик (FCP)
    createObserver(["paint"], (list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          metrics.fcp = entry.startTime;
          reportMetric("FCP", entry.startTime);
        }
      });
    });

    // Наблюдатель для LCP
    createObserver(["largest-contentful-paint"], (list) => {
      const entries = list.getEntries();
      if (entries.length > 0) {
        const lastEntry = entries[entries.length - 1];
        metrics.lcp = lastEntry.startTime;
        reportMetric("LCP", lastEntry.startTime);
      }
    });

    // Наблюдатель для FID
    createObserver(["first-input"], (list) => {
      list.getEntries().forEach((entry) => {
        const timing = entry as PerformanceEventTiming;
        if (timing.processingStart && timing.startTime) {
          const fid = timing.processingStart - timing.startTime;
          metrics.fid = fid;
          reportMetric("FID", fid);
        }
      });
    });

    // Наблюдатель для CLS
    let clsValue = 0;
    createObserver(["layout-shift"], (list) => {
      list.getEntries().forEach((entry) => {
        const shift = entry as PerformanceEventTiming;
        // Только засчитываем unexpected layout shifts
        if (!shift.hadRecentInput) {
          clsValue += shift.value || 0;
        }
      });
    });

    // Navigation Timing для TTFB
    const measureTTFB = () => {
      try {
        if (!window.performance.getEntriesByType) return;

        const navigation = window.performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;

        if (navigation && navigation.responseStart && navigation.requestStart) {
          const ttfb = navigation.responseStart - navigation.requestStart;
          metrics.ttfb = ttfb;
          reportMetric("TTFB", ttfb);
        }
      } catch (error) {
        console.warn("Error measuring TTFB:", error);
      }
    };

    // Измеряем TTFB после загрузки страницы
    if (document.readyState === "complete") {
      measureTTFB();
    } else {
      const loadHandler = () => {
        measureTTFB();
        window.removeEventListener("load", loadHandler);
      };
      window.addEventListener("load", loadHandler);
    }

    // Отправляем CLS при скрытии страницы
    const handleVisibilityChange = () => {
      try {
        if (document.visibilityState === "hidden" && clsValue > 0) {
          metrics.cls = clsValue;
          reportMetric("CLS", clsValue);
        }
      } catch (error) {
        console.warn("Error handling visibility change:", error);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      try {
        observers.forEach((observer) => {
          if (observer && observer.disconnect) {
            observer.disconnect();
          }
        });
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      } catch (error) {
        console.warn("Error during cleanup:", error);
      }
    };
  }, [onMetric, reportToAnalytics]);

  // Компонент не рендерит ничего
  return null;
};

export default PerformanceMonitor;
