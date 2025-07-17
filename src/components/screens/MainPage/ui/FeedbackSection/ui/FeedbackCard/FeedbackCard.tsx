import Image from "next/image";
import { FC } from "react";
import styles from "./FeedbackCard.module.css";
import { IFeedbackCard } from "./FeedbackCard.props";

const FeedbackCard: FC<IFeedbackCard> = ({
  ImageSrc,
  personName,
  postion,
  review,
}) => {
  return (
    <div className={styles.feedbackCard}>
      <Image src={ImageSrc} alt="Отзыв" draggable={false} />

      <div className={styles.textReview}>
        <div className={styles.headingReview}>
          <h3>{personName}</h3>
          <p>{postion}</p>
        </div>

        <p>{review}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
