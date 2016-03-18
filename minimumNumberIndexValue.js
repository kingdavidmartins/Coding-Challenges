//Given an array of integers, remove the smallest value.
//Write a function that can return the smallest value of an array or
//the index of that value. The function's 2nd parameter will tell
//whether it should return the value or the index.

var minimumNumberIndexValue = function (arr, toReturn) {
  function value(value) { return (value === arr[arr.indexOf(Math.min.apply(null,arr))]);
  };
  if (toReturn === "value") {
    return parseFloat(arr.filter(value).toString());
  } else if (toReturn === "index") {
    return arr.indexOf(Math.min.apply(null, arr));
  };
};

minimumNumberIndexValue([34534, 63, 46, 34, 563 ,3 , 6], "index");
