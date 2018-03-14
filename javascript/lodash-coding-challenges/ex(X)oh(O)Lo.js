import _ from 'lodash'
const ExOh = str =>
  _.filter(str.split(""), (value) => value === "x")
    .length
  ===
  _.filter(str.split(""), (value) => value.toLowerCase() === "o")
    .length

console.log(
  ExOh("xxxoooxxxoooxoxoxoxoxoxtyketyoxowlfjwefxoxoxoxoxoxoxoxorgliwiefwnfexoxoxoxoxoxoxoxoxoxo")
)
