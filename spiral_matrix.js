var spiralOrder = function(matrix) {
    var res = []
       if(matrix.length == 0) {
           return res;
       }
    let top = 0;
    let bottom = matrix.length - 1;
    let left= 0;
    let right = matrix[0].length  - 1;  

   while (true) {
    // top row
    let arr = [];
    for (let i = left; i <= right; i++) {
        res.push(matrix[top][i])
    }   
    top++;
    if(left > right || top > bottom) break;

    // right column
    for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right])
    }  
    right--;
    if(left > right || top > bottom) break;

    // bottom row
    for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
    } 
    bottom--;
    if(left > right || top > bottom) break;

    // left column
    for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
    }  
    left++;
   
    if(left > right || top > bottom) break;
   } 

   return res;

};

console.log(spiralOrder(
    [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
));