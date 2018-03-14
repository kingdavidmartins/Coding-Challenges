import _ from 'lodash'
const reverseStr = str =>
  _.chain(str.split(""))
    .reverse()
    .join("")
    .value()

console.log(
  reverseStr("King David Martins")
)
