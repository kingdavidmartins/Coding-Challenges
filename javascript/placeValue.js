// write a function takes a number and return the same number with commas spearating the place values so it will be easier to read stand dictionary numbers

const placeValue = (number) =>
  number.toString()
    .split("")
    .reverse()
    .map((value, index) =>
      index % 3 === 0 && index !== 0 //statement
        ? value + "," // run if true
        : value) // run if false
    .reverse()
    .join("");

console.log(
  placeValue(25161045656)
);
