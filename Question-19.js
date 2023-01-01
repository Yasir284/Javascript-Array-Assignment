// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

function number(x) {
  if (x % 2 == 0) {
    console.log(`${x} is even number`);
  } else {
    console.log(`${x} is odd number`);
  }
}

number(2);

// OR
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((element) => {
  if (element % 2 == 0) {
    console.log(`${element} is even number`);
  } else {
    console.log(`${element} is odd number`);
  }
});
