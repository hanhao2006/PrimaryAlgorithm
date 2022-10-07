/**
 * @param {number[]} digits
 * @return {number[]}
 */

let digits = [9, 9, 9, 9, 9]

let storeStr = function (arr) {
  let str = ''
  arr.forEach((element) => {
    str += element
  })
  return str
}
var plusOne = function (digits) {
  let i = 0
  let num = storeStr(digits)
  let temp
  temp = Number(num) + 1

  let result = []
  let str = temp.toString()
  for (const el of str) {
    result.push(el)
  }
  return result
}

let arr = plusOne(digits)

arr.forEach((el) => {
  console.log(el)
})
