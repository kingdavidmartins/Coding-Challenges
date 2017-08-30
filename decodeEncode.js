// Run-length encoding is a very simple form of lossless data compression in which
// runs of data are stored as a single data value and count.
//
// A simple form of RLE would encode the string AAABBBCCCD as 3A3B3C1D meaning,
// first there are 3 A, then 3 B, then 3 C and last there is 1 D.
//
// Your task is to write a RLE encoder() and RLE decoder() using this technique. The texts to
// encode will always consist of only uppercase characters, no numbers.

const encode = (input) => {
  let encode = [];
  let counter = 0;

  for (let a = 0; a < input.length; a++) {
    if (input[a] !== input[a+1]) {
      counter++;
      encode.push(counter, input[a]);
      counter = 0;
    } else {
      counter++;
    }
  }
  return encode.join('');
}

const decode = (input) => {
  let decode = [];
  let number = [];

  for (let a = 0; a < input.length; a++) {

    // if character is a number then push save
    if ( !isNaN(parseFloat(input[a])) ) {
      number.push(input[a]);

      // if the following character is not a number create decompress char
      if ( isNaN(parseFloat(input[a + 1])) ) {

      // fill array with input[a+1] of number.join() length
        decode.push(
          Array
            .apply(null, { length: parseFloat(number.join('')) })
            .map(x => input[a + 1])
            .join(''));

        // empty the array
        number.length = 0;
      }
    }
  }
  return decode.join('');
}

console.log(
  encode('A'), // => '1A'
  encode('AAA'),// => '3A'
  encode('AB'),// => '1A1B'
  encode('AAABBBCCCA') // =>'3A3B3C1A'
);

console.log(
  decode('1A'), // => 'A'
  decode('3A'), // => 'AAA'
  decode('1A1B'), // => 'AB'
  decode('3A3B3C1A') // => 'AAABBBCCCA'
);
