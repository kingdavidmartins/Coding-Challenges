// write a function that takes a str and counts the number of vowels

let vowelCount = (str) => str.split("").filter((value) => "aeiou".split("").indexOf(value) !== -1).length;

vowelCount("king david martins");
