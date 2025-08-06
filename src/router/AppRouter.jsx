import { Routes, Route } from "react-router-dom";
import { Homepage, BookingPage, ConfirmedBooking } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};
