import styles from "./ConfirmedBooking.module.css";

export const ConfirmedBooking = () => {
  return (
    <section className={styles.confirmation}>
      <h1>Reservation Confirmed</h1>
      <p>
        Your table at Little Lemon is reserved. We look forward to serving you!
      </p>
    </section>
  );
};
