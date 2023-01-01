// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

function yintercept(x) {
  let y = 2 * x - 2;
  if (x === 0) {
    return `${y}`;
  } else {
    return `${y}`;
  }
}

function xintercept(y) {
  let x = (y + 2) / 2;
  if (y === 0) {
    return `${x}`;
  } else {
    return `${x}`;
  }
}

function slope() {
  return `
  x-intercept = ${xintercept(0)}
  y-intercept = ${yintercept(0)}
  slope = ${yintercept(0) / xintercept(0)}`;
}

console.log(slope());
