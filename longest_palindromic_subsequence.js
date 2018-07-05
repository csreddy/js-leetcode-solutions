/**
 * @param {string} s
 * @return {number}
 */
/** 
 * dp[i][j]: the longest palindromic subsequence's length of substring(i, j)
State transition:
dp[i][j] = dp[i+1][j-1] + 2 if s.charAt(i) == s.charAt(j)
otherwise, dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
Initialization: dp[i][i] = 1
*/
var longestPalindromeSubseq = function(s) {
    // create dp table
    const table = Array(s.length);
    for (let i = 0; i < s.length; i++) {
       table[i] = [];
        for (let j = 0; j < s.length; j++) {
            if(i == j) {
                table[i][j] = 1; // diagonal elements represents single letter combinations
            } else {
                table[i][j] = 0;
            }
        }
    }

    for (let i = s.length-1; i >=0; i--) {
        for (let j = i+1; j < s.length; j++) {
            if(s.charAt(i) === s.charAt(j)) {
                table[i][j] = 2 + table[i+1][j-1];
            } else {
                table[i][j] = Math.max(table[i+1][j], table[i][j-1])
            }
            
        }   
    }

    return table[0][s.length-1];
};

// runtime: O(n^2)

console.log(longestPalindromeSubseq('bbbab'));