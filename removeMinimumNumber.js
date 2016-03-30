//Given an array of integers, remove the smallest value. If there are multiple elements
// with the same value, remove the one with a lower index. If you get an empty array/list,
// return an empty array/list. Don't change the order of the elements that are left.

let removeMinimumNumber =  (numbers) => numbers.filter((value) => value !== numbers[numbers.indexOf(Math.min.apply(null, numbers))]);

removeMinimumNumber([34534, 63, 46, 34, 563 ,3 , 6]);
