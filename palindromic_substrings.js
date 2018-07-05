/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    const table = Array(s.length);
    for (let i = 0; i < s.length; i++) {
        table[i] = Array(s.length).fill(false);
    }

    for (let i = s.length-1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if(s[i] === s[j]){
                  // one character or two characters
                if(j-i < 2) {
                    table[i][j] = true;
                } else {
                    table[i][j] = table[i+1][j-1];
                }
                if(table[i][j]) count++;
            }
        }
    }
    return count;
};
// runtime: O(n^2)


// alternate solution
var countSubstrings = function(s) {
    let cnt = 0;
    
    for(let i = 0; i < s.length; i++){
        cnt += expand(s, i, i) + expand(s, i, i+1)
    }
    
    return cnt
    
    function expand(s, i, j){
        let count = 0
        while(i >= 0 && j < s.length && s[i] === s[j]){
            i--;
            j++;
            count++
        }
        return count
    }
};


console.log(countSubstrings('abc'));