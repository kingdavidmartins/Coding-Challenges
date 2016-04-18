var _ = require('lodash');
var palindrome = str => str === _.chain(str.split("")).reverse().join("").value();

console.log(
  palindrome("racecar")
);
