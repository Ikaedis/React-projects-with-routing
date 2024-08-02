export const formatDate = function (currDate) {
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth() + 1;
  const currDay = currDate.getDate();

  return `${currYear}-${String(currMonth).padStart(2, "0")}-${String(
    currDay
  ).padStart(2, "0")}`;
};
