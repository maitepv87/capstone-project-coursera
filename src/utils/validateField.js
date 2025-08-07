export const validateField = (name, value) => {
  switch (name) {
    case "date":
      return value ? "" : "Please select a date.";

    case "time":
      return value ? "" : "Please select a time.";

    case "guests":
      return value ? "" : "Please select a numeber guests.";

    case "occasion":
      return value ? "" : "Please select an occasion.";

    default:
      return "";
  }
};
