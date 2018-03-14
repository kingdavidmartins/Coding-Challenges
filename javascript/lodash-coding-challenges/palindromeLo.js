import _ from 'lodash'
const palindrome = str =>
  str ===
  _.chain(str.split(""))
    .reverse()
    .join("")
    .value()

console.log(
  palindrome("racecar")
)
