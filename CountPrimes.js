/**
 * @param {number} n
 * @return {number}
 * O(n^2) solution, checks every integer less than n if it divides n
 */
var countPrimes = function(n) {
  var count = 0;
    for (var i = 2; i <= n; i++) {
      for (var j = 2; j <= i; j++) {
        if (i == 2) {
          continue;
        }
        if (Number.isInteger(i/j) && i!==j){
          break;
        }
        if (i === j) {
          count++;
        }
      }
    }
    return count;
};

console.log(countPrimes(10));

// sieve of eratosthenes method
var countPrimes = function(n) {
  if (n<=2) return 0;
  var table = [];
  for (var i=2; i<n; i++) {
    table[i] = true;
  }
  sq = parseInt(Math.sqrt(n - 1));
  for (var i = 2; i <= sq; i++) {
    if (table[i]) {
      for (var j = i + i; j < n; j+=i) {
        if (table[j]) {
          table[j] = false;
        }
      }
    }
  }
  var count = 0;
  table.forEach(e => {
    if (e) count++;
  });
  return count;
}

console.log(countPrimes(30));
