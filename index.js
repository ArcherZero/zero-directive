import Vue from 'vue'
/*
 * @Author: 泽斯
 * @Date: 2020-12-20
 * @Last Modified by: 泽斯
 * @Last Modified time: 2020-12-20
 */

// el-input-number 无法实现默认值为空
// 针对 el-input做的限制，只能输入整数
Vue.directive('Int', {
  update (el) {
    const input = el.getElementsByTagName('input')[0]
    const oldValue = input.value
    const newValue = oldValue.replace(/[^\d]/g, '')
    if (oldValue !== newValue) {
      input.value = input.value.replace(/[^\d]/g, '')
      input.dispatchEvent(new Event('input'))
    }
  }
})

// el-input-number 无法实现默认值为空
// 针对 el-input做的限制，只能输入金额
Vue.directive('Price', {
  update (el) {
    const input = el.getElementsByTagName('input')[0]
    const oldValue = input.value
    const newValue = oldValue.replace(/[^\d]/g, '')
    if (oldValue !== newValue) {
      input.value = clearNoNum(input)
      input.dispatchEvent(new Event('input'))
    }
  }
})

function clearNoNum (obj) {
  let value = obj.value
  value = value.replace(/[^\d.]/g, '') //   清除'数字'和'.'以外的字符
  value = value.replace(/^\./g, '') //  验证第一个字符是数字而不是字符
  value = value.replace(/\.{2,}/g, '.') //  只保留第一个.清除多余的
  value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
  // 保留两位小数
  const temp = value.split('.')
  if (temp[1] && temp[1].length > 2) temp[1] = temp[1].slice(0, 2)
  value = temp.join('.')
  return value
}
