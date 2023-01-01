// 30. Write a script which generates a random hexadecimal number.

let hexadecimal = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let generateHexaNum = (size) => {
  let result = [];
  for (i = 0; i <= size; i++) {
    result.push(hexadecimal[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
};

console.log(generateHexaNum(16));
