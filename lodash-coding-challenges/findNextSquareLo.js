import _ from 'lodash'
const findNextSquare = num =>
  (Math.sqrt(num)
    .toString()
    .indexOf(".")
  === -1)
    ? Math.pow(_.add(Math.sqrt(num), 1), 2)
    : -1

console.log(
  findNextSquare(64)
)
