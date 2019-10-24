 // Definition for an interval.
 function Interval(start, end) {
      this.start = start;
      this.end = end;
  }

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(!intervals || intervals.length === 0) return [];
    if(intervals.length === 1) return intervals;

    intervals.sort((a, b) => a[0] < b[0] ? -1: 1);
        
    // console.log(intervals);
    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = result.pop();
        const curr = intervals[i]

        
        if(curr[0] > prev[1]) { 
            result.push(prev);
            result.push(curr);
        } else {
             prev[1] = Math.max(prev[1], curr[1]);
            result.push(prev);
        }
    }
    return result;
};


console.log(merge([[2,3],[0,1],[1,2],[3,4],[4,5],[1,1],[0,1],[4,6],[5,7],[1,1],[3,5]]));
