import Q_Avatar1 from "@/shared/images/Q_Avatar1.png";
import Q_Avatar2 from "@/shared/images/Q_Avatar2.png";
import Q_Avatar3 from "@/shared/images/Q_Avatar3.png";
import { FC, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import styles from "./FeedbackSection.module.css";
import FeedbackCard from "./ui/FeedbackCard/FeedbackCard";

const FeedbackSection: FC = () => {
  const { width } = useWindowSize();
  const sliderWidth = 835;
  const cardWidthPx = 419;
  const gapPx = 19;
  const sideOffset = 22;

  const feedbacks = [
    {
      ImageSrc: Q_Avatar1,
      personName: "Софья Малюгина",
      postion: "Репетитор, готовит к ЕГЭ",
      review:
        "Автоматическая проверка заданий помогает больше времени уделить каждому ученику, составлять индивидуальные задания и видеть прогресс. Удобно показывать результаты из приложения родителям, когда они спрашивают об успехах ребёнка",
    },
    {
      ImageSrc: Q_Avatar2,
      personName: "Екатерина Жукова",
      postion: "Преподаватель, основатель онлайн-школы",
      review:
        "Отслеживать успехи учеников, видеть, где им нужна помощь стало значительно проще) Понравилось, что можно загружать задания в любом формате: файл, текст, фото — проверка хорошо работает в любом случае. CheckMate  — удобный инструмент для преподавателя, который, на мой взгляд, хорошо дополняет индивидуальные рекомендации для ученика",
    },
    {
      ImageSrc: Q_Avatar3,
      personName: "Арина Сергиенко",
      postion: "Родитель",
      review:
        "И у меня, и у сына теперь меньше теперь меньше сомнений в результате ЕГЭ. Очень понравилось, что можно в любой узнать баллы и не переживать, что я не узнаю всех деталей или что‑то не пойму",
    },
  ];

  const cardsWidth =
    feedbacks.length * cardWidthPx + (feedbacks.length - 1) * gapPx;
  const [currentCard, setCurrentCard] = useState(0);
  const handlePrevClick = () => setCurrentCard(0);
  const handleNextClick = () => setCurrentCard(1);
  const translateX =
    width >= 768 && width <= 1023
      ? currentCard === 0
        ? sideOffset
        : -(cardsWidth - sliderWidth) - sideOffset
      : 0;

  console.log(width);

  return (
    <div className={styles.feedbackSection}>
      <h2>Что о нас говорят</h2>

      {width >= 768 && width <= 1023 ? (
        <>
          <div className={styles.sliderWrapper}>
            <div
              className={styles.cardsReviews}
              style={{
                width: `${cardsWidth}px`,
                transform: `translateX(${translateX}px)`,
                display: "flex",
                gap: `${gapPx}px`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {feedbacks.map((props, idx) => (
                <FeedbackCard key={idx} {...props} />
              ))}
            </div>
          </div>
          <div className={styles.buttonsArrows}>
            <button
              className={styles.buttonNext}
              onClick={handlePrevClick}
              disabled={currentCard === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.0596 2.71979L5.7129 7.06645C5.19957 7.57979 5.19957 8.41978 5.7129 8.93312L10.0596 13.2798"
                  stroke="#292929"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles.buttonNext}
              onClick={handleNextClick}
              disabled={currentCard === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.94043 13.2802L10.2871 8.93355C10.8004 8.42021 10.8004 7.58021 10.2871 7.06688L5.94043 2.72021"
                  stroke="#292929"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <div className={styles.cardsReviews}>
          {feedbacks.map((props, idx) => (
            <FeedbackCard key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackSection;
