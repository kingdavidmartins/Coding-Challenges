var _ = require('lodash');
var creditCardMask = (num) => _.chain(num.toString().split("")).map((value, index, array) => array.length - index > 4 ? "#" : value).join("").value();

console.log(
  creditCardMask(64364634634745)
);
