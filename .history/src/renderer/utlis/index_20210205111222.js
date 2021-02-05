export default function toUp (str) {
  let newStr = ''
  let arr = str.split('_')
  arr.forEach((item, index) => {
    if (index > 0) {
      return (newStr += item.replace(item[0], item[0].toUpperCase()))
    } else {
      return (newStr += item)
    }
  })
  return newStr
}
