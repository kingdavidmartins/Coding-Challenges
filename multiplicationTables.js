//Your task, is to create NxN multiplication table, of size provided in parameter.
//for example, when given size is 3:
//1 2 3
//2 4 6
//3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

const multiplicationTable = (size) =>
  Array
    .apply(null, {length: size})
    .map((value, indexLvl1) =>
      Array
        .apply(null, {length: size})
        .map((value, indexLvl2) =>
          ((indexLvl1 + 1) * (indexLvl2 + 1))))
    .map(array => array.join('|'))
    .join('\n')

console.log(
  multiplicationTable(4)
);
