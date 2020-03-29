'use strict'
const fs = require('fs')  
var path = process.argv[2]
//console.log(path)
var b = fs.readFileSync(path);
console.log(b.toString().split('\n').length-1)