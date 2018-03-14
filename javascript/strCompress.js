// write a function called strCompress() that will take a str and compress it returning
// the running char which will be a letter followed by a number

const strCompress = (str) => {
  let starter = str[0];
  let counter = 0;
  let compress = []

  for (let a = 0; a < str.length; a++) {
    counter++;
    if (str[a] !== str[a + 1]) {
      compress.push(starter, counter);
      counter = 0;
      starter = str[a + 1];
    }
  }

  return (compress.join('').length < str.length) ? compress.join('') : str ;
}

console.log(
  strCompress('aaabbbbbbbbbbccccds'), // => a3b10c4d1s1
  strCompress('aooewkfodsdjjasxmaox'), // => aooewkfodsdjjasxmaox
  strCompress('kingkingkingkingdasidaksic'), // => kingkingkingkingdasidaksic
  strCompress('sjcndjcjddddddddddsasaaaskskskkkdkewieiieid'), // => sjcndjcjddddddddddsasaaaskskskkkdkewieiieid
  strCompress('kkkiiinnndddassdasd'), // => kkkiiinnndddassdasd
  strCompress('abc') // => abc
);
