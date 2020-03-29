'use strict'
const fs = require('fs')  
var path = process.argv[2]

fs.readFile( path, callback)

function callback(err,data){
    if (err) {
        return console.log(err)
      }
    console.log(data.toString().split('\n').length-1)
}
