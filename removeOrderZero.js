// Sort "array" so that all elements with the value of zero are moved to the
// end of the array, while the other elements maintain order.
// [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
// Zero elements also maintain order in which they occurred.
// [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

// the correctly sorted array should be returned.
// removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]), => [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
// removeZeros([0, 1, 2, 0, 3]),  => [1, 2, 3, 0, 0]
// removeZeros([0, "0", 1, 2, 3]), => [1, 2, 3, 0, "0"]
// removeZeros([1,null,"5","2",8,6,null,false,"0",0]) => [1,null,"5","2",8,6,null,"0",0,false]

const removeZeros = (arr) =>
  arr
    .filter((value) => value != 0 || value === false)
  .concat(
    arr.filter((value) => value == 0 && value !== false)
  )

console.log(
  removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]), // => [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
  removeZeros([0, 1, 2, 0, 3]), // => [1, 2, 3, 0, 0]
  removeZeros([0, "0", 1, 2, 3]), // => [1, 2, 3, 0, "0"]
  removeZeros([1,null,"5","2",8,6,null,false,"0",0]) // => [1,null,"5","2",8,6,null,"0",0,false]
);
