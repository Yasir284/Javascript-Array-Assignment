// 4. Check if the string contains a word Script using includes() method.

// Sum 1
let sentence = "Hello my name is Yasir Lambawala";
console.log(sentence.includes("name"));

// Sum 2
let names = ["yasir", "shariq", "zaiem", "afzal"];
for (i = 0; i < names.length; i++) {
  let check = names[i].includes("a");
  if ((check = true)) {
    console.log(`${names[i]} includes 'a'`);
  }
}
