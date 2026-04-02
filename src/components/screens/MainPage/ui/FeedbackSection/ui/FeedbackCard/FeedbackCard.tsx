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
    <article className={styles.feedbackCard}>
      <Image src={ImageSrc} alt={`Фото ${personName}`} draggable={false} />

      <div className={styles.textReview}>
        <div className={styles.headingReview}>
          <h3>{personName}</h3>
          <p>{postion}</p>
        </div>

        <p>{review}</p>
      </div>
    </article>
  );
};

export default FeedbackCard;
