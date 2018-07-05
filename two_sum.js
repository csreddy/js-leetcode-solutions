/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for(let i=0; i< nums.length; i++){
        if(map.hasOwnProperty(target - nums[i])) {
            return [map[target- nums[i]], i]
        } else {
            map[nums[i]] = i;
        }
    } 
    return null;
};

// runtime: O(n)