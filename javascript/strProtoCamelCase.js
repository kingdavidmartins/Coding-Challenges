// Write simple chainable .camelcase method for strings.
// All words must have their first
// letter capitalized without spaces.
//
// For instance:
//
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
//

String.prototype.camelCase = function () {
  return this
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map( (letter, index) => (index === 0)
         ? letter.toUpperCase()
         : letter )
        .join(''))
  .join('');
}


console.log(
  "hello case".camelCase(), // => HelloCase
  "camel case word".camelCase() // => CamelCaseWord
);
