"use client";

import Button from "@/components/ui/Button/Button";
import A_Hat from "@/shared/images/A_Hat.svg";
import Image from "next/image";
import { FC } from "react";
import styles from "./TryBotSection.module.css";

const TryBotSection: FC = () => {
  const handleTryButtonClick = () => {
    window.open("https://t.me/checkmate_ai_bot", "_blank");
  };

  return (
    <div className={styles.tryBotSection}>
      <div className={styles.headingGroup}>
        <h2>Попробовать бесплатно</h2>

        <Button
          text="Перейти в бота"
          color="orange"
          size="small"
          onClick={handleTryButtonClick}
        />
      </div>

      <Image
        src={A_Hat}
        alt="Попробовать бесплатно бота в телеграм"
        draggable={false}
      />
    </div>
  );
};

export default TryBotSection;
