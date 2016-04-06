//Given an array of integers, remove the smallest value. Write a function that can return the
//smallest value of an array or the index of that value. The function's 2nd parameter
//will tell whether it should return the value or the index. if input is anything other vale or index return -1

let minimumNumberIndexValue = (arr, toReturn) => (toReturn === "value") ? parseFloat(arr.filter((value) => value === arr[arr.indexOf(Math.min.apply(null,arr))]).toString()): (toReturn === "index") ? arr.indexOf(Math.min.apply(null, arr)) : -1;

minimumNumberIndexValue([34534, 63, 46, 34, 563 ,3 , 6], "index"); //index === 5 value === 3
