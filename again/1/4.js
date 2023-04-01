/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merge = [...nums1, ...nums2];
  const delta1 = merge.length - 1 - 1;
  const delta2 = merge.length - 1;

  for (let i = 0; i <= delta1; ++i) {
    for (let j = i + 1; j <= delta2; j++) {
      if (merge[j] < merge[i]) {
        const temporary = merge[j];
        merge[j] = merge[i];
        merge[i] = temporary;
      }
    }
  }

  const index = merge.length - 1;

  if (index % 2 === 0) {
    return merge[index / 2].toFixed(5);
  }

  if (index % 2 !== 0) {
    const delta1 = (index + 1) / 2;
    const delta2 = delta1 - 1;
    const result = (merge[delta1] + merge[delta2]) / 2;
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
