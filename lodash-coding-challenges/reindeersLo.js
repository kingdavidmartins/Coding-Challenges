var _ = require('lodash');
var reindeers = (presents) => {
  var maxPresentPerRein = (value, index, array) => {
    if (_.lt(180, presents)) {
      return "ERROR: Expected error for " + presents + " presents";
    } else {
      if (_.lt(presents, 1)) {
        return 2;
      } else if (_.lte(_.parseInt(value) - 29, presents) && _.lte(presents, _.parseInt(value))) {
        return index + 3;
      };
    };
  };
  return "30 60 90 120 150 180".split(" ").map(maxPresentPerRein).filter((value) => value !== undefined).pop() + "\n";
};

console.log(
  reindeers(0), //must return 2
  reindeers(1),  //must return 3
  reindeers(30),  //must return 3
  reindeers(55), //must return 4
  reindeers(200) //must return an ERROR
);
