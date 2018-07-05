/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    const breakable = Array(s.length + 1).fill(false);
    breakable[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const substr =  s.slice(j, i);
            
            if(breakable[j] && wordDict.includes(substr)){
                breakable[i] = true;
                break;
            }
        }
    }
    return breakable[s.length];
};

// runtime: O(n^2)

console.log(wordBreak("leetcode", ["leet","code"]));
