const { forEach } = require("mathjs");

// 35. Write a functions which checks if all items are unique in the array.
let array = [1, 2, 3, 4, 5, 6, 7];

function isUnique(array) {
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const next = array[j];
      //   console.log(`current:${i}-${current} next:${j}-${next}`);
      if (current === next) return false;
    }
  }
  return true;
}
console.log(isUnique(array));
let num = 10;
let yasir = {
  name: "Yasir",
  fun: function () {
    console.log(this.num);
  },
  arrowFun: () => {
    console.log(this.num);
  },
};
let newFun = () => console.log(this.num);
yasir.fun();
yasir.arrowFun();
newFun();

let newObj = {
  key: "value",
  key2: "value",
  key3: "value",
  key4: "value",
};

let arrObj = {
  key: 1,
  key1: 44,
  key2: 31,
  key3: 402,
};
// let APIArr = ["key", "key1", "key2", "key3"];
// // console.log(arrObj["key"], arr[0]);
// for (const iterator of APIArr) {
//   console.log(iterator);
//   console.log(arrObj[iterator]);
//   console.log(arrObj.iterator);
// }
console.log(arrObj);
function logValuesOfObject(object) {
  for (const iterator of Object.keys(object)) {
    console.log(iterator);
    console.log(arrObj[iterator]);
  }
}

logValuesOfObject(arrObj);
// function getArrayValuesOfObject(object) {
//   let arrayValues = [];
//   for (const iterator of Object.keys(object)) {
//     arrayValues.push(arrObj[iterator]);
//   }
//   return arrayValues;
// }
function getArrayValuesOfObject(object) {
  let arrayValues = [];
  Object.keys(object).every((key) => {
    arrayValues.push(object[key]);
  });
  return arrayValues;
}
// console.log(getArrayValuesOfObject(arrObj));

// function getArrayValuesOfObject(object) {
//   return Object.keys(object).map((key) => object[key]);
// }

console.log(getArrayValuesOfObject(arrObj));

console.log(
  [1, 1, 3, 4, 5, 6].filter((value) => {
    // return value === 1;
  })
);

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.at(1));
console.log(arr[1]);
