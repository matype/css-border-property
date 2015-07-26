var isColor = require('is-color')
var isLength = require('is-css-length')
var isStyle = require('is-border-style')

function check (val) {
  if (isColor(val)) return 'color'
  if (isLength(val) || 'thin' || 'medium' || 'thick') return 'width'
  if (isStyle(val)) return 'style'

  return null
}

module.exports.parse = function (str) {
  var value = str.split(' ')
  var ret = []
  value.forEach(function (v) {
    var prop = check(v)
    if (prop) {
      var obj = {}
      obj[prop] = v
      ret.push(obj)
    }
  })
  return ret
}

module.exports.stringify = function (arr) {
  var prop = []
  arr.forEach(function (val) {
    Object.keys(val).forEach(function (key) {
      prop.push(val[key])
    })
  })
  return prop.join(' ')
}
