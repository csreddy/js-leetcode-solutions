/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const table = Array(cost.length+1).fill(0);
    
    // The first two cells of DP will be zeros
    for(let i=2; i<=cost.length ; i++){
        table[i] = Math.min(table[i-1]+cost[i-1], table[i-2]+cost[i-2]);
    }
    return table[cost.length]
};

// runtime: O(n)

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));