import type { Metadata } from "next";
import Analytics from "@/components/SEO/Analytics";
import PerformanceMonitor from "@/components/Performance/PerformanceMonitor";
import { CheckMateCriticalPreloader } from "@/components/Performance/ResourcePreloader";
import "../assets/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://checkmate-ai.ru"),
  title: {
    default:
      "CheckMate - ИИ платформа для автоматической проверки заданий по критериям ФИПИ",
    template: "%s | CheckMate",
  },
  description:
    "CheckMate - революционная ИИ платформа для автоматической проверки школьных заданий по официальным критериям ФИПИ. Экономьте до 80% времени на проверке, получайте объективные оценки и детальную обратную связь для учеников.",
  keywords: [
    "CheckMate",
    "проверка заданий ИИ",
    "автоматическая проверка работ",
    "критерии ФИПИ",
    "ИИ для учителей",
    "проверка сочинений",
    "оценивание работ",
    "образовательные технологии",
    "искусственный интеллект в образовании",
    "автоматизация проверки",
    "объективная оценка",
    "экономия времени учителя",
    "цифровизация образования",
    "EdTech платформа",
    "проверка ЕГЭ",
    "методические рекомендации ФИПИ",
  ],
  authors: [{ name: "CheckMate Team" }],
  creator: "CheckMate",
  publisher: "CheckMate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://checkmate.ai",
    siteName: "CheckMate",
    title: "CheckMate - ИИ платформа для автоматической проверки заданий",
    description:
      "Революционная ИИ платформа для автоматической проверки школьных заданий по критериям ФИПИ. Экономьте время, получайте объективные оценки.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CheckMate - ИИ платформа для проверки заданий",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckMate - ИИ платформа для автоматической проверки заданий",
    description:
      "Революционная ИИ платформа для проверки заданий по критериям ФИПИ. Экономьте до 80% времени на проверке.",
    images: ["/twitter-image.jpg"],
    creator: "@checkmate_ai",
    site: "@checkmate_ai",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://checkmate.ai",
    languages: {
      "ru-RU": "https://checkmate.ai",
    },
  },
  category: "education",
  classification: "Educational Technology Platform",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Дополнительные мета-теги */}
        <meta name="theme-color" content="#ff561f" />
        <meta name="msapplication-TileColor" content="#ff561f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CheckMate" />
        <meta name="application-name" content="CheckMate" />

        {/* Cookie и Privacy настройки */}
        <meta httpEquiv="Set-Cookie" content="SameSite=Strict; Secure" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CheckMate",
              description:
                "ИИ платформа для автоматической проверки школьных заданий по критериям ФИПИ",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              url: "https://checkmate.ai",
              author: {
                "@type": "Organization",
                name: "CheckMate Team",
              },
              offers: {
                "@type": "Offer",
                category: "subscription",
                priceSpecification: [
                  {
                    "@type": "PriceSpecification",
                    name: "Plus",
                    price: "549",
                    priceCurrency: "RUB",
                    billingDuration: "P1M",
                  },
                  {
                    "@type": "PriceSpecification",
                    name: "Pro",
                    price: "990",
                    priceCurrency: "RUB",
                    billingDuration: "P1M",
                  },
                ],
              },
              featureList: [
                "Автоматическая проверка заданий по критериям ФИПИ",
                "Объективная оценка без субъективности",
                "Детализированная обратная связь",
                "Экономия до 80% времени учителя",
                "Поддержка различных типов заданий",
              ],
              targetAudience: {
                "@type": "Audience",
                audienceType: "Teachers, Educational Institutions",
              },
            }),
          }}
        />

        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {/* Предзагрузка критических ресурсов */}
        <CheckMateCriticalPreloader />

        {/* Мониторинг производительности */}
        <PerformanceMonitor reportToAnalytics={false} />

        {children}

        <Analytics
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID}
          yandexMetricaId={process.env.NEXT_PUBLIC_YM_ID}
        />
      </body>
    </html>
  );
}
