import styles from "./SpecialCard.module.css";
import { Button } from "../formElements";

export const SpecialCard = ({
  imageSrc,
  imageAlt,
  name,
  price,
  description,
  ctaLabel = "Order a delivery",
}) => {
  return (
    <article className={styles.specialCard}>
      <img src={imageSrc} alt={imageAlt} className={styles.specialCardImage} />

      <div className={styles.specialCardContent}>
        <header className={styles.specialCardHeader}>
          <h3 className={styles.specialCardName}>{name}</h3>
          <span className={styles.pecialCardPrice}>{price}</span>
        </header>

        <p className={styles.specialCardDescription}>{description}</p>

        <Button type="button"> {ctaLabel}</Button>
      </div>
    </article>
  );
};
