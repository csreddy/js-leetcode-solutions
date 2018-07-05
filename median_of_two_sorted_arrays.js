/**
 * solution 1
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedian = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  // if length is even
  if (total % 2 === 0) {
    return (findKth(total / 2, nums1, 0, nums2, 0) + findKth(total / 2 + 1, nums1, 0, nums2, 0)) / 2
  } else {
    return findKth(total / 2 + 1, nums1, 0, nums2, 0)
  }
}

var findKth = function (k, nums1, start1, nums2, start2) {
  if (start1 >= nums1.length) return nums2[start2 + k - 1];
  if (start2 >= nums2.length) return nums1[start1 + k - 1];
  if (k === 1) return Math.min(nums1[start1], nums2[start2]);

  const m1 = start1 + parseInt(k / 2) - 1;
  const m2 = start2 + parseInt(k / 2) - 1;
  const mid1 = m1 < nums1.length ? nums1[m1] : Number.MAX_SAFE_INTEGER;
  const mid2 = m2 < nums2.length ? nums2[m2] : Number.MAX_SAFE_INTEGER

  if (mid1 < mid2) {
    return findKth(parseInt(k - k / 2), nums1, m1 + 1, nums2, start2)
  } else {
    return findKth(parseInt(k - k / 2), nums1, start1, nums2, m2 + 1)
  }
}

/* --- end ------- */

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  let x = nums1.length;
  let y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    const partitionX = parseInt((low + high) / 2);
    const partitionY = parseInt((x + y + 1) / 2) - partitionX;

    // if partitionX is 0 it means nothing is there on left side. Use -INF for maxLeftX
    // if partitionX is length of input then there is nothing on right side. Use +INF for minRightX
    let maxLeftX = partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
    let minRightX = partitionX === x ? Number.MAX_SAFE_INTEGER : nums1[partitionX];

    let maxLeftY = partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    //We have partitioned array at correct place
    // Now get max of left elements and min of right elements to get the median in case of even length combined array size
    // or get max of left for odd length combined array size.
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) { //we are too far on right side for partitionX. Go on left side.
      high = partitionX - 1;
    } else {
      low = partitionX + 1; //we are too far on left side for partitionX. Go on right side.
    }
  }
}



//console.log(findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 19, 21, 18, 25]));
console.log(findMedianSortedArrays([1,2], [3,4]));
