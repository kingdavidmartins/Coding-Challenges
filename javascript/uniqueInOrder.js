// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each
// other and preserving the original order of elements.

// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB'); // => ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') // => ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3]); // => [1,2,3]

const uniqueInOrder = (iterable) => {
  let noRep = [];

  for (let a = 0; a < iterable.length; a++) {
    if (iterable[a] !== iterable[a + 1]) {
      noRep.push(iterable[a]);
    }
  }

  return noRep;
}

console.log(
  uniqueInOrder('AAAABBBCCDAABBB'), // => ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD'), // => ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3]) // => [1,2,3]
);
