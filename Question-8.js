// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
let indexOfFirst = sentence.indexOf("because");
let indexOfSecond = sentence.indexOf("because", indexOfFirst + 1);
console.log(`
Position of 1st because is ${indexOfFirst}
Position of 2st because is ${indexOfSecond}
Position of 3st because is ${sentence.indexOf("because", indexOfSecond + 1)}
`);
