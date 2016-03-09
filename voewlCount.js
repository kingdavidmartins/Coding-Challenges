// write a function that takes a str and counts the number of vowels

function vowelCount (str) {

  var name = prompt("hey user what's yout name?");
  var checker = prompt("Cool nice to meet you " + name + ". Try and put an sentence in the box below so we can check how many vowels are in the string");

  var totalVowels =[];
  var garbage = [];

  for (var a = 0; a <checker.length; a++) {

    var search = checker.slice(a, (a + 1));

    if (search.toLowerCase() === "a") {
      totalVowels.push(search);
      } else if (search.toLowerCase() === "e") {
        totalVowels.push(search);
      } else if (search.toLowerCase() === "i") {
        totalVowels.push(search);
      } else if (search.toLowerCase() === "o") {
        totalVowels.push(search);
      } else if (search.toLowerCase() === "u") {
        totalVowels.push(search);
        } else {
          garbage.push(search);
    };
  };

  var count = totalVowels.length + 1;
  var notNeeded = garbage.length + 1;

  alert("BAMMMMMM!! Heyyy " + name + " Just like I thought. You've typed a total of " + count + "vowels");
  alert("Hey " + name + "we have also noticed that there is a total of " + notNeeded + "letters that are not vowels");
};

vowelCount();
