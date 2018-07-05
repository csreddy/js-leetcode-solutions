/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const set = new Set();
    for(let i=0; i<J.length; i++){
        set.add(J.charAt(i));
    }
    let ans = 0;
    for(let j=0; j<S.length; j++){
        if(set.has(S.charAt(j))) ans++
    }
    return ans;
};

// runtime: O(n)