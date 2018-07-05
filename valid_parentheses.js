/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return false;
  const stack = [];
  let lastEl;
    for (let i = 0; i < s.length; i++) {
        const el = s.charAt(i);
        switch (el) {
          case '[':
          case '{':
          case '(':
            stack.push(el);
            break;
          case ']':
           lastEl = stack.pop();
            if (lastEl !== '[') return false;
            break;
          case '}':
            lastEl = stack.pop();
            if (lastEl !== '{') return false;
            break;
          case ')':
            lastEl = stack.pop();
            if (lastEl !== '(') return false;
            break;
          default:
            break;
        }
      }

  return (stack.length === 0) ? true : false;
}

// runtime: O(n)

console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([}]'));
console.log(isValid('{[]}'));