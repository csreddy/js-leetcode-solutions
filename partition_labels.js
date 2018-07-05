/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let maxRange = 0;
    let count = 1;
    let result = [];
    for (let i = 0; i < S.length; i++) {
        maxRange = S.lastIndexOf(S.charAt(i)) > maxRange ? S.lastIndexOf(S.charAt(i)) : maxRange;
        if(i === maxRange){
            result.push(count);
            count = 1; //reset after pushing to result
        }  else {
            count++;
        }
    }
    return result;
};

// runtime: O(n)
console.log(partitionLabels('ababcbacadefegdehijhklij'));