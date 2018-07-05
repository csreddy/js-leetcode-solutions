/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  return dfs(s, wordDict, new Map());
}

var dfs = function(str, dict, map) {
  if(map.has(str)) return map.get(str)

  let result = [];
  if (dict.indexOf(str) > -1) {
      result.push(str);
  }
  for (let i=1;i<str.length;i++) {
      let right = str.substr(i);
      if (dict.indexOf(right) > -1) {
          let left = str.substr(0,i);
          let temp = dfs(left, dict, map);
          temp.forEach(t => {
              result.push(t + " " + right);
          });
      }
  }
  map[str] = result;
  return result;
};


console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));