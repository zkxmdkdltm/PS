/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var arr = [...s];
    var stack = [];

    var n = s.length;
    var c, t;
    
    for(var i=0; i<n; i++){
        c = arr[i];
        if(c == '(' || c == '{' || c == '[')
            stack.push(c);
        else if(c == ')' || c == '}' || c == ']'){
            if(isEmptyArr(stack))
                return false;
            else{
                t = stack.pop();
                if((t == '(' &&  c != ')') || (t == '{' &&  c != '}') || (t == '[' &&  c != ']'))
                    return false;
            }   
        }
    }
    return isEmptyArr(stack);
};

function isEmptyArr(arr){
    if(Array.isArray(arr) && arr.length === 0)
        return true;
    return false;
}
console.log(isValid("()[]}"));