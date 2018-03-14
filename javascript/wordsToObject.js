// You're given a string. You have a sequence of words separated with whitespaces.
// Let's say it is a sequence of patterns: a name and a corresponding number - like this:
// "red 1 yellow 2 black 3 white 4"
// You want to turn it into a list of objects you plan to work with later on - like this:
// "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]"
// Doing this manually is a pain. So you've decided to write a short function that would make the computer do the job
// for you. Keep in mind, the pattern isn't necessarily a word and a number. Consider anything separeted by a whitespace,
// just don't forget: an array of objects with two elements: name and id.

const wordsToObject = (str) =>
  Array
    .apply(null, {length: Math.ceil(str.split(' ').length/2)})
    .map((value, index) =>
      str.split(' ').slice(index*2, index*2+2))
    .map((obj) => JSON.parse(JSON.stringify({name: obj[0], id: obj[1]})))

console.log(
  wordsToObject("red 1 yellow 2 black 3 white 4")[3].name, // => white
  wordsToObject("red 1 yellow 2 black 3 white 4")[0].name, // => red
  wordsToObject("red 1 yellow 2 black 3 white 4")[3].id // => 4
);
