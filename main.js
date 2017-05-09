var http = require('http');
var url = require('url');
var router = require('./router');
http.createServer(function (request,response){
if(request.url!=="/favicon.ico"){
    //clear the second login
    pathname = url.parse(request.url).pathname;
    try{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        // parse the path and handle versions
        router.versionControl(pathname,request,response);
        }
    catch(err){
        // handle all of the exceptions
        console.log('Exception='+err); 
        response.write('Invalid path: '+pathname)
        response.end('');
        }
    console.log("server execute done");
    }
}).listen(8000);
console.log('Server running at http://34.209.73.13:8000/');