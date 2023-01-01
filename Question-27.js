// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Min and Max ages
ages.sort();
console.log(ages);
console.log(`
Minimum age is ${ages[0]}
Maximum age is ${ages[ages.length - 1]}
`);

//Median
if (ages.length % 2 == 0) {
  let median = ages[ages.length / 2];
  console.log(`
  Median = ${median}
  `);
} else if (ages.length % 2 != 0) {
  let x = ages[(ages.length - 1) / 2 - 1]; //Middle Number 1
  let y = ages[(ages.length - 1) / 2]; //Middle Number 2
  console.log(`Middle Number-1 =  ${x}`);
  console.log(`Middle Number-2 =  ${y}`);

  median = (x + y) / 2;
  console.log(`Median = ${median}`);
} else {
  console.log("Data is Wrong");
}

// Average age

// let addingAges = 0;
// for (i = 0; i < ages.length; i++) {
//   addingAges = addingAges + ages[i];
// }
// let averageAges = addingAges / ages.length;
// console.log(`
// Average age = ${averageAges}
// `);

// =========== OR ===========

let addingAges = ages.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
let averageAges = addingAges / ages.length;
console.log(`
Average age = ${averageAges}
`);

// Comparing min and max ages

let ageDifference = ages[ages.length - 1] - ages[0];

console.log(`
The difference between minimum age and maximum age is ${ageDifference} years
`);
