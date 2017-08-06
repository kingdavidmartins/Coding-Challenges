// Write a multiplication function without
// using the multiplication operator - instead use addition, subtraction, and recursion

const multi = (num, multiply) =>
  Array(multiply)
    .fill()
    .map((v) => num)
    .reduce((a, b) => a + b);

console.log(
  multi(2, 5) === (2 * 5), // => true
  multi(68, 12) === (68 * 12), // => true
  multi(123, 5) === (123 * 5), // => true
  multi(12, 12) === (12 * 12), // => true
  multi(345, 6856) === (345 * 6856), // => true
  multi(2, 523123) === (2 * 523123) // => true
);
