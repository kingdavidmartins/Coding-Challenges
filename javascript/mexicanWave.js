// Your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a
// person standing up.
//
// rule
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
//
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const wave = (str) =>
  Array
    .apply(null, {length: str.trim().length})
    .map((value, index, arr) =>
      str
        .trim()
        .split('')
        .map((value2, index2, arr2) =>
          (index2 === index)
            ? value2.toUpperCase()
            : value2
        )
        .join('')
    );



console.log(
  wave('hello') // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
);
