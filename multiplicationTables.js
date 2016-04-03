//Your task, is to create NxN multiplication table, of size provided in parameter.
//for example, when given size is 3:
//1 2 3
//2 4 6
//3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

let multiplicationTable = (size) => {
  let multiplicationTableArray = [];
  for (let a = 0; a < size; a++) {
    multiplicationTableArray[a] = [];
    for (let b = 0; b < size; b++) {
      multiplicationTableArray[a].push((a+1) * (b+1));
    };
    console.log(multiplicationTableArray[a].join("|"));
  };
};

multiplicationTable(4);
