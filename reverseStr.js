// create a function that takes a str and reverses it

var reverseStr = (str) =>
  str.split("")
  .reverse()
  .join("");

console.log(
  reverseStr("King David Martins")
);
