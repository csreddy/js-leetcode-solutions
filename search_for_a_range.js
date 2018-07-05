/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1];
    
    return [searchLeft(nums, target), searchRight(nums, target)]   
};

var searchLeft = function(nums, target){
    let index = -1;
    let begin = 0, end = nums.length-1;

    while(begin <= end){
        let mid = parseInt((begin + end)/2)
        if(nums[mid] >= target) {
            end = mid-1;
        } else {
            begin = mid + 1;
        }
        if(nums[mid] === target)  index = mid;
    }
    
    return index;
}


var searchRight = function(nums, target){
    let index = -1;
    let begin = 0, end = nums.length -1;

    while(begin <= end){
        let mid = parseInt((begin + end)/2)
        if(nums[mid] <= target) {
            begin = mid + 1;
        } else {
            end = mid - 1;
        }
        if(nums[mid] === target)  index = mid;
    }
    
    return index;
}
console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([1], 1));