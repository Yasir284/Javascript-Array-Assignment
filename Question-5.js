// 5. Split the string into an array using split() method

// Sum 1
let string = "yasir";

console.log(string.split(""));
console.log(string.split("", 4));
console.log(string.split("", 1));

// Sum 2
let names = ["yasir", "shariq", "zaiem", "afzal"];
for (i = 0; i < names.length; i++) {
  names[i] = names[i].split("");
  names[i].push();
}
console.log(names);
