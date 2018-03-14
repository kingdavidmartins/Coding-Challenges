// write a function that takes a str and counts the number of vowels

const vowelCount = (str) =>
  str.split("")
    .filter((value) => "aeiou".split("").indexOf(value) !== -1)
    .length;

console.log(
  vowelCount("king david martins")
);
