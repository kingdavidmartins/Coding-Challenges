// create a function that prints true is x appears the same amount of times as o

function ExOh(str) {

  var arrayX = [];
  var arrayO = [];

    for (var a = 0; a < str.length; a++) {

      var searchEachLetter = str.slice(a, (a + 1));

      if (searchEachLetter.toLowerCase() === "x") {
        arrayX.push(searchEachLetter);
        } else if (searchEachLetter.toLowerCase() === "o") {
          arrayO.push(searchEachLetter);
      };
    };

    if (arrayO.length === arrayX.length) {
      console.log("this string is true");
      } else {
        console.log("this string is false");
    };

    console.log(arrayO.length + " o's");
    console.log(arrayX.length + " x's");
};

ExOh("xxxoooxxxoooxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxoxo");
