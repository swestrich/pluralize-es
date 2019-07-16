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
    t.assert(pluralize('bongó') === 'bongoes');
    t.assert(pluralize('zigzag') === 'zigzagues');
    t.assert(pluralize('frac') === 'fraques');
    t.end();
});

test(function (t) {
    t.assert(pluralize.singularize('paredes') === 'pared')
    t.assert(pluralize.singularize('pantuflas') === 'pantufla', 'pantuflas can be singularized')
    t.assert(pluralize.singularize('estados') === 'estado', 'estados can be singularized')
    t.assert(pluralize.singularize('estadios') === 'estadio', 'estadios can be singularized')
    t.assert(pluralize.singularize('universidades') === 'universidad')
    t.assert(pluralize.singularize('canciones') === 'canción', 'canciones can be singularized')
    t.assert(pluralize.singularize('televisiones') === 'televisión', 'televisiones can be singularized')
    t.assert(pluralize.singularize('zigzagues') === 'zigzag', 'zigzagues can be singularized')
    t.assert(pluralize.singularize('plumas') === 'pluma')
    t.assert(pluralize.singularize('avión') === 'avión')
    t.assert(pluralize.singularize('cafés') === 'café');
    t.assert(pluralize.singularize('bongoes') === 'bongó', 'bongoes can be singularized');
    t.assert(pluralize.singularize('lapices') === 'lapiz', 'lapices can be singularized');
    t.assert(pluralize.singularize('fraques') === 'frac', 'fraques can be singularized');
    t.assert(pluralize.singularize('paises') === 'país', 'fraques can be singularized');
    t.assert(pluralize.singularize('cajones') === 'cajón', 'cajones can be singularized');
    t.assert(pluralize.singularize('obuses') === 'obús', 'obuses can be singularized');
    t.assert(pluralize.singularize('lunes') === 'lunes', 'lunes doesnt need singularization');
    t.end();
});
