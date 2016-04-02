// take the array of numbers stored in arr and return the string "Arithmetic"
// if the sequence follows an arithmetic pattern or return "Geometric" if it follows
// a geometric pattern. If the sequence doesn't follow either pattern return -1.

let arithGeo = (numberArray) => (numberArray.length-1 === numberArray.filter((value, index, array) => parseFloat(array[index + 1]) / parseFloat(array[index]) === (parseFloat(array[1]) / parseFloat(array[0]))).length) ? "Geometric":(numberArray.length === numberArray.filter((value, index, array) => (parseFloat(array[index]) / parseFloat(array[0]) ===  index + 1)).length) ? "Arithmetic" : -1;

arithGeo([10,100,1000,10000]);
