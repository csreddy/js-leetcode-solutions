/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = 0,end = 0;
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i].toString())
        while (nums[i] === nums[i+1] - 1) {
            end++;
            i++;
        }
        if(end > start){
            result.pop()
            result.push(`${nums[start]}->${nums[end]}`)
        } 
        start = end = i+1;
        
    }

    return result;
};

// runtime : O(n)

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));