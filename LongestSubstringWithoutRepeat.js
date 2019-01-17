/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let start = 0, res = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = start > map.get(s[i]) + 1 ? start : map.get(s[i]) + 1;
    }
    map.set(s[i], i);
    res = res > (i - start + 1) ? res : (i - start + 1);
  }
  return res;
};

console.log(lengthOfLongestSubstring("ohvhjdml"));
console.log(lengthOfLongestSubstring("abba"));
