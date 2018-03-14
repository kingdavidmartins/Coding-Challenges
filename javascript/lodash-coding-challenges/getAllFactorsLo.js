import _ from 'lodash'
const getAllFactors = (integer) => {
  let factors = []
  for (let a = 1; a <= integer; a++) {
    if (_.divide(integer, a) === Math.floor(_.divide(integer, a))) {
      factors.push(a)
    };
  };
  return factors
}

console.log(
  getAllFactors(900)
)
