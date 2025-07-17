"use client";

import { Suspense, lazy } from "react";
import useOptimizedWindowSize from "@/hooks/useOptimizedWindowSize";
import Button from "@/components/ui/Button/Button";
import A_FirstIllustration from "@/shared/images/A_FirstIllustration.svg";
import Image from "next/image";
import { FC } from "react";
import styles from "@/components/screens/MainPage/MainPage.module.css";
import Header from "@/components/screens/MainPage/ui/Header/Header";
import { LoadingSpinner } from "./DynamicLoader";

// Ленивая загрузка секций для улучшения производительности
const UserSection = lazy(
  () => import("@/components/screens/MainPage/ui/UserSection/UserSection")
);
const HowItWorksSection = lazy(
  () =>
    import(
      "@/components/screens/MainPage/ui/HowItWorksSection/HowItWorksSection"
    )
);
const TelegramBotSection = lazy(
  () =>
    import(
      "@/components/screens/MainPage/ui/TelegramBotSection/TelegramBotSection"
    )
);
const BenefitsSection = lazy(
  () =>
    import("@/components/screens/MainPage/ui/BenefitsSection/BenefitsSection")
);
const TryBotSection = lazy(
  () => import("@/components/screens/MainPage/ui/TryBotSection/TryBotSection")
);
const APISection = lazy(
  () => import("@/components/screens/MainPage/ui/APISection/APISection")
);
const TariffSection = lazy(
  () => import("@/components/screens/MainPage/ui/TariffSection/TariffSection")
);
const FeedbackSection = lazy(
  () =>
    import("@/components/screens/MainPage/ui/FeedbackSection/FeedbackSection")
);
const Footer = lazy(
  () => import("@/components/screens/MainPage/ui/Footer/Footer")
);

const SectionLoader = () => (
  <div
    style={{
      padding: "60px 20px",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#f9fafb",
      borderRadius: "12px",
      margin: "20px 0",
    }}
  >
    <LoadingSpinner size="large" />
  </div>
);

const OptimizedMainPage: FC = () => {
  const { width } = useOptimizedWindowSize({ debounceMs: 150 });

  const handleTryButtonClick = () => {
    window.open("https://t.me/checkmate_ai_bot", "_blank");
  };

  return (
    <div>
      {/* Hero секция загружается сразу (above the fold) */}
      <div className={styles.backgraoundHeader}>
        <Header />

        <div className={styles.blockWithButton}>
          <div className={styles.firstScreenText}>
            <h1>Проверьте письменную часть ЕГЭ по английскому за 2 минуты</h1>

            <div className={styles.lines}>
              <p>Получите такую же точность, как у эксперта</p>
              <p>Проверяйте задания 37 и 38 с помощью ИИ</p>
              <p>Экономьте 3+ часа в день на проверку</p>
            </div>
          </div>

          {width > 767 && (
            <Button
              color="white"
              size="small"
              text="Попробовать"
              onClick={handleTryButtonClick}
            />
          )}
        </div>

        <Image
          src={A_FirstIllustration}
          alt="Иллюстрация к первому слайду"
          className={styles.illustration}
          draggable={false}
          priority // Приоритетная загрузка hero изображения
        />

        {width <= 767 && (
          <Button
            color="white"
            size="large"
            text="Попробовать"
            onClick={handleTryButtonClick}
            className={styles.buttonExp}
          />
        )}
      </div>

      {/* Остальные секции загружаются лениво */}
      <Suspense fallback={<SectionLoader />}>
        <UserSection />
      </Suspense>

      <div id="how-it-works">
        <Suspense fallback={<SectionLoader />}>
          <HowItWorksSection />
        </Suspense>
      </div>

      <Suspense fallback={<SectionLoader />}>
        <TelegramBotSection />
      </Suspense>

      <div id="benefits">
        <Suspense fallback={<SectionLoader />}>
          <BenefitsSection />
        </Suspense>
      </div>

      <Suspense fallback={<SectionLoader />}>
        <TryBotSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <APISection />
      </Suspense>

      <div id="tariffs">
        <Suspense fallback={<SectionLoader />}>
          <TariffSection />
        </Suspense>
      </div>

      <Suspense fallback={<SectionLoader />}>
        <FeedbackSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default OptimizedMainPage;
