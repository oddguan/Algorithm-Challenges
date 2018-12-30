/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  table = {};
  nums.forEach(e => {
    if (table.hasOwnProperty(e)) return true;
    table[e] = 0;
  });
  return false;
};

var containsDuplicate = function(nums) {
  table = {};
  for (let i = 0; i < nums.length; i++) {
    if (table.hasOwnProperty(nums[i])) return true;
    table[nums[i]] = 0;
  }
  return false;
};

let test = [1,2,3];
console.log(containsDuplicate(test));
