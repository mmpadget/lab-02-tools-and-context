'use strict';

console.log('evaluating context.js');

const assert = require('assert');
const reqContext = require('../lib/context.js');

let newPlant = new reqContext.Plant('Tomato', '1/4 in', 4, 'full', 24);

describe('context.js', function() {
  describe('#Plant', function() {
    it('should return a string for plant name', function() {
      assert.equal(newPlant.name, 'Tomato');
    });
    it('should return a string with planting depth', function() {
      assert.equal(typeof newPlant.depth, 'string');
    });
    it('should return a number with days until germination', function() {
      assert.equal(typeof newPlant.days, 'number');
    });
    it('should return a string with preferred sun', function() {
      assert.equal(typeof newPlant.sun, 'string');
    });
    it('should return a number with days until germination', function() {
      assert.equal(typeof newPlant.height, 'number');
    });
  });
});
