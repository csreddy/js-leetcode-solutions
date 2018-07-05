/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let start = 0,
    end = 0,
    windowSize = 1,
    windowStart = 0;
  let size = s.length;
  const map = new Map();
  map.set(s[0], 1);

  for (let i = 1; i < size; i++) {
    // update map with count of each unique char
    const char = s[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
    end++; // increment end pointer

    // while map does not contain at least 2 uniq chars
    // move start pointer
    while (!isLessThanM(map, 2)) {
        map.set(s[start], map.get(s[start]) - 1);
        start++
    }
    if(end - start + 1 > windowSize) {
        windowSize = end - start + 1
        windowStart = start;
    }
  }
  return s.substring(windowStart, windowStart + windowSize)
};

var isLessThanM = function(map, m) {
  let count = 0;
  map.forEach(v => {
    if (v > 0) count++;
  });
  return count <= m;
};

// runtime: O(n)

console.log(lengthOfLongestSubstringTwoDistinct('karappa'));
