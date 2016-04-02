// write a function palindrome that take the str that is being passed and
// checks if it is a palindrome. If it is the result should be true. If not false

let palindrome = (str) => (str.split("").reverse().join("") === str);

palindrome("racecar");
