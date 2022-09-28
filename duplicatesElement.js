/**
 * 
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

作者：力扣 (LeetCode)
链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/x248f5/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

let nums = [2, 14, 18, 22, 22]

nums.sort((a, b) => a - b)

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && i <= nums.length) {
      return true
    } 
  }
  return false
}

console.log(containsDuplicate(nums))
