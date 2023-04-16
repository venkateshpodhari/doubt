var addDays = require("date-fns/addDays");

const result = (days) => {
  const newDate = addDays(new Date(2020, 6, 21), days);

  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
};
module.exports = result;
