// take create a word count function that take a str and prints the
// amount of words in the array

function wordCount(str) {

  var space = " ";
  var newStr = space + str + space;
  var wordCountArray = [];

  for (var a = 0; a < newStr.length; a++) {

    var searchNewStr = newStr.slice(a, (a + 1));

      if (searchNewStr === space) {

        wordCountArray.push(a);
      };
  };

  var wordCounter = wordCountArray.length - 1;

  console.log("There is " + wordCounter + " words in the this string");


};

wordCount("this is a test to count all the words in the string");
