// sliding window algorithm
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
 const map = new Map();
 for (let i = 0; i < p.length; i++) {
     map.set(p.charAt(i), map.get(p.charAt(i)) || 0 + 1);
 }

 let begin = 0, end = 0, counter = map.size;
 const result = [];
 while (end < s.length) {
    const c = s.charAt(end);  
    if(map.has(c)) {
        map.set(c, map.get(c) - 1);
        if(map.get(c) === 0) counter--;
     }
     end++

     while(counter === 0) {
        const d = s.charAt(begin)
        if(map.has(d)) {
             map.set(d, map.get(d) + 1);
             if(map.get(d) > 0) counter++;
         }

         if(end - begin === p.length) {
            result.push(begin);
         }
        begin++;
     }
 }
 return result;
}

// runtime: O(n);

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
