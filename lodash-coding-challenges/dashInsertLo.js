var _ = require('lodash');

var insertDash = number => _.map(number.toString().split(""), ((value, index, array) => (parseFloat(value) % 2 !== 0 && array[_.add(index, 1)] % 2 !== 0 && array[_.subtract(array.length, 1)] !== array[index]) ? value + "-" : value)).join("");

console.log(
  insertDash(454793)
);
