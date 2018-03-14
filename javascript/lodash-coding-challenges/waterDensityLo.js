// O A W H
import _ from 'lodash'
const waterDensity = arr =>
  _.concat(
      _.filter(arr.toString(), (value) => value === "O"),
      _.filter(arr.toString(), (value) => value === "A"),
      _.filter(arr.toString(), (value) => value === "W"),
      _.filter(arr.toString(), (value) => value === "H"))

console.log(
  waterDensity([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']])
)
