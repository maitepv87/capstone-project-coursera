export const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

export const updateTimes = (state, action) => {
  const { date } = action;
  return initializeTimes();
};
