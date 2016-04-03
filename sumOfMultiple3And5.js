//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23. Finish the solution so that it prints the sum of all
//the multiples of 3 or 5 below the number passed in.

let sumOfMultiple3And5 = (number) => {
  let multiplesOfArray = [];
  for (let a = 1; a < number; a++) {
    if ((a % 3 === 0) || (a % 5 === 0)) {
       multiplesOfArray.push(a);
    };
  };
  return multiplesOfArray.reduce((a,b) => a + b);
};

sumOfMultiple3And5(89);
