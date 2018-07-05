/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n === 0) return 0;

  const table = [];//Array(n+1).fill(Number.MAX_SAFE_INTEGER);
  table[0] = 0;
  for (let i = 1; i <= n; i++) {
      table[i] = i;
    for (let j = 1; j*j <= i ; j++) {
        table[i] = Math.min(table[i], table[i - j * j] + 1);
    }
  }
  return table[n]
}

// runtime: O(n)
console.log(numSquares(12));
