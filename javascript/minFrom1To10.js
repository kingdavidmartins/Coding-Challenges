// craete a function that returns that smallest number that is divisble by numbers 1
// through 10 without any remainder

const minFrom1To10 = () =>
 Math.min.apply(
   null,
   Array
    .apply(null, {length: [5, 6, 7, 8, 9].reduce((a, b) => a * b)})
    .map((v, i) => i)
    .filter((v) => v !== 0 && (v%5 + v%6 + v%7 + v%8 + v%9) === 0)
 )

 console.log(
  minFrom1To10() // => 2520
 );
