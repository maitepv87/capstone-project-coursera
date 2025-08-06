import { createContext } from "react";
import { useBookingReducer } from "./useBookingReducer";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const { state, dispatch } = useBookingReducer();

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
