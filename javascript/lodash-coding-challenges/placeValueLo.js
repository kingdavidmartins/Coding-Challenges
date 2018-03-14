import _ from 'lodash'
const placeValue = num =>
  _.chain(num.toString().split(""))
    .reverse()
    .map((value, index) =>
      (index % 3 === 0 && index !== 0) // statement
        ? value + "," //run if statement is true
        : value) //tun if state is false
    .reverse()
    .join("")
    .value()

console.log(
  placeValue(25161045656)
);
