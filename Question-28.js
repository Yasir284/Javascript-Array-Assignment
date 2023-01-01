// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

let prime = [];
for (num = 1; num <= 100; num++) {
  let factors = [];
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
  if (factors[0] == 1 && factors[1] == num) {
    prime.push(num);
  }
}

console.log(`
Prime numbers from 0 to 100 are ${prime}
`);
