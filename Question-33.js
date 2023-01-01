// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in
// adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based
// the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

// formula
//  bmi = weight in Kg / (height x height) in m2
// SI unit  = Kg/m2

function enterInfo(w, h) {
  let height = h * 0.3048;
  let bmi = w / (height * height);
  if (bmi < 18.5) {
    console.log(`
    Your Body Mass Index (BMI) is  ${Math.round(bmi)} Kg/m^2
    This is considered "Underweight"
    `);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`
    Your Body Mass Index (BMI) is  ${Math.round(bmi)} Kg/m^2
    This is considered "Normal weight"
    `);
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`
    Your Body Mass Index (BMI) is  ${Math.round(bmi)} Kg/m^2
    This is considered "Overweight"
    `);
  } else if (bmi >= 30) {
    console.log(`
    Your Body Mass Index (BMI) is  ${Math.round(bmi)} Kg/m^2
    This is considered "Obese"
    `);
  } else {
    ("Enter correct information");
  }
}

enterInfo(63, 5.6);
