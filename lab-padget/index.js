'use strict';

// each module should demonstrate at least one example of how to use that method for managing the 'this' keyword's context

const contextFile = require('./lib/context.js');

let newPlant = new contextFile.Plant('Tomato', '1/4 in', 4, 'full', 24);
console.log(newPlant);
