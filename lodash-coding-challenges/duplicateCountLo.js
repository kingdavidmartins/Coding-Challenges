var _ = require('lodash');

var duplicateCount = (text) => text === "" ? "# no characters repeats more than once" : "# " + _.filter("abcdefghijklmnopqrstuvwxyz".split(""), (value) => (text.split(value).length - 1) > 1).join(" , ") + " : " + _.filter("abcdefghijklmnopqrstuvwxyz".split(""), (value) => (text.split(value).length - 1) > 1).length + " duplicates were found";

console.log(
  duplicateCount("Indivisibilities")
);
