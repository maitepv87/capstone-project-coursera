import { render, screen } from "@testing-library/react";
import { BookingForm } from "../../components/BookingForm";

describe("BookingForm HTML5 validation", () => {
  beforeEach(() => render(<BookingForm availableTimes={["17:00", "18:00"]} />));

  it("should require a valid date", () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
  });

  it("should require guests between 1 and 10", () => {
    const guestsInput = screen.getByLabelText(/guests/i);
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  it("should require time selection", () => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute("required");
  });
});
