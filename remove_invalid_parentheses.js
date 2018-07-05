/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  if (!s) return [];

  const visited = new Set();
  const stack = [];
  const result = [];

  stack.push(s);
  visited.add(s);

  while (stack.length > 0) {
    const str = stack.pop();
    if (isValid(str)) {
      // found an answer, add to the result
      result.push(str);
      continue;
    }

    // generate all possible states
    for (let i = 0; i < s.length; i++) {
      // we only try to remove left or right paren
      if (s.charAt(i) !== '(' && s.charAt(i) !== ')') continue;

      const newStr = s.substr(0, i) + s.substr(i + 1);

      if (!visited.has(newStr)) {
        // for each state, if it's not visited, add it to the queue
        stack.push(newStr);
        visited.add(newStr);
      }
    }

  }
  return result;
};

var isValid = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === '(') count++;
    else if (c === ')') count--
    if(count < 0) return false;
  }
  return (count === 0)
}



// backtracking
var  removeInvalidParentheses2 = function (s) {
  const result = new Set();
  backtrack(s)

  function backtrack(str) {
    if(str && isValid(str)){
      result.add(str)
    } 

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== '(' && str.charAt(i) !== ')') continue;
      const newStr = str.substr(0, i) + str.substr(i+1) 
      backtrack(newStr)
    }
  }

  return result;
}



 console.log(removeInvalidParentheses2('()())()'));
 console.log(removeInvalidParentheses('()())()'));
//  console.log(removeInvalidParentheses('(a)())()'));
// console.log(removeInvalidParentheses(')('));
