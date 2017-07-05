// Given an array arr that contains some integers(positive, negative or 0), and a range list such as
// [[start1,end1],[start2,end2],...], start and end are the index of arr and start always less than end.
// Your task is calculte the sum value of each range, and return the maximum sum value.
//
// For example:
//
// Given arr = [1,-2,3,4,-5,-4,3,2,1],
// range = [[1,3],[0,4],[6,8]]
// should return 6
//
// calculte process:
// range[1,3] = arr[1]+arr[2]+arr[3] = 5
// range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
// range[6,8] = arr[6]+arr[7]+arr[8] = 6
// So the maximum sum value is 6
// Note:
//
// arr always has at least 5 elements;
// range always has at least 1 elements;
// All inputs are valid;
//
// About testcases
//
// Basic test: 3 testcases
// Random test1: 100 testcases
// each arr : 5-100 elements
// each range : 1-6 elements
// Random test2: 100 testcases
// each arr : 100000 elements
// each range : 10000 elements
//
// Some Examples
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0

const maxSum = (arr, range) =>
  Math.max.apply(
    null,
    range
      .map((rangeSet) =>
        arr
          .filter((value, index) => rangeSet[0] <= index && index <= rangeSet[1])
          .reduce((a, b) => a + b)))

console.log(
  maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,3], [0,4], [6,8]]), // => 6
  maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,3]]), // => 5
  maxSum([1,-2,3,4,-5,-4,3,2,1], [[1,4], [2,5]]) // => 0
);


// NOTE: Need to optimize code for speed and very large data sets
