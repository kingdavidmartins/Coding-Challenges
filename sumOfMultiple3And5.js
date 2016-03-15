//If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it prints the sum of all the multiples
//of 3 or 5 below the number passed in.

var sumOfMultiple3And5 = function (number) {
  var multiplesOfArray = [];
  for(var a = 1; a < number; a++) {
    if ((a % 3 === 0) || (a % 5 === 0)) { multiplesOfArray.push(a);
    };
  };
  console.log(multiplesOfArray);
  var sumOfMultiples = multiplesOfArray.reduce(
    function (a,b) {  return a + b;
    }
  );
  console.log(sumOfMultiples);
};

sumOfMultiple3And5(89);
