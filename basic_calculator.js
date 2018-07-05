/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let len = s.length,
    sign = 1,
    result = 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s.charAt(i)) && s.charAt(i) !== ' ' ) {
      let sum = parseInt(s.charAt(i));
      while (i + 1 < len && !isNaN(s.charAt(i+1)) && s.charAt(i+1) !== ' ') {
        sum = sum * 10 + parseInt(s.charAt(i + 1));
        i++;
      }
      result += sum * sign;
    } else if(s.charAt(i) === '+'){
        sign = 1;
    } else if(s.charAt(i) === '-'){
        sign = -1;    
    } else if(s.charAt(i) === '('){
        stack.push(result);
        stack.push(sign);
        // reset
        result = 0;
        sign = 1;
    } else if(s.charAt(i) === ')'){
        result = result * stack.pop() + stack.pop();
    }
  } 
  return result;
};


// runtime: O(n)
console.log(calculate("1 +1"));