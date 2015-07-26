# css-border-property [![Build Status](https://travis-ci.org/morishitter/css-border-property.svg)](https://travis-ci.org/morishitter/css-border-property)

Parser and Stringifier of `border` property

## Install

```shell
$ npm install css-border-property
```

## Usage

```js
var border = require('css-border-property')

border.parse('1px solid #eee')
/*
[
  { width: '1px' },
  { style: 'solid' },
  { color: '#eee' }
]
*/

border.stringify([
    {width: '1px'},
    {style: 'solid'},
    {color: '#fff'},
])
/* '1px solid #fff' */
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
