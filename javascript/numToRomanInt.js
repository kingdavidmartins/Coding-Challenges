const numToRomanInt = (num) => {
    let romanDict = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let numDict = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let result = "";

    for(let a = 0; a < numDict.length; a++) {
        let v = numDict[a];

        if(num >= v) {
            let count = parseInt(num/v);
            num %= v;

            for(let b = 0; b < count; b++) {
                result = result + romanDict[a];
            }
        }
    }

    return result;
};

console.log(
  numToRomanInt(1214), // => MCCXIV
  numToRomanInt(314), // => CCCXIV
  numToRomanInt(643) // => DCXLIII
);
