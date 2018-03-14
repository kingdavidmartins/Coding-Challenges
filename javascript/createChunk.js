//Create a function that takes a given array and create a number of chunks
//exanple: fn createChunk(array, numOfChunk)
// createChunk([1,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3], 2)
//  [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 2, 3 ] ]

const data = [1,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3,4,5,6,7,8,2,3];

const createChunk = (arr, numOfChunk) =>
  Array
    .apply(null, {length: Math.ceil(arr.length/numOfChunk)})
    .map((value, index) =>
      arr.slice(index*numOfChunk, index*numOfChunk+numOfChunk))


console.log(
  createChunk(data, 2) // => [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 2, 3 ] ]
);
