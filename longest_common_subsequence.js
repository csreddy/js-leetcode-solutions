/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var longestSubsequence = function(s1, s2) {
    if(!s1 || !s2) return 0;

    const table = {}
    // fill table
    for (let i = 0; i <= s1.length; i++) {
        table[i] = {};
        for (let j = 0; j <= s2.length; j++) {
            table[i][j] = 0
        }   
    }

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if(s1.charAt(i) === s2.charAt(j)){
                // when match
                table[i][j] = table[i-1][j-1] + 1; // take diagonal value
            } else {
                // dont match
                table[i][j] = Math.max(table[i-1][j], table[i][j-1]); // max of upper cell and left cell
            }
        }    
        
    }
    return table[s1.length][s2.length];
}

// runtime: O(m * n) m and n: lengths of 2 strings
console.log(longestSubsequence('AGGTAB', 'GXTXAYB'));