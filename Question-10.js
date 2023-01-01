// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.

// truthy value
let x = true;
let y = "2";
let z = "Yasir";
console.log(`
    ${x}
    ${y}
    ${z}
`);

// falsy value
//Example 1
let names;
console.log(typeof names);

//Example 2
let login = false;
console.log(login);

//Example 3
let falsy = [0, 1, 2, 3, 4, 5, 6].every((element) => element == true);
console.log(falsy);

//Example 4
console.log(myFunction());
var myFunction = function () {
  console.log("hello");
};
