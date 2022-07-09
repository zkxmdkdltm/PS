const fs = require('fs');
// let input = fs.readFileSync(__dirname + '/1110.txt').toString();
let input = fs.readFileSync('/dev/stdin').toString();
input = input.trim();

let count = 1;
let number;
let new_number;

if(input == 0){
    console.log(1);
    return 0;
}

if(input.length == 1 ){
    number = '0' + input;
    new_number = input + input;
} else{
    number = (Number(input[0]) + Number(input[1])).toString();
    if(number.length == 1)
        number = '0' + number;
    new_number = input[1] + number[1];
}

while(Number(input) !== Number(new_number)){
    number = (Number(new_number[0]) + Number(new_number[1])).toString();
    if(number.length == 1)
        number = '0' + number;
    new_number = new_number[1] + number[1];


    count++;
}

console.log(count);