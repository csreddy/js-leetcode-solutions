/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(!grid || grid.length === 0) return [];
    const rows = grid.length;
    const cols = grid[0].length;

    // initialize 1st row  
    for(let j=1; j<cols; j++){
        grid[0][j] += grid[0][j-1]
    }

    // initialize 1st col
    for(let i=1; i<rows; i++){
        grid[i][0] += grid[i-1][0]; 
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    return grid[rows-1][cols-1]
}

// run: O(n)

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]));