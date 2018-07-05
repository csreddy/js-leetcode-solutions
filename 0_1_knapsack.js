var canPartition = function(nums) {
    if(!nums || nums.length === 0) return false;
    
    let sum = 0;
    nums.reduce((acc, num) => sum = acc + num, sum);
    
    if(sum % 2 !== 0) return false;
    
    sum = Math.floor(sum/2);
    const table = {};
    table[0] = true;
   
    for(let i=1; i<=nums.length; i++){
        for(let j=sum; j >= nums[i]; j--){
            table[j] = table[j] || table[j - nums[i]] || false
        }
    }
    console.log(table, sum);
    return table[sum]
};


console.log(canPartition([1, 2, 5]));