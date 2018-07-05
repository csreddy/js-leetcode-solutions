/**
 * You traverse twice, applying the appropriate multiplier.
 * The product basically is calculated using the numbers before the current number and the numbers after the current number. Thus, we can scan the array twice. First, we calcuate the running product of the part before the current number. Second, we calculate the running product of the part after the current number through scanning from the end of the array.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [1]
   for (let i = 1; i < nums.length; i++) {
   // console.log(`i=${i} res[${i-1}]=${res[i-1]} nums[${i-1}]=${nums[i-1]}`);   
    res[i] = res[i-1] * nums[i-1];
   }
   // console.log(`res: ${res}`);
   let right = 1;
   for (let i = nums.length -1; i >= 0; i--) {
       res[i] *= right;
       right *= nums[i];
      // console.log(`i=${i} res[${i}]=${res[i]} nums[${i}]=${nums[i]}`);   
   }

   return res;
};

// alternative solution
var productExceptSelf = function(nums) {
    let result = [];
    let leftMult = righMult = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] *= leftMult;
        leftMult *= nums[i]    
    }

    for (let j = nums.length -1; i >=0; j--) {
        result[j] = righMult;
        righMult *= nums[i]
        
    }

    return result;
}


// runtime: O(n)
productExceptSelf([1,2,3])