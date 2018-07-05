
// Definition for an interval.
 function Interval(start, end) {
     this.start = start;
     this.end = end;
 }
 
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    
    const res = []; 
    let i =0;
    // add all intervals less than new interval
   while (i < intervals.length && intervals[i].end < newInterval.start) {
       res.push(intervals[i]);
       i++;
   }
   // merge overlapping intervals
   while (i < intervals.length && intervals[i].start <= newInterval.end) {
     newInterval = new Interval(
         Math.min(intervals[i].start, newInterval.start),
         Math.max(intervals[i].end, newInterval.end),
     )  
     i++;
   }
   // add the merged interval
   res.push(newInterval);
   
   // add the remaining intervals
   while (i < intervals.length) {
       res.push(intervals[i]);
       i++
   }
    
    return res;
    
};

// runtimeL O(n)

console.log(insert(new Interval(2,5), [new Interval(1,3),new Interval(6,9)]));