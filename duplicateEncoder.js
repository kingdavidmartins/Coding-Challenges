// The goal of this exercise is to convert a string to a new string where each character in the
// new string is '(' if that character appears only once in the original string, or ')' if that
// character appears more than once in the original string. Ignore capitalization when determining
// if a character is a duplicate.
//
// Examples:
//
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")(
// "(( @" => "))(("

const duplicateEncoder = (str) =>
  str
    .toLowerCase()
    .split('')
    .map((letter, index, arr) =>
      (arr.join('').split(letter).length - 1 === 1)
        ? '('
        : ')')
    .join('')

console.log(
  duplicateEncoder('din'), // => (((
  duplicateEncoder('recede'), // => ()()()
  duplicateEncoder('Success'), // => )(
  duplicateEncoder('(( @') // => ))((
);
