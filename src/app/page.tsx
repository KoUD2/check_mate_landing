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
    url: "https://checkmate.ai",
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
    canonical: "https://checkmate.ai",
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
            url: "https://checkmate.ai",
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
                  item: "https://checkmate.ai",
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

      <MainPage />
    </>
  );
}
