/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { 
  let res = 0;
  let negative;
  if (x > 0) negative = 1;
  else {
    negative = -1;
    x = -x;
  } 
  while (x > 0) {
    res *= 10;
    res += x % 10;
    x = parseInt(x / 10);
  }
  if (negative===1 && res <= 2**31-1) return res;
  else if (negative===(-1) && res < 2**31) return -1*res;
  else return 0;
};

console.log(reverse(321));
console.log(reverse(2147483644));
