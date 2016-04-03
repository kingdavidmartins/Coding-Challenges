//Write a function insertDash(num) that will insert dashes ('-') between each two odd
//numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't
//count zero as an odd number. Code challenge from code wars

let insertDash =  (number) => number.toString().split("").map((value, index, array) => (parseFloat(value) % 2 !== 0 && array[index + 1] % 2 !== 0 && array[array.length - 1] !== array[index]) ? value + "-" : value).join("");

insertDash(454793);
