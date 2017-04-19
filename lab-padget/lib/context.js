'use strict';

// create a module (file), and export the functionality, for each context management method; Call and Apply.

module.exports = exports = {};

exports.Seed = function(name, depth, days) {
  this.name = name;
  this.depth = depth;
  this.days = days;
};

exports.Plant = function (name, depth, days, sun, height) {
  exports.Seed.call(this, name, depth, days);
  this.sun = sun;
  this.height = height;
};
