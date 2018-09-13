/**
 *
 * @param {$type Number} num
 */
export const transNum = function transNum(num) {
  let newStr = ''
  const numArr = Number(num).toString().split('.')
  const integer = numArr[0]
  const floatpart = numArr[1]
  const length = integer.length
  if (length > 3) {
    integer.split('').reverse().forEach((ele, index) => {
      newStr += ele
      if ((index + 1) % 3 === 0 && length !== index + 1) {
        newStr += ','
      }
    })
    return floatpart === undefined ? newStr.split('').reverse().join('') : newStr.split('').reverse().join('') + '.' + floatpart
  }
  return num
}

/**
 * 对数字进行转换 包括单位(亿,万),数字过千＋ ","
 * @param num :number 需要转换的数字
 * @param showUnit:boolean 是否显示单位
 * @returns newData 处理过的数
 */

export const transNum2Str = (num, showUnit) => {
  const srtNum = Math.round(num).toString()
  let newData = ''
  if (srtNum.length > 5) {
    const newNum = ((srtNum) / 10000).toFixed(2)
    newData = showUnit ? transNum(newNum) + '亿' : transNum(newNum)
  } else {
    newData = showUnit ? transNum(num) + '万' : transNum(num)
  }
  return newData
}

/**
 * 函数节流
 * @param {method} 传入需要节流的方法
 * @param {context} 传入函数运行的上下文环境
 * @param {time}  传入节流的时间,默认100
 */
export const throttle = (method, context, time = 100) => {
  clearTimeout(method.tId)
  method.tId = setTimeout(() => {
    method.call(context)
  }, time)
}
