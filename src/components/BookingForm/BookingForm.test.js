import { render, screen } from "@testing-library/react";
import { BookingForm } from "../components/BookingForm";

const mockDispatch = jest.fn();

test("date input has required and type=date", () => {
  render(<BookingForm availableTimes={["18:00"]} dispatch={mockDispatch} />);
  const dateInput = screen.getByLabelText(/date/i);
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("type", "date");
});

test("guests input has required, type=number, min=1, max=10", () => {
  const guestsInput = screen.getByLabelText(/number of diners/i);
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select is required", () => {
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});
