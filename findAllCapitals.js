//Write a function that takes a single string (word) as argument. The function must return
//an ordered list containing the letters of all capital letters in the string.

var findAllCapitals = (str) =>
  str.split("")
    .filter((value) => value === value.toUpperCase() && value !== " ");

console.log(
  findAllCapitals("King DaViD MarTINs")
);
