'use strict';

const contextFile = require('./lib/context.js');

let newPlant = new contextFile.Plant('Tomato', '1/4 in', 4, 'full', 24);
console.log(newPlant);
