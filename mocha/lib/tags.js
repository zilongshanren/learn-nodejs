exports = module.exports = {};

// studnet 
exports.parse = function(args) {
    var options = {};

    for (var i in args) {
        var arg = args[i];
        if (arg.substr(0, 2) === '--') {
            arg = arg.substr(2);
            if (arg.indexOf('=') !== -1) {
                arg = arg.split('=');
                var key = arg.shift();
                
                options[key] = arg.join('=');
            }
        }
    }

    return options;
}
