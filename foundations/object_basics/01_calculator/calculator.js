const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numList) {
  return numList.reduce((sum, num) => sum + num, 0);
};

const multiply = function (numList) {
  return numList.reduce((sum, num) => sum * num);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = num; i > 1; i--) factorial *= i;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
