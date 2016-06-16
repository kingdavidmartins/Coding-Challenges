import _ from 'lodash'
const reindeers = (presents) =>
  "30 60 90 120 150 180"
    .split(" ")
    .map((value, index, array) =>
      (_.lt(180, presents))
        ? "ERROR: Expected error for " + presents + " presents"
        : (_.lt(presents, 1))
          ? 2
          : (_.lte(_.parseInt(value) - 29, presents) && _.lte(presents, _.parseInt(value)))
            ? index + 3
            : undefined)
    .filter((value) => value !== undefined)
    .pop()
    + "\n"

console.log(
  reindeers(0), //must return 2
  reindeers(1),  //must return 3
  reindeers(30),  //must return 3
  reindeers(55), //must return 4
  reindeers(200) //must return an ERROR
)
