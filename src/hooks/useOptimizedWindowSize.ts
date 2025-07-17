"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface UseOptimizedWindowSizeOptions {
  debounceMs?: number;
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
}

const useOptimizedWindowSize = (
  options: UseOptimizedWindowSizeOptions = {}
) => {
  const {
    debounceMs = 100,
    mobileBreakpoint = 768,
    tabletBreakpoint = 1024,
  } = options;

  // Инициализируем с сервера-безопасными значениями
  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    if (typeof window === "undefined") {
      return {
        width: 1920,
        height: 1080,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      width,
      height,
      isMobile: width < mobileBreakpoint,
      isTablet: width >= mobileBreakpoint && width < tabletBreakpoint,
      isDesktop: width >= tabletBreakpoint,
    };
  });

  // Мемоизированная функция для обновления размеров
  const updateSize = useCallback(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    setWindowSize((prev) => {
      // Избегаем лишних ре-рендеров если размеры не изменились
      if (prev.width === width && prev.height === height) {
        return prev;
      }

      return {
        width,
        height,
        isMobile: width < mobileBreakpoint,
        isTablet: width >= mobileBreakpoint && width < tabletBreakpoint,
        isDesktop: width >= tabletBreakpoint,
      };
    });
  }, [mobileBreakpoint, tabletBreakpoint]);

  // Дебаунсированная версия updateSize
  const debouncedUpdateSize = useMemo(() => {
    let timeoutId: NodeJS.Timeout;

    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateSize, debounceMs);
    };
  }, [updateSize, debounceMs]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Устанавливаем правильные размеры при первом рендере
    updateSize();

    // Используем дебаунсированную версию для resize событий
    window.addEventListener("resize", debouncedUpdateSize, { passive: true });

    return () => {
      window.removeEventListener("resize", debouncedUpdateSize);
    };
  }, [updateSize, debouncedUpdateSize]);

  // Возвращаем мемоизированный объект
  return useMemo(() => windowSize, [windowSize]);
};

export default useOptimizedWindowSize;

// Хук для простого получения только ширины (совместимость с существующим кодом)
export const useWindowWidth = (debounceMs = 100) => {
  const { width } = useOptimizedWindowSize({ debounceMs });
  return width;
};

// Хук для получения только брейкпоинтов
export const useBreakpoints = () => {
  const { isMobile, isTablet, isDesktop } = useOptimizedWindowSize();
  return { isMobile, isTablet, isDesktop };
};
