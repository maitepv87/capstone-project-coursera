import "../../styles/homepage/Hero.css";
import { Button } from "../formElements";
import restauranfood from "../../assets/images/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-text">
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
      <div className="hero-image-wrapper">
        <img
          src={restauranfood}
          alt="Mediterranean dish served at Little Lemon"
          className="hero-image"
        />
      </div>
    </section>
  );
};
