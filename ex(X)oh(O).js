// create a function that prints true is x appears the same amount of times as o
// prints false when x & o isn't equal

function ExOh(str) {
  function isX(value) { return value === "x";
  };
  function isO(value) { return value === "o";
  };
  var numberOfX = str.split("").filter(isX).length;
  var numberOfO = str.split("").filter(isO).length;
  console.log(numberOfO === numberOfX);
};

ExOh("xxxoooxxxoooxoxoxoxoxoxtyketyoxowlfjwefxoxoxoxoxoxoxoxorgliwiefwnfexoxoxoxoxoxoxoxoxoxo");
