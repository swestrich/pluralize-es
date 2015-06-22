'use strict';

var pluriel = require('./');

test(function (t) {
    t.assert(pluriel('test', 0) === 'test');
    t.end();
});