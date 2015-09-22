var HeartBeat = require('./implements.js');

var a = new HeartBeat(100);
var b = new HeartBeat(500);

a.on('beat', function(beats) {
    console.log("Heart A beat n times", beats);
});

b.on('beat', function(beats) {
    console.log("Heart B beat n times", beats);
})
