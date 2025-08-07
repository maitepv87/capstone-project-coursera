export const fetchAPI = (date) => {
  const result = [];
  const seed = date.getDate();

  for (let i = 17; i <= 21; i++) {
    if ((i + seed) % 2 === 0) {
      result.push(`${i}:00`);
    }
  }

  return result;
};

export const submitAPI = (formData) => {
  console.log(formData);
  return true; // Simula éxito
};
