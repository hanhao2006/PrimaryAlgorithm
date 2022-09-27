/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith
 day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of
the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.
作者：力扣 (LeetCode)
链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2zsx1/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


/**
    1. Verify that the previous number is less than the next number
    2. Calculate the difference of two numbers 
    3. Adding all the difference 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

let prices = [7, 1, 5, 3, 6, 4]

let verifyTwoNum = function (prices, index) {
  for (; index <= prices.length; index++) {
    if (prices[index] < prices[index + 1]) {
      return true
    } else return false
  }
}

var maxProfit = function (prices) {
  let i = 0
  let result = 0
  while (i <= prices.length) {
    if (verifyTwoNum(prices, i)) {
      result = result + (prices[i + 1] - prices[i])
    }
    i++
  }
  return result
}

console.log(maxProfit(prices))
