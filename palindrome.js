// write a function palindrome that take the str that is being passed and
// checks if it is a palindrome. If it is the result should be true. If not false

var userName = prompt("Welcome......Ehhhhh this is kinda awkward being that I am a computer and all & how I am suppose to know everything but if you don't mind me asking but what's your name?");

alert("Ah em. So like I was saying. Welcome " + userName + "we are about to start checking to see if our function plaindrome checks out");

var response = prompt("So to start of type a word or different character which reads the same backwards and forwards");

function palindrome(str) {

  var regStrArray = [];
  var reverseStrArray = [];

    for (var a = 0; a < str.length; a++) {

      var searchStr = str.slice(a, (a + 1));
      regStrArray.push(searchStr);
    };

    for (var a = str.length; a > -1; a--) {

      var searchStr = str.slice(a, (a + 1));

      reverseStrArray.push(searchStr);
    };

    reverseStrArray.shift();

  var regStr = regStrArray.toString();
  var reverseStr = reverseStrArray.toString();


    if (regStr === reverseStr) {
      alert("true");
      } else {
        alert("false");
    };
};

palindrome(response);
