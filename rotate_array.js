/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length 
    nums = reverse(nums, 0, nums.length -1)
     nums = reverse(nums, 0, k - 1)
     nums = reverse(nums, k, nums.length -1)   
  };
  
  function reverse(list, start, end) {
    
      while(start  < end) {
      let temp = list[start];
      list[start] = list[end]
      list[end] = temp;
      start++
      end--;
    }
    return list;
  }

  //runtime: O(n)