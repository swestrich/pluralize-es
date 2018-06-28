'use strict';

var test = require('ava'),
    pluralize = require('./');


test(function (t) {
    t.assert(pluralize('avión') === 'aviones');
    t.assert(pluralize('televisión') === 'televisiones');
    t.assert(pluralize('lápiz') === 'lápices');
    t.assert(pluralize('pluma') === 'plumas');
    t.assert(pluralize('universidad') === 'universidades');
    t.assert(pluralize('café') === 'cafés');
    t.assert(pluralize('bongó') === 'bongós');
    t.assert(pluralize('zigzag') === 'zigzagues');
    t.assert(pluralize('frac') === 'fraques');
    t.assert(pluralize('bastón') === 'bastones');
    t.assert(pluralize('cajón') === 'cajones');
    t.assert(pluralize('país') === 'paises');
    t.end();
});
