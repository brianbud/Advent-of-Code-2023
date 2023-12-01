// On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

// For example:

// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet

// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

let data = `five8b
2733vmmpknvgr
3oneeighttwo`;

const myArr = data.split("\n");

myArr.forEach((str) => {
  let firstNum = str.match(/[0-9]+/);
  console.log(firstNum);
});
