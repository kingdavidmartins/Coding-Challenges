
const pascalTri = (num) => {
  let pascal = [];

  for (let a = 0; a < num; a++) {
    pascal[a] = [];
    for (let b = 0; b < (a+1); b++) {
      if (b === 0 || a === b) {
        pascal[a][b] = 1;
      } else {
        pascal[a][b] = pascal[a - 1][b - 1] + pascal[a - 1][b]
      }
    }
  }
  return pascal;
}

console.log(
  pascalTri(10)
);
