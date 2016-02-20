//If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples
//of 3 or 5 below the number passed in.


var sumOfMultiple3And5 = function (number) {

  var multiplesOfArray = [];

  for (var a = 0; a < number; a++) {

    var multiple3 = a % 3;
    var multiple5 = a % 5;

    if (multiple5 === 0 || multiple3 === 0) {

      if (a !== 0) {
        multiplesOfArray.push(a);
      };
    };
  };

  console.log(multiplesOfArray);

  var sumOfMultiples = multiplesOfArray.reduce(
    function (a,b) {
      return a + b;
    }
  );

  return sumOfMultiples;
};

sumOfMultiple3And5(89);
