// 20. Write a code which can give grades to students according to theirs scores:
//     - 90-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

function marks(mks) {
  if (mks >= 90 && mks <= 100) {
    console.log(`Passed with A grade`);
  } else if (mks >= 70 && mks <= 89) {
    console.log(`Passed with B grade`);
  } else if (mks >= 60 && mks <= 69) {
    console.log(`Passed with C grade`);
  } else if (mks >= 50 && mks <= 59) {
    console.log(`Passed with D grade`);
  } else if (mks >= 0 && mks <= 49) {
    console.log(`Failed!, you got F`);
  } else {
    console.log("Error in adding marks");
  }
}

marks(100);
