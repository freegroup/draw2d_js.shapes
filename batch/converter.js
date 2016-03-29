var webPage = require('webpage');
var fs      = require('fs');
var system  = require('system');
var page    = webPage.create();

function waitFor ($config) {
    $config._start = $config._start || new Date();

    if ($config.timeout && new Date - $config._start > $config.timeout) {
        if ($config.error) $config.error();
        if ($config.debug) console.log('timedout ' + (new Date - $config._start) + 'ms');
        return;
    }

    if ($config.check()) {
        if ($config.debug) console.log('success ' + (new Date - $config._start) + 'ms');
        return $config.success();
    }

    setTimeout(waitFor, $config.interval || 0, $config);
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

var filesToProcess = []

var scanDirectory = function (path) {
    if (fs.exists(path) && fs.isFile(path)) {
        if(path.endsWith(".shape")){
            filesToProcess.push(path);
        }

    } else if (fs.isDirectory(path)) {
        fs.list(path).forEach(function (e) {
            if ( e !== "." && e !== ".." ) {    //< Avoid loops
                scanDirectory(path + '/' + e);
            }
        });
    }
};

var processFiles=function(path){

    var json = fs.read(path);
    var code = fs.read("batch/template.js");
    fs.write("batch/exporter.js", "var json="+json+";\n"+code);
    if (page.injectJs('batch/exporter.js')) {
        waitFor({
            check: function () {
                return page.evaluate(function () {
                    return code !== null;
                });
            },
            success: function () {
                var jsCode = page.evaluate(function () {return code;});
                var img    = page.evaluate(function () {return img;});

                var package = path.replace("./shapes/org/","").replace(/\//g,"_").replace(/\.shape/,"");
                jsCode = jsCode.replace(/testShape/g,package);
                fs.write(path.replace(".shape",".js"), jsCode);
                fs.write(path.replace(".shape",".png"), atob(img), "wb");

                if(filesToProcess.length>0){
                    processFiles(filesToProcess.pop());
                }
                else{
                    console.log("done...");
                    phantom.exit(0);
                }
            },
            error: function () {
                console.log("error found");
            } // optional
        });
    }

}

page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
};

page.viewportSize = { width: 900, height: 900 };

page.open('http://freegroup.github.io/draw2d_js.app.shape_designer/', function(status) {
    if (status === "success") {
        scanDirectory("./shapes/org");
        if(filesToProcess.length>0){
            processFiles(filesToProcess.pop());
        }
    }
});
