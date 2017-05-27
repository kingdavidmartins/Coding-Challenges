//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23. Finish the solution so that it prints the sum of all
//the multiples of 3 or 5 below the number passed in.

const sumOfMultiple3And5 = (number) =>
  Array
    .apply(null, {length: number})
    .map((value, index) => parseFloat(index + 1))
    .filter(number => (number % 3 === 0) || (number % 5 === 0))
    .reduce((a, b) => a + b)

console.log(
  sumOfMultiple3And5(89)
);
