const mymodule = require('./mymodule');
var path = process.argv[2];
var fileExtension = process.argv[3];
mymodule(path,fileExtension, function (err, data){
    if (err){
        console.log(err);
    }
    for (const i in data) {
        console.log(data[i]);
    }
});