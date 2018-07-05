/**
 * @param {string} s
 * @return {number}
 */
/**
the basic idea is, keep a hashmap which stores the characters in string as keys and their 
positions as values, and keep two pointers which define the max substring. 
move the right pointer to scan through the string , and meanwhile update the hashmap. 
If the character is already in the hashmap, then move the left pointer to the right of the 
same character last found. Note that the two pointers can only move forward.
*/
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    
    const map = new Map();
    let length = 0;
    for(let i=0, j =0; i<s.length; i++) {
        if(map.has(s[i])) {
            j = Math.max(j, map.get(s[i]) + 1)
        }
        
     map.set(s[i], i);
     length = Math.max(length, i - j + 1)
        
    }
    return length;
};

// sliding window technique
var lengthOfLongestSubstring2 = function(s) {
    if(!s) return 0;

    const map = new Map();
    let begin = 0, end = 0, counter = 0,  max = 0;

    while (end < s.length) {
       
        const char = s.charAt(end);
        map.set(char, (map.get(char) || 0) + 1);
        if(map.get(char) > 1) counter++
        end++;

        while ( counter > 0) {
           const beginchar = s.charAt(begin);
           if(map.get(beginchar) > 1) counter--;
            map.set(beginchar, map.get(beginchar) - 1);
            begin++;
        }
        max = Math.max(max, end - begin)
    }
    return max;
}

console.log(lengthOfLongestSubstring2('abcabcbb'));