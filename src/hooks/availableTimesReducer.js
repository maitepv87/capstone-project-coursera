import { fetchAPI } from "../utils/api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  const selectedDate = new Date(action.date);
  return fetchAPI(selectedDate);
};
