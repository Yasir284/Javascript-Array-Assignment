// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = [
  "India",
  "China",
  "Bangladesh",
  "Srilanks",
  "Nepal",
  "Singapor",
  "Ethiopia",
];
let check = countries.includes("Ethiopia");

if (check == true) {
  countries.splice(6, 1, "ETHIOPIA");
  console.log(countries);
} else {
  countries.push("Ethiopia");
  console.log(countries);
}
