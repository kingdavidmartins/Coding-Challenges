//Create a function that takes a single argument called integer then return all factors of integer

const getAllFactors = (integer) => {
  let factors = [];
  for(let a = 1; a <= integer; a++) {
    if (integer/a === Math.floor(integer/a)) {
      factors.push(a);
    };
  };
  return factors;
}

console.log(
  getAllFactors(900)
);
