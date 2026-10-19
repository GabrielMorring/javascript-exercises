const fibonacci = function (num) {
  if (num < 1) return "OOPS";
  if (!Number.isInteger(num)) return "OOPS";

  let sum = 1;
  let prev = 0;

  for (let i = 1; i < num; i++) {
    let temp = sum;
    sum += prev;
    prev = temp;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
