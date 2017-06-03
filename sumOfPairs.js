// Given a list of integers and a single sum value, return the first two
// values (parse from the left please) in
// order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
              // ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
          // ^-----^         4 + 2 = 6, indices: 0, 2 *
            //  ^-----^      3 + 3 = 6, indices: 1, 3
                // ^-----^   2 + 4 = 6, indices: 2, 4
  // * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

const sum_pairs = (ints, s) =>
  ints
    .map((mainNum, mainIndex, mainArr) =>
      ints
        .map((checkerNum, checkerIndex, checkerArr) =>
          (mainIndex >= checkerIndex)
            ? false
            : ((mainNum + checkerNum === s))
                ? [mainNum, checkerNum]
                : false)
        .filter(x => x !== false))
    .filter(x => 0 < x.length)[0][0]

console.log(
  sum_pairs([11, 3, 7, 5], 10), // == [3, 7]
  sum_pairs([4, 3, 2, 3, 4], 6), // == [4, 2]
  sum_pairs([1, 4, 8, 7, 3, 15], 8) // == [1, 7]
);
