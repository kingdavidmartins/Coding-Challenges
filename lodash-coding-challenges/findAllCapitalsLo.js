var _ = require('lodash');

console.log(
  _.chain("King DaViD MarTINs").split("").filter((value, index, array) => value === value.toUpperCase() && value !== " ")
  .value()
);
