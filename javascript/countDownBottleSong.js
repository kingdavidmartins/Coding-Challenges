// create a function prints out the song XX Amount of bottles in the wall
// it should take 2 parameters start and end.
// start should represent what number you count down from
// end should represent what number you count down too
// if you reach 0 or any number below that number then you should print no more bottles of beer on the wall

const countDownBottleSong = (start, end) =>
  Array
    .apply(null, {length: end})
    .map((value, index) => index + 1)
    .filter((num) => start <= num && num <= end)
    .reverse()
    .map((value) =>
      `${value} bottles of beer on the wall\n`
      + `${value} bottles of beer\n`
      + `take one down, pass it around\n`
      + (value -1 === 0 ? 'No more bottles of beer in the wall' : value - 1 + ' bottles of beer on the wall\n'))
    .join('\n')

console.log(
  countDownBottleSong(0, 9)
);
