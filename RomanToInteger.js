/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var table = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let number, nextNumber, result=0;
  for (let i=0; i<s.length; i++) {
    number = table[s[i]];
    nextNumber = table[s[i+1]] || 0;
    result += number < nextNumber ? -number : number;
  }
  return result;
};

console.log(romanToInt('MCMXCIV'));
