// create a function that takes a str and reverses it

function reverseStr (str) {

  var regStrArray = [];
  var reverseStrArray = [];

  for (var a = 0; a < str.length; a++) {

    var search = str.slice(a, (a +1));

    regStrArray.push(search);
  };

  for ( var a = regStrArray.length - 1; a >= 0 ; a--) {

    reverseStrArray.push(regStrArray[a]);
  };

  var reverseStr = reverseStrArray.toString();

  var replaceSpace = reverseStr.replace(/,/g, "");

console.log(replaceSpace);
};

reverseStr("if this reverse it should start with 5 4 3 2 1 so let's test 1 2 3 4 5");
