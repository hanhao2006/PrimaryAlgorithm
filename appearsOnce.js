/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find 
 * that single one.

You must implement a solution with a linear runtime complexity and use only constant extra 
space.

作者：力扣 (LeetCode)
链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/x21ib6/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

let nums = [2, 2, 1]

let singleNumber = function (nums) {
  let reduce = 0

  nums.forEach((element) => {
    reduce = reduce ^ element
    console.log(reduce + ',')
  })
  return reduce
}

let setNumber = function (nums) {
  const setNumber = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (!setNumber.has(nums[i])) {
      setNumber.add(nums[i])
    } else if (setNumber.has(nums[i])) {
      setNumber.delete(nums[i])
    }
  }
  return setNumber.values()
}

for (const item of setNumber(nums)) {
  console.log(item)
}
