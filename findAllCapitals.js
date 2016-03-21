//Write a function that takes a single string (word) as argument.
//The function must return an ordered list containing the letters
//of all capital letters in the string.

var findAllCapitals = function (word) {
  var uppercaseAlphabetArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  function returnUpperCase(value) {
    for (var letters in uppercaseAlphabetArray) {
      if (value === uppercaseAlphabetArray[letters]) { return value;
      };
    };
  };
  var capitalsLetters = word.split("").filter(returnUpperCase);
	console.log(capitalsLetters);
};

findAllCapitals("King DaViD MarTINs");
