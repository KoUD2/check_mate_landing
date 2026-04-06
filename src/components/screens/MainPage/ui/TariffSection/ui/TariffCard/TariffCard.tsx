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
    window.open("https://app.checkmateai.ru/", "_blank");
  };

  return (
    <article
      className={styles.tariffCard}
      role="listitem"
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="brand" content="CheckMate" />
      <meta itemProp="category" content="Образовательное программное обеспечение" />
      <meta
        itemProp="description"
        content={`${count} проверок заданий ЕГЭ по английскому языку в ${period}. Автоматическая проверка по официальным критериям ФИПИ, детальная обратная связь для ученика.`}
      />

      <Image
        src={imageSrc}
        alt={`Иллюстрация тарифного плана ${subscriptionName}`}
        draggable={false}
      />

      <h3 itemProp="name">Подписка {subscriptionName}</h3>

      <div
        className={styles.price}
        itemProp="offers"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <link itemProp="availability" href="https://schema.org/InStock" />
        <link itemProp="url" href="https://app.checkmateai.ru/" />
        <meta itemProp="priceCurrency" content="RUB" />
        <meta itemProp="priceValidUntil" content="2026-12-31" />

        <div className={styles.priceInner}>
          <div className={styles.priceAmount} itemProp="price" content={String(price)}>
            {price} ₽
          </div>
          <p>/{period}</p>
        </div>

        <p itemProp="description">{count} проверок</p>
      </div>

      <Button
        color="orange"
        text="Купить"
        size="large"
        onClick={handleTryButtonClick}
        aria-label={`Купить подписку CheckMate ${subscriptionName} за ${price} ₽ в ${period}`}
      />
    </article>
  );
};

export default TariffCard;
