var test = require('tape')
var border = require('..')

test('description', function (t) {
  border.parse('1px solid #eee')
  t.end()
})

test('description', function (t) {
  border.stringify([
    {width: '1px'},
    {style: 'solid'},
    {color: '#fff'},
  ])
  t.end()
})
