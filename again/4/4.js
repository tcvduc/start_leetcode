/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const merge = [...nums1, ...nums2];
  merge.sort((a, b) => a - b);
  const index = merge.length - 1;

  if (index % 2 === 0) {
    return merge[index / 2].toFixed(5);
  }

  if (index % 2 !== 0) {
    const delta = (index + 1) / 2;
    const v1 = merge[delta];
    const v2 = merge[delta - 1];
    const result = (v1 + v2) / 2;
    return result.toFixed(5);
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
