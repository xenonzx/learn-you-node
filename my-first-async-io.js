'use strict'
const fs = require('fs')  
var path = process.argv[2]

fs.readFile( path, callback)

function callback(err,data){
    console.log(data.toString().split('\n').length-1)
}
