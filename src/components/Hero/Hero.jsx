import styles from "./Hero.module.css";
import { Button } from "../formElements";
import restauranfood from "../../assets/images/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroText}>
        <h1 id="hero-title">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button type="button" onClick={handleClick}>
          Reserve a Table
        </Button>
      </div>
      <div className={styles.heroImageWrapper}>
        <img
          src={restauranfood}
          alt="Mediterranean dish served at Little Lemon"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};
