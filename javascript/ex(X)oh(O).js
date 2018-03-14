// create a function that prints true is x appears the same amount of times as o
// prints false when x & o isn't equal

const ExOh = (str) =>
  str.toLowerCase()
    .split("x")
    .length - 1
    ===
      str.toLowerCase()
        .split("o")
        .length - 1;

console.log(
  ExOh("xxxoooxxxoooxoxoxoxoxoxtyketyoxowlfjwefxoxoxoxoxoxoxoxorgliwiefwnfexoxoxoxoxoxoxoxoxoxo")
);
