import MainPage from "@/components/screens/MainPage/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CheckMate - ИИ платформа для автоматической проверки заданий по критериям ФИПИ",
  description:
    "CheckMate - революционная ИИ платформа для автоматической проверки школьных заданий по критериям ФИПИ. Экономьте до 80% времени на проверке, получайте объективные оценки и детальную обратную связь для учеников.",
  keywords:
    "CheckMate, проверка заданий ИИ, автоматическая проверка работ, критерии ФИПИ, ИИ для учителей, проверка сочинений, оценивание работ, образовательные технологии",
  openGraph: {
    title: "CheckMate - ИИ платформа для автоматической проверки заданий",
    description:
      "Революционная ИИ платформа для автоматической проверки школьных заданий по критериям ФИПИ. Экономьте время, получайте объективные оценки.",
    url: "https://checkmateai.ru",
    siteName: "CheckMate",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "CheckMate - ИИ платформа для проверки заданий по критериям ФИПИ",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CheckMate - ИИ платформа для автоматической проверки заданий",
    description:
      "Революционная ИИ платформа для проверки заданий по критериям ФИПИ. Экономьте до 80% времени на проверке.",
    images: ["/twitter-image-home.jpg"],
  },
  alternates: {
    canonical: "https://checkmateai.ru",
  },
};

export default function Home() {
  return (
    <>
      {/* Дополнительные структурированные данные для главной страницы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CheckMate - ИИ платформа для проверки заданий",
            description:
              "Автоматическая проверка школьных заданий по критериям ФИПИ с помощью искусственного интеллекта",
            url: "https://checkmateai.ru",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "CheckMate",
              applicationCategory: "EducationalApplication",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "549",
                highPrice: "990",
                priceCurrency: "RUB",
                offerCount: "2",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Главная",
                  item: "https://checkmateai.ru",
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema для улучшения сниппетов в поиске */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Что такое CheckMate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CheckMate - это ИИ платформа для автоматической проверки школьных заданий по официальным критериям ФИПИ. Платформа помогает учителям экономить до 80% времени на проверке и обеспечивает объективную оценку работ учеников.",
                },
              },
              {
                "@type": "Question",
                name: "Как работает автоматическая проверка заданий?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Просто загрузите выполненное задание в платформу, и наш ИИ автоматически проверит его по критериям ФИПИ, выставит оценку и предоставит детальную обратную связь с рекомендациями для ученика.",
                },
              },
              {
                "@type": "Question",
                name: "Какие тарифы доступны в CheckMate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Мы предлагаем два тарифа: Plus (50 проверок в месяц за 549₽) и Pro (200 проверок в месяц за 990₽). Также доступны годовые планы со скидкой.",
                },
              },
            ],
          }),
        }}
      />

      {/* Pricing Schema с billingDuration для подписок */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Тарифные планы CheckMate",
            "description": "Подписки ИИ платформы CheckMate для автоматической проверки заданий ЕГЭ по английскому",
            "url": "https://checkmateai.ru/#tariffs",
            "numberOfItems": 4,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "CheckMate Plus — месяц",
                  "description": "50 проверок заданий ЕГЭ по английскому в месяц. Автоматическая проверка по официальным критериям ФИПИ.",
                  "brand": { "@type": "Brand", "name": "CheckMate" },
                  "category": "Образовательное программное обеспечение",
                  "url": "https://checkmateai.ru/#tariffs",
                  "offers": {
                    "@type": "Offer",
                    "name": "CheckMate Plus на месяц",
                    "price": "549",
                    "priceCurrency": "RUB",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "url": "https://t.me/checkmate_ai_bot",
                    "seller": { "@type": "Organization", "name": "CheckMate" }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "CheckMate Pro — месяц",
                  "description": "200 проверок заданий ЕГЭ по английскому в месяц. Автоматическая проверка по официальным критериям ФИПИ.",
                  "brand": { "@type": "Brand", "name": "CheckMate" },
                  "category": "Образовательное программное обеспечение",
                  "url": "https://checkmateai.ru/#tariffs",
                  "offers": {
                    "@type": "Offer",
                    "name": "CheckMate Pro на месяц",
                    "price": "990",
                    "priceCurrency": "RUB",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "url": "https://t.me/checkmate_ai_bot",
                    "seller": { "@type": "Organization", "name": "CheckMate" }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "CheckMate Plus — год",
                  "description": "600 проверок заданий ЕГЭ по английскому в год. Экономия 20% по сравнению с месячной подпиской.",
                  "brand": { "@type": "Brand", "name": "CheckMate" },
                  "category": "Образовательное программное обеспечение",
                  "url": "https://checkmateai.ru/#tariffs",
                  "offers": {
                    "@type": "Offer",
                    "name": "CheckMate Plus на год",
                    "price": "5490",
                    "priceCurrency": "RUB",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "url": "https://t.me/checkmate_ai_bot",
                    "seller": { "@type": "Organization", "name": "CheckMate" }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": "CheckMate Pro — год",
                  "description": "2400 проверок заданий ЕГЭ по английскому в год. Экономия 25% по сравнению с месячной подпиской.",
                  "brand": { "@type": "Brand", "name": "CheckMate" },
                  "category": "Образовательное программное обеспечение",
                  "url": "https://checkmateai.ru/#tariffs",
                  "offers": {
                    "@type": "Offer",
                    "name": "CheckMate Pro на год",
                    "price": "8900",
                    "priceCurrency": "RUB",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "url": "https://t.me/checkmate_ai_bot",
                    "seller": { "@type": "Organization", "name": "CheckMate" }
                  }
                }
              }
            ]
          }),
        }}
      />

            <MainPage />
    </>
  );
}
