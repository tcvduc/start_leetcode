/**
 * 4. Median of Two Sorted Arrays
 * - Given two sorted arrays "nums1" and "nums2"
 * of size "m" and "n" respectively, return "the median"
 * of the two sorted arrays.
 * - The overall run time complexity should be O(log (m+n))
 *
 * - Example 1
 * + nums1 = [1,3]
 * + nums2 = [2]
 * + result = 2.00000
 * + Explanation: merge array = [1,2,3] and median is 2
 *
 * - Example 2
 * + nums1 = [1,2]
 * + nums2 = [3,4]
 * + result = 2.500000
 * + Explanation: merged array = [1,2,3,4] and median is (2+3) / 2 = 2.5
 *
 * - Constraints
 * + nums1.length == m
 * + nums2.length == n
 * + 0 <= m <= 1000
 * + 0 <= n <= 1000
 * + 1 <= m + n <= 2000
 * + -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 * ---0 1 2 3
 * + [1,2,3,4]
 *   + l = 4
 *   + l % 2 = 0
 *   + l / 2 = 2
 *
 * ---0 1 2
 * + [1,2,3]
 * + l = 3
 *   + l % 2 !== 0
 *  + merge[1] = 2
 *
 *
 *
 */

/**
 *
 * @param {Array} a
 */
function bubbleSort(a) {
  for (let i = 0; i <= a.length - 1 - 1; ++i) {
    for (let j = i + 1; j <= a.length - 1; ++j) {
      if (a[j] < a[i]) {
        const temporary = a[j];
        a[j] = a[i];
        a[i] = temporary;
      }
    }
  }
  return a;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merge = [...nums1, ...nums2];
  merge = bubbleSort(merge);
  const l = merge.length;

  if (l % 2 === 0) {
    const median1 = l / 2;
    const median2 = median1 - 1;
    const result = (merge[median1] + merge[median2]) / 2;
    return result.toFixed(5);
  }

  if (l % 2 !== 0) {
    return merge[(l - 1) / 2].toFixed(5);
  }
};

function test1() {
  const nums1 = [1, 3];
  const nums2 = [2];
  const result = findMedianSortedArrays(nums1, nums2);
  console.log(result);
}

function test2() {
  const nums1 = [1, 2];
  const nums2 = [3, 4];
  const result = findMedianSortedArrays(nums1, nums2);
  console.log(result);
}

{
  test1();
  test2();
}
