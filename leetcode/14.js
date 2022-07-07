/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let flag = false;

    if(strs.length==1)
        return strs[0];

    strs.sort(function(a,b){
        return a.length - b.length;
    });
    
    var str = ""
    for(var i=0; i<strs[0].length; i++){
        for(var j=0; j<strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                flag = true;
                break;
            }
        }
        if(flag)
            break;
        str += strs[0][i];
    }
    return str;
};


console.log(longestCommonPrefix(["ab", "a"]));
