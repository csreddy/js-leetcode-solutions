/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map();
    for(let i=0; i<numbers.length; i++){
        if(map.has(target - numbers[i])){
            const idx1 = i+1;
            const idx2 = map.get(target-numbers[i])+1
            if(idx1 > idx2) {
                return [idx2, idx1];    
            } else {
                return [idx1, idx2];    
            }
          } else {
                map.set(numbers[i], i) 
           }
    }
    return [];
};

// runtime: O(n)