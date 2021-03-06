//Complete the findNextSquare function that finds the next integral perfect square after
//the one passed as a parameter. Recall that an integral perfect square is an integer n such
// that sqrt(n) is also an integer. If the parameter is itself not a perfect square, than -1
// should be returned. You may assume the parameter is positive.

const findNextSquare = (number) =>
  (Math.sqrt(number).toString().indexOf(".") === -1) //statement
    ? Math.pow((Math.sqrt(number) + 1), 2) //run if true
    : -1; //run if false

console.log(
  findNextSquare(64)
);
