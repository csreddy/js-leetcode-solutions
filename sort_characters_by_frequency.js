/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    if(!s) return s;
    
    const map = new Map();
    for(let i=0; i<s.length;i++){
        map.set(s.charAt(i), (map.get(s.charAt(i)) || 0) +1)
    }
    const max = Math.max.apply(null, Array.from(map.values()));
    let arr = Array(max+1);
    
    map.forEach((v, k) => {
        arr[v]  = (arr[v]) ? arr[v] : [];
        arr[v] = arr[v].concat(k);
    })

    let ans = '';
    for(let i=arr.length-1; i>=0; i--){
        if(!arr[i]) continue;
        for(let j=0; j<arr[i].length; j++){
            ans += arr[i][j].repeat(i)
        }
    }
    return ans;
    
};

// runtime: O(n)

console.log(frequencySort('tree'));
console.log(frequencySort('cccaaa'));
console.log(frequencySort('Aabb'));