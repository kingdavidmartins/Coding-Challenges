// Complete the solution so that it splits the string into pairs of two characters. If the string contains
// an odd number of characters then it should replace the missing second character of the final pair with an
// underscore ('_').
//
// Examples:
// solution('abc') => should return ['ab', 'c_']
// solution('abcdef') => should return ['ab', 'cd', 'ef']


const splitString = (str) =>
  Array
    .apply(null, {length: Math.ceil(str.split('').length/2)})
    .map((value, index) =>
      str
        .split('')
        .slice(index*2, index*2+2)
        .join('') + '_')
    .map((value, index) =>
      value.slice(0, 2))


console.log(
  splitString('abc'), //  return => ['ab', 'c_']
  splitString('abcdef') // return  => ['ab', 'cd', 'ef']
);
