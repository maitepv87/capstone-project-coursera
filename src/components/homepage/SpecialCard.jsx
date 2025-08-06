import "../../styles/homepage/SpecialCard.css";

export const SpecialCard = ({
  imageSrc,
  imageAlt,
  name,
  price,
  description,
  ctaLabel = "Order a delivery",
  //   onCtaClick,
}) => {
  return (
    <article className="specialCard">
      <img src={imageSrc} alt={imageAlt} className="specialCard-image" />

      <div className="specialCard-content">
        <header className="specialCard-header">
          <h3 className="specialCard-name">{name}</h3>
          <span className="specialCard-price">{price}</span>
        </header>

        <p className="specialCard-description">{description}</p>

        <p className="specialCard-cta">{ctaLabel}</p>
      </div>
    </article>
  );
};
