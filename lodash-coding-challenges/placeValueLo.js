var _ = require('lodash');
var placeValue = num => _.chain(num.toString().split("")).reverse().map((value, index) => index % 3 === 0 && index !== 0 ? value + "," : value).reverse().join("").value();

console.log(
  placeValue(25161045656)
);
