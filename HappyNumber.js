/**
 * @param {number} n
 * @return {boolean}
 * 
 * Using the Floyd Cycle Detection Algorithm.
 * Runtime is O(1)
 */
var isHappy = function(n) {
  var slow = fast = n;
  do {
    slow = calculateDigitSum(slow);
    fast = calculateDigitSum(fast);
    fast = calculateDigitSum(fast);
  } while(slow != fast);
  if (slow == 1) return true;
  else return false;
};

var calculateDigitSum = function(n) {
  var res = 0;
  while (n) {
    res += (n%10)**2;
    n-=n%10;
    n/=10;
  }
  return res;
};

console.log(isHappy(2));