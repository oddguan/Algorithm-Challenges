// Solution 1, dumbest method
var memo = {};
var rob = function(nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  var two_hop = nums.slice(2);
  var three_hop = nums.slice(3);
  var four_hop = nums.slice(4);
  if (memo[two_hop] !== undefined) {
    var one = nums[0] + memo[two_hop];
  }
  else {
    var one = nums[0] + rob(two_hop);
    memo[two_hop] = one - nums[0];
  }
  if (memo[three_hop] !== undefined) {
    var two = nums[0] + memo[three_hop];
    var three = nums[1] + memo[three_hop];
  }
  else {
    var two = nums[0] + rob(three_hop);
    memo[three_hop] = two - nums[0];
    var three = nums[1] + rob(three_hop);
  }
  if (memo[two_hop] !== undefined) {
    var four = nums[0] + memo[four_hop];
  }
  else {
    var four = nums[0] + rob(four_hop);
    memo[four_hop] = four - nums[0];
  }
  var arr = [one, two, three, four];
  var res = 0;
  for (var i = 0; i < 4; i++) {
    if (res < arr[i]) res = arr[i];
  }
  return res;
}

console.log(rob([1,2,3,1]))
console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))


//Solution 2
// Space Complexity is yet optimized. Can only use two variables to store memo
var rob = function(nums) {
  var memo = [0, 0];
  for (var i = 0; i < nums.length; i++) {
    if (i == 0){
      memo.push(Math.max(memo[0] + nums[0], memo[1] + nums[0]));
      continue;
    } 
    memo.push(Math.max(memo[i] + nums[i], memo[i - 1] + nums[i]));
  }
  return Math.max(memo[memo.length - 1], memo[memo.length - 2]);
}

console.log(rob([1,2,3,1]));
console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))


// Solution 3

var rob = function(nums) {
  if (nums.length == 0) return 0;
  var memo1 = 0;
  var memo2 = 0;
  for (var i = 0; i < nums.length; i++) {
    var temp = memo1;
    memo1 = Math.max(memo1, nums[i]+memo2);
    memo2 = temp;
  }
  return memo1;
}

console.log(rob([1,2,3,1]));
console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))
