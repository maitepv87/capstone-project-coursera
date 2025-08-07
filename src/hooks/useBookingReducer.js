import { useReducer } from "react";
import { initializeTimes } from "../utils";

const initialState = {
  availableTimes: initializeTimes(),
  isLoading: true,
  errorAvailableTimes: null,
  errorSubmit: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "FETCH_AVAILABLE_TIMES_SUCCESS":
      return {
        ...state,
        availableTimes: action.payload,
        isLoading: false,
        errorAvailableTimes: null,
      };

    case "FETCH_AVAILABLE_TIMES_ERROR":
      return {
        ...state,
        availableTimes: [],
        isLoading: false,
        errorAvailableTimes: action.payload,
      };

    case "BOOKING_SUBMIT_SUCCESS":
      return { ...state, isLoading: false, error: null };

    case "BOOKING_SUBMIT_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const useBookingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
