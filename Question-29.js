// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenNum = 0;
let oddNum = 0;
for (num = 0; num <= 100; num++) {
  if (num % 2 == 0) {
    evenNum += num;
  } else {
    oddNum += num;
  }
}

console.log(`
Sum of even numbers from 0 to 100 = ${evenNum}
Sum of odd numbers from 0 to 100 = ${oddNum}
`);
