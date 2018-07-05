/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let sum = 0;
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    const score = ops[i];
    switch (score) {
      case 'C':
        stack.pop();
        break;
      case 'D':
        stack.push(2 * stack[stack.length - 1]);
        break;
      case '+':
        let top = stack.pop();
        let newTop =  top + stack[stack.length - 1];
        stack.push(top);
        stack.push(newTop);
        break;
      default:
        stack.push(parseInt(score))
        break;
    }
  }

 return stack.reduce((sum, score) =>  sum += score);
};


console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
