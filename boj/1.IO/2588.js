const fs = require('fs');
// let input = fs.readFileSync(__dirname + '/1000.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split('\n');
for(var i=input[1].length-1; i>=0; i--){
    console.log(Number(input[0]) * Number(input[1].charAt(i)));
}
console.log(Number(input[0]) * Number(input[1]));