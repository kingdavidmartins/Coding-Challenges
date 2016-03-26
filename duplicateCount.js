// Write a function that will return the count of distinct case-insensitive alphabetic
// characters that occur more than once in the given string. The given string can be
// assumed to contain only uppercase and lowercase alphabets.

function duplicateCount(text){
  function findDuplicate(value) {
    return (text.split(value).length - 1) > 1;
  };
  var finishedDuplicate = "# " + "abcdefghijklmnopqrstuvwxyz".split("").filter(findDuplicate).join(" , ");
  return (text === "") ? "# no characters repeats more than once" : finishedDuplicate + ": " + "abcdefghijklmnopqrstuvwxyz".split("").filter(findDuplicate).length + " duplicates were found";
};

duplicateCount("Indivisibilities");

// "abcde" -> # no characters repeats more than once
// "aabbcde" -> # a , b
// "aabbcdeB" -> # a , b
// "indivisibility" -> # i
// "Indivisibilities" -> # i , s
