// Write a function called validParentheses that takes a string of parentheses, and determines
// if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

const validParentheses = (str) => {
  let counter = 0;

  for (let a = 0; a < str.length; a++) {
    if (str[a] === '(') {
      counter++;
    }

    if (str[a] === ')') {
      counter--;

      if (counter < 0) {
        return false;
      }
    }
  }

  return counter === 0;
}

console.log(
  validParentheses( "()" ), // => returns true
  validParentheses( ")(()))" ), // => returns false
  validParentheses( "(" ), // => returns false
  validParentheses( "(())((()())())" ) // return true
);
