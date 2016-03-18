// take the str parameter being passed and return the largest word in the string

function longestWord(str) {
  var wordArray = str.split(" ");
  var wordLengthArray = wordArray.map(function(word) { return word.length;
  });
  var theLongestWord = wordArray[wordLengthArray.indexOf(Math.max.apply(null, wordLengthArray))];
  return theLongestWord;
};

longestWord("hi my name is king david martins and the longest word in this string is this random word asdasipohfoinalndl21n2l312412w123");
