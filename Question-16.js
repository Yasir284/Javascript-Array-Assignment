// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const prompt = require("prompt-sync")({ sigint: true });
let r = prompt("Enter radius: ");
let area = Math.PI * r * r;
console.log(`Area of circle = ${Math.round(area)}`);
let circumference = 2 * Math.PI * r;
console.log(`Circumference of circle = ${Math.round(circumference)}`);
