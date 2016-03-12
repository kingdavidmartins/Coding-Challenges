// write a function palindrome that take the str that is being passed and
// checks if it is a palindrome. If it is the result should be true. If not false

function palindrome(str) {
  var palindromeChecker = (str.split("").reverse().join("") === str);
  if (palindromeChecker === true) { return true } else { return false };
};

palindrome("racecar");
