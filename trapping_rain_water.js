/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length == 0) return 0;

  let leftPtr = 0,
    rightPtr = height.length - 1;
  let ans = 0;
  let leftMax = 0,
    rightMax = 0;
  while (leftPtr < rightPtr) {
    if (height[leftPtr] < height[rightPtr]) {
      if (height[leftPtr] >= leftMax) {
        leftMax = height[leftPtr];
      } else {
        ans += leftMax - height[leftPtr];
      }
      leftPtr++;
    } else {
      if (height[rightPtr] >= rightMax) {
        rightMax = height[rightPtr];
      } else {
        ans += rightMax - height[rightPtr];
      }
      rightPtr--;
    }
  }
  return ans;
};

Array.prototype.top = function() {
  return this[this.length - 1];
}

// alternative solution using stack
var trap2 = function(height) {
  if (height.length == 0) return 0;
  
  const stack = [];
  let res = current = 0;
  while (current < height.length) {
    const currHeight = height[current];
    while (stack.length > 0 &&  currHeight > height[stack.top()]) {
      let top = stack.pop();
      if(stack.length === 0) break;

      // console.log(stack.top());
      let distance = current - stack.top() - 1;
      let boundedHeight = Math.min(height[current], height[stack.top()]) - height[top];
      res += (distance * boundedHeight); 
    }
    stack.push(current)
    current++;
  }
return res;
}


//console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]));

//  runtime: O(n)