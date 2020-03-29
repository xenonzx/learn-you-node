var n = process.argv.length
var sum = 0
for (var index = 2 ; index < n; index++){
    var element = Number( process.argv[index]);
    sum = sum + element
}console.log(sum)