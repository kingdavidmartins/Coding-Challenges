import _ from 'lodash'
const minimumNumberIndexValue = (arr, toReturn) =>
  (toReturn === "value")
    ? _.min(arr)
    : toReturn === "index"
      ? arr.indexOf(_.min(arr))
      : -1

console.log(
  minimumNumberIndexValue([34534, 63, 46, 34, 563 ,3 , 6], "index")
)
