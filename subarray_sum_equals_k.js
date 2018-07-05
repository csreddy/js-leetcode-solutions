/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  if (nums.length === 0) return 0;

  const map = new Map();
  map.set(0, 1);
  let sum = 0,
    count = 0;
  nums.forEach(num => {
    sum += num;
    console.log('sum-k', sum-k);
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, map.get(sum) || 0 + 1);
  });
  console.log(map);
  return count;
};

console.log(subarraySum([0,0,0,0,0,0,0,0,0,0], 0));
