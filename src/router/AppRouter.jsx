import { Routes, Route } from "react-router-dom";
import { Homepage, BookingPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} /> */}
      {/* <Route path="/booking" element={<BookingPage />} /> */}

      <Route path="/" element={<BookingPage />} />
    </Routes>
  );
};
