const fs = require('fs');
// let input = fs.readFileSync(__dirname + '/1000.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split(' ');
console.log(Number(input[0]) * Number(input[1]));
