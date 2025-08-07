import styles from "./Chicago.module.css";
import marioAdrianImg from "../../assets/images/Mario-and-Adrian.jpg";

export const Chicago = () => {
  return (
    <section className={styles.chicago} aria-labelledby="chicago-title">
      <div className={styles.chicagoContent}>
        <div className={styles.text}>
          <h2 id="chicago-title">Our Story</h2>
          <p>
            Little Lemon was founded in 1995 by two brothers, Mario and Adrian,
            who brought their Mediterranean roots to the heart of Chicago. What
            started as a small neighborhood eatery quickly grew into a beloved
            local gem, known for its warm hospitality and bold flavors.
          </p>
          <p>
            Over the years, Little Lemon has stayed true to its mission: serving
            traditional recipes with a modern twist. From hand-rolled dolmas to
            citrus-marinated lamb, every dish tells a story of heritage and
            innovation.
          </p>
          <p>
            Today, Little Lemon continues to be a family-owned restaurant, proud
            to be part of the vibrant Chicago culinary scene. Whether you're a
            local or visiting for the first time, we invite you to experience
            the flavors, stories, and heart behind every plate.
          </p>
        </div>
        <figure className={styles.imageWrapper}>
          <img
            src={marioAdrianImg}
            alt="Mario and Adrian, founders of Little Lemon"
            className={styles.image}
          />
          <figcaption>Mario and Adrian</figcaption>
        </figure>
      </div>
    </section>
  );
};
