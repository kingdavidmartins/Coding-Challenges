import _ from 'lodash'
const longestWord = (str) =>
  _.chain(str.split(" "))
    .filter((value) =>
      value.length
      ===
      _.max(_.map(str.split(" "), (value) => value.length)))
    .value()
    .toString()

console.log(
  longestWord("hi my name is king david martins and the longest word in this string is this random word asdasipohfoinalndl21n2l312412w123")
)
