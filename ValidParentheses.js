/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const table = {'}':'{', ']':'[', ')':'('};
  for (let i = 0; i < s.length; i++) {
    switch(s[i]) {
      case '(': stack.push('('); break;
      case '[': stack.push('['); break;
      case '{': stack.push('{'); break;
      case ')':
        if (stack[stack.length-1] !== table[')']) {
          return false;
        }
        stack.pop(); break;
      case ']':
        if (stack[stack.length-1] !== table[']']) {
          return false;
        }
        stack.pop(); break;
      case '}':
        if (stack[stack.length-1] !== table['}']) {
          return false;
        }
        stack.pop(); break;
    } // switch
  }
  return (stack.length === 0);
};

console.log(isValid('{()}'));
