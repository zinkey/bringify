var fs = require('fs');
var path = require('path');
var through = require("through");

var defaults = {
    'extname': []
};

try {
    var pkg = JSON.parse(fs.readFileSync(process.cwd() + '/package.json') || '{}');
    var options = pkg['bringify'] || defaults;
    if (typeof options === 'string') {
        var base = path.relative(__dirname, process.cwd());
        options = require(path.join(base, options)) || defaults;
    }
} catch (err) {
    console.log(err)
    options = defaults;
}


module.exports = function (fileName,opts) {

    var extname = opts.extname || options.extname;
    if (extname.indexOf(path.extname(fileName))<0){
        return through();
    }
    var str = '';
    return through(
        function (chunk) {
            str += chunk;
        },
        function () {
            this.queue('module.exports = ' + JSON.stringify(str));
            this.queue(null);
        }
    );
}
