// 23. Write a program which tells the number of days in a month, now consider leap year.

const prompt = require("prompt-sync")({ sigint: true });
let year = prompt("Enter the year: ");
let month = prompt("Enter the month: ");

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12 ||
  month == "January" ||
  month == "March" ||
  month == "May" ||
  month == "July" ||
  month == "August" ||
  month == "October" ||
  month == "December"
) {
  console.log("This month has 31 days");
} else if (
  month == 4 ||
  month == 6 ||
  month == 9 ||
  month == 11 ||
  month == "April" ||
  month == "June" ||
  month == "September" ||
  month == "November"
) {
  console.log("This month has 30 days");
} else if (year % 4 == 0 && (month == "Febuary" || month == 2)) {
  console.log("This month has 29 days");
} else if (year % 4 != 0 && (month == "Febuary" || month == 2)) {
  console.log("This month has 28 days");
} else {
  console.log("Enter correct month");
}
