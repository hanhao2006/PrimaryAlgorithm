/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears 
only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the 
first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of 
nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

作者：力扣 (LeetCode)
链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2gy9m/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/*
 1. remove the duplicates in-place 
 2. each unique element appears only once
 3. the order of the elements should be kept the same
 4. must do this by modifying the input array in-place with O(1) extra memory.

 compare element from left and right. if left equal right, left dont move, right move forward 1
 if left !equal right, left move forward  and assign the element of right to the element of left

*?


/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1, 1, 2]

const k = function (nums) {
  let left = 0
  for (let right = 1; right <= nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
  }
  return left
}

const removeDulicates = function (nums) {
  return [...new Set(nums)]
}

console.log(removeDulicates(nums))
