/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
        // return recursiveSearch(nums, 0, nums.length - 1);
        return iterativeSearch(nums);
};

// recursive approach
var recursiveSearch = function (nums, left, right) {
    if(left === right) return left;

    const mid = parseInt((left + right) / 2);
    if(nums[mid] > nums[mid + 1]) {
        return recursiveSearch(nums, left, mid)
    } else {
        return recursiveSearch(nums, mid + 1, right);
    }
}

// runtime: O(log n)

// iterative approach
var iterativeSearch = function(nums) {
    let left = 0, right = nums.length - 1;
    while(left < right) {
        const mid = parseInt((left + right) / 2);
        if(nums[mid] > nums[mid + 1]) {
              right = mid  
        } else {
            left = mid + 1;
        }
    }
    return left
}

// runtime: O(log n)

console.log(findPeakElement([1, 2, 3, 1, 4, 5]));
