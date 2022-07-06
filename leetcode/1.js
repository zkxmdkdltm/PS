/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var result = 0;
    var i = 0; 
    var j = 1;
    if(nums.length == 2)
        return [0, 1];
    while(i < nums.length){
        result = nums[i] + nums[j];
        if(result == target)
            break;
        if(j == nums.length - 1){
            i++;
            j = i + 1;
        } else {
            j++;
        }
        
    }
    return [i, j];
};

var arr = [3,2,3];
var tar = 6;
console.log(twoSum(arr, tar));