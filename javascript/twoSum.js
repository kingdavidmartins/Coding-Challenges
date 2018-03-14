// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// return [0, 1].

const twoSum = (nums, target) => {
    let lengthN = nums.length;
    for (let a = 0; a < lengthN; a++) {
        for (let b = 0; b < lengthN; b++) {
            if (nums[a] + nums[b] === target && b !== a) {
                return [a, b]
                break;
            }

        }
    }
};
