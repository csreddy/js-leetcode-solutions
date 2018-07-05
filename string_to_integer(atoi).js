/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let i = 0,
    sign = 1,
    total = 0;
  // empty string
  if (!str) return 0;

  if (str.charAt(i).match(/[a-zA-Z]+/) && str.charAt(i).match(/[a-zA-Z]+/).length > 0) {
    return 0;
  }

  // remove spaces
  while (str.charAt(i) === ' ' && i < str.length) {
    i++
  }

  // handle signs
  if (str.charAt(i) === '+' || str.charAt(i) === '-') {
    sign = (str.charAt(i) === '+') ? 1 : -1;
    i++
  }
  // convert to number and handle overflow
  while (i < str.length) {
    let digit = parseInt(str.charAt(i));

    // if non-digit occur in the middle of the number
    if (str.charAt(i).match(/\D+/) && str.charAt(i).match(/\D+/).length > 0) {
      break;
    }

    if (digit < 0 || digit > 9) break;

    total = 10 * total + digit;
    i++;
  }
  total = sign * total;
  const maxValue = Math.pow(2, 31) - 1;
  const minValue = -Math.pow(2, 31)
  if (total > maxValue) return maxValue
  if (total < minValue) return minValue;
  return total;
};

console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('   -42'));
console.log(myAtoi("3.14159"));
