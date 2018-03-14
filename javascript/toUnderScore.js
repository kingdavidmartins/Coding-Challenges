// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If method gets number, it should return string.
// Examples:
// toUnderscore('TestController') => test_controller

// toUnderscore('MoviesAndBooks') => movies_and_books

// toUnderscore('App7Test') => app7_test

// toUnderscore(1) => '1'

const toUnderScore = (str) =>
  (typeof str === 'number')
    ? str.toString()
    : str
        .split('')
        .map((letter, index) =>
          (index === 0)
            ? letter.toLowerCase()
            : ('abcdefghijklmnopqrstuvwxyz'.toUpperCase().indexOf(letter) !== -1)
                ? '_' + letter.toLowerCase()
                : letter)
        .join('')

console.log(
  toUnderScore('TestController'), // => 'test_controller'
  toUnderScore('MoviesAndBooks'), // => 'movies_and_books'
  toUnderScore('App7Test'), // => 'app7_test'
  toUnderScore(1) // => '1'
);
