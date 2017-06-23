// Write a function called findUnique which returns the only unique number from an array.
//
// All numbers in the unsorted array are present twice, except the one you have to find.
// The numbers are always valid integer values between 1 and 2147483647, so no need for type
// and error checking. The array contains at least one number and may contain millions of numbers.
//
// Example
//
// [ 1, 8, 4, 4, 6, 1, 8 ] => 6

const findUnique = (numbers) =>
  numbers
    .filter((num) =>
      numbers
        .join('')
        .split(num.toString())
        .length - 1 === 1)[0]

console.log(
findUnique([ 1, 8, 4, 4, 6, 1, 8 ]) // => 6
);
