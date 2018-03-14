// First, determine the average of each array. Then, return the sum of all the averages.
//
// All numbers will be less than 100.
// After calculating all the averages, round the total down.
// If the total was 53.1, your function would return 53.
// If the total was 13.9, your function would return 13.
// If the total was 34, your function would return 34.


const sumAverage = (array) =>
  Math.floor(
    array
      .map((arr, index) => arr.reduce((a, b) => a + b) / arr.length)
      .reduce((a, b) => a + b)
  )


console.log(
  sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 76]]) //44 
);
