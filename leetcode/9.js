/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0)
        return false;
    return x===rvsNumber(x);
};
function rvsNumber(n){
    return parseInt(n.toString().split('').reverse().join(''));
}