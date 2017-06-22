// Given a string of words (x), you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lower case and all inputs will be valid.

const highScoreWrd = (str) =>
  str.split(' ')[str
    .split(' ')
    .map((word, index) =>
      word
        .split('')
        .map((letter) =>
          'abcdefghijklmnopqrstuvwxyz'
            .indexOf(letter) + 1 )
        .reduce((a, b) => a + b))
    .indexOf(
      Math.max.apply(
        null,
        str
          .split(' ')
          .map((word, index) =>
            word
              .split('')
              .map((letter) =>
                'abcdefghijklmnopqrstuvwxyz'
                  .indexOf(letter) + 1 )
              .reduce((a, b) => a + b)))
    )]


console.log(
  highScoreWrd('man i need a taxi up to ubud'), // => 'taxi'
  highScoreWrd('what time are we climbing up the volcano'), // =>'volcano'
  highScoreWrd('take me to semynak') // =>  'semynak'
);
