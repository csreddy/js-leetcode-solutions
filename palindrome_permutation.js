/**
 * At the end, we traverse over the mapmap created and find the number of characters 
 * with odd number of occurences. If this countcount happens to exceed 1 at any step, 
 * we conclude that a palindromic permutation isn't possible for the string ss. 
 * But, if we can reach the end of the string with countcount lesser than 2, 
 * we conclude that a palindromic permutation is possible for ss.
 * @param {*} s 
 */
var canPermutePalindrome = function(s) {
    const count = new Map();
    for (let i = 0; i < s.length; i++) {
        count.set(s[i], count.get(s[i] || 0 + 1));
    }
    let odd = 0;
    count.forEach(c => {
        if(c % 2 === 1) odd++
    })
    return odd < 2;
}

// runtime: O(n)


// Solution (2) that assume it's ascii 256 chars only

/** 
 * Instead of making use of the inbuilt Hashmap, we can make use of an array as a hashmap. 
 * For this, we make use of an array with length 128. Each index of this array corresponds 
 * to one of the 128 ASCII characters possible. We traverse over the string ss and
 *  put in the number of occurences of each character in this array appropriately as done in 
 * the last case. Later on, we find the number of characters with odd number of occurences to 
 * determine if a palindromic permutation is possible for the string ss or not as done in
 *  previous approaches.
*/

var canPermutePalindrome = function(s) {
    // assume that s is only contact 256 english letters
    var letters = Array(128).fill(0);
    var count = 0;
    for(var i = 0; i < s.length; i++) {
        letters[s.charAt(i)]++;
        if(letters[s.charAt(i)] % 2 == 0) {
            count--;
        } else {
            count++;
        }
    }
    return count < 2;
}

// runtime: O(n)
