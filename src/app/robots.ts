import { MetadataRoute } from "next";

const BASE_URL = "https://checkmate-ai.ru";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/_next/", "/api/internal/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Yandex",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 2,
      },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/feed.xml`],
  };
}
