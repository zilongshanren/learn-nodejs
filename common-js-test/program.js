/*global exports, require */
// include module must be a . or .. / [module name]
var inc = require('./increment').increment;
var a = 1;
console.log(inc(a));
