// Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within
// the output should be capitalized only if the original word
// was capitalized.

// Examples

// returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

const toCamelCase = (str) =>
  (str === '')
    ? ''
    : ( str.indexOf('-') === -1)
      ? str
        .split('_')
        .map((word, index) =>
          (index === 0)
            ? word
            : word.split('')[0].toUpperCase() + word.slice(1))
        .join('')
      : str
          .split('-')
          .map((word, index) =>
            (index === 0)
              ? word
              : word.split('')[0].toUpperCase() + word.slice(1))
          .join('')

console.log(
  toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
);
