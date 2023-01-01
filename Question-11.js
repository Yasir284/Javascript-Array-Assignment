// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 true
//     - 4 >= 3 true
//     - 4 < 3 false
//     - 4 <= 3 false
//     - 4 == 4 true
//     - 4 === 4 true
//     - 4 != 4 false
//     - 4 !== 4 false
//     - 4 != '4' false
//     - 4 == '4' true
//     - 4 === '4' false
//     - Find the length of python and jargon and make a falsy comparison statement.

// using ternary operator

function checking(x, y) {
  x > y ? console.log("1.true") : console.log("1.false");
  x >= y ? console.log("2.true") : console.log("2.false");
  x < y ? console.log("3.true") : console.log("3.false");
  x <= y ? console.log("4.true") : console.log("4.false");
  x == x ? console.log("5.true") : console.log("5.false");
  x === x ? console.log("6.true") : console.log("6.false");
  x != x ? console.log("7.true") : console.log("7.false");
  x !== x ? console.log("8.true") : console.log("8.false");
  x != "4" ? console.log("9.true") : console.log("9.false");
  x == "4" ? console.log("10.true") : console.log("10.false");
  x === "4" ? console.log("11.true") : console.log("11.false");
}

checking(4, 3);
