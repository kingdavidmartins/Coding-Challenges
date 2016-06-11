// take the array of numbers stored in arr and return the string "Arithmetic"
// if the sequence follows an arithmetic pattern or return "Geometric" if it follows
// a geometric pattern. If the sequence doesn't follow either pattern return -1.

const arithGeo = (numArray) =>
  (numArray.length-1 === numArray.filter((value, index, array) => parseFloat(array[index + 1]) / parseFloat(array[index]) === (parseFloat(array[1]) / parseFloat(array[0]))).length) // statement
    ? "Geometric" // run if true
    : (numArray.length === numArray.filter((value, index, array) => (parseFloat(array[index]) / parseFloat(array[0]) ===  index + 1)).length) // new statement
      ? "Arithmetic" // run if new statement is true
      : -1; // run if new statement is false

console.log(
  arithGeo([10,100,1000,10000])
  +"\n"
  +arithGeo([3,6,9,12])
);
