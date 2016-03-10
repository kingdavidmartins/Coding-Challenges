// take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows // a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers //is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio.

var userName = prompt("Welcome.........Ehhhhh this seems kinda awkward being that I am a computer and all. & I am suppose to know everything but if you don't mind me asking what is your name?");

alert("Ah Em. So like I was saying. Welcome " + userName + " we are about to start checking to see if our code function arithGeo checks out");

var grabNumbers = prompt("Let's start by inputing numbers you think is Geometric or Arithmetic. Also don' forget to support each number with a comma. For example 2,4,6,8");

var array = grabNumbers.split(",");

var arithGeo = function (array) {

  var trueArrayArithmetic = [];
  var trueArrayGeometric = [];

  for (var a = 0; a < array.length; a++) {

    var arithmeticChecker = array[a] % array[0];

    if (arithmeticChecker === 0) {

      trueArrayArithmetic.push("true");
    };
  };

  for (var a = 0; a < array.length - 1; a++) {

    var geometricChecker = array[a + 1] / array[a];
    var geometricConfirm = array[1] / array[0];

    if (geometricChecker === geometricConfirm) {
      trueArrayGeometric.push("true");
    };
  };

  if (array.length - 1 === trueArrayGeometric.length) {
    alert("Awesome. Guess what " + userName + "? After some serious calculaions it seems the numbers you've picked is a Geometric. Which makes it true");
    } else if (array.length === trueArrayArithmetic.length) {
      alert("Awesome. Guess what " + userName + "? After some serious calculaions it seems the numbers you've picked is a Arithmetic. Which makes it true");
     } else {
       alert("-1");
       alert("Sorry " + userName + " I know your probably wondering what -1 means. I almost forgot you don't speak machine");
       alert("It's means The numbers you've inserted isn't a Geometric or Arithmetic in nature. But it's ok you can always try again");
       var grabNumbers = prompt("Let's start by inputing numbers you think is Geometric or Arithmetic. Also don' forget to support each number with a comma. For example 2,4,6,8");
       var array = grabNumbers.split(",");
       arithGeo(array);
  };

};

    arithGeo(array);
