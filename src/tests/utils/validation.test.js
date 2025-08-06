import { isFormValid } from "../../utils/validation";

describe("isFormValid", () => {
  it("returns true for valid data", () => {
    const validData = {
      date: "2025-08-10",
      time: "18:00",
      guests: "4",
      occasion: "Birthday",
    };
    expect(isFormValid(validData)).toBe(true);
  });

  it("returns false for missing fields", () => {
    const invalidData = {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    };
    expect(isFormValid(invalidData)).toBe(false);
  });

  it("returns false for invalid guest count", () => {
    const tooManyGuests = {
      date: "2025-08-10",
      time: "18:00",
      guests: "15",
      occasion: "Birthday",
    };
    expect(isFormValid(tooManyGuests)).toBe(false);
  });
});
