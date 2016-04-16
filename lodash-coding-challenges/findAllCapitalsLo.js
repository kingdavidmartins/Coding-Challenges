var _ = require('lodash');
var findAllCapitals = str => _.chain(str).split("").filter((value, index, array) => value === value.toUpperCase() && value !== " ").value();

console.log(
  findAllCapitals("King DaViD MarTINs")
);
