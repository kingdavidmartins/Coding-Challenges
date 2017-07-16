// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string.
//
// Eg:
// "zero nine five two" => "four"
// If the string is empty or includes a number greater than 9 return "n/a"

const averageString = (str) =>
  str.split(' ').filter((word) => ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].indexOf(word) === -1).length >= 1
    ? 'n/a'
    : ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][
          Math.floor(
            str
              .split(' ')
              .map((word) => ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].indexOf(word))
              .reduce((a, b) => a + b) / str.split(' ').length)]

console.log(
  averageString("zero nine five two"), // => "four"
  averageString("four six two three"), // => "three"
  averageString("one two three four five"), // => "three"
  averageString("five four"), // => "four"
  averageString("zero zero zero zero zero"), // => "zero"
  averageString("one one eight one"), // => "two"
  averageString("") // => "n/a"
);
