/**
 Given an array, rotate the array to the right by k steps, where k is non-negative.

作者：力扣 (LeetCode)
链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2skh7/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let nums = [-1, -100, 3, 99]
let k = 2

var reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start]
    nums[start++] = nums[end]
    nums[end--] = temp
  }
}
var rotate = function (nums, k) {
  let length = nums.length
  k %= length
  reverse(nums, 0, length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, length - 1)
}

rotate(nums, k)
nums.forEach((element) => {
  console.log(element)
})
