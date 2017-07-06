// Mount the Bowling Pins!
//
// Task:
//
// Did you ever play Bowling? Short: You have to throw a bowl
// into 10 Pins arranged like this:
//
//
// I I I I  # each Pin has a Number:    7 8 9 10
//  I I I                                4 5 6
//   I I                                  2 3
//    I                                    1
//
// You will get an Array with Numbers, e.g.: [3,5,9] and
// remove them from the field like this:
//
//
// I I   I
//  I   I
//   I
//    I
//
// Return a string with the current field.

// Note that:
// String.prototype.replace() is not allowed!

const bowlingPins = (arr) =>
  [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]
    .map((innerArr) =>
      innerArr.map((num) =>
        (arr.indexOf(num) === -1)
          ? num
          : ' ' ))
    .reverse()
    .map((value) =>
      value
        .map((postions) => (postions === ' ') ? ' ': 'I'))
    .map((iPins, index) =>
      iPins
        .map((pins, pinsIndex, pinsArr) =>
          (index === 0 || pinsIndex !== 0)
            ? pins
            : Array.apply(null, {length: index}).map((value) => ' ').join('')
              + pins
            ))
    .map((bowlingArray) => bowlingArray.join(' '))
    .join('\n')


console.log(
  bowlingPins([3, 5, 9]) // => I I   I
                         //     I   I
                         //      I
                         //       I
);
