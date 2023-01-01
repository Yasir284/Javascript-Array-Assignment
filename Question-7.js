// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

let names = [
  "yasir",
  "shariq",
  "zaiem",
  "afzal",
  1,
  2,
  3,
  4,
  5,
  "afzal",
  6478767980,
  24465,
  345476,
  75678,
];
console.log(names.lastIndexOf("afzal"));

for (i = 0; i < names.length; i++) {
  console.log(`
    Index of ${names[i]} is ${names.indexOf(names[i])}
    `);
}
