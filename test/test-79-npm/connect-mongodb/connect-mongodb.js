'use strict';

let MongoStore = require('connect-mongodb');
if (typeof MongoStore === 'function') {
  console.log('ok');
}
