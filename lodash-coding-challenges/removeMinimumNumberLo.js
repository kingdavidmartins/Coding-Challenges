import _ from 'lodash'
const removeMinimumNumber = arr =>
  _.chain(arr)
    .reject((value) => value === _.min(arr))
    .value()

console.log(
  removeMinimumNumber([34534, 63, 46, 34, 563 ,3 , 6])
);
