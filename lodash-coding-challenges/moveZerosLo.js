var _ = require('lodash');
var moveZeros = (str) => _.concat(_.chain(str).reject((value) => value === 0).value(), _.chain(str).filter((value) => value === 0).value());

console.log(
  moveZeros([false,1,0,1,2,0,1,3,"a"])
);
