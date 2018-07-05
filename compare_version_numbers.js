/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split('.')
    version2 = version2.split('.')
    
    let length = Math.max(version1.length, version2.length);
    
    for(let i=0; i<length; i++){
        const v1 = (i < version1.length) ? parseInt(version1[i]) : 0;
        const v2 = (i < version2.length) ? parseInt(version2[i]) : 0;
        if(v1 > v2) {
          return 1  
        } 
        else if(v2 > v1) {
            return -1;   
        } else {
             continue
        }
    }
    return 0;
};

// runtime: O(n)