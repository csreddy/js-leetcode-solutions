/**
 * The idea is to find the longest palindromic prefix of given string. 
 * The count of characters after the prefix is our answer. 
 * The longest palindromic prefix can be found by looping from last char to 
 * first char. 
 * For example, in “JAVA”, the longest palindromic prefix is “J”, 
 * so we need to add remaining 3 at the beginning characters to form palindrome.
 */

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const temp = `${s}#${reverse(s)}`
    const table = lps(temp);
    // Here we are only interested in the last value of this lps array because it shows us the 
    // largest suffix of the reversed string that matches the prefix of the original string 
    // i.e these many characters already satisfy the palindrome property. 
    // Finally minimum number of character needed to make the string a palindrome is length of the input string minus last entry 
    // of our lps array.
    return Array.from(s.substring(table[table.length - 1])).reverse().join('') + s;
};


var reverse = function(s){
    if(!s) return '';
    return Array.from(s).reverse().join('');
}

// KMP algo
var lps = function(pattern) {
    if (!pattern) return [];
    if (pattern.length === 1) return pattern;
  
    const res = Array(pattern.length);
    let len = 0;
    let i = 1;
    res[0] = 0; // init first item with 0 always
    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        res[i] = len;
        i++;
      } else {
        // This is tricky. Consider the example AAACAAAA where string length=7 and i=7. 
        // The idea is similar to search step.
        if (len !== 0) {
          len = res[len - 1];
          // Also, note that we do not increment here
        } else {
          // len == 0
          res[i] = 0;
          i++;
        }
      }
    }
    console.log(res);
    return res;
  };

// runtime: O(n)

  console.log(shortestPalindrome('aacecaaa'));
  console.log(shortestPalindrome('abcd'));
