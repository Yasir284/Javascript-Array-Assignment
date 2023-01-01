// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();

console.log(`
- What is the year today? ${date.getFullYear()}
- What is the month today as a number? ${date.getMonth()}
- What is the date today? ${date.getDate()}
- What is the day today as a number? ${date.getDay()}
- What is the hours now? ${date.getHours()}
- What is the minutes now? ${date.getMinutes()}
`);

let start = new Date(1970, 1, 1);
let end = new Date();
let elapsed = end - start;
console.log(`
- Find out the numbers of seconds elapsed from January 1, 1970 to now.
  ${elapsed / 1000}
`);
