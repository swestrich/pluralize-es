'use strict';

var test = require('ava'),
    pluriel = require('./');


test(function (t) {
    //t.assert(pluriel('test', 0) === 'test');
    t.assert(pluriel('test', 5) === 'tests');
    t.assert(pluriel('chou', 5) === 'choux');
    t.assert(pluriel('poireau', 5) === 'poireaux');
    t.assert(pluriel('ananas', 5) === 'ananas');
    t.assert(pluriel('hero', 'heroes', 5) === 'heroes');
    t.end();
});