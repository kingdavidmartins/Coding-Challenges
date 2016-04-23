var _ = require('lodash');
var reverseStr = str => _.chain(str.split("")).reverse().join("").value();

console.log(
  reverseStr("King David Martins")
);
