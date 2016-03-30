//Your task is simply to count the total number of lowercase letters in a string

let lowercaseCount = (str) => str.split("").filter((value) => value === value.toLowerCase() && value !== " " && isNaN(value) !== false).length;

lowercaseCount("THINADFasdcxTHIS SHOULDm RETURN 6");
