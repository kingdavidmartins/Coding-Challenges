var _ = require('lodash');

var getAllFactors = (integer) => {
  var factors = [];
  for (var a = 1; a <= integer; a++) {
    if (_.divide(integer, a) === Math.floor(_.divide(integer, a))) {
      factors.push(a);
    };
  };
  return factors;
}

console.log(
  getAllFactors(900)
);
