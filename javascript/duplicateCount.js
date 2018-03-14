// Write a function that will return the count of distinct case-insensitive alphabetic
// characters that occur more than once in the given string. The given string can be
// assumed to contain only uppercase and lowercase alphabets.

const duplicateCount = (text) =>
  (text === "") // statement
    ? "# no characters repeats more than once" // run if true
    : "# " + "abcdefghijklmnopqrstuvwxyz" // run if false
      .split("")
      .filter((value) => (text.split(value).length - 1) > 1)
      .join(" , ")
      + " : "
      + "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .filter((value) => (text.split(value).length - 1) > 1)
      .length
      + " duplicates were found";

console.log(
  duplicateCount("Indivisibilities")
);

// "abcde" -> # no characters repeats more than once
// "aabbcde" -> # a , b
// "aabbcdeB" -> # a , b
// "indivisibility" -> # i
// "Indivisibilities" -> # i , s
