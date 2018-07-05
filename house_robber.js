/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    
    const table = Array(nums.length + 1).fill(0);
    table[0] = nums[0];
    table[1] = Math.max(nums[0], nums[1])
    for(let i=2; i<nums.length; i++){
        table[i] = Math.max(nums[i] + table[i-2],  table[i-1])
    }
    return table[nums.length-1];
};

// runtime: O(n)