const fillDateFormat = (date: number) => {
  return date < 10 ? `0${date}` : date;
};

export const getCustomDate = () => {
  const dt = new Date();
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  return `${fillDateFormat(day)}/${fillDateFormat(
    month,
  )}/${year} - ${hours}:${fillDateFormat(minutes)}`;
};
