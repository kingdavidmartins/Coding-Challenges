import _ from 'lodash'
const arithGeo = (numberArray) =>
  (numberArray.length-1
  ===
  numberArray.filter((value, index, array) =>
    _.divide(_.parseInt(array[index + 1]), _.parseInt(array[index]))
    ===
    _.divide(_.parseInt(array[1]), _.parseInt(array[0])))
  .length)
    ? "Geometric"
    : (numberArray.length
      ===
      numberArray.filter((value, index, array) =>
        _.divide(_.parseInt(array[index]), _.parseInt(array[0]))
        ===
        _.add(index, 1)).length)
      ? "Arithmetic"
      : -1

console.log(
  arithGeo([10,100,1000,10000]), "\n", //Geometric
  arithGeo([2, 4, 6, 8, 10]), "\n", //Arithmetic
  arithGeo([2, 4, 6, 5, 4, 6, 4, 6, 8, 10]) //-1 because it is not Arithmetic or Geometric in nature
)
