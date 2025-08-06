export const updateTimes = async (dispatch, date) => {
  dispatch({ type: "LOADING" });

  try {
    const availableTimes = await window.fetchAPI(date);
    dispatch({
      type: "FETCH_AVAILABLE_TIMES_SUCCESS",
      payload: availableTimes,
    });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error.message });
  }
};

export const submitBooking = async (dispatch, formData) => {
  dispatch({ type: "LOADING" });

  try {
    const success = await window.submitAPI(formData);

    if (success) {
      dispatch({ type: "BOOKING_SUBMIT_SUCCESS" });
    } else {
      dispatch({
        type: "BOOKING_SUBMIT_ERROR",
        payload: "Error al enviar reserva",
      });
    }
  } catch (error) {
    dispatch({ type: "BOOKING_SUBMIT_ERROR", payload: error.message });
  }
};
