/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      var flag = false;
      if (s[i] !== s[j]) {
        flag = true;
        if (t[i] === t[j]) {
          return false;
        }
      } 
      if (t[i] !== t[j] && !flag) {
        return false;
      } 
    }
  }
  return true;
};

var s = 'aba';
var t = 'baa';
console.log(isIsomorphic(s, t));

var isIsomorphic = function(s, t) {
  memo = {};
  if (s.length !== t.length) return false;
  for (var i = 0; i<s.length; i++) {
    if (memo.hasOwnProperty(s[i]) && t[memo[s[i]]]!==t[i]) {
      return false;
    }
    memo[s[i]] = i;
  }
  memo2 = {};
  for (var j = 0; j < t.length; j++) {
    if (memo2.hasOwnProperty(t[j]) && s[memo2[t[j]]]!==s[j]) {
      return false;
    }
    memo2[t[j]] = j;
  }
  if (Object.keys(memo).length === Object.keys(memo2).length) {
    return true;
  }
  return true;
}

var s = 'paper';
var t = 'title';
console.log(isIsomorphic(s, t));
