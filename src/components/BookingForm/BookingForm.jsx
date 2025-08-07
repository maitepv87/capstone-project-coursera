import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../../context";
import { useFormReducer } from "../../hooks/useFormReducer";
import { updateTimes } from "../../context/bookingActions";
import { TextField, SelectField, Button } from "../formElements";
import { validateField } from "../../utils";

const initialFormState = { date: "", time: "", guests: 1, occasion: "" };

const initialErrors = { date: "", time: "", guests: null, occasion: "" };

export const BookingForm = () => {
  const { state: contextState, dispatch } = useContext(BookingContext);
  const { state, onChange, onReset } = useFormReducer(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const hasFetchedTimes = useRef(false);

  const handleOpen = () => {
    if (!hasFetchedTimes.current) {
      updateTimes(dispatch, state.date);
      hasFetchedTimes.current = true;
    }
  };

  const availableReservationTimes = contextState.availableTimes;

  const handleBlur = (event) => {
    const { name, value, type, checked } = event.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, type === "checkbox" ? checked : value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    navigate("/booking-confirmed");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Date"
        name="date"
        type="date"
        value={state.date}
        onChange={onChange}
        onBlur={handleBlur}
        error={errors.date}
        required
      />

      <SelectField
        label="Time"
        name="time"
        value={state.time}
        onChange={onChange}
        onBlur={handleBlur}
        onOpen={handleOpen}
        options={availableReservationTimes}
        error={errors.time}
        required
      />

      <TextField
        label="Number of Diners"
        name="guests"
        type="number"
        min="1"
        max="10"
        value={state.guests}
        onChange={onChange}
        onBlur={handleBlur}
        error={errors.guests}
        required
      />

      <SelectField
        label="Occasion"
        name="occasion"
        value={state.occasion}
        onChange={onChange}
        onBlur={handleBlur}
        options={[
          { label: "Birthday", value: "Birthday" },
          { label: "Engagement", value: "Engagement" },
          { label: "Anniversary", value: "Anniversary" },
        ]}
        error={errors.occasion}
      />

      <Button type="submit">Submit reservation</Button>
    </form>
  );
};
