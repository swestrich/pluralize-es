# Pluriel [![Build Status](https://travis-ci.org/bazzooka/pluriel.svg?branch=master)](https://travis-ci.org/bazzooka/pluriel)

> Ajoute un pluriel simple au nom singulier. Prends en compte les exceptions de type :
  - pluriel simple des noms
  - exception des noms finissant en -ou
  - exception des noms finissant en -s -z -x
  - exception des noms finissant en -eau -au -eu

## Installation
```
$ npm install --save pluriel
```

## Usage

```js
var pluriel = require('pluriel');

pluriel('chou', 5);
//=> 'choux'

plur('hero', 'heroes', 5);
//=> 'heroes'
```

## API

### pluriel(str, [pluriel], nb)

#### str

Type: `string`

Le nom à mettre au pluriel

#### pluriel

Type: `string`
Default: `str` + `s`

Le nom au pluriel.

#### nb

Type: `number`

nb pour dire c'est à mettre au pluriel ou au singulier.
