(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global exports, require */
var add = require('./math').add;

exports.increment = function(val){
    return add(val,1);
};

},{"./math":2}],2:[function(require,module,exports){
/*global exports, require */
exports.add = function(){
    var sum = 0, i = 0, args = arguments, l = args.length;
    while(i < l){
        sum += args[i++];
    }
    return sum;
};


},{}],3:[function(require,module,exports){
/*global exports, require */
// include module must be a . or .. / [module name]
//http://0fps.net/2013/01/22/commonjs-why-and-how/
//http://www.commonjs.org/specs/modules/1.0/
var inc = require('./increment').increment;
var a = 1;
console.log(inc(a));

},{"./increment":1}]},{},[3]);
