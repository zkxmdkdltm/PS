/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const dict = {
        'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50,
        'C' : 100, 'D' : 500, 'M' : 1000
    };

    var result = 0

    for(var i=0; i<s.length; i++){
        if(dict[s[i+1]] > dict[s[i]]){
            result += dict[s[i+1]] - dict[s[i]];
            i++;
            continue;
        }
        result += dict[s[i]];
    }
    return result;
};

console.log(romanToInt("MCMXCIV"));