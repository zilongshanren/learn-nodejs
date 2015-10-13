'use strict'
console.log("hello");
function test() {
    console.log("haha");
}
console.log("Hello World");


test();

console.log("This is a big win!");

Object.prototype.sayHello = function() {
    console.log('hello');
}


var array = [1, 22, 3, 4];
console.log(array.map(i => i * 2));
console.log(array.filter(i=>i%2 == 0));

array.sayHello();


var sum = array.reduce((sum, item) => sum + item, 2);
console.log(sum);

function Container(param) {

    this.member = param;
    secret = 3;
    var that = this;

    function dec() {
        if (secret > 0) {
            secret -= 1;
            return true;
        } else {
            return false;
        }
    }


    this.service = function () {
        return dec() ? that.member : null;
    };
}

var c = new Container('abc');
c.service();


var node = document.body;
var nextNode = function(node) {
    console.log(node)
};

nextNode('a');

do{
    node = nextNode(node);
}while(node != null);




