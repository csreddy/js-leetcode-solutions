/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    if(!strs || strs.length <= 1) return strs || [];
    
    const map = new Map();
    const result = [];

    strs.forEach(str => {
        const s = str.split('').sort().join('')
        if(map.has(s)) {
            map.set(s, map.get(s).concat(str))
        } else {
            map.set(s, [str])
        }
    })
    map.forEach((value, key) => {
        result.push(value)
    })
    return result;
};

console.log(groupAnagrams(["eat"]));