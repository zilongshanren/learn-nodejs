/*global exports, require */
// include module must be a . or .. / [module name]
//http://0fps.net/2013/01/22/commonjs-why-and-how/
//http://www.commonjs.org/specs/modules/1.0/
var inc = require('./increment').increment;
var a = 1;
console.log(inc(a));
