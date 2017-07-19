// Given a text, for example:
//
// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still
// score points with LeBron James, Michael Green AKA Star and Michael Wood?";
//
// get an array of last names of people named Michael. The result should be:
// ["Jordan", "Johnson", "Green", "Wood"]
//
// Notes:
// First name will always be Michael with upper case 'M'.
// There will always be a space character between 'Michael' and last name.
// Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
// There will always be at least one 'Micheal' with a valid last name in the input text.

const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

const getMichaelLastName = (str) =>
  str
    .split(' ')
    .filter((word, index, arr) => arr[index === 0 ? 0 : index - 1][0] === 'M' && 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().indexOf(index === 0 ? undefined : word[0]) !== -1)
    .map((word) =>
      word
        .split('')
        .filter((letter) => '!@#$%^&*()_+=-/.,<>?;:'.indexOf(letter) === -1)
        .join(''))

console.log(
  getMichaelLastName(inputText), // => ["Jordan","Johnson","Green","Wood"]
);
