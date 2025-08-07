import { initializeTimes, updateTimes } from "./availableTimesReducer";

test("initializeTimes returns correct default times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns same times regardless of date", () => {
  const initial = ["17:00", "18:00"];
  const result = updateTimes(initial, { date: "2025-08-07" });
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
