# Pluralize-es

> Finds the plural form of most spanish words.  Many exceptions are covered.

## Installation
```
$ npm install --save pluralize-es
```

## Usage

```js
var plural = require('pluralize-es');

plural('universidad');
//=> 'universidades'
```

## API

### plural(str)

#### str

Type: `string`

The noun to make plural.

### plural.singularize(str)

Type: `string`

The noun to make singular.
