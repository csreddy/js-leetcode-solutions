// Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

// For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].


var missingRanges = function(nums, lower, upper) {
    const ranges = [];
    for (let i = 0; i <= nums.length; i++) {
        let start = (i === 0) ? lower : nums[i-1] + 1;
        let end = (i === nums.length)? upper: nums[i] - 1;
        addMissingRange(ranges, start, end)
    }
    return ranges;
}


var addMissingRange = function(ranges, start, end){
    if(start > end) {
        return;
    } else if(start === end) {
        ranges.push(start + '')
    } else {
        ranges.push(start + '->' + end)
    }
}
// runtime: O(n)

console.log(missingRanges([0, 1, 3, 50, 75], 0, 99));