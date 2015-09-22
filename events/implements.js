var utils = require('util');

var EventEmitter = require('events').EventEmitter;

function HeartBeat(interval) {
    EventEmitter.call(this);

    var emitter = this;
    var beats = 0;

    setInterval(function() {
        emitter.emit('beat' + beats);
    }, interval);
}

utils.inherits(HeartBeat, EventEmitter);

module.exports = HeartBeat;
