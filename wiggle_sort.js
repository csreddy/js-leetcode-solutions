/** 
 1) Traverse all even positioned elements of input array, and do following.
    a) If current element is smaller than previous odd element, swap previous and current.
    b) If current element is smaller than next odd element, swap next and current.
**/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    if(!nums || nums.length === 0) return [];
    for (let i = 0;  i < nums.length; i++) {
        if((i%2 == 0 && nums[i] < nums[i-1]) || (i%2==1 && nums[i] > nums[i-1])){
            const temp = nums[i-1];
            nums[i-1] = nums[i];
            nums[i] = temp;
        } 
        
    }
    return nums;
};

// runtime: O(n)
console.log(wiggleSort([10, 90, 49, 2, 1, 5, 23]));