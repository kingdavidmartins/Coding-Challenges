// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// solution('camelCasing') => should return 'camel Casing'

const breakCamelCase = (str) =>
  str
    .split('')
    .map((value) =>
      ('abcdefghijklmnopqrstuvwxyz'.toUpperCase().indexOf(value) === -1)
        ? value
        : ' ' + value)
    .join('')

console.log(
  breakCamelCase('thisIsATest'), // => this Is A Test
  breakCamelCase('camelCasing'), // => camel Casing
  breakCamelCase('iWonderIfThisReallyWorks'), // => i Wonder If This Really Works
  breakCamelCase('iAmHungry') // => i Am Hungry
);
