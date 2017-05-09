module.exports={
    random:function(req,res){
        // generate a cryptographic random data
        const crypto = require('crypto');
        // the random data size is 16
        crypto.randomBytes(16, (err, buf) => {
            if (err) throw err;
            var jsonstr = {
            random: buf.toString('hex'),
            randomLenth: buf.length,
            path: '/v1/random',
            version: "v1",
            method: "random",
            description: "generate a random"
            }
            // write as json format
            res.write(JSON.stringify(jsonstr));
            res.end('');
            });
    },
    handle:function(pathname,req,res){
        var arr = pathname.toString().split("/");
        var method = "";
        for (var i = 0; i < arr.length; i++) {
            method = method + arr[i];
        }
        console.log('method:' +method);
        this[method](req,res);
    }
}
