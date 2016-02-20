//Create a function that takes a single argument called integer
//then return all factors of integer

var getAllFactors = function (integer) {

  //bin to store all factors
  var factors = []

  //for loop that divides integer by it 1 all the way through
  //till it reaches itself
  for(var a = 1; a <= integer; a++){

    var quotient = integer/a;

    //check to see if quotient is whole num. As it rounds it's
    //if equal true then push a to factors
    if(quotient === Math.floor(quotient)){
      factors.push(a);
    }
  }
  return factors;
}

getAllFactors(900);
