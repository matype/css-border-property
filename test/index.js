var test = require('tape')
var border = require('..')

test('parse', function (t) {
  var actual = border.parse('1px solid #eee')
  var expected = [ { width: '1px' }, { style: 'solid' }, { color: '#eee' } ]
  t.same(actual, expected)
  t.end()
})

test('stringify', function (t) {
  var actual = border.stringify([
    {width: '1px'},
    {style: 'solid'},
    {color: '#fff'},
  ])
  var expected = '1px solid #fff'
  t.same(actual, expected)
  t.end()
})
