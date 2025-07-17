"use client";

import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { FC } from "react";
import styles from "./TariffCard.module.css";
import { ITariffCard } from "./TariffCard.props";

const TariffCard: FC<ITariffCard> = ({
  imageSrc,
  subscriptionName,
  count,
  price,
  period,
}) => {
  const handleTryButtonClick = () => {
    window.open("https://t.me/checkmate_ai_bot", "_blank");
  };

  return (
    <div className={styles.tariffCard}>
      <Image src={imageSrc} alt="Тарифный план" draggable={false} />

      <h3>Подписка {subscriptionName}</h3>

      <div className={styles.price}>
        <div className={styles.priceInner}>
          <div className={styles.priceAmount}>{price} ₽</div>
          <p>/{period}</p>
        </div>

        <p>{count} проверок</p>
      </div>

      <Button
        color="orange"
        text="Купить"
        size="large"
        onClick={handleTryButtonClick}
      />
    </div>
  );
};

export default TariffCard;
