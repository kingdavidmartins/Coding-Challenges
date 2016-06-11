// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) =>
  arr.filter((value) => value !== 0)
    .concat(arr.filter((value) => value === 0));

console.log(
  moveZeros([false,1,0,1,2,0,1,3,"a"]) // [false,1,1,2,1,3,"a", 0, 0]
);
