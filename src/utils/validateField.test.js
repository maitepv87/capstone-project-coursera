import { validateField } from "../utils";

describe("validateField", () => {
  test("returns error for empty date", () => {
    expect(validateField("date", "")).toBe("Please select a date.");
  });

  test("returns no error for valid date", () => {
    expect(validateField("date", "2025-08-07")).toBe("");
  });

  test("returns error for empty time", () => {
    expect(validateField("time", "")).toBe("Please select a time.");
  });

  test("returns error for guests = 0", () => {
    expect(validateField("guests", 0)).toBe("Please select a numeber guests.");
  });

  test("returns error for empty occasion", () => {
    expect(validateField("occasion", "")).toBe("Please select an occasion.");
  });

  test("returns no error for valid occasion", () => {
    expect(validateField("occasion", "Birthday")).toBe("");
  });
});
