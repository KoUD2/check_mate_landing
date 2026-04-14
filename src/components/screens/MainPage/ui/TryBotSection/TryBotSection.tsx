"use client";

import Button from "@/components/ui/Button/Button";
import A_Hat from "@/shared/images/A_Hat.svg";
import Image from "next/image";
import { FC } from "react";
import styles from "./TryBotSection.module.css";

const TryBotSection: FC = () => {
  const handleTryButtonClick = () => {
    window.open("https://app.checkmateai.ru/", "_blank");
  };

  return (
    <section className={styles.tryBotSection} aria-label="Попробовать CheckMate бесплатно">
      <div className={styles.headingGroup}>
        <h2>Попробовать бесплатно</h2>

        <Button
          text="Перейти на сайт"
          color="orange"
          size="small"
          onClick={handleTryButtonClick}
        />
      </div>

      <Image
        src={A_Hat}
        alt="Попробовать CheckMate бесплатно"
        draggable={false}
      />
    </section>
  );
};

export default TryBotSection;
