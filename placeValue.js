// write a function takes a number and return the same number with commas spearating the place values so it will be easier to read stand dictionary numbers

let placeValue = (number) => number.toString().split("").reverse().map((value, index) => index % 3 === 0 && index !== 0 ? value + "," : value).reverse().join("");

placeValue(25161045656);
