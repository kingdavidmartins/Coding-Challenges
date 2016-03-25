// take the array of numbers stored in arr and return the string "Arithmetic"
// if the sequence follows an arithmetic pattern or return "Geometric" if it follows
// a geometric pattern. If the sequence doesn't follow either pattern return -1.
// An arithmetic sequence is one where the difference between each of the numbers
//is consistent, where as in a geometric sequence, each term after the first is
// multiplied by some constant or common ratio.

var arithGeo = function (numberArray) {
  function arithChecker(value, index, array) {
    return ((value % array[0]) === 0);
  };
  function geoChecker(value, index, array) {
    return ((array[index + 1] / value) === (array[1] / array[0]));
  };
  var arithmetic = numberArray.filter(arithChecker);
  var geometric = numberArray.filter(geoChecker);
  if (numberArray.length === geometric.length) {
    return "Geometric";
  } else if (numberArray.length === arithmetic.length) {
    return "Arithmetic";
  } else {
    return -1;
  };
};

arithGeo([2,4,6,8]);
