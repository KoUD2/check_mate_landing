import type { Metadata } from "next";
import Analytics from "@/components/SEO/Analytics";
import PerformanceMonitor from "@/components/Performance/PerformanceMonitor";
import { CheckMateCriticalPreloader } from "@/components/Performance/ResourcePreloader";
import "../assets/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://checkmateai.ru"),
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
    url: "https://checkmateai.ru",
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
    yandex: "c435d1462a7f89ce",
  },
  alternates: {
    canonical: "https://checkmateai.ru",
    languages: {
      "ru-RU": "https://checkmateai.ru",
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
    <html lang="ru" prefix="og: https://ogp.me/ns# product: https://ogp.me/ns/product#">
      <head>
        {/* Дополнительные мета-теги */}
        <meta name="theme-color" content="#ff561f" />
        <meta name="msapplication-TileColor" content="#ff561f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CheckMate" />
        <meta name="application-name" content="CheckMate" />


        {/* Open Graph цена для шаринга */}
        <meta property="product:price:amount" content="549" />
        <meta property="product:price:currency" content="RUB" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:retailer_item_id" content="checkmate-plus-month" />

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
              url: "https://checkmateai.ru",
              author: {
                "@type": "Organization",
                name: "CheckMate Team",
              },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "549",
                highPrice: "990",
                priceCurrency: "RUB",
                offerCount: "4",
                offers: [
                  {
                    "@type": "Offer",
                    name: "CheckMate Plus — месяц",
                    price: "549",
                    priceCurrency: "RUB",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "CheckMate Pro — месяц",
                    price: "990",
                    priceCurrency: "RUB",
                    availability: "https://schema.org/InStock",
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
