/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length == 0) return false;

  const m = matrix.length;
  const n = matrix[0].length;
  let j = n -1;
  for (let i = 0; i < m; i++) {
    console.log(matrix[i][j]);
    while (j && matrix[i][j] > target) {
       j--;
   }
   
   if(matrix[i][j] === target) return true; 
  }
  return false;
};

/**
 * We start search the matrix from top right corner, initialize the current position to top right corner, if the target is greater than the value in current position, then the target can not be in entire row of current position because the row is sorted, if the target is less than the value in current position, then the target can not in the entire column because the column is sorted too. We can rule out one row or one column each time, so the time complexity is O(m+n).
 * @param {*} matrix 
 * @param {*} target 
 */
var searchMatrix2 = function(matrix, target) {
    if(matrix == null || matrix.length < 1 || matrix[0].length < 1) {
            return false;
    }
    let col = matrix[0].length - 1;
    let row = 0;
    while(col >= 0 && row <= matrix.length-1) {
        console.log(matrix[row][col]);
        if(target == matrix[row][col]) {
            return true;
        } else if(target < matrix[row][col]) {
            col--;
        } else if(target > matrix[row][col]) {
            row++;
        }
        
    }
    return false;
};



const input = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
console.time('end');
console.log(searchMatrix3(input, 5));
console.timeEnd('end');
