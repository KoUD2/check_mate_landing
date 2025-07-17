"use client";

import useWindowSize from "@/hooks/useWindowSize";
import A_Bulb from "@/shared/images/A_Bulb.svg";
import A_ImageGraph from "@/shared/images/A_ImageGraph.svg";
import A_TaskImage from "@/shared/images/A_TaskImage.svg";
import Image from "next/image";
import { FC, useState } from "react";
import CardInfo from "./CardInfo/CardInfo";
import styles from "./HowItWorksSection.module.css";

const HowItWorksSection: FC = () => {
  const { width } = useWindowSize();

  const [currentCard, setCurrentCard] = useState(0);

  const handlePrevClick = () => {
    // Левая кнопка всегда возвращает к началу (первой карточке)
    setCurrentCard(0);
  };

  const handleNextClick = () => {
    // Правая кнопка максимум один клик вправо (от первой ко второй карточке)
    setCurrentCard((prev) => (prev === 0 ? 1 : 1));
  };

  // Вычисляем смещение в пикселях (ширина одной карточки + gap)
  const cardWidth = 22.865; // ширина карточки в vw
  const gap = 1.042; // gap в vw
  const translateX = -(currentCard * (cardWidth + gap));

  // Массив карточек в стандартном порядке
  const cards = [
    <CardInfo
      key={1}
      number={1}
      header="Составьте задание и отправьте ученику"
      description="Делегируйте рутинную проверку заданий умному помощнику"
    >
      <div className={styles.task}>
        <p>
          ...I don&apos;t think it will be a problem for me to choose a good job
          in the future as I&apos;m really interested in foreign languages,
          cultures and countries and I hope I&apos;ll work as a translator or
          teacher of foreign languages some day. Have you already decided on
          your career? What job are you going to choose? Why?
        </p>
        <p>
          I&apos;ve lived in the USA my whole life but I&apos;d really love to
          travel to other countries.
        </p>
      </div>
    </CardInfo>,
    <CardInfo
      key={2}
      number={2}
      header="Получите выполненное задание"
      description="Получите вариант от ученика"
    >
      <div className={styles.wrapperSecondTask}>
        <div className={styles.secondTask}>
          <h3>Задание 38.2</h3>
          <p>
            ...I don&apos;t think it will be a problem for me to choose a good
            job in the future as I&apos;m really interested in foreign
            languages, cultures and countries and I hope I&apos;ll work as...
          </p>
        </div>
        <Image src={A_Bulb} alt="Картинка лампочки" draggable={false} />
      </div>
    </CardInfo>,
    <CardInfo
      key={3}
      number={3}
      header="Загрузите файл с выполненным заданием"
      description="Или введите текст, или сфотографируйте бланк ответов"
    >
      <Image
        src={A_TaskImage}
        alt="Картинка"
        draggable={false}
        className={styles.imageCard3}
      />
    </CardInfo>,
    <CardInfo
      key={4}
      number={4}
      header="Получите балл и подробный разбор работы"
      description="CheckMate автоматически оценит задание"
    >
      <div className={styles.rows}>
        <div className={styles.row}>
          <p className={styles.headerRow}>Всего баллов</p>
          <p className={styles.headerRow}>13</p>
        </div>
        <div className={styles.row}>
          <p>К1</p>
          <p>3</p>
        </div>
        <div className={styles.row}>
          <p>К2</p>
          <p>3</p>
        </div>
        <div className={styles.row}>
          <p>К3, К4, К5</p>
          <p>7</p>
        </div>
      </div>
    </CardInfo>,
    <CardInfo
      key={5}
      number={5}
      header="Дополните разбор или запишите рекомендации для ученика"
      description="Автоматический разбор всегда можно дополнить индивидуальными рекомендациями"
    >
      <div className={styles.table}>
        <div className={styles.headerTable}>
          <p>Дополнительно</p>
          <p>13</p>
        </div>

        <div className={styles.rowTable}>
          <p>Оценка использования типовых клише</p>
          <p>0</p>
        </div>

        <div className={styles.textarea}>
          <p>Комментарий...</p>
        </div>

        <Image src={A_ImageGraph} alt="Картинка" draggable={false} />
      </div>
    </CardInfo>,
  ];

  // Для ширины экрана до 1023px меняем порядок карточек: 4, 5, 1, 2, 3
  const mobileOrder = [3, 4, 0, 1, 2]; // индексы карточек в нужном порядке
  const cardsToRender =
    width <= 1023 ? mobileOrder.map((i) => cards[i]) : cards;

  return (
    <div className={styles.howItWorksSection}>
      <h2>Как это работает</h2>

      {width <= 767 && (
        <div className={styles.buttonsArrows}>
          <button className={styles.buttonNext} onClick={handlePrevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0596 2.71979L5.7129 7.06645C5.19957 7.57979 5.19957 8.41978 5.7129 8.93312L10.0596 13.2798"
                stroke="#A1A1A1"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className={styles.buttonNext} onClick={handleNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.94043 13.2802L10.2871 8.93355C10.8004 8.42021 10.8004 7.58021 10.2871 7.06688L5.94043 2.72021"
                stroke="#A1A1A1"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      <div className={styles.cardsWrapper}>
        <div
          className={styles.cardsProcess}
          style={{
            transform: `translateX(${translateX}vw)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {cardsToRender}
        </div>

        {width > 767 && (
          <div className={styles.buttonsArrows}>
            <button className={styles.buttonNext} onClick={handlePrevClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.0596 2.71979L5.7129 7.06645C5.19957 7.57979 5.19957 8.41978 5.7129 8.93312L10.0596 13.2798"
                  stroke="#A1A1A1"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className={styles.buttonNext} onClick={handleNextClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.94043 13.2802L10.2871 8.93355C10.8004 8.42021 10.8004 7.58021 10.2871 7.06688L5.94043 2.72021"
                  stroke="#A1A1A1"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorksSection;
