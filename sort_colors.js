/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(!nums || nums.length === 0) return [];

    let left = 0, right = nums.length -1;
    let i=left;
    while(i<=right) {
        if(nums[i] === 0){
            swap(nums, i, left)
            left++; i++;
        } else if(nums[i] === 2){
            swap(nums, i, right)
            right--; 
        } else {
            i++;
        }
    }
    return nums;
};
    
    
var swap = function(arr, left, right) {
   let temp = arr[left]
   arr[left] = arr[right]
    arr[right] = temp;
}    

console.log(sortColors([2,0,2,1,1,0]));