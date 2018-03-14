const sort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  let middle = Math.floor(nums.length/2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle);

  return merge( sort(left), sort(right));
}

const merge = (left, right) => {
  let arr = [];

  while (left.length !== 0 && right.length !== 0) {
    (left[0] < right[0])
      ? arr.push(left.shift())
      : arr.push(right.shift())
  }

  arr.push(...left);
  arr.push(...right);

  return arr;
}

console.log(
  sort([5, 2, 7, 56567, 543, 363, 7, 5656, 56, 34, 456, 56])
);
