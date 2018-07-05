/**
 * @param {number[]} nums
 * @return {number}
 * 
1) Create an empty set.
2) Insert all array elements to set.
3) Do following for every element arr[i]
   a) Check if this element is the starting point of a 
       subsequence.  To check this, we simply look for
       arr[i] - 1 in hash, if not found, then this is
       the first element a subsequence.  
    
       If this element is a first element, then count 
       number of elements in the consecutive starting 
       with this element.

       If count is more than current res, then update    
       res.
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let maxSeq = 0;

  set.forEach(num => {
    if (!set.has(num - 1)) {
      let currSeq = 1;
      let currentNum = num;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currSeq += 1;
      }
      maxSeq = Math.max(currSeq, maxSeq);
    }
  });
  return maxSeq;
};


// runtime: O(n)

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
