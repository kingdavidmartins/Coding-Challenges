// take the str parameter being passed and return the largest word in the string

function longestWord(str) {

  var space = " ";
  var newStr = space + str + space;

  wordCountArray = [];

    for (var a = 0; a < newStr.length; a++) {

      var search = newStr.slice(a, (a + 1));

      if (search === space) {
        wordCountArray.push(a);
      };
    };

    var wordArray = [];

    for (a = 0; a < wordCountArray.length; a++) {

      var getWord =newStr.slice(wordCountArray[a], wordCountArray[a + 1]);

      wordArray.push(getWord);
    };


    var wordArrayLength = [];

    for (a = 0; a < wordArray.length; a++) {
      wordArrayLength.push(wordArray[a].length);
    };

    var longWord = Math.max.apply(null, wordArrayLength);

    var positionOfLongWord = wordArrayLength.indexOf(longWord);

    console.log(wordArray[positionOfLongWord]);

};

var test = "hi my name is king david martin and the longest word in this string is this random word asdasipohfoinalndl21n2l312412w123";

longestWord(test);
