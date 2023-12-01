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
let result = 0;

let total = myArr.forEach((str) => {
  let numsArr = str.match(/[0-9]+/);
  const firstNum = parseInt(numsArr[0].charAt(0));
  const lastNum = parseInt(numsArr[0].slice(-1));
  let total = firstNum + lastNum;
  result += total;
  console.log(result);
});
