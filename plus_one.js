/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const element = digits[i];
    if (element !== 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] = 0;
    }
    // handle single digit case containing 9
    if (digits[0] === 0) {
      const res = Array(digits.length +1).fill(0)
      res[0] = 1;
      return res;  
    }
  }
  return digits;
};

// runtime: O(n)

// console.log(plusOne([1, 2, 3, 4]));
 console.log(plusOne([1, 2, 9, 9]));
//console.log(plusOne([9]));
