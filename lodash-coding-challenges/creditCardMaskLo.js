import _ from 'lodash'
const creditCardMask = (num) =>
  _.chain(num.toString().split(""))
    .map((value, index, array) =>
      (array.length - index > 4) //statement
        ? "#" //run if statement is true
        : value) //run if statement is false
    .join("")
    .value()

console.log(
  creditCardMask(64364634634745)
)
