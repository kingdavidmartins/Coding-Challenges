// A string is considered to be in title case if each word in the string is either (a) capitalised
// (that is, only the first letter of the word is in upper case) or (b) considered to be an exception
// and put entirely into lower case unless it is the first word, which is always capitalised.
//
// Write a function that will convert a string into title case, given an optional list of exceptions
// (minor words). The list of minor words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string -- it should behave in the same way even
// if the case of the minor word string is changed.
//
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except
// for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined
// when this argument is unused.
//
// examples:
// titleCase('a clash of KINGS', 'a an the of') => 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') => 'The Wind in the Willows'
// titleCase('the quick brown fox') => 'The Quick Brown Fox'

const titleCase = (title, minorWords) =>
  title
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((letter, indexOfLetter) =>
          (indexOfLetter === 0)
            ? letter.toUpperCase()
            : letter.toLowerCase())
        .join(''))
    .map((word, indexOfWord) =>
      (minorWords === undefined || indexOfWord === 0 || minorWords.split(' ').map(v => v.toLowerCase()).indexOf(word.toLowerCase()) === -1)
        ? word
        : word.toLowerCase())
    .join(' ')

console.log(
  titleCase('a clash of KINGS', 'a an the of') // => 'A Clash of Kings'
  titleCase('THE WIND IN THE WILLOWS', 'The In'), // => 'The Wind in the Willows'
  titleCase('the quick brown fox') // => 'The Quick Brown Fox'
);
