/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 *  compare two array if same set to new arr
 *  sort array
 *  check length
 *
 */
let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]

var checkLength = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return false
  } else {
    return true
  }
}

nums1.sort((a, b) => a - b)
nums2.sort((a, b) => a - b)
var intersect = function (nums1, nums2) {
  let temp = new Set()
  let left = 0
  let right = 0

  let fLength = checkLength(nums1, nums2)

  if (!fLength) {
  }

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      temp.add(nums1[left])
      left++
      right++
    } else if (nums1[left] > nums2[right]) {
      right++
    } else if (nums1[left] < nums2[right]) {
      left++
      // right++
    }
  }
  return temp
}

console.log(intersect(nums1, nums2))
