/*
/*
 * clockwise rotate
 *  First we find transpose.
 *  Then we reverse elements of every row.
 * 
 * anticlockwise rotate
 *  First we find transpose.
 *  Then we reverse elements of every column.
 * 
*/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  transpose(matrix);
  reverseRowElememts(matrix);
  return matrix;
};


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var antiRotate = function (matrix) {
    transpose(matrix);
    reverseColumnElememts(matrix);
    return matrix;
};


var transpose = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      swap(matrix, i, j);
    }
  }
}

var reverseRowElememts = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  }
}

var reverseColumnElememts = function (matrix) {
    for (let i = 0; i < matrix[0].length; i++) {
       // console.log(`i: ${i}`);
        for (let j = 0, k = matrix[0].length - 1; j < k; j++, k--) {
            // console.log(`j: ${j} k: ${k}`);
            const temp = matrix[i][j];
            matrix[i][j] = matrix[k][i]
            matrix[k][i] = temp;
        } 
    }
  }

var swap = function (matrix, i, j) {
  const temp = matrix[i][j];
  matrix[i][j] = matrix[j][i]
  matrix[j][i] = temp;
}





console.log(rotate(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
));

console.log(rotate(
  [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ]
));

console.log(antiRotate(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
  ));
