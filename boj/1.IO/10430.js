const fs = require('fs');
// let input = fs.readFileSync(__dirname + '/1000.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split(' ');
let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

console.log((A+B)%C);
console.log(((A%C)+(B%C)) % C);
console.log((A*B)%C);
console.log(((A%C)*(B%C)) % C);

