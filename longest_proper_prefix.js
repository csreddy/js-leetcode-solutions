// this function  is used by KMP algo for pattern matching
var lps = function(pattern) {
  if (!pattern) return [];
  if (pattern.length === 1) return pattern;

  const res = Array(pattern.length);
  let len = 0;
  let i = 1;
  res[0] = 0; // init first item with 0 always
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      res[i] = len;
      i++;
    } else {
      // This is tricky. Consider the example.
      // AAACAAAA and i = 7. The idea is similar
      // to search step.
      if (len !== 0) {
        len = res[len - 1];
        // Also, note that we do not increment here
      } else {
        // len == 0
        res[i] = 0;
        i++;
      }
    }
  }
  return res;
};

console.log(lps('ABABCABAB'));
