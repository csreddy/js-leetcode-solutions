/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0) return 1;
    const temp = myPow(x, parseInt(n/2));
    if(n % 2 === 0) {
        return temp * temp; 
    } else {
      if(n > 0) {
          return x * temp * temp
      } else {
          return (temp * temp) / x
      }    
    }
   
}

// runtime: O(log n)


console.log(myPow(2.1, 3));
console.log(myPow(2.00000, -2));