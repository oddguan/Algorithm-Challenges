/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    if (table[target - nums[i]] !== undefined) {
      return [table[target - nums[i]], i];
    }
    table[nums[i]] = i;
  }
};
nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
