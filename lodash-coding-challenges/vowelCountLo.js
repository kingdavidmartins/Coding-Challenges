var _ = require('lodash');
var vowelCount = str => _.chain(str.split("")).filter((value) => "aeiou".indexOf(value) !== -1).value().length;

console.log(
  vowelCount("king david martins")
);
