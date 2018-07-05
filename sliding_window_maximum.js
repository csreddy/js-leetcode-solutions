/**
 * 
partition the array in blocks of size k=4. The last block may have less then w.
2, 1, 3, 4 | 6, 3, 8, 9 | 10, 12, 56|

Traverse the list from start to end and calculate max_so_far. Reset max after each block boundary (of k elements).
left_max[] = 2, 2, 3, 4 | 6, 6, 8, 9 | 10, 12, 56

Similarly calculate max in future by traversing from end to start.
right_max[] = 4, 4, 4, 4 | 9, 9, 9, 9 | 56, 56, 56

now, sliding max at each position i in current window, sliding-max(i) = max{right_max(i), left_max(i+k-1)}
sliding_max = 4, 6, 6, 8, 9, 10, 12, 56
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(!nums || nums.length === 0) return [];

    const leftMax = [];
    const rightMax = [];
    leftMax[0] = nums[0];
    rightMax[nums.length - 1] = nums[nums.length - 1];
    for (let i = 0; i < nums.length; i++) {
        leftMax[i] = (i % k === 0) ? nums[i] : Math.max(leftMax[i-1], nums[i]);
        let j = nums.length - i - 1;
        rightMax[j] = (j % k === 0) ? nums[j] : Math.max(rightMax[j+1], nums[j]);
    }

    // if done with another loop for rightMax
    // for (let j = nums.length - 1; j >= 0; j--) {
    //     rightMax[j] = (j % k === 0) ? nums[j] : Math.max(rightMax[j+1], nums[j]);
    // }

    
    const slidingMax = Array(nums.length - k + 1);
    let j=0;
    for (let i = 0; i+k <= nums.length; i++) {
        // in this we test the maximum on both end of the window, i.e, left direction and right direction.
        slidingMax[j] = Math.max(leftMax[i+k-1], rightMax[i]);
        j++;
    }
    return slidingMax;
};
// runtime: O(n)


// alternative solution: dequeue method
const dequeueMethod = (nums, k) => {
    const deq = [];
    const res = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (deq.length > 0 && deq[0] === i - k) deq.shift();
        
        while(deq.length > 0 && nums[deq[deq.length - 1]] < nums[i]) deq.pop();
        
        deq.push(i);
        if (i >= k - 1) res.push(nums[deq[0]]);
    }
    return res;
};

// alternative solution
var maxSlidingWindow = function (nums, k) {
    if (k === 0) return nums;
    if (nums.length < k) return [];
    if (nums.length === k) return [Math.max.apply(null, nums)];
  
    const map = new Map();
    // first put first k items in map
    for (let i = 0; i < k; i++) {
      map.set(nums[i], map.get(nums[i]) || 0 + 1);
    }

    let begin = 0,
      end = 0,
      counter = map.size;
    const result = [];
    
    while (end < nums.length) {
      const windowEndElement = nums[end]
  
      if (map.has(windowEndElement)) {
        map.set(windowEndElement, map.get(windowEndElement) - 1);
        if (map.get(windowEndElement) === 0) counter--;
      }
  
      end++;
		
      // when window length is k then push new max to result array and increment begin index
      if (end - begin === k) {
        result.push(Math.max.apply(null, nums.slice(begin, end)))
      // slide the window here
      begin++; 
				
     // update map with new begin val and update counter
      const windowBeginElement = nums[begin];
      map.set(windowBeginElement, map.get(windowBeginElement) || 0 + 1);
      if (map.get(windowBeginElement) > 0) counter++;
      }
    }
    return result;
  }
  
  // runtime: O(n)

console.log(maxSlidingWindow([2,1,3,4,6,3,8,9,10,12,56], 4));