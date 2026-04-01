import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Экспериментальные функции для улучшения производительности
  experimental: {
    // optimizeCss: true, // Отключено из-за отсутствия critters
    optimizePackageImports: ["next/image", "react"],
    optimizeServerReact: true,
  },

  // Turbopack (default in Next.js 16)
  turbopack: {},

  // Оптимизация компиляции
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Сжатие и оптимизация
  compress: true,
  poweredByHeader: false,

  // Оптимизация изображений
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 год кэш
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "checkmate.ai",
      },
    ],
    unoptimized: false,
  },

  // Настройки production build
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  },

  // Заголовки безопасности и кэширования
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Перенаправления для SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Переписывание URL для API
  async rewrites() {
    return [
      {
        source: "/api/health",
        destination: "/api/health-check",
      },
    ];
  },

  // Оптимизация для различных платформ
  output: "standalone",

  // Настройки для production - включаем source maps для отладки
  productionBrowserSourceMaps: true,

  // TypeScript настройки
  typescript: {
    ignoreBuildErrors: false,
  },

  // Настройки трейсинга
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },
};

export default nextConfig;
