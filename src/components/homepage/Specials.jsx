import "../../styles/homepage/Specials.css";
import { SpecialCard } from "./SpecialCard";
import bruchetta from "../../assets/images/bruchetta.svg";
import greekSalad from "../../assets/images/greek-salad.jpg";
import lemonDessert from "../../assets/images/lemon-dessert.jpg";
import { Button } from "../formElements";

const specials = [
  {
    imageSrc: greekSalad,
    imageAlt: "Greek salad",
    name: "Greek salad",
    price: "$12.99",
    description: "Crisp lettuce, olives, feta, and a drizzle of olive oil.",
  },
  {
    imageSrc: bruchetta,
    imageAlt: "Bruchetta",
    name: "Bruchetta",
    price: "$5.99",
    description: "Grilled bread topped with fresh tomatoes and basil.",
  },
  {
    imageSrc: lemonDessert,
    imageAlt: "Lemon dessert",
    name: "Lemon dessert",
    price: "$5.00",
    description: "Tangy lemon cream layered with sweet biscuit crumble.",
  },
];

export const Specials = () => {
  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="specials-header">
        <h2 id="specials-title" className="specials-title">
          This Week's Specials!
        </h2>
        <Button type="button">Online Menu</Button>
      </div>

      <div className="specials-grid">
        {specials.map((special) => (
          <SpecialCard key={special.name} {...special} />
        ))}
      </div>
    </section>
  );
};
