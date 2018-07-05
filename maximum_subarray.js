
/**
 * @param {number[]} nums
 * @return {number}
 */
// kadane's algorithm
/**
 * Loop for each element of the array
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_ending_here < 0)
            max_ending_here = 0
  (c) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
return max_so_far
 */
var maxSubArray = function(nums) {
    if(!nums || nums.length === 0) return 0;
    let maxCurrent = nums[0]
    let maxGlobal = nums[0]
    
    let start  = end  = s = 0

    for(let i = 1; i <= nums.length; i++){
        maxCurrent += nums[i];
        
        if(maxCurrent > maxGlobal){
           maxGlobal = maxCurrent
           start = s;
           end = i;
          
        }
        if(maxCurrent < 0){
            maxCurrent = 0
            s = i+1;
        }
    }
    console.log(nums.slice(start, end+1));
    return maxGlobal;
};

// runtime: O(n)

// alternative solution using DP
var maxSubArray = function(nums) { 
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = dp[0];
    for(let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(dp[i], max);
    }
    return max;
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1, -1, -2, -1]));
// console.log(maxSubArray([-2,-1,-3,-4,-1,-2,-1,-5,-4]));