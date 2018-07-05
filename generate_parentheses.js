var generateParenthesis = function(n) {
    const result = [];
    generate(n, 0, 0, '', result);
    return result;
}

var generate = function(n, openCount, closeCount, curr, result) {
  if (curr.length === n * 2) {
    result.push(curr);
    return;
  }

  if (openCount < n) {
    generate(n, openCount + 1, closeCount, curr + '(', result);
  }
  if (closeCount < openCount) {
    generate(n, openCount, closeCount + 1, curr + ')', result);
  }
};

console.log(generateParenthesis(2));