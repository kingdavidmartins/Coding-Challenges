// take the str parameter being passed and return the largest word in the string

var longestWord = str =>
  str.split(" ")
    .filter((value) =>
      value.length
      ===
      Math.max.apply(null, str.split(" ").map((value) => value.length)))
    .toString();

console.log(
  longestWord("hi my name is king david martins and the longest word in this string is this random word asdasipohfoinalndl21n2l312412w123")
);
