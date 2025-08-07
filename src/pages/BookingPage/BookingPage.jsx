import styles from "./BookingPage.module.css";
import { useReducer } from "react";
import { BookingForm } from "../../components";
import {
  initializeTimes,
  updateTimes,
} from "../../hooks/availableTimesReducer";

export const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main className={styles.bookingPage} aria-labelledby="booking-title">
      <section className={styles.container}>
        <h1 id="booking-title">Reserve a Table</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </main>
  );
};
