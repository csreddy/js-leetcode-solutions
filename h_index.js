/** 
 * The idea behind it is some bucket sort mechanisms. 
 * First, you may ask why bucket sort. Well, the h-index is defined as the number of papers with 
 * reference greater than the number. So assume n is the total number of papers, 
 * if we have n+1 buckets, number from 0 to n, then for any paper with reference corresponding to 
 * the index of the bucket, we increment the count for that bucket. 
 * The only exception is that for any paper with larger number of reference than n, we put in 
 * the n-th bucket. Then we iterate from the back to the front of the buckets, 
 * whenever the total count exceeds the index of the bucket, 
 * meaning that we have the index number of papers that have reference greater than or equal 
 * to the index. Which will be our h-index result. The reason to scan from the end of the array 
 * is that we are looking for the greatest h-index. 
*/
/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function(citations) {
    if(!citations || citations.length === 0) return 0;

    if(citations.every(c => c === 0)) return 0;
    
    const buckets = Array(citations.length + 1).fill(0);
    citations.forEach((val, idx) => {
        if(val >= citations.length) {
            buckets[citations.length]++
        } else {
            buckets[idx]++;
        }
    })

    let count = 0;
    for (let i = citations.length; i >= 0; i--) {
        count += buckets[i];
        if(count >= i) return i;
        
    }
    return 0;
};

// runtime: O(n)

console.log(hIndex([0, 0]));