const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const randomDate = new Date(2024, 1, 29);
const stringRandomDate = `${randomDate.getFullYear()}-${randomDate
  .getMonth()
  .padStart(2, "0")}-${randomDate.getDate()}`;

console.log(stringRandomDate);
console.log(dateRegex.test(stringRandomDate));
