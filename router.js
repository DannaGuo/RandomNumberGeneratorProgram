var version1 = require('./versions/v1');
module.exports={
    v1:function(pathName, req, res){
        version1.handle(pathName,req,res);
    },
    versionControl:function(pathName,req,res){
        var arr = pathName.toString().split("/");
        // find the version	
        var version = arr[1];
        console.log('version: '+version);
        var newPathName = "";
        for (var i = 2; i < arr.length; i++) {
            newPathName = newPathName + '/' + arr[i];
        }
        // goto the version to call method
        this[version](newPathName, req, res);
    }
}