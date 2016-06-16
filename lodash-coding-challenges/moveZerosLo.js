import _ from 'lodash'
const moveZeros = (arr) =>
  _.concat(
      _.reject(arr, (value) => value === 0),
      _.filter(arr, (value) => value === 0))

console.log(
  moveZeros([false,1,0,1,2,0,1,3,"a"])
)
