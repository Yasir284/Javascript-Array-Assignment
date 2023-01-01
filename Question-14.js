// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

function slope(x1, y1, x2, y2) {
  let m = (y2 - y1) / (x2 - x1);
  console.log(`
Slope between point (${x1},${y1}) and point (${x2}, ${y2}) is ${m}  
`);
}
slope(2, 2, 6, 10);
