/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time complexity: O(n) if we don’t need the sorted output, otherwise O(n+kLogk)

var findKthLargest = function (nums, k) {
    k = nums.length - k; // for largest
   // k = k -1; // for smallest
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
      let j = partition(nums, lo, hi);
      if (j < k) {
        lo = j + 1
      } else if (j > k) {
        hi = j - 1;
      } else {
        break;
      }
    }
    return nums[k];
  }


  var partition = function (nums, lo, hi) {
    let pivot = nums[hi];
    let partitionIndex = lo;
    for (let j = lo; j < hi; j++) {
      if (nums[j] <= pivot) {
         swap(nums, partitionIndex, j)
         partitionIndex++;
      }
    }
    swap(nums, partitionIndex, hi);
    return partitionIndex;
  }
  
  var swap = function (a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }



/*
var findKthLargest = function(nums, k) {
    if(nums.length === 0 || k === 0) return null;
    if(nums.length === 1 && k > 0) return nums[0];
    
    heapSort(nums)
    console.log(nums);
    let max;
    while (k > 0) {
        max = nums.pop();
        k--;
    }
    return max;
};

var swap = function (a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

var heapSort = function (arr) {
    heapify(arr)
    for(let i= arr.length - 1; i>0; i--) {
        swap(arr, i, 0);
        maxHeapify(arr, 0, i)
    }
}

var heapify = function(arr) {
    for (let i = Math.floor(arr.length/2); i >= 0; i--) {
        maxHeapify(arr, i, arr.length)   
    }
}

var maxHeapify = function(arr, i, length) {
    while(true) {
      let left = i*2 + 1;
      let right = i*2 + 2;
      let largest = i;

      if(left < length && arr[left] > arr[largest]) {
        largest =  left
      }   

      if(right < length && arr[right] > arr[largest]) {
          largest = right
      }

      if(i == largest) break;

        swap(arr, i, largest);
        i = largest  
    }
}
*/



console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
//console.log(findKthLargest([-1,2, 0], 2));
//console.log(findKthLargest([-3,-1, 0], 2));