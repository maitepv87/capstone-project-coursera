import styles from "./BookingPage.module.css";
import { BookingForm } from "../../components";

export const BookingPage = () => {
  return (
    <main className={styles.bookingPage} aria-labelledby="booking-title">
      <section className={styles.container}>
        <h1 id="booking-title">Reserve a Table</h1>
        <BookingForm />
      </section>
    </main>
  );
};
