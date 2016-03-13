// write a function that takes a str and counts the number of vowels

function vowelCount (str) {
  var vowelCounter = 0;
  for(var chr in str) {
    if ((str[chr] === "a") || (str[chr] === "e") || (str[chr] === "i") || (str[chr] === "o") || (str[chr] === "u")) {
      vowelCounter += 1;
    };
  };
  return vowelCounter;
};

vowelCount("king david martins");
