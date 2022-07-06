/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  var addTwoNumbers = function(l1, l2) {
//     l1 = rvs(l1);
//     l2 = rvs(l2);
//     a = parseInt(l1.join(''));
//     b = parseInt(l2.join(''));

//     return numToStr(a+b);
// };

// function rvs(lst){
//     const arr = [];
//     for(let i=lst.length-1; i>=0; i--)
//         arr.push(lst[i]);
//     return arr;
// }

// function numToStr(n){
//     let num = [];
//     do{
//         num.push(n % 10);
//         n = Math.floor(n/10);
//     } while(n>0);
//     return num;
// }

// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));