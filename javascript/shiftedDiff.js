// Write a function that receives two strings and returns n, where n is equal to the
// number of characters we should shift the first string forward to match the second.
//
// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string
// has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// Examples:
//
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0


const shiftedDiff = (first, second) =>
  (first === second)
    ? 0
    : first
      .split('')
      .map((letter, index) =>
        (first.slice(first.length - index, first.length) + first.slice(0, first.length - index) === second)
          ? index
          : false )
      .filter(x => x !== false)[0]


console.log(
  shiftedDiff("eecoff", "coffee") // => 4
);
