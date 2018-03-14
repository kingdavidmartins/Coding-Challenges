// create a function called encodeSpace that replaces the spaces in the string with '%20'

const encodeSpace = (str) => {
  let encodeString = [];

  for (let a = 0; a < str.length; a++) {
    if (str[a] === ' ') {
      encodeString.push('%20');
    } else {
      encodeString.push(str[a]);
    }
  }
  return encodeString.join('');
}

console.log(
  encodeSpace('This is a test') // => This%20is%20a%20test
);
