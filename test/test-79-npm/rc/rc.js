'use strict';

let conf = require('rc')('fixture.for.', {});
if (conf.NAME === 'VALUE') {
  console.log('ok');
}
