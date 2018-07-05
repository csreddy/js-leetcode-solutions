var findClosest = function(nums, target) {
    let begin = 0, end = nums.length -1;
    while (begin <= end) {
        const mid = Math.floor(((begin + end) / 2))
        if(nums[mid] === target) return nums[mid];
       
        // if target > mid, process right half
        if(target < nums[mid]) {
            end = mid-1;
        }
        // if target < mid, process left half
        if(target > nums[mid]) {
            begin = mid+1;
        }

    }
    return (nums[begin] - target <  target - nums[end]) ? nums[begin] : nums[end];
}



console.log(findClosest([1, 2, 4, 5, 6, 6, 8, 9], 5));
console.log(findClosest([1, 2, 4, 5, 6, 6, 8, 9], 3));