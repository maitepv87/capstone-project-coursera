export const validateField = (name, value) => {
  switch (name) {
    case "time":
      return value ? "" : "Please select a time.";

    case "date":
      return value ? "" : "Please select a date.";

    case "guests":
      return value ? "" : "Please select a numeber guests.";

    default:
      return "";
  }
};
