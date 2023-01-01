// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates
//  value of a linear equation, solveLinEquation.
const { sqrt, complex, evaluate } = require("mathjs");
const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Enter 1st Number: ");
let b = prompt("Enter 2st Number: ");
let c = prompt("Enter 3st Number: ");

function roots(a, b, c) {
  let delta = b * b - 4 * a * c;
  if (delta > 0) {
    root1 = (-b + Math.sqrt(delta)) / (2 * a);
    root2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`
Roots are real and unequal.
Where, x1 = ${root1} &
       x2 = ${root2}
  `);
  } else if (delta == 0) {
    root1 = (-b + Math.sqrt(delta)) / (2 * a);
    root2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`
Roots are real and equal.
Where, x1 = ${root1} &
       x2 = ${root2}
    `);
  } else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imaginaryPart = sqrt(delta).toString();
    console.log(`
Roots are Imaginary and Unequal.
Where, x1 = ${realPart} + ${imaginaryPart}/2*${a} &
       x2 = ${realPart} - ${imaginaryPart}/2*${a}
    `);
  }
}
roots(a, b, c);
