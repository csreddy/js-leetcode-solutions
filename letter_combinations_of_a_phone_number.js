/**
 * @param {string} digits
 * @return {string[]}
 */
const letterMap = new Map();
letterMap.set('1', '');
letterMap.set('2', 'abc');
letterMap.set('3', 'def');
letterMap.set('4', 'ghi');
letterMap.set('5', 'jkl');
letterMap.set('6', 'mno');
letterMap.set('7', 'pqrs');
letterMap.set('8', 'tuv');
letterMap.set('9', 'wxyz');

var addDigits = function(digits, index, curr, result) {
  if (index === digits.length) {
    result.push(curr);
    return;
  }
  let letters = letterMap.get(digits[index]);
  for (let j = 0; j < letters.length; j++) {
    addDigits(digits, index + 1, curr + letters[j], result);
  }
};


var letterCombinations = function(digits) {
    const result = [];
    if (digits.length === 0) {
    return result;
  }
  addDigits(digits.toString(), 0, '', result);
  return result;
};


// Time complexity of above code is O(4^n) where n is number of digits in input number.
console.log(letterCombinations(234));
