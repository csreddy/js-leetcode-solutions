/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  if (!paragraph) return null;

  let freqWord;
  let max = 0;
  const map = new Map();

  for (let i = 0; i < paragraph.length; i++) {
    let str = '';
    while (
      i < paragraph.length &&
      paragraph
        .charAt(i)
        .toLowerCase()
        .match(/\w/)
    ) {
      str += paragraph.charAt(i);
      str = str.toLowerCase();
      i++;
    }
    if (str && !banned.includes(str)) {
      map.set(str, (map.get(str) || 0) + 1);
      
      // calculate freq word
      if (map.get(str) > max) {
        freqWord = str;
        max = map.get(str);
      }
    }

    // reset str
    str = '';
  }

  return freqWord;
};


// runtime: O(P+B), where P is the size of paragraph and B is the size of banned.

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit'
  ])
);

