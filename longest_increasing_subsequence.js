/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums) return 0;
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max.apply(null, dp);
};

var lengthOfLIS2 = function(nums) {
  if (nums.length <= 1) return nums.length;

  // fill table with 1
  const table = Array(nums.length).fill(1);

  // Mark one pointer at i. For each i, start from j=0.
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // It means next number contributes to increasing sequence.
      console.log(i, j, nums[i], nums[j]);
      if (nums[j] < nums[i]) {
        table[i] = Math.max(table[i], table[j] + 1)
      }
    }
  }

  return Math.max.apply(null, table);
};

// runtime: O(n ^ 2)

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]));
