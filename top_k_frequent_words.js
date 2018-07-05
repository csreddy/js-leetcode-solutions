/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // count freq of each word
    const map = new Map();
    words.forEach(word => {
        map.set(word, (map.get(word) || 0)  + 1);
    })

    // find max
    let max = Math.max.apply(null, Array.from(map.values()))

    // initialize array with index as freq
    const arr =  Array(max + 1);
    for (let i = 1; i <= max; i++) {
        arr[i] = [];
    }
    map.forEach((freq, word) => {
        arr[freq] = arr[freq].concat(word)
        arr[freq].sort();
    })

    const result = []
    for (let j = max; j>=1; j--) {
        if(arr[j].length > 0) {
            for (let i = 0; i < arr[j].length; i++) {
                result.push(arr[j][i]);
                if(result.length === k) return result;
            }
        }
    }
    return result 
}

// runtime: O(n * k)
console.log(topKFrequent(
    ["i", "love", "leetcode", "i", "love", "coding"], 2
));