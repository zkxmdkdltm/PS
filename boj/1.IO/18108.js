const fs = require('fs');
// let input = fs.readFileSync(__dirname + '/1000.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();
input = Number(input.trim());
console.log(input-543);