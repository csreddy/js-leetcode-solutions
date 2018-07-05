/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const table = Array(s.length);
    const rows = s.length
    const cols = s.length
    let str = '';

    // strings of length 1 is a palindrome
    // so initialize all diagonal boxes with true
    for (let i = 0; i < rows; i++) {
        table[i] = Array(cols).fill(false);
        for (let j = 0; j < cols; j++) {
            if(i === j)table[i][j] = true;
        }   
    }
    // check for strings of length 2
    let maxLen = 1;
    let start = 0;
    for (let i = 0; i < s.length-1; i++) {
        if(s.charAt(i) === s.charAt(i+1)) {
            table[i][i+1] = true;
            start = i;
            maxLen = 2;
        }
    }

    // check for string of length > 2
    for (let k = 3; k <= s.length; k++) {
         // Fix the starting index
        for (let i = 0; i < s.length - k + 1; i++) {
            // get ending index
            const j = i + k - 1;
            if(table[i+1][j-1] && s.charAt(i) === s.charAt(j)){
                 table[i][j] = true;   
                 if(k > maxLen){
                    maxLen = k;
                    start = i;
                 }
            }
            
        }
    }
    str = s.substring(start, start + maxLen);
   // console.log(str);
    return maxLen;
}

// runtime: O(n^2)


// alternate solution
var longestPalindrome2 = function(s) {
    const table = Array(s.length);

    // strings of length 1 is a palindrome
    // so initialize all diagonal boxes with true
    for (let i = 0; i < s.length; i++) {
        table[i] = Array(s.length).fill(false);
        for (let j = 0; j < s.length; j++) {
            if(i === j) {
                table[i][j] = true;
            } 
        }   
    }

    let max = 0;
    let result = '';
    for (let i = s.length -1; i >=0; i--) {
        for (let j = i; j < s.length; j++) {
        if(s.charAt(i) === s.charAt(j) && (j-i < 3 || table[i+1][j-1])){
            table[i][j] = true;
        }
        if(table[i][j]  && j-i+1 > result.length){
            result = s.substring(i, j+1)
        }
        }   
    }
    // console.log(table);
    return result;
}

// runtime: O(n^2)

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('a'));

console.log(longestPalindrome2('babad'));
console.log(longestPalindrome2('cbbd'));
console.log(longestPalindrome2('a'));
