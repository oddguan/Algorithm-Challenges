/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  if (strs.length === 0) return prefix;
  if (strs.length === 1) return strs[0];
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][j] || strs[i][j] === undefined) return prefix;
    }
    prefix += strs[0][j];
  }
  return prefix;
};

let arr = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(arr));
