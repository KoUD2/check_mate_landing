import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Страница не найдена | CheckMate",
  description:
    "Запрашиваемая страница не существует. Вернитесь на главную страницу CheckMate.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      <h1>404 — Страница не найдена</h1>
      <p>Извините, такой страницы не существует.</p>
      <Link href="/">Вернуться на главную</Link>
    </div>
  );
}
