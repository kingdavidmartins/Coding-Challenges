//Your task is simply to count the total number of lowercase letters in a string

var lowercaseCount = (str) =>
  str.split("")
    .filter((value) => value === value.toLowerCase() && value !== " " && isNaN(value) !== false)
    .length;

console.log(
  lowercaseCount("THINADFasdcxTHIS SHOULDm RETURN 6")
);
