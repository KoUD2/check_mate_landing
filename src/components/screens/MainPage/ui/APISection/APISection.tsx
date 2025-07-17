import A_Dev from "@/shared/images/A_Dev.svg";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";
import styles from "./APISection.module.css";

const APISection: FC = () => {
  return (
    <div className={styles.apiSection}>
      <div className={styles.headingGroup}>
        <h2>API для разработчиков</h2>

        <div className={styles.lines}>
          <p>Используйте ИИ-проверку и автоматизируйте процесс</p>
          <p>для школ, образовательных платформ</p>
        </div>
      </div>

      <div className={styles.cardApi}>
        <div className={styles.cardInfo}>
          <h3>Лексика и грамматика</h3>
          <p>
            В тексте выявлена только одна незначительная лексическая неточность
            («at last»). Это укладывается в диапазон 0–2 ошибки,
            что соответствует максимальному баллу по этой категории
          </p>
        </div>
        <div className={cn(styles.cardInfo, styles.cardInfo2)}>
          <h3>Общий балл: 2 балла</h3>
          <p>
            Работа демонстрирует высокий уровень владения языком. Текст написан
            грамотно с минимальным количеством неточностей, которые не влияют
            на коммуникацию. Соблюдены требования задания по содержанию и объёму
          </p>
        </div>
      </div>

      <Image
        src={A_Dev}
        alt="API для разработчиков"
        draggable={false}
        className={styles.imageAPI}
      />
    </div>
  );
};

export default APISection;
