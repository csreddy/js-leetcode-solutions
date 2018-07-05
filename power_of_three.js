/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 1) {
            return false;
        }

        while (n % 3 == 0) {
            n /= 3;
        }

        return n == 1;
};

// runtime: O(log n with base 3 ). The number of divisions is given by that logarithm.
// https://leetcode.com/problems/power-of-three/solution/